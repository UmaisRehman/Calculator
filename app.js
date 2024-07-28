var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var num3 = document.querySelector('#num3');
var num4 = document.querySelector('#num4');
var num5 = document.querySelector('#num5');
var TotalMarks = document.querySelector('#totalMarks');
var Gradesum = document.querySelector('#grade');
var Per = document.querySelector('#per');
var ygrade;

function add() {
    if (+num1.value > 100 || +num1.value < 0) {
        alert("You entered Math marks out of range (0-100)");
        num1.value = 0;
        return;
    }
    if (+num2.value > 100 || +num2.value < 0) {
        alert("You entered Urdu marks out of range (0-100)");
        num2.value = 0;
        return;
    }
    if (+num3.value > 100 || +num3.value < 0) {
        alert("You entered English marks out of range (0-100)");
        num3.value = 0;
        return;
    }
    if (+num4.value > 100 || +num4.value < 0) {
        alert("You entered Sindhi marks out of range (0-100)");
        num4.value = 0;
        return;
    }
    if (+num5.value > 100 || +num5.value < 0) {
        alert("You entered Science marks out of range (0-100)");
        num5.value = 0;
        return;
    }

    var sum = +num1.value + +num2.value + +num3.value + +num4.value + +num5.value;
    console.log(sum);

    var percentage = ((sum / 500) * 100).toFixed(2); 
    TotalMarks.innerHTML = "Total Marks Obtained: " + sum;
    Per.innerHTML = "Your Percentage is: " + percentage + "%";

    if (percentage >= 80) {
        ygrade = "A+";
    } else if (percentage >= 70) {
        ygrade = "B+";
    } else if (percentage >= 60) {
        ygrade = "C+";
    } else if (percentage >= 50) {
        ygrade = "D";
    } else {
        ygrade = "Failed";
    }
    Gradesum.innerHTML = "Your Grade is: " + ygrade;

    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
}
