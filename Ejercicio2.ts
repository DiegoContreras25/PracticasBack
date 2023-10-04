//Ejercicio2
const password = '123 34 abcd'
const chars = password.split('')
let points = 0


function splitIntoChars(password: string): string[] {
  return password.split('');
}

function haveLetters(password: string[]): boolean {
  return password.some(c => /[a-zA-Z]/.test(c));
}

function haveNumbers(password: string[]): boolean {
  return password.some(c => /[0-9]/.test(c));
}

function threefollowednumbers(password: string[]): boolean {
  const joinedPassword = password.join('');
  const consecutiveNumbers = joinedPassword.match(/\d{3,}/g);
  
  return !!consecutiveNumbers;
}

function specialChars(password: string[]): boolean {
  return password.some(c => /[!@#$%^&*(),.?":{}|<>]/.test(c));
}



if(chars.length>20)points = points+2
if(chars.length<10)points = points-1
if(haveNumbers(chars)&&haveLetters(chars))points = points +1
if(threefollowednumbers(chars))points = points-1
if(specialChars(chars))points = points+1

console.log('Password:', password);
console.log('Array of Chars:', chars);
console.log('Contains letters:', haveLetters(chars));
console.log('Contains numbers:', haveNumbers(chars));
console.log('3 followed numbers:', threefollowednumbers(chars));
console.log('Special character:', specialChars(chars));
console.log("You have",points, "points")
