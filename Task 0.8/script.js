function numberToTime(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + " hour(s)," + minutes + " minute(s)";
}

console.log(numberToTime(400));
console.log(numberToTime(360));
console.log(numberToTime(120));
console.log(numberToTime(220));
