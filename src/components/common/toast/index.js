// 这个js文件用来制作一个插件
// 把旁边的Toast文件制作成插件
import Toast from './Toast'
import {createApp} from 'vue'
const obj = {}

obj.install = function(Vue){
  // 没了Vue.extend方法，我们需要引入createApp为Toast创建新的组件实例
  const toast = createApp(Toast)
  // 由于toast是通过createApp成为了vue实例，因此在挂载前无法获取$el
  // 所以挂载的时候，将挂载后的实例赋值给一个变量，通过这个变量来获取$el
  const mytoast = toast.mount(document.createElement('div'))
  // 获取的$el，也就是Toast的template被加入到body中
  document.body.appendChild(mytoast.$el)
  // 最后将挂载后的Toast加入到vue的原型中
  Vue.config.globalProperties.$toast = mytoast
  // 注意，添加的Toast必须是被挂载后的
  // 如果加入的是Toast没有被挂载，那么它会被作为一个对象传入vue原型
  // 如果你要调用Toast的methods，使用的就是this.$toast.methods.???
  // 而不是this.$toast.???
  // 获取data数据也是如此
  // 这与我们追求的插件易用、代码简洁的原则不符
}

export default obj