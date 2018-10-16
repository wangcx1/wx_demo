module.exports = Behavior({
 data:{
   num:0
 },
  methods: {
    getNode:function(){
      var query = wx.createSelectorQuery()
      query.select('#foods0').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        console.log(res)
        // res[0].top       // #the-id节点的上边界坐标
        // res[1].scrollTop // 显示区域的竖直滚动位置
      })

    }
  }
})
