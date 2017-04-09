//block number 1

for(var a = 1; a <= 100; a++) {
    console.log(a);
}

//block number 2
for(var a = 100; a >= 1; a--) {
    console.log(a);
}

//block number 3
for(var a = 1; a <= 100; a++) {
    if(a % 2 == 0) {
        console.log(a);
    }
}

//block number 4
var arr = [];
for(var a = 0; a <= 10; a++) {
    arr.push('x');
}
console.log(arr);

//block number 5
var arr = [];
for(var a = 0; a <= 10; a++) {
    arr.push(a);
}
console.log(arr);

//block number 6
var arr = [];
for(var a = 0; a <= 10; a++) {
    var random = (Math.random() * 1).toFixed(2);
    arr.push(random);
}
console.log(arr);

//block number 7
var arr = [];
for(var a = 0; a <= 10; a++) {
    var random = (Math.random() * 1);
    arr.push(random);
}
console.log(arr);

//block number 8
var arr = [1, 4, 7, 9, 14, 16];
for(var a = 0; a < arr.length; a++) {
    if(arr[a] > 0 && arr[a] < 10) {
        console.log(arr[a]);
    }
}

//block number 9
var arr = [1, 4, 6, 7, 5];
for(var a = 0; a < arr.length; a++) {
    if(arr[a] == 5) {
        console.log('Есть!');
        break;
    }
}

//block number 10
var arr = [1, 4, 3, 4, 6, 7, 8, 9];
arr.forEach(function (item, i, arr) {
    if(i % 2 == 0) {
        console.log(item);
    }
});

//block number 11
var arr = [1, 4, 3, 4, 6, 7, 8, 9];
var sum = 0;
for(var a = 0; a < arr.length; a++) {
    sum += arr[a];
}
console.log(sum);

//block number 12
var arr = [1, 4, 3, 4, 6, 7, 8, 9];
var sum = 0;
for(var a = 0; a < arr.length; a++) {
    sum += arr[a] * arr[a];
}
console.log(sum);

//block number 13
var arr = [1, 4, 3, 4, 6, 7, 8, 9];
var sum = 0;
for(var a = 0; a < arr.length; a++) {
    sum += arr[a];
}
console.log(sum / (arr.length + 1));

//block number 14
for(var a = 1; a < 21; a++) {
    var sum = '';
    let x = 'x';
    for(var b = 0; b < a; b++) {
        sum += x;
    }
    console.log(sum);
}

//block number 15
for(var a = 1; a <= 9; a++) {
    for(var b = 1; b <= a; b++) {
        var str = b + '' + b + '' + b + '' + b;
    }
    console.log(str);
}

//block number 16
var str = '';
for(var b = 1; b <= 9; b++) {
    str += b + '' + b + '' + b + '' + b;
    console.log(str);
}

//block number 17
for(var a = 1; a < 9; a++) {
    var sum = '';
    let x = a;
    for(var b = 0; b < a; b++) {
        sum += x;
    }
    console.log(sum);
}

//block number 18
var str = '';
for(var a = 1; a <= 9; a++) {
    str += a;
}
console.log(str);

//block number 19
var str = '';
for(var a = 1; a <= 9; a++) {
    for(var b = 1; b <= a; b++) {
        str += a;
    }
}
console.log(str);

//block number 20
for(var a = 1; a <= 9; a++) {
    var str = '';
    for(var b = 1; b <= 5; b++) {
        str += a;
        console.log(str);
    }
}

//block number 21
var arr = [];
for(var a = 1; a < 21; a++) {
    var sum = '';
    let x = 'x';
    for(var b = 0; b < a; b++) {
        sum += x;
    }
    arr.push(sum);
}
console.log(arr);

//block number 22
var arr = [];
for(var a = 1; a < 9; a++) {
    var sum = '';
    let x = a;
    for(var b = 0; b < a; b++) {
        sum += x;
    }
    arr.push(sum);
}
console.log(arr);

//block number 23
var arr = [1, 1];
for(var a = 2; a <= 20; a++) {
    var sum = 0;
    sum = arr[a - 2] + arr[a - 1];
    arr.push(sum);
}
console.log(arr);

//block number 24
var arr =[];
function arrayFill(element, number) {
    for (var a = 0; a <= number; a++) {
        arr.push(element);
    }
    console.log(arr);
}
arrayFill('x', 4);

//block number 25
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
for(var a = 0; a <= arr.length; a++) {
    if(sum < 10) {
        sum += arr[a];
    } else {
        break;
    }
}
console.log(a);
console.log(sum);

//block number 26
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 3];
var sum = 0;
var counter = 0;
for(var a = arr.length; a >= 0; a--) {
    if(sum <= 10) {
        sum += arr[a-1];
        counter++;
    } else {
        break;
    }
}
console.log(counter);
console.log(sum);

//block number 27.1
var str = 'js';
var result1 = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result1);

