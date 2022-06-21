// function calculator
function calc() {
    // welcome message
    alert(`Welcome to arthurbazz simple calculator,
           To Calculate follow steps below: 
          1. Enter first number,
          2. Select Operator,
          3. Then Enter second number`);
    // accept first number
    const numberOne = parseFloat(prompt("Enter First Number"));
    // accept operator
    const operator = prompt(`Enter operator to perform the calculation:
      + for addition
      - for subtraction
      * for multiplication
      / for division`);
    // accept second number
    const numberTwo = parseFloat(prompt("Enter Second Number"));
    // calculation
    if (operator === "+") {
      addition = Number(numberOne) + Number(numberTwo);
      result = "Your Answer is: " + addition;
    } else if (operator === "-") {
      subtraction = Number(numberOne) - Number(numberTwo);
      result = "Your Answer is: " + subtraction;
    } else if (operator === "*") {
      multiplication = Number(numberOne) * Number(numberTwo);
      result = "Your Answer is: " + multiplication;
    } else if (operator === "/") {
      division = Number(numberOne) / Number(numberTwo);
      result = "Your Answer is: " + division;
    } else {
      wrongData = `Error! your entry is not either of the 4:(+ , - , * , / )`;
      result = wrongData;
    }
  
    alert(result);
    newCalc();
    // function to calculate again
    function newCalc() {
      let redo = prompt(`Do you want to calculate again? 🤔
      To calculate again: type n for no 
      or y for yes`);
      if (redo.toLocaleLowerCase() === "y") {
        calc();
      } else if (redo.toLocaleLowerCase() === "n") {
        alert("Thank you, you are done calculating 😁!");
      } else {
        newCalc();
      }
    }
  }
  // function call
  calc();
  