function reverse(hello) {
        return hello.split('').reverse().join('');
     }
    
     let  original= "Hamid , Hmed";
    let  reversed = reverse(original);
    console.log(reversed);
// **********************************
    let string = "hamid hmed";

let result = string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(result);

function count(str) {
    return str.length;
  }
// ********************************************
  
  let sentence = "Hamid hamdane hmed";

  console.log(count(sentence))

//   ***************************************************
numbers = [1,4,8,7,2,3,10]
let max = 0


 for(let i = 0 ; i<numbers.length; i++) {
     if (numbers[i] > max) {
        
       max = numbers[i]
        
     }
}
 console.log(max)
//  *********************************************

 let numbersArray = [22, 33, 10, 1, 4, 78,100,200];
 let somme = 0

 for(let i =0 ; i<numbersArray.length; i++)  {

     somme += numbersArray[i];

 }
 console.log(somme);
//  ******************************
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  

  console.log(factorial(5));
//   ****************************************
