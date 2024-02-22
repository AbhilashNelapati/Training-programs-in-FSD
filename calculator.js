let firstNumber="";
let secoundNumber="";
let operator="";

function appendNumber(num){
    if(operator==""){
        firstNumber +=num;
        document.getElementById("result").value=firstNumber;
    }
    else{
        secoundNumber +=num;
        document.getElementById("result").value=firstNumber + "" + operator + "" + secoundNumber;
    }
}
function setoperator(op){
    operator=op;
    document.getElementById("result").value=firstNumber+""+operator;

}

function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstNumber)+parseInt(secoundNumber);
            break;
        case '-':
            result=parseInt(firstNumber)-parseInt(secoundNumber);
            break;
        case '*':
            result=parseInt(firstNumber)*parseInt(secoundNumber);
            break;
        case '/':
            result=parseInt(firstNumber)/parseInt(secoundNumber);
            break;                        
    }
    document.getElementById("result").value=result;
}

function clearresult(){
    firstNumber="";
    secoundNumber="";
    operator="";
    document.getElementById("result").value="";

}