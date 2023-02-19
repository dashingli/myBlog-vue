//事件总线
export default {
    linstenrs:{},
    $on(eventName,handler){
        if(!this.linstenrs[eventName]){
            this.linstenrs[eventName] = new Set();
        }
        this.linstenrs[eventName].add(handler);
    },
    $off(eventName,handler){
        if(!this.linstenrs[eventName]){
            return;
        }
        this.linstenrs[eventName].delete(handler);
    },
    $emit(eventName,...args){
        if(!this.linstenrs[eventName]){
            return;
        }
        for(const hanlder of this.linstenrs[eventName]){
            hanlder(...args);
        }
    }
}