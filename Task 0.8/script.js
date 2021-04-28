function numberToTime(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  if (if hours === 60 && minutes === 1) {
    return hours + " hour," + minutes + " minutes";
  } else {
  return hours + " hours," + minutes + " minutes";
  }
}

console.log(numberToTime(400));
console.log(numberToTime(360));
console.log(numberToTime(120));
console.log(numberToTime(220));
