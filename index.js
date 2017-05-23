let setImmidiate = require("setimmediate");

class Queue {

    constructor() {
        this.items = [];
        this.running = false;
    }

    push(func) {
        if (typeof func !== 'function') return;
        this.items.push(func);
        if (!this.running)
            this.drain();
    }

    drain() {
        this.running = true;
        setImmediate(() => {
            this.items.pop()();
            if (this.items.length > 0) {
                this.drain();
            } else {
                this.running = false
            }
        });
    }
}

module.exports = Queue;