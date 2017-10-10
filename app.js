// ------------------- Budget Controller -------------------
var budgetController = ( function () {       //--> IIFE function


})();



//---------------------- UI Controller --------------------
var UIController=(function () {
    
})();



//----------------------Global APP controller ----------------
var controller = (function (budgetCtrl, UICtrl) { //Bridge of 2 controller

    document.querySelector('.add_btn').addEventListener('click',function () {
        //1. Get the filed input date

        //2. Add the item to the budget controller

        //3. Add the item to UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    })

    document.addEventListener('keypress',function(event) { //check every key press event
        console.log(event);                  // Browser will pass object (keypress) to variable
    })

})(budgetController, UIController);

//------------------------------------------------------------
