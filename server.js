const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/",(req, res)=>{
   const sql = "SELECT * FROM STUDENT";
   db.query(sql,(err,data)=> {
    if(err)return res.json("Error");
    return res.json(data);
   })
})


app.post('/create',(req,res)=>{
    const sql ="INSERT INTO STUDENT (`firstname`,`lastname`,`email`) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err)return res.json("Error");
        return res.json(data);
    })
})



app.put('/create',(req,res)=>{
    const sql ="UPDATE STUDENT SET firstname = ? lastname = ? email =? where user_id =?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
    ]
    const user_id = req.params.user_id;
    db.query(sql,[...values,user_id],(err,data)=>{
        if(err)return res.json("Error");
        return res.json(data);
    })
})
app.listen(8081,()=>{

    console.log("listening");
})