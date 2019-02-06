var appRouter = function (app) {

app.get("/", function(req, res) {
    console.log(__dirname);
    res.send("Hello World");
});    
    
 
app.post("/webviewparamsvbcs",function(request,response){

console.log(JSON.stringify(request.body));

    result = 'dummy';
 request.body.parameters.forEach(parameter => {
                if (parameter.key === 'firstname') {
                    result = parameter.value;
                    
                }
 });

//    var result = request.body.parameters.firstname;
   
    
    console.log("the firstname is: "+result);
    
    var vbcsurl = 'https://abcs1-oracletemplates.builder.us.oraclecloud.com/rt/testwebview/1.0/webApps/testwebviewapp/?firstname=' + result;
    
    console.log(vbcsurl)
  const resbody = {
        'webview.url': vbcsurl
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);
    
    
});
    
app.post("/webviewparams",function(request,response){

console.log(JSON.stringify(request.body));


    var fname, lname, callbackurl;
 request.body.parameters.forEach(parameter => {
                if (parameter.key === 'firstname') {
                    fname = parameter.value;
                    
                }
                if (parameter.key === 'lastname') {
                    lname = parameter.value;
                    
                }
                if (parameter.key === 'webview.onDone') {
                    callbackurl = parameter.value;
                    
                }
 });
    
    console.log("fname: "+fname);
    console.log("lname: "+lname);
    console.log("callbackurl: "+callbackurl);

    
    var webviewURL = 'https://rohitdhamija.github.io/systemwebview/docs/confirm.html?fName='+fname+'&lName='+lname+'&callbackURL='+callbackurl;
    
    console.log('webviewURL: '+ webviewURL);
    
  const resbody = {
        'webview.url': webviewURL
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);
    
    
}
        );
}

module.exports = appRouter;