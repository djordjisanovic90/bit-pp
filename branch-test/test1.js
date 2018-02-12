

// var n = 10;

// var m;

// console.log(m);

function print(message){
    console.log(message);
    return 10;
}

var write;

write= print;

// console.log(typeof print);

// console.log(typeof write);

// print("zdravo svima");
// write("zdravo svima ponovo");

write=print("abc");
console.log(typeof write);
console.log(write);

////////////////////////////////////////////////

var n = 10;

var printMessage= function(message){
    console.log(message);
};

console.log(typeof printMessage);

printMessage("Zdravo");




///////////////////////////////////////////////

