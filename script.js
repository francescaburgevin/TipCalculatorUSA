class Calculator {

    // clear all fields, disable reset button
    clear (){
        tipAmount = "$32320.00";
        this.tipPerPerson = "$0.00";
        this.billAmount = "0";
        this.numOfPeople = "0";
        this.tipPercentage = undefined; 
        document.querySelector(".resetME").disabled = false;
    }

    // recuperate bill amount input
    inputBillAmount(amount){
        if (amount === "") return;
        billAmount = amount;
        this.compute();
    }

    // recuperate number of people input
    inputPeople(num){
        if (num === "") return;
        numOfPeople = num;
        this.compute();
    }

    // recuperate % selected
    choosePercentage(percentage){
        if(percentage === '') return;
        this.tipPercentage = percentage;
        this.compute();
    }

    // compute the tip 
    compute (){  

        // enables reset button
        document.querySelector(".resetME").disabled = false;

        // string to number
        const billAmountNumber = parseFloat(billAmount);
        const numOfPeopleNumber = parseFloat(numOfPeople);
        const tipPercentageNumber = parseFloat(this.tipPercentage)*0.01;
        
        // calculate tip amount total
        this.tipAmount = (billAmountNumber * tipPercentageNumber).toFixed(2);
        
        // calculate tip amount per person
        this.tipPerPerson = (this.tipAmount/numOfPeopleNumber).toFixed(2);
        
        // update the tip amount and tip per person input fields
        this.updateDisplays();
    }
    
    // update the tip amount and tip per person input fields
    // both amounts must be defined, or remain default value
    updateDisplays (){
        if (isNaN(this.tipAmount) || isNaN(this.tipPerPerson)) return;
        document.getElementById("tip-amount").value = `$${this.tipAmount}`;
        document.getElementById("tip-per-person").value = `$${this.tipPerPerson}`;
    }
}

// bill amount variable declared
let billAmount = document.querySelector('.bill-amount');

// number of people variable declared
let numOfPeople = document.querySelector('.number-of-people');

// tip amount variable declared
let tipAmount;

// tip per person variable declared
let tipPerPerson;

// block input in tip amount and tip per person fields
document.getElementById('tip-amount').readOnly=true;
document.getElementById('tip-per-person').readOnly=true;

// inputNumber variable containing array of input-number class
const inputNumber = document.querySelectorAll('.input-number')

// tipPercentage variable containing array of percent class
const tipPercentage = document.querySelectorAll('.percent');

// tipCalculator variable that calls the Calculator function
const tipCalculator = new Calculator ();

// listens to the tip % buttons, recuperates the clicked value
// tells calculator to start computing
tipPercentage.forEach(element => {
    element.addEventListener("click", () => {
        tipCalculator.choosePercentage(element.value);
        tipCalculator.compute();
    })
});

// when reset button clicked, return to default values and disable reset
document.querySelector('.resetME').addEventListener("click", () => {
    tipCalculator.clear();
});
    