//block number 27.2
var str1 = 'js';
var str2 = str1.toLowerCase().split('');
str2[0] = str2[0].toUpperCase();
console.log(str2.join(''));

//block number 27.3
var str = 'js';
var result1 = str.substr(0, 1).toUpperCase() + str.substr(1);
console.log(result1);

//block number 28.1
var str = 'js';
var length = str.length - 1;
var result1 = str.slice(0, length);
var result2 = str.slice(length).toUpperCase();
console.log(result1 + result2);

//block number 28.2
var str1 = 'js';
var str2 = str1.toLowerCase().split('');
var length = str2.length - 1;
str2[length] = str2[length].toUpperCase();
console.log(str2.join(''));

//block number 28.3
var str = 'js';
var length = str.length - 1;
var result1 = str.substr(0, length);
var result2 = str.substr(length).toUpperCase();
console.log(result1 + result2);

//block number 29
var str = '123456789';
var arr = str.split('').reverse().join('');
console.log(arr);

//block number 30
var num = 985742631;
var arr = num.toString().split('').sort();
console.log(arr);

//block number 31
var str = 'https://htmlacademy.ru/';
var root1 = str.search(/https:/);
if (root1 = 0) {
    console.log('Найдено');
}

//block number 32
var str = 'https://htmacademy.html';
var root = str.indexOf('html');
var num = str.slice(root);
if(num == 'html') {
    console.log('Найдено');
}

//block number 33
var str = '/folder1/folder2/folder3/folder4/';
var arr = str.split('/');
console.log(arr[2]);

//block number 34
var str = '/folder1/folder2/folder3/folder4/';
var arr = str.split('/');
var length = arr.length - 3;
console.log(arr[length]);

//block number 35
var str = '/folder1/folder2/folder3/folder4/';
var arr = str.split('/');
arr.splice(2, 1);
console.log(arr);

//block number 36
var str = 'я учу javascript';
function ucfirst(string) {
    let result = string.slice(0, 1).toUpperCase() + string.slice(1);
    return result;
}
function makeStr() {
    let array = str.toLowerCase().split(' ');
    let arr2 = [];
    for(var a = 0; a < array.length; a++) {
        let word = ucfirst(array[a]);
        arr2.push(word);
    }
    console.log(arr2.join(' '));
}
makeStr();

//block number 37
var str = 'я учу javascript';
function ucfirst(string) {
    let length = string.length - 1;
    let result1 = string.slice(0, length);
    let result2 = string.slice(length).toUpperCase();
    return result1 + result2;
}
function makeStr() {
    let array = str.toLowerCase().split(' ');
    let arr2 = [];
    for(var a = 0; a < array.length; a++) {
        let word = ucfirst(array[a]);
        arr2.push(word);
    }
    console.log(arr2.join(' '));
}
makeStr();

//block number 38
var str = 'я учу javascript';
var arr = str.toLowerCase().split('');
var arr2 = [];
function makeStr() {
    for(var a = 0; a < arr.length; a++) {
        if(a % 2 == 0) {
            arr2.push(arr[a].toUpperCase());
        } else {
            arr2.push(arr[a]);
        }
    }
    console.log(arr2.join(''));
}
makeStr();

//block number 39
var str = '12-345-67-89-10';
for(var a = 0; a <= 2; a++) {
    str = str.replace('-', '!');
}
console.log(str);

//block number 40
var str = '12-345-67-89-10';
str = str.replace(/-/g, '!');
str2 = str.replace('!', '-');
console.log(str2);

//block number 41
var str = 'var_text_hello';
var arr = str.toLowerCase().split('_');
var arr2 = [];
for(var a = 0; a < arr.length; a++) {
    if(a == 0) {
        var word = arr[a].slice(0, 1) + arr[a].slice(1);
        arr2.push(word);
    } else {
        var word = arr[a].slice(0, 1).toUpperCase() + arr[a].slice(1);
        arr2.push(word);
    }
}
console.log(arr2.join(''));

//block number 42
var str = ' я учу javascript  ';
var arr = str.toLowerCase().split(' ');
var arr2 = [];
for(var a = 0; a < arr.length; a++) {
    if (!(arr[a] == '' || arr[a] == ' ')) {
        arr2.push(arr[a]);
    }
}
console.log(arr2.join(' '));

//block number 43
function strReplace(arrOld, arrNew, str) {
    for (var a = 0; a < arrOld.length; a++) {
        str = str.replace(arrOld[a], arrNew[a]);
    }
    console.log(str);
}

//block number 44
function inArray(str, arr) {
    for(var a = 0; a < arr.length; a++) {
        if(arr[a] == str) {
            return true;
            break;
        }
    }
}

//block number 45
var str = '12345678';
var arr1 = str.split('');
var arr2 = arr1[1] + arr1[0] + arr1[3] + arr1[2] + arr1[5] + arr1[4] + arr1[7] + arr1[6];
console.log(arr2);