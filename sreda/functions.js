function addition(a, b) {
    var sum;
    sum = a + b;
    return sum;

}

addition(3, 4);

var s = addition(3, 4);

console.log(s);

//-------------------------------------------
function isString(a) {
    if (typeof a == "string") {
        return true;
    }
    else {
        return false;
    }
}

console.log(isString("hello"));