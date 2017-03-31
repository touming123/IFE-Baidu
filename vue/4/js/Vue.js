class Vue{
    constructor(options) {
        this.$el = document.querySelector(options.el);
        this.$data = options.data;
        this.map = new Map();
        this.render()
    }

    render() {
        let self = this,
            inner = self.$el.innerHTML,
            reg = /.*({{(.*)?}})/g,
            result = null,
            origin = inner;
        while(result = reg.exec(origin)) {
            let str = result[1],
            key = result[2].trim(),
            value = '';
            if (self.map.has(key)) {
                value = self.map.get(key);
            } else {
                value = self.getValue(key, self.$data);
                self.map.set(key, value);
            }
            inner = inner.replace(str, value);
        }
        self.$el.innerHTML = inner;
    }

    getValue(key, data) {
        let keys = key.split('.');
        for (let item of keys) {
            if (data === undefined) {
                return undefined;
            } 
            data = data[item];
        }
        return data;
    }

}