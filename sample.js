var Queue = require('./index');

let q = new Queue();

q.push(()=>{console.log('Hello')});