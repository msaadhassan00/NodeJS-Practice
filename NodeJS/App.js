// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__filename)

// setInterval(()=>{
//     console.log("Hello World!");
// },1000)

// console.log('ok');

//-----------------------------------------------------------

// Greetings Global (Utils,Names) File

const {abrar,hamza} = require('./Day01/Names')
const sayHi = require('./Day01/Utils')

// sayHi('Moiz')
// sayHi(abrar + ' & ' + hamza)

//-------------------------------------------------------------

// Calculator (Calc.js) File

const calc = require('./Day01/Calc')

// console.log(calc.add(9,5));
// console.log(calc.mul(5,5));
// console.log(calc.div(9,18));
// console.log(calc.add(4,5));

//-----------------------------------------------------------


const data = require('./Day01/Alternative-flavour')

// console.log(data);


//--------------------------------------------------------
require('./Day01/AddVal')

