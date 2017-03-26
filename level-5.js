//block number 1
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var result1 = arr1.concat(arr2);
console.log(result1);

//block number 2
var arr3 = [1, 2, 3];
var result2 = arr3.reverse();
console.log(result2);

//block number 3
var arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//block number 4
var arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

//block number 5
var arr6 = ['js', 'css', 'jq'];
console.log(arr6.shift());

//block number 6
var arr7 = ['js', 'css', 'jq'];
console.log(arr7.pop());

//block number 7
var arr8 = [1, 2, 3, 4, 5];
var result7 = arr8.slice(0, 3);
console.log(result7);

//block number 8
var arr9 = [1, 2, 3, 4, 5];
var result8 = arr9.slice(3, 5);
console.log(result8);

//block number 9
var arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10);

//block number 10
var arr11 = [1, 2, 3, 4, 5];
var result10 = arr11.splice(1, 3);
console.log(result10);

//block number 11
var arr12 = [1, 2, 3, 4, 5];
arr12.splice(3, 0, 'a', 'b', 'c');
console.log(arr12);

//block number 12
var arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a', 'b');
arr13.splice(6, 0, 'c');
arr13.splice(8, 0, 'e');
console.log(arr13);

//block number 13
var arr14 = [3, 4, 1, 2, 7];
function sortNumbers(a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
}
arr14.sort(sortNumbers);
console.log(arr14);

//block number 14
var obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
}
var keys = Object.keys(obj);
console.log(keys);