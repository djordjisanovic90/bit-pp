var a = 10;
var b = 20;
var c = 5;
if (a < b && a < c) {
    a = 1;
    console.log(a + b + c);
} else if (b < a && b < c) {
    b = 1;
    console.log(a + b + c);
} else {
    c = 1;
    console.log(a + b + c);
}