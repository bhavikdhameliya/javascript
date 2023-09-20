//Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

let str = function up(sr)
{
  let arr2 = sr.split(' ');
  let arr1 = [];

  for(a = 0;a < arr2.length;a++)
  {
    arr1.push(arr2[a].charAt(0).toUpperCase()+arr2[a].slice(1));
  }
  return arr1.join(' ');
}
console.log(str('the quick brown fox'));