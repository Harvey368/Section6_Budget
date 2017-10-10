// ------------------- Budget Controller -------------------
var budgetController = ( function () {       //--> IIFE function


})();



//---------------------- UI Controller --------------------
var UIController=(function () {
    
})();



//----------------------Global APP controller ----------------
var controller = (function (budgetCtrl, UICtrl) { //Bridge of 2 controller

    var ctrlAddItem=function () {
        //1. Get the filed input date

        //2. Add the item to the budget controller

        //3. Add the item to UI

        //4. Calculate the budget

        //5. Display the budget on the UI
        console.log('it works!')
    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress',function(event) { //check every key press event
        if ( (event.keyCode===13)||(event.which===13) ){ //some browser use keycode or which
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

//------------------------------------------------------------
