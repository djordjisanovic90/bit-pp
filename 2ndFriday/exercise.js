// 2 sortirana niza i jedan rezultujuci

function merge(a, b) {
    //a
    var i;
    //b
    var j;
    //c
    var k = 0;
    
    var c = [];
    
    for (i = 0, j = 0; i < a.length && j < b.length; k++) {
        //a[i], b[j]
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }
    }

    if (i == a.length) { //da li smo stigli do kraja niza a
        for ( ; j < b.length; j++) {
            c[k] = b[j];
            k++;
            /* */
        }
    } else {
        for ( ; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }
    return c;
}

var fa = [1, 2, 7];
var sa = [-3, 46];
var fna = merge(fa, sa);
console.log(fna);

// nadoveži dva niza 

function merge(a,b){

    var c = [];
    var i;
    var j;
    var k=0;
    
    for(i=0 ; i<a.length; i++){
        c[k]=a[i];//without +=
        k++;
        
    }

    for(j=0 ; j<b.length; j++){
        c[k]=b[j]; //without += 
        k++;
    }
    return c;
}
var first = [1,4];
var second = [5, 8];
var third=(merge(first,second));
console.log(third);