const fs = require("fs");
const express = require("express");

const Market = require("./supermarket");

const router = express.Router();

module.exports = router;

router.get("/", function (req, res) {
  res.end("qqq");
});
router.get("/home", function (req, res) {
  //     const q = JSON.stringify(JSON.parse(data).data.pop,null,2)

  // 获取get传输过来的type，也就是获取需要传输的数据是流行、新款、精选的哪种
  const page = req.query.page;
  const type = req.query.type;
  console.log(`请求的数据是：page:${page},type:${type}`);
  Market.findByTP(type,page, function (err, data) {
    if (err) {
      console.log("数据获取失败");
    } else {
      const q = JSON.stringify(data);
      res.send(q);
    }
  });
});

router.get("/swiper", function (req, res) {
  console.log("请求了swiper数据");
  Market.findAll(function (err, data) {
    if (err) {
      return console.log(err);
    }
    const q = JSON.stringify(data);
    res.send(q);
  });
});

router.get("/detail",function(req,res){
  console.log("请求了详细参数数据");
  Market.findDetail(function(err,data) {
    if(err){
      return res.send("没获取到")
    }
    else{
      const q = JSON.stringify(data[0]);
      res.send(q)
    }
  })
})