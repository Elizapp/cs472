const readl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const firstQ = () => {
    return new Promise((resolve, reject) => {
        readl.question('What is your name?  ', (name) => {
            console.log(`Welcome ${name}`)
            resolve()
        })
    })
}

const second2 = () => {
    return new Promise((resolve, reject) => {
        readl.question('What is your age? ', (age) => {
            if(age < 16){
                console.log(`You’re not allowed to drive in Iowa`)
            }else{
                console.log(`You’re allowed to get a drivers license in Iowa`)
            }
            resolve()
        })
    })
}
const start = async () => {
    await firstQ()
    await second2()
    readl.close()
}
start()