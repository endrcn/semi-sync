var request = require("request");
var fs      = require("fs");

exports.requestLinksFromArray = function(links, limit, callback) {
    var i=0;
    var k=0;
    var results = [];
    var index = 0;
    callFunction();

    function callFunction(){
        k=index+limit;
        console.log(index+" : "+k);
        while(index<links.length && index<k){
            getContent(links[index]);
            index++;
        }
    }


    function getContent(link){
        request(link,function(err,res,body){
            if(err || !body){
                callback(err,results);
            }else{
                results.push(body);
            }
            i++;
            if(i<links.length){
                    //console.log(i+". request received");
                    if(i==k) callFunction();
                }else{
                    callback(null, results);
                }
            });
    }


}

exports.requestLinksFromFile = function(filePath, limit, callback) {
    var i=0;
    var k=0;
    var results = [];
    var links = [];
    var index = 0;

    var fileContent = fs.readFileSync(filePath, "UTF-8");
    links = fileContent.split("\n");
    var t;
    while((t=links.indexOf(""))>=0){
        links.splice(t,1);
    }
    callFunction();
    function callFunction(){
        k=index+limit;
        console.log(index+" : "+k);
        while(index<links.length && index<k){
            getContent(links[index]);
            index++;
        }
    }


    function getContent(link){
        request(link,function(err,res,body){
            if(err || !body){
                callback(err,results);
            }else{
                results.push(body);
            }
            i++;
            if(i<links.length){
                    //console.log(i+". request received");
                    if(i==k) callFunction();
                }else{
                    callback(null, results);
                }
            });
    }


}
