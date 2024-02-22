let firstnumber="";
let secondnumber="";
let operator="";


function appendNumber(num){
    if(operator===""){
        firstnumber+=num;
        document.getElementById("result").value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById("result").value=firstnumber+""+operator+""+ secondnumber;
    }
}

function setoperator(op){
    operator=op;
    document.getElementById("result").value=firstnumber+""+operator;
}

function back() {
    if (secondnumber !== "") {
        secondnumber = secondnumber.slice(0, -1);
        document.getElementById("result").value = firstnumber + operator + secondnumber;
    } else if (operator !== "") {
        operator = "";
        document.getElementById("result").value = firstnumber;
    } else if (firstnumber !== "") {
        firstnumber = firstnumber.slice(0, -1);
        document.getElementById("result").value = firstnumber;
    }
}


function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseFloat(firstnumber)+parseFloat(secondnumber);
            break;
        case '-':
            result=parseFloat(firstnumber)-parseFloat(secondnumber);
            break;
        case '*':
            result=parseFloat(firstnumber)*parseFloat(secondnumber);
            break;
        case '/':
            result=parseFloat(firstnumber)/parseFloat(secondnumber);
            break;
        
    }
    document.getElementById("result").value=result;
}


function clearresult() {
    firstnumber = "";
    secondnumber = "";
    operator = "";
    document.getElementById("result").value = "";
}
