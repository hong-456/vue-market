import {createStore} from 'vuex'

export default createStore({
  state(){
    return {
      // 购物车数组
      cartList:[
        // {iid:33333,nowPrice:20,desc:"这是测试用的例子，文字描述要长长长长长长长长长长长长",img:"http://192.168.31.6:3000/public/img/43.jpg",count:1,finalPrice:20}
      ],
      // 购物车的商品书否被选中
      // 每次往购物车加东西，增加一个位置，所有值初始为true
      isfinal:[
        // true
      ],
      // 购物车全选是否活跃
      cartAllCheck:true
    }
  },
  mutations:{
    // 如果在购物车里，商品的数量增加
    inCart(state,payload){
      ++payload.count
      payload.finalPrice = payload.nowPrice * payload.count
    },
    // 如果不在购物车里，那么商品加入购物车，并增加一个判断位
    notInCart(state,payload){
      state.cartList.push(payload)
      state.isfinal.push(true)
    },
    // 如果是否结算的按钮被点击，将那个位置的isfinal值取反
    yesIsClick(state,payload){
      state.isfinal[payload] = !state.isfinal[payload]
    },
    // 更改购物车全选状态
    changeAllCheck(state,payload){
      state.cartAllCheck = payload;
      for (let index = 0; index < state.isfinal.length; index++) {
        state.isfinal[index] = payload
      }
    },
    // 点击单选按钮的时候，也要实时改变购物车状态
    oneChange(state,payload){
      state.cartAllCheck = payload;
    },
    // 如果购物车是空的，改变全选为false,如果不是空的，检测是否全部被选中
    cartIsNone(state){
      state.cartAllCheck = false;
    }
  },
  getters:{
    cart(state){
      return state.cartList
    },
    final(state){
      return state.isfinal
    },
    //结算时选中多少件商品
    nowCheck(state){
      const a = state.isfinal.filter(item=>item==true)
      return a.length
    }
  },
  actions:{
    // 接收传过来的商品详细数据，并判断传过来的商品id是否存在
    addToCart({commit,state},goods){
      return new Promise(function(resolve,reject) {
        const obj = state.cartList.find(item=>item.iid == goods.iid);
        if(obj){
          commit('inCart',obj)
        }
        else{
          goods.count = 1;
          goods.finalPrice = goods.nowPrice
          commit('notInCart',goods)
        }
        resolve()
      })
        
    },
    // 下面两个其实可以封装在一起
    //点击全选的时候检测：如果存在false，就全部更改为true，不存在，全部更改为false
    allClick({state,commit}){
      if(state.isfinal.includes(false))
        commit('changeAllCheck',true)
      else
        commit('changeAllCheck',false)
    },
    //点击单个商品的时候检测：是否全部被选中,刚进入购物车的时候，也调用一次
    oneClick({state,commit}){
      if(state.isfinal.includes(false))
        commit('oneChange',false)
      else
        commit('oneChange',true)
    }
    
  },
  
  
})