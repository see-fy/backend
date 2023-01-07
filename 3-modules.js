// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHello = require('./5-utils');
const data = require('./6-alternative-flavor'); 

console.log(data)

sayHello("Susan")
sayHello(names.john)
sayHello(names.peter)
require('./7-mind-grenade')