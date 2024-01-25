let num1 = Number(prompt(`1st Digit?`));
let operator = prompt(`Operator?`);
let num2 = Number(prompt(`2nd Number`));
let answer


function mathStuff(operator, num1, num2){

    if (operator === `+`) {
        answer = num1 + num2
        if (answer === NaN) {
            document.write('Uh oh, check your numbers or operators man')
        } else {
            document.write(answer)
        }
    } else if (operator === `-`) {
        answer = num1 - num2
        if (answer === NaN) {
            document.write('Uh oh, check your numbers or operators man')
        } else {
            document.write(answer)
        }
    } else if (operator === `*`){
        answer = num1 * num2
        if (answer === NaN) {
            document.write('Uh oh, check your numbers or operators man')
        } else {
            document.write(answer)
        }
    } else if (operator === `/`) {
        answer = num1 / num2
        if (answer === NaN) {
            document.write('Uh oh, check your numbers or operators man')
        } else {
            document.write(answer)
        }
    } else {
        document.write('Uh oh, check your numbers or operators man')
        
    }
}


mathStuff(operator, num1, num2);