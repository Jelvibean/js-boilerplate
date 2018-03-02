//This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before our tests run.
require('babel-register')();  // this will tell mocha that first babel will

//Disable webpack features that Mocha doesn't understand.

require.extensions['.css'] = function(){};


