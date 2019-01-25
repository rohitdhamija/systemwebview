var appRouter = function (app) {

app.get("/", function(req, res) {
    res.send("Hello World");
});    
    
 
    
app.post("/webviewparams",function(request,response){
console.log(JSON.stringify(request.body));
result='dhamija';
    /*
 request.body.parameters.forEach(parameter => {
                if (parameter.key === 'firstname') {
                    result = parameter.value;
                    
                }
 });
    */
    
    var vbcsurl = 'https://abcs1-oracletemplates.builder.us.oraclecloud.com/rt/testwebview/1.0/webApps/testwebviewapp/?firstname=' + result;
    
    console.log(vbcsurl)
  const resbody = {
        'webview.url': vbcsurl
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);
    
    
}
        );
}

module.exports = appRouter;