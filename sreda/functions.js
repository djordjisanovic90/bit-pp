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

//------------------------------------------
function isblank(a)
{
    if (a="Number")
    {
        return false;
    }
    else if (a=="string")
    {
        return false;
    }
    else(a=="")
    {
        return true;
    } 
}
console.log(isblank(""));
????? ivica....................


//stevan


function Bstring(a){
    /*
    if(a == " "){
        return true;
    }else if(typeof a == "string"){
        return false;
    }else if(typeof a == "number"){
        return false;
    }else (typeof a == "boolean");
        return false;

    */

    if ( a ===  " " ){
        return true;
    }
    else{
        return false;
    }
} 

console.log(Bstring(false));
//.................
function calculator(n)
{
    var d = "";
    var i;
    var s = "ha";
   for(i=1;i<=n;i++)
   {
       d=d+s;

   }
   return d;
}

console.log(calculator(3));
//..................

function brojac(c)
{
    var i;
    var s = "aaaagre";
    
}