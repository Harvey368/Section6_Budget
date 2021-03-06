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

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // Create new ID  --> find the last ID then +1
            // find last ID --> find the last object and get the id
            // exp is array, so find the last one in array [data.allItems[type].length - 1]
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;     // ID=0 for the first time since no object in the array
            }
            
            // Create new item based on the 'exp' or 'inc' type
            if (type==='exp') {
                newItem = new Expense(ID, des, val);
            } else if (type==='inc'){
                newItem = new Income(ID, des, val)
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        
        testing: function () {
            console.log(data);
        }

    }

})();



//---------------------- UI Controller --------------------
var UIController=(function () {   // Since it is IIFE, so we need return a object to UIcontroller

    var DOMStrings={  //Create a interface to store all outside info (UI) which maybe changed frequently
        inputType:  '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    return {      //Return a object, it own a method to get the input data
        getInput: function () {
            return {               // This method should return a object include all input data
                type: document.querySelector(DOMStrings.inputType).value,   //Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },

        addListItem: function (obj, type) {
            var html, newHtml, element;

            //Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml );  //Add the item in HTML file
        },

        clearFields: function () {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
                                              // it will return a list. it use ',' as OR option
            fieldsArr = Array.prototype.slice.call(fields);  // CALL function --> apply array method on LIST
            // console.log(fieldsArr);

            fieldsArr.forEach( function (current, index, array) {
                current.value = "";           // clearing the value
            });

            fieldsArr[0].focus();
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


    var updateBudget = function () {

        // 1.Calculate the budget

        // 2. Return the budget

        // 3. Display the budget on the UI


    };



    var ctrlAddItem=function () {
        var input, newItem;

        //1. Get the filed input date
        input = UICtrl.getInput();

        var ifValid=false;

        if ( (input.description !=="") && ( input.value>0 ) && (!isNaN(input.value)) ){  //verify input is valid
            ifValid=true;
        }

        if (ifValid) {
            //2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add the item to UI
            UICtrl.addListItem(newItem, input.type);

            //4. Clear the fields
            UICtrl.clearFields();

            //5. Calculate the budget
            updateBudget();


            //6. Display the budget on the UI

        }




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
