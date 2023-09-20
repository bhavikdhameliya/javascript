//Write a JavaScript function that checks whether a number is perfect.

let a = 496;
let sum = 0;
function perfectNumber()
{
  for (let i =1 ; i < a ; i++)
{
    if(a % i === 0)
    {
        sum +=i;
    }
}
if(sum == a )
{
  console.log("number is perfect");    
}
else{
    console.log("number is not perfect");
}
}
perfectNumber();