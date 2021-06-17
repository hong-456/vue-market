import {request} from './request'

export function getDetail() {
    return request({
        url:"/detail"
    })
}

export class shopInfoData{
    constructor(shopInfo){
        this.evaluation = shopInfo.evaluation;
        this.logo = shopInfo.logo;
        this.sales = shopInfo.sales;
        this.store = shopInfo.store;
        this.shopName = shopInfo.shopName;
        
    }
}