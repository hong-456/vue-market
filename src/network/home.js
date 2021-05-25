//这里封装了所有首页数据的请求
import {request} from './request'

// 请求轮播图和推荐的数据
export function getSwiper() {
    return request({
        url:"/swiper"
    })
}

//请求数据，需要传输type和页码page
export function getHomeMultidata(type,page){
    return request({
        url:"/home",
        params:{
            type,
            page
        }
    })
}
