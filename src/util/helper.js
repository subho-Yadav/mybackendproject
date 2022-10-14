const today=new Date()

function printDate(){
    return today.getDate() 
}

function printMonth(){
    return today.getMonth()
}

function getBatchInfo(){
    return "Lithium"
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo

