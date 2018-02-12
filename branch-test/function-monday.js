//napisi funkciju koja racuna broj samoglasnika u stringu

var a;
function samoglasnik(a) {
    var svisamog = "aeiourAEIOUR";

}



///////////

function vowelCount(inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var x = 0; x < inputString.length; x++) {
        if (vowelList.indexOf(inputString[x]) !== -1) {
            vowelCount += 1;
        }

    }
    return vowelCount;
}

console.log(vowelCount("The quick brown fox"));


indexof

a[1, 2, 3]


//////////////////////////

// 2.

// Write a function that combines two arrays by alternatingly taking elements.

// [a,b,c], [1,2,3] -> [a,1,b,2,c,3]

var a = ["a", "b", "c"];
var b = [1, 2, 3];

function comb(a, b) {
    var c = [];
    var k;

    for (var i = 0, j = 0, k = 0; i < a.length && j < b.length; i++ , j++) {
        c[k] = a[i];
        c[k + 1] = b[j];
        k = k + 2;
    }

    console.log(c);
}


comb(a, b);


//3. Write a function that rotates a list by k elements.

//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotate(arr, n) {
    var brr = [];
    var k = 0;

    for (var i = n; i < arr.length; i++) {
        brr[k] = arr[i];
        k++;
    }

    for (var i = 0; i < n; i++) {
        brr[k] = arr[i];
        k++;
    }

    return brr;    
}

var numbers = [1, 2, 3, 4, 5];
var k = 2;

var result = rotate(numbers, k);
console.log(result);


