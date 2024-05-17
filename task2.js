let obj = {a: 1, b: 2, c: 3, d: 4};

function f(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

f(obj);