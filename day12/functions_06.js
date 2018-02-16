//7_06_Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function naj(a){
    var max=a[0];
    var i;
    var j=0;
    //
    //nemas funkciju
    for(i=0;i<=a.length;i++){
        if(a[i]>max){
            max=a[i];
            if(typeof a[i]=="string"){
                //var k = [];
                delete a[i];
                //k[j]=a[i]; 
                j++;
            
            }
    
        } return a;
    }return max;
}
var a=[2,72,7,45,"kddsf"];
var r =  naj(a);
console.log(r);
console.log(a);