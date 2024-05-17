let obj = {};

obj.a = 12;
obj.b = 1;
obj.c = 7;
obj.d = 6;
obj.f = function() {
    console.log(obj.a + obj.b)
}

delete obj['c'];

console.log(obj);
