/* Dsplay in the console the numbers from 1 to 20 - SAVED IN AN ARRAY*/
function displayNumbers(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(displayNumbers(20));

/* Dsplay in the console the numbers from 1 to 20 - SAVED IN A STRING*/
function displayNumbers(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str = str + i;
    }
    return str;
}

console.log(displayNumbers(20));

/* Display in the console the odd numbers from 1 to 20 - SAVED IN AN ARRAY*/
function displayOddNumbers(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(displayOddNumbers(20));

/* Compute the sum of the elements of an array and display it in the console (add all numbers in the array together) */
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + parseInt(arr[i]);
    }
    return sum;
}

console.log(sumOfArray([1, 3, 4, 5]));

/* Compute the maximum of the elements of an array and display it in the console */
function maxOfArray(arr) {
    let max = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxOfArray([1, 5, 17, 2, 3]));

/* Compute how many times a certain element appears in an array (count the number of times one element of your choice is in the array) */
function repeatElement(arr, elem) {
    num = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (elem == arr[i]) {
            num++;
        }
    }
    return num;
}

console.log(repeatElement([1, 2, 3, 2, 5, 3, 1, 3, 3], 3));

/* using nested for loops generate and display in the console the following pattern
           0 1 0 1

           1 0 1 0

           0 1 0 1

           1 0 1 0
 */

// am pus \n la incept si final ca sa apara gilimele pe randuri separate si sa arate fain matricea

function matrix(n) {
    let str1 = '';
    let str2 = '';
    let str = '';

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            str1 = str1 + '0 ';
            str2 = str2 + '1 ';
        }
        else {
            str1 = str1 + '1 ';
            str2 = str2 + '0 ';
        }
    }

    // am pus \n la incept si final ca sa apara gilimele pe randuri separate si sa arate fain matricea
    str = '\n' + str1 + '\n' + str2 + '\n' + str1 + '\n' + str2 + '\n';
    return str;
}

console.log(matrix(4));
