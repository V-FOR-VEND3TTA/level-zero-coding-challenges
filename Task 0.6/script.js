// Finding the maximum number between 3 numbers
function findTheMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest`);
  } else {
    console.log(`${num3} is the largest`);
  }
}

findTheMax(22, 11, 33);
