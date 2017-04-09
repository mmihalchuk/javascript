//block number 1
function one(n) {
    console.log(n *= n);
}
one(5);

//block number 2
function two(n1, n2) {
    console.log(n1 + n2);
}
two(5, 10);

//block number 3
function three(n1, n2, n3) {
    console.log((n1 - n2) / n3 );
}
three(45, 5, 4);

//block number 4
function four(n) {
    if(n > 7 || n < 1) {
        console.log('Введите число от 1 до 7');
    } else {
        switch(n) {
            case 1:
                console.log('Понедельник');
                break;
            case 2:
                console.log('Вторник');
                break;
            case 3:
                console.log('Среда');
                break;
            case 4:
                console.log('Четверг');
                break;
            case 5:
                console.log('Пятница');
                break;
            case 6:
                console.log('Суббота');
                break;
            case 7:
                console.log('Воскресенье');
                break;
        }
    }
}
four(4);

//block number 5
function isNumberInRange(n) {
    if(n > 0 && n < 10) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
isNumberInRange(4);

//block number 6
function getNumberSum(n) {
    let c = 0;
    let arr2 = n.toString().split('');
    for(var b = 0; b < arr2.length; b++) {
        c += parseFloat(arr2[b]);
    }
    return c;
}

function six() {
    for (var a = 0; a < 2018; a++) {
        var d = getNumberSum(a);
        if(d == 13) {
            console.log(a);
        }
    }
}
six();

//block number 7
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [];
function isEven(n) {
    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function seven() {
    for(var a = 0; a < arr1.length; a++) {
        let even = isEven(arr1[a]);
        if(even == true) {
            arr2.push(arr1[a]);
        }
    }
    console.log(arr2);
}
seven();

//block number 8
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [];
function isEven(n) {
    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function arraySum(arr) {
    let sum = 0;
    for(var a = 0; a < arr.length; a++) {
        sum += arr[a];
    }
    return sum;
}

function eight() {
    for(var a = 0; a < arr1.length; a++) {
        let even = isEven(arr1[a]);
        if(even == true) {
            arr2.push(arr1[a]);
        }
    }
    let arrSum = arraySum(arr2);
    console.log(arrSum);
}
eight();

//block number 9
var arr = [];

function checkPrime(num) {
    if(num % 2 === 0) {
        return false;
    } else if (num % 3 === 0) {
        return false;
    } else if (num % 4 === 0) {
        return false;
    } else if (num % 5 === 0) {
        return false;
    } else if (num % 6 === 0) {
        return false;
    } else if (num % 7 === 0) {
        return false;
    } else if (num % 8 === 0) {
        return false;
    } else if (num % 9 === 0) {
        return false;
    } else {
        return true;
    }
}

function arraySum(arr) {
    let sum = 0;
    for(var a = 0; a < arr.length; a++) {
        sum += arr[a];
    }
    return sum;
}

function nine() {
    var prime = false;
    for(var a1 = 1; a1 <= 1000; a1++) {
        prime = checkPrime(a1);
        if(prime === true) {
           arr.push(a1);
        }
    }
    console.log(arr);
    console.log(arraySum(arr));
}
nine();