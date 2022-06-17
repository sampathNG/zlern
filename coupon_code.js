const crypto = require('crypto');
const x = crypto.randomBytes(3).toString("hex");
console.log(x)