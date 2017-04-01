class Dep{
    /**消息订阅器,收集订阅者的容器*/
    constructor() {
        this.subs = [];
    }

    /**
     * 保存依赖于我的
     * @param {*} sub watcher类
     */
    addSub(sub) {
        if (this.subs.indexOf(sub) === -1) {
            this.subs.push(sub);
        }
    }
    
    /**
     * 通知
     */
    notify() {
        this.subs.forEach(function(sub) {
            sub.update();
        })
    }
}
Dep.target = null;