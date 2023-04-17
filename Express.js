const express = require('express');
const app = express();
app.use(express.json());

const ExpressError = require('./expresserror')
const MyMath = require('./models');
const e = require('express');

app.get('/mean', (req,res, next) =>{
    const{nums=1}=req.query
    try{
        const mathObject = new MyMath(nums);
        if(mathObject.status === 400){
            throw new ExpressError(`${mathObject.message} is not a number.`, mathObject.status) 
        }
        return res.json(mathObject.mean())
        
    }catch(e){
        return next(e)
    }
})

app.get('/median', (req,res, next) =>{
    const{nums=1}=req.query
    try{
        const mathObject = new MyMath(nums);
        if(mathObject.status === 400){
            throw new ExpressError(`${mathObject.message} is not a number.`, mathObject.status) 
        }
        return res.json(mathObject.median())
        
    }catch(e){
        return next(e)
    }
})

app.get('/most', (req,res, next) =>{
    const{nums=1}=req.query
    try{
        const mathObject = new MyMath(nums);
        if(mathObject.status === 400){
            throw new ExpressError(`${mathObject.message} is not a number.`, mathObject.status) 
        }
        return res.json(mathObject.most())
        
    }catch(e){
        return next(e)
    }
})

app.get('/all', (req,res, next) =>{
    const{nums=1}=req.query
    try{
        const mathObject = new MyMath(nums);
        if(mathObject.status === 400){
            throw new ExpressError(`${mathObject.message} is not a number.`, mathObject.status) 
        }
        const mean = mathObject.mean();
        const median = mathObject.median();
        const most = mathObject.most();

        console.log(mean,median,most)
        return res.json({mean,median,most})
        
    }catch(e){
        return next(e)
    }
})

app.use((req, res, next) => {
    const e = new ExpressError('Page Not Found', 404)
    next(e)
})

app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.msg;
    res.status(status).json(
        {error:{message, status}
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})




