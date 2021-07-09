
let flying = false;
let quaking = false;
let xPos = 0;
let yPos = 0;

module.exports.takeOff = function() {
    flying = true;
    console.log(`Duck is take off: ${flying}`);
}
module.exports.land = function() {
    flying = false;
    console.log(`Duck is flaying: ${flying}`);
}
module.exports.startQuacking = function() {
    quaking = true;
    console.log(`Duck is quaking: ${quaking}`);
}
module.exports.stopQuacking = function() {
    quaking = false;
    console.log(`Duck is quaking: ${quaking}`);
}
module.exports.moveTo = function(xPos,yPos) {
    let x =xPos, y = yPos;
    console.log(`Duck is swimming to ${x},${y}`);
    console.log(`Duck is swimming to ${x},${y} while quacking`);
    console.log(`Duck is flying to ${x},${y}`);
    console.log(`Duck is flying to ${x},${y} while quacking`);
}