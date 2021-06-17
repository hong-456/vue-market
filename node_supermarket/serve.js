const express = require("express")
const cors = require("cors")

const router = require("./router")

const app = express()

// app.engine("html",require("express-art-template"))
app.use("/public/",express.static("./public/"))

//解析post请求
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//解决跨域
app.use(cors({origin:/http:\/\/localhost/ }));
app.use(cors({origin:/http:\/\/192.168.31.6/}))
app.options("*",cors());

app.use(router)

app.listen(3000,function() {
    console.log("端口3000服务器正在运行...");
})
