function Observer(data) {
    this.data = data;
    this.walk(data);
    this.handlers = {};
}

let pro = Observer.prototype;

/**
 * 此函数用于深层次遍历对象的各个属性
 * 采用递归的思路
 * 因为我们要为对象的每个属性绑定getter和setter
 */
pro.walk = function (data) {
    for (let key in data) {
        // 这里要用hasOwnProperty进行过滤
	    // 因为for...in 循环会把对象原型链上的所有可枚举的属性都循环出来
		// 而我们想要的仅仅是这个对象本身拥有的属性
        if (data.hasOwnProperty(key)) {
            let val = data[key];
            //如果参数对象是一个“比较深”的对象,如果还没遍历到最底层，继续new Observer
            if (typeof val === 'object') {
                new Observer(val);
            }
            this.convert(key, val);
        }
    }
};

/**
 * 监听对象属性的读取与变化
 */
pro.convert = function (key, val) {
    let self = this;
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,

        get: function () {
            console.log('你访问了' + key);
            return val;
        },

        set: function (newVal) {
            console.log('你设置了' + key);
            console.log('新的' + key + '=' + newVal);
            //触发$watch函数
            self.emit(key, val, newVal);
            val = newVal;
            //设置新的值是一个对象,继续响应getter和setter
            if (typeof newVal === 'object') {
                new Observer(val);
            }
        }
    })
}

/**
 * 订阅事件
 */
pro.on = function (key, handler) {
    let self = this;
    if (!(key in self.handlers)) {
        self.handlers[key] = [];
    }
    self.handlers[key].push(handler);
    return self;
}

pro.emit = function (key, ...args) {
    let handlers = this.handlers[key];
    if (handlers) {
        handlers.forEach(function(item) {
            item(...args);
        });
    } 
}

/**
 * 订阅事件
 */
pro.$watch = function (key, fn) {
    this.on(key, fn);
}


let app = new Observer({
    name: 'liujianhuan',
    age: 25,
    company: 'Qihoo 360',
    address: 'Chaoyang, Beijing'
})

app.$watch('age', function(oldVal, newVal){
    console.log(`我的年龄变了，原来是: ${oldVal}岁，现在是：${newVal}岁了`)
})

app.$watch('age', function(oldVal, newVal){
    console.log(`我的年龄真的变了诶，竟然年轻了${oldVal - newVal}岁`)
})
app.data.age = 30;
