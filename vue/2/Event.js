function Event() {
    this.events = {};
}

Event.prototype.on = function(attr, callback) {
    if (this.events[attr]) {
        this.events[attr].push(callback);
    } else {
        this.events[attr] = [callback];
    }
}

Event.prototype.off = function(attr) {
    for (let key in this.events) {
        if (this.events.hasOwnProperty(key) && key === attr) {
            delete this.events[key];
        }
    }
}

Event.prototype.emit = function (attr, ...args) {
    this.events[attr] && this.events[attr].forEach(item => {
        item(...args);
    });
}