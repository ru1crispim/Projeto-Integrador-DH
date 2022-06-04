const fs = require("fs");
function logDB(req,res, next){
    fs.appendFileSync('log.txt','Foi criado um registro pela url: '+ req.url)
    
    next();

}

module.exports = logDB;