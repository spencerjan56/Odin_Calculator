const add = function(a,b) {

   const added = (a + b);

   return added
   
};

const subtract = function(a,b) {

    const subtracted = (a - b);

    return subtracted
	
};

const multiply = function(a,b) {

    const multiplied = (a * b);

    return multiplied

};

const divide = function(a,b) {

    const divided = (a / b);

    return divided

};

let firstNum = 5
let operator = "/"
let secondNum = 7

let operate = function(x,operator,y) {
    let result;

        if (operator === "+") {
            result = x + y
        }
        else if (operator === "-"){
            result = x - y
        }
        else if (operator === "*"){
            result = x * y
        }
        else if (operator === "/"){
            result = x / y
        }
        else {
            result = "invalid"
        }
    return result;
}   
let result = operate(firstNum,operator,secondNum)
console.log(result)