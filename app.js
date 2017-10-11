// ------------------- Budget Controller -------------------
var budgetController = ( function () {       //--> IIFE function

    var Expense = function (id, description, value) {    // Object constructor for expense
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id,description, value) {      // Object constructor for Income
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data={         // New data structure
        allItems: {
            exp:[],
            inc:[]
        },
        totals: {
            exp:0,
            inc:0
        }
    }

})();



//---------------------- UI Controller --------------------
var UIController=(function () {   // Since it is IIFE, so we need return a object to UIcontroller

    var DOMStrings={  //Create a interface to store all outside info (UI) which maybe changed frequently
        inputType:  '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {      //Return a object, it own a method to get the input data
        getInput: function () {
            return {               // This method should return a object include all input data
                type: document.querySelector(DOMStrings.inputType).value,   //Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMstrings: function () {  //This method allow other module can share this info outside of it
            return DOMStrings;
        }
    };

})();



//----------------------Global APP controller ----------------
var controller = (function (budgetCtrl, UICtrl) { //Bridge of 2 controller

    var setupEventListeners=function () {  //Put all event listener in one method

        var DOM = UICtrl.getDOMstrings();    //get the DOM variable from UIcontroller and share it
                           // DOM only be used when add event listener, so move it into this method

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress',function(event) { //check every key press event
            if ( (event.keyCode===13)||(event.which===13) ){ //some browser use keycode or which
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem=function () {

        //1. Get the filed input date
        var input= UICtrl.getInput();
        console.log(input);

        //2. Add the item to the budget controller

        //3. Add the item to UI

        //4. Calculate the budget

        //5. Display the budget on the UI

    };


    return{
        init: function () {
            console.log('started!');
            setupEventListeners();
        }

    }

})(budgetController, UIController);

//------------------------------------------------------------

controller.init();

//------------------------------------------------------------
