const moment=require('moment')
function requestLoggerMiddleware(req,res){

    const date=moment().format('YYYY MM DD, h:mm:ss a');
    console.log( date + ',' + req.socket.remoteAddress + ','+ req.url) 
    res.send('Details logged')
}
module.exports.requestLoggerMiddleware=requestLoggerMiddleware