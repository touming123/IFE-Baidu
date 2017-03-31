class Event{
    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        if (this.subs.indexOf(sub) == -1) {
            this.subs.push(sub);
        }
    }
    
    notify() {
        for (let sun of this.subs) {
            sub.updata();
        }
    }
}
Event.target = null;