let dob = document.querySelector('#dob');
let luckyNumber = document.querySelector('#lucky-number');
let btnCheck = document.querySelector('#btn-check');
let luckyMsg = document.querySelector('#lucky-msg');
let unluckyMsg = document.querySelector('#unlucky-msg');
let invalidInput = document.querySelector('#invalid-input');
btnCheck.disabled = true ;

let isLucky = () => {
    luckyNum = luckyNumber.value;
    dobString = dob.value.replaceAll('-','');
    if(dob.value === ''){
        invalidInput.style.display = 'block';
        return
    }
    invalidInput.style.display = 'none';
    let dobSumInt = 0;
    for(let num of dobString){
        dobSumInt += Number(num);
    }
    if(dobSumInt%luckyNum === 0){
        unluckyMsg.style.display = 'none';
        luckyMsg.style.display = 'block';

    }else{
        luckyMsg.style.display = 'none';
        unluckyMsg.style.display = 'block';
    }
}

let checkButton = (e) => {
    luckyNum = luckyNumber.value;
    if(luckyNum == ''){
        console.log(luckyNum)
        btnCheck.disabled = true ;
    }else{
        btnCheck.disabled = false ;
    }   
}

luckyNumber.addEventListener('input',checkButton);
btnCheck.addEventListener('click',isLucky);