let mo = "+ "
// let reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
let reg = /^(\+\d{4}\s)?\(?\d{6}\)$/
result = mo.match(reg);
console.log(result);