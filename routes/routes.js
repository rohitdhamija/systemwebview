var appRouter = function (app) {

app.get("/", function(req, res) {
    console.log(__dirname);
    res.send("Hello World");
});    
    
 
app.post("/webviewparamsvbcs",function(request,response){
console.log(JSON.stringify(request.body));


    var fname, lname, merchant, amount, date, callbackurl;
 request.body.parameters.forEach(parameter => {
                if (parameter.key === 'firstname') {
                    fname = parameter.value;
                    
                }
                if (parameter.key === 'lastname') {
                    lname = parameter.value;
                    
                }
              if (parameter.key === 'merchant') {
                    merchant = parameter.value;
                    
                }
              if (parameter.key === 'amount') {
                    amount = parameter.value;
                    
                }
              if (parameter.key === 'date') {
                    date = parameter.value;
                    
                }     
                if (parameter.key === 'webview.onDone') {
                    callbackurl = parameter.value;
                    
                }
 });
    
    console.log("fname: "+fname);
    console.log("lname: "+lname);
    console.log("merchant: "+merchant);
    console.log("date: "+date);
    console.log("amount: "+amount);    
    console.log("callbackurl: "+callbackurl);

    
    var webviewURL = 'https://abcs1-oracletemplates.builder.us.oraclecloud.com/rt/testwebview/1.0/webApps/testwebviewapp/?fName='+fname+'&lName='+lname+'&merchant='+merchant+'&date='+date+'&amount='+amount+'&callbackURL='+callbackurl;
    
    console.log('webviewURL: '+ webviewURL);
    
  const resbody = {
        'webview.url': webviewURL
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);    


    
    
});

app.post("/vbcsselfhosted",function(request,response){

console.log(JSON.stringify(request.body));


    
    var vbURL = 'https://systemwebviewwebsite.herokuapp.com/frontpage/index.html';
    
    console.log(vbURL)
  const resbody = {
        'webview.url': vbURL
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);
    
    
});    
app.post("/routefinder",function(request,response){

console.log(JSON.stringify(request.body));


    
    var mapURL = 'https://systemwebviewwebsite.herokuapp.com/mazemapbasicroute.html';
    
    console.log(mapURL)
  const resbody = {
        'webview.url': mapURL
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);
    
    
});    
app.post("/webviewparams",function(request,response){

console.log(JSON.stringify(request.body));


    var fname, lname, merchant, amount, date, callbackurl;
 request.body.parameters.forEach(parameter => {
                if (parameter.key === 'firstname') {
                    fname = parameter.value;
                    
                }
                if (parameter.key === 'lastname') {
                    lname = parameter.value;
                    
                }
              if (parameter.key === 'merchant') {
                    merchant = parameter.value;
                    
                }
              if (parameter.key === 'amount') {
                    amount = parameter.value;
                    
                }
              if (parameter.key === 'date') {
                    date = parameter.value;
                    
                }     
                if (parameter.key === 'webview.onDone') {
                    callbackurl = parameter.value;
                    
                }
 });
    
    console.log("fname: "+fname);
    console.log("lname: "+lname);
    console.log("merchant: "+merchant);
    console.log("date: "+date);
    console.log("amount: "+amount);    
    console.log("callbackurl: "+callbackurl);

    
    var webviewURL = 'https://systemwebviewwebsite.herokuapp.com/confirm.html?fName='+fname+'&lName='+lname+'&merchant='+merchant+'&date='+date+'&amount='+amount+'&callbackURL='+callbackurl;
    
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