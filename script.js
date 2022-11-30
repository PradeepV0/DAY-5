///ODD numbers using anonymous function 
var arr = [1,2,3,4,5,6,7,8]
var result =[];
var odd = function(arr){
     for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}

console.log(odd(arr));


///ODD numbers using IIFE 
( function odd(arr){
    var result =[];
          for(var i=0;i<arr.length;i++){
              if(arr[i]%2!=0){
                 result.push(arr[i]);
              }
          }
        console.log (result);
      }
     )([1,2,3,4,5,6,7,8])

////convert all the strings to title caps in a string array using anonyms function
var a = ["pradeep is good perosn"];
function toTitleCase(a) {
  return a.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

console.log(toTitleCase(a));

///////convert all the strings to title caps in a string array using IIFE function


(function toTitleCase(a) {
  return a.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

console.log(toTitleCase(a));)(["pradeep is good perosn"])