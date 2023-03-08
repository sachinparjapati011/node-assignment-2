const readline = require('readline');
const inputdata = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
inputdata.question(' name to greet:', (greetval) => {
  console.log(`Hello ${greetval}`)
})