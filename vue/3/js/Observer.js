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
        let self = this,
            dep = new Dep();
        Object.defineProperty(self.data, key, {
            enumerable: true,
            configurable: true,
            get: function() {
                console.log(`你访问了${key}`);
                //添加订阅者watcher到主题对象Dep
                if (Dep.target) {
                    dep.addSub(Dep.target);
                }
                return value;
            },
            set: function(newVal) {
                console.log(`你设置了${key}， 新值为${newVal}`);
                if (typeof newVal === 'object') {
                    new Observer(newVal);
                }
                value = newVal;
                //作为发布者发出通知
                dep.notify();
            }
        });
    }
    
    $watch(key, fn) {
        //订阅
        new Watcher({
            observer: this,
            key: key,
            callback: fn
        });
    }
}