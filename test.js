//есть марсоход ось - х, ось -у. Начальное:  1,2 , N.
//задача: Получить его координты и ориентацию.
//F - вперёд, B - назад, R - направо (на месте), L - налево (на месте);

const arrData = ["F", "R", "F", "L"];
//["F", "R", "F", "F"]
//["F", "R", "F", "L"]

function testCoordinat(arrData) {
  const arrDirections = ["N", "E", "S", "W"];
  let curentIdx = 0;
  const objRes = {
    x: 1,
    y: 2,
    o: arrDirections[curentIdx]
  };

  for (let i = 0; i < arrData.length; i++) {
    if (arrData[i] === "B" && objRes.o === "W") {
      objRes.x -= 1;
    } else if (arrData[i] === "F" && objRes.o === "E") {
      objRes.x += 1;
    } else if (arrData[i] === "F" && objRes.o === "N") {
      objRes.y += 1;
    } else if (arrData[i] === "B" && objRes.o === "S") {
      objRes.y -= 1;
    } else if (arrData[i] === "R") {
      objRes.o =
        arrDirections[curentIdx === 3 ? (curentIdx = 0) : (curentIdx += 1)];
    } else if (arrData[i] === "L") {
      objRes.o =
        arrDirections[
          curentIdx === -1
            ? (curentIdx = arrDirections.length - 1)
            : (curentIdx -= 1)
        ];
    }
  }

  return console.log(objRes);
}

testCoordinat(arrData);
