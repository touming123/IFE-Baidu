function Observer(data) {
    this.data = data;
    this.walk(data);
}
let pro = Observer.prototype;
pro.walk = function(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let val = obj[key];
            if (typeof val === 'object') {
                new Observer(val);
            }
            this.convert(key, val);
        }
    }
};

pro.convert = function(key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            console.log('你访问了' + key);
            return val;
        },
        set: function(newVal) {
            console.log('你设置了'+ key);
            console.log('新的' + key + '=' + newVal);
            val = newVal;
        }
    })
}

pro.$watch = function(attr, callback) {
    
}

let data = {
    user: {
        name: "liangshaofeng",
        age: "24"
    },
    address: {
        city: "beijing"
    }
};
let app = new Observer(data);