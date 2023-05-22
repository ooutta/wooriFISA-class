"use strict";
function greeting(name) {
    console.log(`Hello ${name}`);
}
function processUserInput(name, callbackFn) {
    callbackFn(name);
}
processUserInput('kim', greeting);
