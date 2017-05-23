let setImmidiate = require("setimmediate");

/**
 * A queue for executing tasks async while still yielding to IO
 * between tasks.
 */
class Queue {

    /**
     * Constructor
     */
    constructor() {
        this.items = [];
        this.running = false;
    }

    /**
     * Push
     * 
     * @param {Function} func - Function to execute
     */
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