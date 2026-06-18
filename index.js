
function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(num1, num2) {
  if (num1 >= num2) {
  return num1;
} else {
  return num2;
}
;
}

function isPalindrome(str) {
  const normalized = str.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

console.log(calculateTax(100));
console.log(convertToUpperCase("messi"));
console.log(findMaximum(60,61));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Radar"));
console.log(calculateDiscountedPrice(10000, 20));


 // This is required for the test to function properly  
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};




