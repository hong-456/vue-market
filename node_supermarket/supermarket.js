const mongoose = require("mongoose");
const fs = require("fs");

// 使用数据库market来保存商品数据
mongoose.connect("mongodb://localhost/market",{useNewUrlParser:true,useUnifiedTopology:true})


// 创建数据模型

// 第一个集合，存放的是pop流行数据，变量名为product
const marketSchema = new mongoose.Schema({
    page:Number,
    key:String,
    img:String,
    detail:String,
    price:Number,
    link:String,
    favorites:Number
})
const product = mongoose.model("product",marketSchema);

// 第二个集合，存放新款，new数据，集合名为newArrival （新品上市）,变量名newArrival
const newSchema = new mongoose.Schema({
    page:Number,
    key:String,
    img:String,
    detail:String,
    price:Number,
    link:String,
    favorites:Number
})
const newArrival = mongoose.model("newArrival",newSchema);

// 第三个集合，存放精品数据，ok，集合名为boutique（精品店，奢侈品），变量名boutique
const boutiqueSchema = new mongoose.Schema({
    page:Number,
    key:String,
    img:String,
    detail:String,
    price:Number,
    link:String,
    favorites:Number
})
const boutique = mongoose.model("boutique",boutiqueSchema);
//第四个集合swiper，存放轮播图和推荐数据
const swiperSchema = new mongoose.Schema({
    name:String,
    link:{
        type:String,
        default:""
    },
    image:String,
    title:{
        type:String,
        default:""
    }
})
const swiper = mongoose.model("swiper",swiperSchema);

//第五个集合，detail，用来存放商品详细数据
const detailSchema = new mongoose.Schema({
    itemInfo:{
        type:Object
    },
    hot:{
        type:Object
    },
    swiper:{
        type:Object
    },
    // 商家信息
    shopInfo:{
        type:Object
    },
    // 商品详细介绍
    detailImage:{
        type:Object
    },
    // 商品参数数据
    params:{
        type:Object
    }
})
const detail = mongoose.model("detail",detailSchema);

////将流行商品数据pop存到数据库market，存到集合product
// fs.readFile("./public/aaa.json","utf-8",function(err,data) {
//     if(err){
//         return console.log(err); 
//     }
//     //取出pop的数据
//     const q = JSON.parse(data).data.pop
//     // console.log(q);
//     for(i in q){
//         // console.log(q[i]);
//         //使用model模型创建商品，然后加入数据库
//         const sp = new product({
//             page:q[i].page,
//             key:q[i].key,
//             img:q[i].img,
//             detail:q[i].detail,
//             price:q[i].price,
//             link:q[i].link,
//             favorites:q[i].favorites
//         })
//         sp.save().then(()=>console.log("精品" + i + "添加成功")).catch(err=>console.log(err))
//     }
// })

////将新款商品数据new存到数据库market，存到集合newArrival
// fs.readFile("./public/aaa.json","utf-8",function(err,data) {
//     if(err){
//         return console.log(err); 
//     }
//     //取出pop的数据
//     const q = JSON.parse(data).data.new
//     // console.log(q);
//     for(i in q){
//         // console.log(q[i]);
//         //使用model模型创建商品，然后加入数据库
//         const sp = new newArrival({
//             page:q[i].page,
//             key:q[i].key,
//             img:q[i].img,
//             detail:q[i].detail,
//             price:q[i].price,
//             link:q[i].link,
//             favorites:q[i].favorites
//         })
//         sp.save().then(()=>console.log("精品" + i + "添加成功")).catch(err=>console.log(err))
//     }
// })

////将精品商品数据ok存到数据库market，存到集合boutique
// fs.readFile("./public/aaa.json","utf-8",function(err,data) {
//     if(err){
//         return console.log(err); 
//     }
//     //取出pop的数据
//     const q = JSON.parse(data).data.ok
//     // console.log(q);
//     for(i in q){
//         // console.log(q[i]);
//         //使用model模型创建商品，然后加入数据库
//         const sp = new boutique({
//             page:q[i].page,
//             key:q[i].key,
//             img:q[i].img,
//             detail:q[i].detail,
//             price:q[i].price,
//             link:q[i].link,
//             favorites:q[i].favorites
//         })
//         sp.save().then(()=>console.log("精品" + i + "添加成功")).catch(err=>console.log(err))
//     }
// })

//// 添加出一个商品详细信息,添加到集合detail
// const sp = new detail({
//     itemInfo:{
//         title:"商品标题",
//         desc:"这是商品的详细介绍",
//         discountBgColor:"pink",
//         discountDesc:"清仓甩卖",
//         adress:"xx省xx市xxx",
//         time:"72小时内",
//         nowPrice:80,
//         oldPrice:100
//     },
//     hot:{
//         sale:999,
//         promi:{
//             icon:"http://localhost:3000/public/img/dui.icon",
//             data:"退货补运费"
//         },
//     },
//     swiper:{
//         img1:"http://localhost:3000/public/img/43.jpg",
//         img2:"http://localhost:3000/public/img/432.jpg"
//     },
//     shopInfo:{
//         logo:"http://localhost:3000/public/img/2.jpg",
//         shopName:"卖衣服的",
//         sales:9999,
//         store:70,
//         evaluation:{
//             babyDesc:{fraction:4.7,height:false},
//             quality:{fraction:4.9,height:true},
//             attitude:{fraction:4.8,height:true}
//         },

