
// SpeedLimit = 70
// For every 5km above speedlimit, give 1 point
// More than 12 points, license suspended



function checkSpeed(speed) {
    const speedLimit = 70
    const pointGrade = Math.floor ((speed - speedLimit) / 5)

    if (speed <= speedLimit || pointGrade < 1)
    return "OK"
    else if (speed > speedLimit && pointGrade >= 1)
    return 'Points: ' + pointGrade
    else return 'license Suspended'
}

const speedCheck = checkSpeed(110);
console.log (speedCheck);

