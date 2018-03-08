function TestArray(){
    this.name = 'a';
    this.values = [2,4,7,1,73];

    this.print = function(){
        this.values.forEach((e,i)=>{
            console.log(this.name, i, e);   
        });
    }
}
let ta = new TestArray();
ta.print();

//.......................1 (arrow)
// Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

var a = ['hello','there','ES',6];
var b = [];

var cut=a.filter((value)=>{
    return (typeof value === 'string')
})
console.log(cut);

cut.forEach((element)=>{
    b.push(element[0].toUpperCase() + element.substring(1));
})
console.log(b);//........................................................Its Allive!!!!!!!!!!!!!!!!!

//......................2 (arrow)
// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24


 (n)=>{
    const tax = 20;
    let result = n / 100*tax;
    return result;
}
console.log((100));

//.....................3 (arrow)
// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

(input, inn = 3) => {
    var input = [2,4,6,3,8];
    var g = input.map(a=>{a+inn});
    return g;

}
console.log(g);

//...................4 (arrow)

// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]
var a = [2,4,3,6,7];

    var b = a.filter(function(value){
        return (value%2==0)
        
    })
    
console.log(b);
