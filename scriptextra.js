// variable tipPercentage captures tip percent amount
let tipPercentage;
let billTotal;
let numOfPeople;

// when tip percentage button selected, this function is called
// it takes in the percentage value assigned and attributes it to 
// the tipPercentage variable used later in the tip calculation.

function tipPercentageSelected(tipValue){
    tipPercentage = tipValue;
    console.log("tipPercentage is a " + typeof tipPercentage);
}

/*
function billAmountEntered(num){
    billTotal = num;
    console.log("bill total entered through function");
}
*/

/*
function numPeopleEntered(pax){
    numOfPeople = pax;
    console.log("number of people entered through function");
}
*/

document.getElementById('tip-amount').readOnly = true;
document.getElementById('tip-per-person').readOnly = true;



// test 1

// Setup our function to run on various events
//var beginCalculating = function (event) {
    
for(i = 0; i < inputEnabled.length; i++) {

    inputEnabled[i].addEventListener('input', function () { // how to make both work ?
    
        console.warn("calculation enabled");

        // assign bill amount to variable billTotal
        billTotal = document.querySelector('#bill-total').value;
      //  billTotal = billTotal.toFixed(2);

        // assign number to variable numOfPeople
        numOfPeople = document.querySelector('#number-of-people').value;

        // test that tipPercentage is available in the function
        console.log("tipPercentage value after selection : " + tipPercentage);

        // calculate tip amount and round out to 2 decimal places
        let tip = (billTotal * tipPercentage).toFixed(2);

        // calculate tip per person
        let tipPerPerson = (tip/numOfPeople).toFixed(2);

        // tipPercentage is a number and number value must be great than 5
        if (billTotal !== 'undefined' && numOfPeople <= 1) {
            
            document.getElementById("tip-amount").value = `$${billTotal}` ;

            // change tip amount input
            //document.getElementById("tip-amount").value = `$${tip}` ;

        };

        if (typeof tipPercentage === 'number') {
        


            // change tip per person amount input
            document.getElementById("tip-per-person").value = `$${tipPerPerson}` ;

        };

    });
};

//};

// Add our event listeners
//window.addEventListener('click', beginCalculating, false);
//window.addEventListener('input', beginCalculating, false);

// test 2
//"mousemove touchmove".split(" ").forEach(function(e){
//    window.addEventListener(e,mouseMoveHandler,false);
//  });

// ['mousemove', 'touchmove'].forEach(function(event) { window.addEventListener(event, handler);});


// test 3
/* Add one or more listeners to an element
** @param {DOMElement} element - DOM element to add listeners to
** @param {string} eventNames - space separated list of event names, e.g. 'click change'
** @param {Function} listener - function to attach for each event as a listener
*/
function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i=0, iLen=events.length; i<iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }
  
 // addListenerMulti(window, 'mousemove touchmove', function(){…});
  


// inputEnabled associated to calculate class in left-side inputs
const inputEnabled = document.getElementsByClassName('startCalculation');



for(i = 0; i < inputEnabled.length; i++) {

    inputEnabled[i].addEventListener('input', function () { // how to make both work ?
    
        console.warn("calculation enabled");

        // assign bill amount to variable billTotal
        billTotal = document.querySelector('#bill-total').value;
      //  billTotal = billTotal.toFixed(2);

        // assign number to variable numOfPeople
        numOfPeople = document.querySelector('#number-of-people').value;

        // test that tipPercentage is available in the function
        console.log("tipPercentage value after selection : " + tipPercentage);

        // calculate tip amount and round out to 2 decimal places
        let tip = (billTotal * tipPercentage).toFixed(2);

        // calculate tip per person
        let tipPerPerson = (tip/numOfPeople).toFixed(2);

        // tipPercentage is a number and number value must be great than 5
        if (billTotal !== 'undefined' && numOfPeople <= 1) {
            
            document.getElementById("tip-amount").value = `$${billTotal}` ;

            // change tip amount input
            //document.getElementById("tip-amount").value = `$${tip}` ;

        };

        if (typeof tipPercentage === 'number') {
        


            // change tip per person amount input
            document.getElementById("tip-per-person").value = `$${tipPerPerson}` ;

        };

    });
};


