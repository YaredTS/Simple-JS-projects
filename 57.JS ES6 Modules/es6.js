// ES6 Modules = An external file that contains reusable code
//             that can be imported into other javascript files.
//             Write reusable code for many different apps.
//             can contain variables,classes, functions ....&more
//             Introduced as part of ECMAScript 2015 update

import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

// we use object destructuring {} inside we write from this js
// file  i would like PI, getCircumference .....

// i can now use this variables and function as if they were already
// part of my javascript file

console.log(PI);

const circumference = getCircumference(10);

console.log(`${circumference.toFixed(2)}cm`);

// rounding to 2 decimal place