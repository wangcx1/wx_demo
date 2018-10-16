// head/head.js
const app=getApp();
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
    seller:[],
    supports:[],
    condition:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail:function(){
     let that=this;
     that.setData({
       condition:false
     })
    },
    close:function(){
      let that=this;
      that.setData({
        condition:true
      })
    }
  },
  ready:function(){
    let that=this;
    that.setData({
      seller:app.globalData.datas.seller
    });
    that.setData({
      supports: this.data.seller.supports
    })
  }
})
