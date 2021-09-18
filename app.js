const express = require('express');
const path = require('path');
const app = express();
// const user =[];
app.use(express.static(path.join(__dirname,'static')))

//CONFIGURATION OF TEMPLATE ENGINE
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: false}))

//STARTING RENDERING
app.get('/',(req,res)=>{
    res.render('index');
    
})



app.get('/login',(req,res)=>{
    res.render('login')
    console.log(req.url);
});

app.post('/login',(req,res)=>{
    res.send("Login Successfull")
    
})

app.get('/register',(req,res)=>{
    res.render('register');
    console.log(req.url);

})

app.post('/register', async (req,res)=>{
    try{

        user.push({
            id: Date.now().toString(),
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        console.log(user);
    }catch{
        res.redirect('register')

    }
    res.redirect('login')
})

app.listen(80,()=>{
    console.log('done'); 
})
