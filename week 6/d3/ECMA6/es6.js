//Write a function that capitalizes the first letter of each string argument it receives.  
//	Function arguments: ‘hello’, ‘there’, ‘ES’, 6
//	Output: ‘Hello’, ‘There’, ‘ES’
var  x = ['hello','there','ES', 6];

var res = x.filter(
    function (value){
        return(typeof value === 'string')
    }
);

var finalRes = [];

res.forEach(function(element){
    
    finalRes.push(element[0].toUpperCase() + element.substring(1))
    
});

console.log(finalRes);

// console.log(res);
//return res;



 // array.forEach (function(element) {
//     console.log(typeof element[0]);

    
    
// });
// console.log(element[0]);