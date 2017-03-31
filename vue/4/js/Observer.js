class Observer {
    constructor (data) {
        this.data = data;
        this.walk(data);
    }

    walk() {
        for (let key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                let value = this.data[key];
                if (typeof value === 'object') {
                    new Observer(value);
                }
                this.convert(key, value);
            }
        }
    }

    convert(key, value) {
        let self = this;
        let event = new Event();
        Object.defineProperty(self.data, key, {
            enumerable: true,
            configurable: true,
            get: function() {
                console.log(`你访问了${key}`);
                if (event.target) {
                    event.addSub(event.target);
                }
                return value;
            },
            set: function(newVal) {
                console.log(`你设置了${key}， 新值为${newVal}`);
                if (typeof newVal === 'object') {
                    new Observer(newVal);
                }
                value = newVal;
                event.notify();
            }
        });
    }
    
    $watch(key, fn) {
        new Watcher({
            observer: this,
            key: key,
            callback: fn
        });
    }
}