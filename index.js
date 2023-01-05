const express = require('express');
const cors = require("cors");
const app = express()

app.use(cors());

const port = process.env.PORT||3000;


const apiData = require("./skill.json");

app.get('/', (req, res) => {
        res.send('Hello World!')
})

app.get("/service",(req,res)=>{
    res.send(apiData);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))