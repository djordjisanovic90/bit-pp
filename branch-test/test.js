// 10............

function sumNumbers(Num1, Num2) {

    var result = Num1 + Num2;
    return 10;
}
var result = sumNumbers(10, 1);
console.log(result);
//09..................

function square(num) {
    num *= num;
}
var result = square(10);
console.log(result); //-------------No return

// 08................... V A Z N O

function sum(num1, num2) {

    num1 = num1 || 0;
    num2 = num2 || 0;

    return num1 + num2;
}

var result = sum(15);
console.log(result);

//07..............

var x = 5;
var y = 3;
var min = (x < y) ? x : y;
console.log(min);

//06...............

var f = 0, g = 1;

for (var i = 0; i <= 15; i++) {
    console.log(f);
    f = f + g;  //f1) f= 1// f1//f2//3//5//8
    g = f - g;// g1) g=0 // g1//g1//2//3//5
}

//05...............

var x = -20;

if (x > 0); // zeznula me tacka zarez- dodjem stevanu krem bananice za 50 rsd
console.log("positive");


//04.....................

var x = -32.2;
var isPositive = (x > 0);

if (!isPositive) {
    console.log(x + " is positive");
} else {
    console.log(x + " is not positive");
}