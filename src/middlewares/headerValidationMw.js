const headerValidation=function(req,res,next){
    
    //The keys in the headers object are all in lowercase
    if(! req.headers.isfreeappuser){
        res.send("The request is missing a mandatory header")
    }
    else{
        req.isfreeappuser=req.headers.isfreeappuser
        next()
    }
}

module.exports={headerValidation}