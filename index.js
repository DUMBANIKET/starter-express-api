const express = require('express')
app.all("/",(req,res)=>{res.send("it works")})


app.listen(process.env.PORT || 3000)
