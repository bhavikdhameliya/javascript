//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string

let word = function longest(str)
{
    let arr = str.match(/\w[a-z]{3}/);
    let result = arr[0];
    for(let i =1 ; i < arr.lenght;i++)
    {
        if(result.lenght<=arr[i].lenght)
        result = arr [i];
    }
    return result;
}
console.log(word('hi, im fine and you'));