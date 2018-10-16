// content1/content1.js
let page=require("../behaviorJs/page.js");
import store from '../utils/index.js'
const app = getApp();
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
    goods: [],
    foods: [],
    hideHeader: true,
    hideBottom: true,
    refreshTime: '', // 刷新的时间 
    contentlist: [], // 列表显示的数据源
    allPages: '', // 总页数
    currentPage: 1, // 当前页数  默认是1
    loadMoreData: '加载更多……',
    currentIndex: 0,
    top: 0,
    toView: "",
    thee: [],
    cart: []
  },
  globalData:['count'],
  /**
   * 组件的方法列表
   */
  methods: {
    // 上拉加载更多
    loadMore: function() {
      var self = this;
      // 当前页是最后一页
      if (self.data.currentPage == self.data.allPages) {
        self.setData({
          loadMoreData: '已经到顶'
        })
        return;
      }
      setTimeout(function() {
        console.log('上拉加载更多');
        var tempCurrentPage = self.data.currentPage;
        tempCurrentPage = tempCurrentPage + 1;
        self.setData({
          currentPage: tempCurrentPage,
          hideBottom: false
        })
        // self.getData();
      }, 300);
    },
    // 下拉刷新
    refresh: function(e) {
      var self = this;
      setTimeout(function() {
        console.log('下拉刷新');
        var date = new Date();
        self.setData({
          currentPage: 1,
          refreshTime: date.toLocaleTimeString(),
          hideHeader: false
        })
        // self.getData();
      }, 300);
    },
    currentIndex: function(e) {
      let that = this;
      that.setData({
        currentIndex: e.currentTarget.dataset.index
      });
      that.setData({
        toView: "foods" + that.data.currentIndex
      });
    },
    scroll: function(e) {
      let that = this;
      let scale = e.detail.scrollWidth / 590;
      let scrollTop = e.detail.scrollTop / scale;
      let h = 0,
        index = 0;
      that.data.thee.forEach(function(v, i) {
        h += v;
        if (scrollTop >= h) {
          index = i + 1;
        }
      })
      that.setData({
        currentIndex: index
      })
    },
    tapAddCart: function(e) {
      var goods_index = e.currentTarget.dataset.goods_index;
      var foods_index = e.currentTarget.dataset.foods_index;
      let that = this;
      that.data.cart[goods_index][foods_index]++;
      that.setData({
        cart: that.data.cart
      })
      that.addCount(that.data.cart);
    },

    tapReduceCart: function(e) {
      var goods_index = e.currentTarget.dataset.goods_index;
      var foods_index = e.currentTarget.dataset.foods_index;
      let that = this;
      if (that.data.cart[goods_index][foods_index] > 0) {
        that.data.cart[goods_index][foods_index]--;

      } else {
        that.data.cart[goods_index][foods_index] = 0;
      }
      that.setData({
        cart: that.data.cart
      })
      that.addCount(that.data.cart);
    },
    addCount:function(cart){
      var count=0;
        cart.forEach(function(value,i){
         value.forEach(function(v,i){
           count+=v;
         })
        })
       app.globalData.datas.num=count;
       store.dispatch('count',count)
     
    }
  },
  ready: function() {
    let that = this;
    that.setData({
      goods: app.globalData.datas.goods
    });
    //that.getNode();
    let arr = [],tmp = [];
    this.data.goods.forEach(function(goodList, i) {
      let _h = 26 + goodList.foods.length * (74);
      arr.push(_h);
      let t = [];
      goodList.foods.forEach(function(v, i) {
        t.push(0)
      })
      tmp.push(t);
    });

    that.setData({
      thee: arr,
      cart: tmp
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var date = new Date();
    this.setData({
      refreshTime: date.toLocaleTimeString()
    });


  },
})