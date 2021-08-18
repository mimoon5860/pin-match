function roundNum() {
    const genNum = document.getElementById('get-num');
    const genNum2 = Math.round(Math.random() * 99999);
    const getNumText = genNum2 + '';
    if (getNumText.length == 5) {
        genNum.value = genNum2;
    }
    else {
        roundNum();
    }
}
var downloadTimer;
var codeTimer;
document.getElementById('gen-btn').addEventListener('click', function () {
    roundNum();
    myStopFunction(downloadTimer)
    myStopFunction(codeTimer)
    codeTimer = setInterval(
        function () {
            document.getElementById("get-num").value = "";
        }, 25000);

    var timeleft = 25;
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " Seconds remaining";
        }
        timeleft -= 1;
    }, 1000);

})
function myStopFunction(ok) {
    clearTimeout(ok);
}
document.getElementById('buttons').addEventListener('click', function (event) {
    const enterNumber = document.getElementById('enter-number');
    const newNumber = event.target.innerText;
    const oldNum = enterNumber.value;
    if (isNaN(newNumber)) {
        if (newNumber == 'C') {
            enterNumber.value = '';
        }
        else if (newNumber == '<') {
            enterNumber.value = enterNumber.value.slice(0, - 1);
        }
    }
    else {
        enterNumber.value = oldNum + newNumber;
    }
})

document.getElementById('submit').addEventListener('click', function () {
    const randomNum = document.getElementById('get-num').value;
    const typedNumGet = document.getElementById('enter-number');
    const typedNum = typedNumGet.value;
    const dontMatch = document.getElementById('dont-match')
    const match = document.getElementById('match')
    if (typedNum != '' && randomNum == typedNum) {
        match.style.display = 'block';
        dontMatch.style.display = 'none';
    }
    else {
        match.style.display = 'none';
        dontMatch.style.display = 'block';
    }
    typedNumGet.value = '';
})
