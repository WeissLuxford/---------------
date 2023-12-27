"use strict"

const sum = document.querySelector(".sum"),
    childNumber = document.querySelector(".child_number"),
    calcButton = document.querySelector(".calc__button"),
    answerSum = document.querySelector(".answer"),
    form = document.querySelector("form");


    calcButton.addEventListener('click', giveAnswer);
    childNumber.value = "Один ребенок";

function giveAnswer() {
    let ndsSum = sum.value/100*88;
    let answer = 0;
    if(childNumber.value == "Один ребенок"){
        answer = ndsSum/4 <= 278250 ? 278250 : ndsSum/4;
    } else if(childNumber.value == "Два ребенка"){
        answer = ndsSum/3 <= 556500 ? 556500 : ndsSum/3;
    } else if(childNumber.value == "Три и больше"){
        answer = ndsSum/2 <= 834750 ? 834750 : ndsSum/2;
    }
    return answerSum.innerHTML = `${Math.trunc(answer)} сум` ;  
}



function runScript(e) {
    if (e.keyCode == 13) {
        eval(sum.value);
        return false;
    }
}

