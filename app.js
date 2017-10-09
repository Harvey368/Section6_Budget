// First try out code
var budgetController = ( function () {       //--> IIFE function
     var x=23;
     var add= function (a) {
         return x + a;
     }

     return {    // return a object. and object contain a method publicTest
         publicTest: function(b){      // Not return a function but a object
             console.log(b);
         }
     }

    }
)();