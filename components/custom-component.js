
Component({
 
  data: {
   
  }, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { 
    // console.log(this.data.index);
  },
  moved: function () {
    console.log("moved")
   },
  detached: function () {
    console.log('detached')
   },
  ready:function(){
    // console.log('ready')
  },
  methods: {
    
  }

})