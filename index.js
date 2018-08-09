// Speed Limit = 70;
// 5 -> 1
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(120);

// Mosh's code:
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log('License suspended');
  else console.log('Point: ', points);
}

// Herri's code:
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const suspendedPoint = 12;

//   let point = Math.floor((speed - speedLimit) / 5);
//   let isSuspended = point >= suspendedPoint;

//   if (isSuspended) console.log('License suspended');
//   else if (point > 0) console.log('Point: ' + point);
//   else console.log('Ok');
// }
