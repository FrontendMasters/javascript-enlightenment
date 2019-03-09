// using assign() to clone an object
const myObject = { key1: "value1", key2: "value2" };
console.log(Object.assign({}, myObject));
/* logs new object, cloned from myObject

[object Object] {
    key1: "value1",
    key2: "value2"
}

*/

// using assign() to merge objects
const myObject1 = { key1: "value1", key2: "value2" };
const myObject2 = { key3: "value3", key4: "value4" };
const myObject3 = { key4: "4" };
console.log(Object.assign(myObject1, myObject2, myObject3));
/* logs a new object 

[object Object] {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "4"
}

Note: same properties are overwritten. Last in to the parameter list wins. 

*/

// using assign to coerce a string to an object
console.log(Object.assign({}, "foo"));

/* logs a new object 

[object Object] {
    0: "f",
    1: "o",
    2: "o"
}

*/
