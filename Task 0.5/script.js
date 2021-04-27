// Finding the area of a triangle with 3 sides
// Used Heron's formula of 3 side lengths to get the area
function areaOfTriangle(sideOne, sideTwo, sideThree) {
  // Finding the semi-perimeter
  let sp = (sideOne + sideTwo + sideThree) / 2;
  // Calculating the area
  let area = Math.sqrt(
    sp * ((sp - sideOne) * (sp - sideTwo) * (sp - sideThree))
  );
  console.log(area);
}

areaOfTriangle(22, 42, 28);
areaOfTriangle(11, 23, 30);
