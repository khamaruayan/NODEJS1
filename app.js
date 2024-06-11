const express=require('express');
const app=express();

let name='Ayan'
let Password=12345

app.get('/',(req, res)=> {
    res.send("This is a login page");
});//login page

app.use(loginMiddleware)

app.get('/profilePage',(req, res)=> {
    res.send("This is a profile page");
});

app.get('/feedPage',(req, res)=> {
    res.send("This is a feed page");
});

app.listen(8003,()=>{
    console.log("listening to port 8003");
});

function loginMiddleware(req, res, next){
    if(name=='Ayan' && Password==1234567890){
        next()
    }
   else{
    res.send('Cannot Authenticate the user')
   }
}