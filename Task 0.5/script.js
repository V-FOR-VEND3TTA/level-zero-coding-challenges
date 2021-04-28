function areaOfTriangle(sideOne, sideTwo, sideThree) {
  let sp = (sideOne + sideTwo + sideThree) / 2;
  let area = Math.sqrt(
    sp * ((sp - sideOne) * (sp - sideTwo) * (sp - sideThree))
  );
  console.log(area);
}

areaOfTriangle(22, 42, 28);
areaOfTriangle(11, 23, 30);
