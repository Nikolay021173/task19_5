let obj = {a: 1, b: 2, c: 3, d: 4};

function f(str, obj) {
    return str in obj;
}

console.log(f('a', obj));
console.log(f('hjh', obj));