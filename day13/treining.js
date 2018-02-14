// 

function print(a,b,c){

    var i;
    var s="*";
    var e ="";
    var g =a+b+c;
    for(i=1; i<=g; i++){
        e+=s;
        if(i=a){
            e+="\n";
            
        }
        else
        continue;
                if(i=b){
                    e+="\n";
                     
                }
                else
                continue;
            
    }
    return e;
    

}
var a = 5;
var b = 3;
var c =10;

console.log(print(a,b,c));

function print(a,b,c){

    var i;
    var j;
    var s="*";
    var e ="";
    var g =a+b+c;
    for(i=1; i<=a; i++){
        e+=s;
    }
    e+="\n";

    for(j=1 ; j<=b; j++){
       
        e+=s;
    }
    e+="\n";

    for(i=1; i<=c; i++){
        e+=s;
    }
    return e;

}
var a = 5;
var b = 3;
var c = 30;

console.log(print(a,b,c));

//

function smoking(n){

    var i;
    function counter(n){
        var s = "*";
        var e = "";
        var i;
        for(i=1; i<n; i++){
            e+=s;
        }
        return e;
    }
    var poruka;

    if(n<=10){
        poruka="ok";
        console.log(counter(n));
    }
    if(n>10&&n<=20){
        poruka="N S G";
        console.log(counter(n));
    }
    if(n>20){
        poruka="ALO!!!";
        console.log(counter(n));
    }
    return poruka;
}
var n=50;
console.log(smoking(n));

