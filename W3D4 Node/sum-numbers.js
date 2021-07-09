let readl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readl.prompt();
readl.on('line', getNumber);
let s = 0;
function getNumber(inpts) {
    if(isNaN(parseInt(inpts)) == false) {
        s += parseInt(inpts);
    }
    if(inpts == 'stop'){
        console.log('Total: ' + s);
        readl.close();
           // process.exit(0);
    }else{
        console.log("Enter a number, 'stop' to finish.");
    }
}

