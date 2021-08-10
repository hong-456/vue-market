import axios from 'axios'
export function request(config){
    const instance = axios.create({
        // baseURL请使用本机本地地址
        // 测试一下
        // baseURL:"http://localhost:3000",
        baseURL:"http://192.168.31.6:3000",
        timeout:5000
    })

    instance.interceptors.request.use(config =>{
        return config
    },err=>{
        // console.log(err);
    })

    instance.interceptors.response.use(res=>{
        return res.data
    },err =>{
        console.log(err);
    })

    return instance(config)
        
}