//GLOBALS - No Windows
//__dirname - path to current directory
//__filename - file name
//require - functions to use modules (CommonJS)
//module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
  console.log("hello World");
}, 1000);