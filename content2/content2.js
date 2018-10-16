const app = getApp();
// content2/content2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    goods:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
  
  },
  ready:function(){
    let that=this;
    that.setData({
      goods: app.globalData.datas.goods
    });
  }
})
