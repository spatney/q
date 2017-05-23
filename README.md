A simple async queue that yields to IO under load.

```javascript
var Queue = require('fast-queue');

let q = new Queue();

q.doAsap(()=>{console.log('Hello')});
```