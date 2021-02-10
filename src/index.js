module.exports = function reverse (n) {
    let str=String(n);
    return parseInt(str.split('').reverse().join(''));
   }