//     },
//     detailImage:{
//         key:"穿着效果",
//         desc:"7天无条件退货、商家让利、尺码充足",
//         list:[
//             "http://localhost:3000/public/img/432.jpg",
//             "http://localhost:3000/public/img/2.jpg",
//             "http://localhost:3000/public/img/43.jpg",
//             "http://localhost:3000/public/img/shu1.jpg",
//             "http://localhost:3000/public/img/shu2.jpg"
//         ],
//         priceDesc:"这商品价格可以随便去别的地方比较，很实惠，很牛批"
//     },
//     params:{
//         key:"产品参数",
//         set:[
//             {key:"图案",value:"宫廷复古图"},
//             {key:"厂名",value:"啊啊啊服装厂"},
//             {key:"颜色",value:"白"},
//             {key:"袖型",value:"常规"},
//             {key:"上衣厚度",value:"适中"},
//             {key:"尺码",value:"XL,L,M,XXL"},
//             {key:"衣长",value:"51-65cm"},
//             {key:"版型",value:"宽松"},
//             {key:"季节",value:"春秋"},
//             {key:"厂址",value:"xxx省xxx市"},
//             {key:"材质",value:"人皮"},
//             {key:"领型",value:"圆领"},
//             {key:"元素",value:"火"},
//             {key:"袖长",value:"短袖"},
//             {key:"风格",value:"dark♂"},
//             {key:"潮流",value:"文艺复兴"},
//         ],
//         rule:{
//             disclaimer:"以上尺寸为实例人工测量，因测量时各客观因素可能会有1~2cm误差",
//             key:"尺码说明",
//             tables:[
//                 ["尺码","M","L","XL","XXL"],
//                 ["衣长","61.5","63","64.5","66"],
//                 ["胸围","98","104","110","116"],
//                 ["袖长","10","15","20","25"]
//             ]
//         }
//     }

// })
// sp.save().then(()=>console.log("添加成功")).catch(err=>console.log(err))

//// 将轮播图和推荐数据存储到集合swiper
// const banners = [ 
//     {name:"banner",image:"http://localhost:3000/public/img/43.jpg",link:"http://baidu.com"},
//     {name:"banner",image:"http://localhost:3000/public/img/432.jpg",link:"http://baidu.com"},
//     {name:"banner",image:"http://localhost:3000/public/img/43.jpg",link:"http://baidu.com"},
//     {name:"banner",image:"http://localhost:3000/public/img/432.jpg",link:"http://baidu.com"}
//     ]
// const recommends=[
//      {name:"recommend",image:"http://localhost:3000/public/img/shu1.jpg",link:"http://baidu.com",title:"推荐1"},
//     {name:"recommend",image:"http://localhost:3000/public/img/shu2.jpg",link:"http://baidu.com",title:"推荐2"},
//     {name:"recommend",image:"http://localhost:3000/public/img/shu3.jpg",link:"http://baidu.com",title:"推荐3"},
//     {name:"recommend",image:"http://localhost:3000/public/img/43.jpg",link:"http://baidu.com",title:"推荐4"}
//   ]
// for(i in banners){
//     // console.log( banners[i]);
//     const ban = new swiper({
//         name:banners[i].name,
//         image:banners[i].image
//     })
//     ban.save().then(()=>console.log("banners" + i + "添加成功"))
// }
// for(i in recommends){
//     const req = new swiper({
//         name:recommends[i].name,
//         image:recommends[i].image,
//         title:recommends[i].title
//     })
//     req.save().then(()=>console.log("recomends"+ i + "添加成功"))
// }


exports.findByTP = function(type,page,callback){
    //导出一个可以根据页数返回数据的方法
    switch (type) {
        case "pop":{
            product.find({page},function(err,data){
                if(err){
                    return callback(err)
                }
                callback(null,data)
            })
            break;
        };
        case "new":{
            newArrival.find({page},function(err,data){
                if(err){
                    return callback(err)
                }
                callback(null,data)
            })
            break;
        };
        case "boutique":{
            boutique.find({page},function(err,data){
                if(err){
                    return callback(err)
                }
                callback(null,data)
            })
            break;
        };
        default:
            break;
    }
}

exports.findAll = function(callback) {
    //导出一个返回轮播图和推荐的方法
    const data = {}
    new Promise(function(resolve,reject) {
        swiper.find({name:"banner"},function(err,item) {
            if(err)
                reject(err)
            else
                resolve(item)
        })
    }).then((item)=>{
        data.banners = item;
        return new Promise(function(resolve,reject) {
            swiper.find({name:"recommend"},function(err,item) {
                if(err)
                    reject(err)
                else
                    resolve(item)
            })
        })
    }).then((item)=>{
        data.recommends = item;
        callback(null,data)
    }).catch((err)=>callback(err))

}

exports.findDetail = function(callback) {
    // 导出一个返回商品详细信息的方法，只有一条信息，给他返回去就行
    detail.find(function(err,data){
        if(err){
            return callback(err)
        }
        callback(null,data)
    })
    
}

//读取商品,测试下能不能获取mongodb中的数据
// market.find({page:2},function(err,data){
//     if(err){
//         return console.log(err);
//     }
//     console.log(JSON.stringify(data));
// })
