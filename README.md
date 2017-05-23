A simple async queue that yields to IO under load.

```javascript
var Queue = require('fast-queue');

let q = new Queue();

q.push(()=>{console.log('Hello')});
```