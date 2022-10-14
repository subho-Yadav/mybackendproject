
function trim(){
    const str="    Function Up    "
    console.log(str.trim())
}
function changeToLowerCase(){
    const str="FUNCTION UP"
    console.log(str.toLowerCase())
}
function changeToUpperCase(){
    const str="function up"
    console.log(str.toUpperCase())
}

module.exports.trim=trim 
module.exports.changeToLowerCase=changeToLowerCase 
module.exports.changeToUpperCase=changeToUpperCase 
