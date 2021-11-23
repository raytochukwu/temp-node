const { time } = require("node:console");
const os = require("os");
const user = os.userInfo();
const Time = os.uptime();
console.log(user, Time);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
