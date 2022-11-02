const result_display = document.querySelector("#result_display")
const operation_display = document.querySelector("#operation_display")
const controls_button = document.querySelectorAll(".controls_button")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".op")
const clear_btn = document.querySelector("#clear")
const evaluate = document.querySelector("#evaluate")

let arr = [];
let n1 = 0;
let n2 = 0;
let operation = '';
let firstNum = true;
let evaluated = false;
let operated = false;

const sum = (a, b) => {
    return +a + +b;
}

const subtr = (a, b) => {
    return +a - +b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (a, b, id) => {
    if(id == 'sum'){
        return(sum(a, b));
    } else if(id == 'subtr'){
        return(subtr(a, b));
    } else if(id == 'multiply'){
        return(multiply(a, b));
    } else if(id == 'divide'){
        return(divide(a, b));
    }
}


evaluate.addEventListener('click', () => {
    if(n1 == 0 && n2 == 0){
        window.alert('Please enter a number !')
    }else if(evaluated){
        window.alert('The operation has already been evaluated !')
    }else{
        renderResult();
        n1 = operate(n1, n2, operation);
        evaluated = true;
    }
})

const renderResult = () => {
    operation_display.innerHTML = operation_display.innerHTML + ' ' + result_display.innerHTML;
    result_display.innerHTML = operate(n1, n2, operation);
}

numbers.forEach(function(number){
    number.addEventListener('click', () => {
        if(evaluated){
            clearScreen();
        }
        arr.push(event.target.textContent);
        if(firstNum == true){
            n1 = arr.join('');
        } else if(firstNum == false){
            n2 = arr.join('');
        }
        result_display.innerHTML += event.target.innerHTML;
        operated = false;
        console.log('n1 = ' + n1);
        console.log('n2 = ' + n2);
        console.log('firstNum = ' + firstNum);
        console.log(evaluated);
    })
})

operators.forEach(function(op){
    op.addEventListener("click", () => {
        if(event.target.id != 'evaluate'){
            if(operated == true){
                window.alert('Please add a number after the operation <3')
            }else{
                if(firstNum){
                    if(result_display.innerHTML == ''){
                        result_display.innerHTML = '0';
                    }
                    result_display.innerHTML = result_display.innerHTML + ' ' + event.target.innerHTML + ' ';
                    firstNum = !firstNum;
                } else {
                    if(evaluated){
                        console.log('ksjdhfkjsdhf')
                        console.log(evaluated)
                        operation_display.innerHTML = result_display.innerHTML + ' ' + event.target.innerHTML; 
                        result_display.innerHTML = ''; 
                    } else{
                        result_display.innerHTML = '';
                        operation_display.innerHTML = operate(n1, n2, operation) + ' ' + event.target.innerHTML;  
                        n1 = operate(n1, n2, operation);
                    }
                }
            }
            
            arr = [];
            operation = event.target.id;
            operated = true;
            if(evaluated){evaluated = false}
            
        }    
    })
})


clear_btn.addEventListener('click', () => {
    clearScreen();
})

const clearScreen = () => {
    operation_display.innerHTML = '';
    result_display.innerHTML = '';
    n1 = 0;
    n2 = 0;
    firstNum = true;
    evaluated = false;
    arr = [];
}



