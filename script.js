var y = [1, 2, 3, 4, 5, 6, 7]

var odd = (array) => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}
console.log(odd(y));

var str = "i am a risudeveloper";
let def = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(def(str));

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
let ghi = (a) => {
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
console.log(ghi(a));


let n = 34;
let l = (n) => {
    for (let i = 2; i <= n; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(i);
        }
    }
}
console.log(l(n));

Palindrome = (arr, n) => {
    
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}

// Do the below programs in anonymous function & IIFE
anonymous: function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i])
        }
    }
}
IIFE: (function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i])
        }
    }
})([1, 2, 3, 4])

anonymous: function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
IIFE: (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
})("I AM A FULLSTACK DEVELOPER");

anonymous: function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
IIFE: (function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
})([1, 2, 3, 4])

Anonymous Function:
function(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}
IIFE
    (
        function (numArray) {
            numArray = numArray.filter((number) => {
                for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return false;
                }
                return true;
            });
            console.log(numArray);
        })([1, 2, 3, 4])

function isPalindrome(N) {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] != str[len - 1 - i])
            return false;
    }
    return true;
}
    
  Anonymous: function (arr, n) {
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}

IIFE:

(function (arr, n) {
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})([1, 2, 3], 3)

Anonymous: Function: function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
}
IIFE: (function (array) {
    let dup = [...new Set(array)];
    console.log(dup);
})([1, 1, 2, 3, 4])


function reverse(array, li, ri) {
    while (li < ri) {
      int temp = a[li];
        a[li] = a[ri];
        a[ri] = temp;

        li++;
        ri--;
    }
}
Anonymous:  function(array, k) {
    k = k % a.length;
    if (k < 0) {
        k += a.length;
    }

    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
}

IIFE: (function (array, k) {
    k = k % a.length;
    if (k < 0) {
        k += a.length;
    }

    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
})([1, 2, 3, 4], 2)