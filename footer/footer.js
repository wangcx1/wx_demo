// footer/footer.js
const app = getApp();
import store from '../utils/index'
Component(store.createComponent({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },
  globalData:['count'],
  /**
   * 组件的方法列表
   */
  methods: {

  },
  watch: {
    count(val){
      console.log(val)
    }
  },
  ready: function () {
    
  }
}))