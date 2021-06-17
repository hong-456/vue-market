const fs = require("fs")

fs.readFile("aaa.json",function(err,data){
    const a = {
        data:{
            pop:[],
            new:[],
            ok:[]
        }
    }
    for (let index = 0; index <= 70; index++) {
        const page = Math.floor(index/30) + 1;
        a.data.pop.push({
            page, 
            "key": "p"+(index +1),
            "img": "http://localhost:3000/public/img/shu1.jpg",
            "detail": `这是第${index+1}个流行图 `,
            "price": 68 + index,
            "link": "",
            "favorites": 1 + index
        })
        a.data.new.push({ 
            page,
            "key": "n" + (index+1),
            "img": "http://localhost:3000/public/img/shu2.jpg",
            "detail": `这是第${index+1}个新款图 `,
            "price": 77 + index,
            "link": "",
            "favorites": 66 + index
        })
        a.data.ok.push({ 
            page,
            "key": "k" + (index+1),
            "img": "http://localhost:3000/public/img/shu3.jpg",
            "detail": `这是第${index+1}个精品图 `,
            "prine": 55 + index,
            "link": "",
            "favorites": 11 + index
    })
    }
    fs.writeFileSync("aaa.json",JSON.stringify(a,null,2))
})