const os = require('os')

// info about currrent user
const user = os.userInfo()
console.log(user);


// method return system uptime in seconds
console.log(os.uptime());


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);