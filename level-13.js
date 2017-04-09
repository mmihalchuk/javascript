//block number one
function runTimer() {
    window.setInterval(createTimer, 1000);
}
function createTimer() {
    let block = document.querySelector('#block');
    block.innerHTML = parseInt(block.innerHTML) + 1;
}

//block number 2
function go(){
    window.timerId = window.setInterval(timer, 500);
    document.querySelector('#go').disabled = true;
    document.querySelector('#stop').disabled = false;
}
function stop(){
    window.clearInterval(window.timerId);
    document.querySelector('#go').disabled = false;
    document.querySelector('#stop').disabled = true;
}
function timer(){
    let test = document.querySelector('#test');
    test.innerHTML = parseInt(test.innerHTML) + 1;
}

//block number 3
function go(){
    window.timerId = window.setInterval(timer, 500);
}
function timer(){
    let clock = document.querySelector('#clock');
    let date = new Date();
    clock.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}
function addZero(num){
    if (num > 9) {
        return num;
    } else {
        return '0' + num;
    }
}

//block number 4
function go(){
    window.timerId = window.setInterval(timer, 300);
    document.querySelector('#go').disabled = true;
}
function stop(){
    window.clearInterval(window.timerId);
}
function timer(){
    let test = document.querySelector('#test');
    let number = parseInt(test.innerHTML) - 1;
    test.innerHTML = number;
    if(number == 0) {
        stop();
    }
}

//block number 8
function go(){
    window.timerId = window.setInterval(timer, 1000);
}
function timer(){
    let seconds = document.querySelector('#seconds');
    let minutes = document.querySelector('#minutes');
    let hours = document.querySelector('#hours');
    let now = new Date();
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    let diff = Math.floor((midnight - now) / 1000);
    let hoursRemain = Math.floor(diff / (60 * 60));
    let minutesRemain = Math.floor((diff - hoursRemain * 60 * 60) / 60);
    let secondsRemain = Math.floor(diff % 60);
    hours.innerHTML = hoursRemain;
    minutes.innerHTML = addZero(minutesRemain);
    seconds.innerHTML = addZero(secondsRemain);
}
function addZero(number) {
    if (number > 9) {
        return number;
    } else {
        return '0' + number;
    }
}
