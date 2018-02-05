var a = ["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]
console.log(a[5],a[9],a[0]);

//dva
var b = ["ponedeljak","utorak","sreda","cetvrtak","petak","subota","nedelja"];
console.log(b[6]);

// treci-------------------------

var c=[2,-4,5,-2,-11];
console.log(c[1],c[3],c[4]);

//---------------------------------
var d=[5,15,-5,20,12,18,72,14,9];

for(var i=0;i<d.length;i++){
    if(d[i]%3==0)console.log(d[i]);
}

//...........
var e=[[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
console.log(e[2]);
console.log(e[2][1]);