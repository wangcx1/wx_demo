// header/header.js
let behavior=require('../behaviorJs/behavior.js');
Component({
  behaviors:[behavior],
  relations:{
    '../content/content': {
      type: 'child',
      linked: function (target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
        console.log(target);
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0,
  },
  onReady:function(){
   
  },
  /**
   * 组件的方法列表
   */
  methods: {
    selected: function (e) {
      let _ = this;
      _.setData({
        index: e.currentTarget.dataset.id
      });
      var myEventDetail = {
        index: this.data.index
      } // detail对象，提供给事件监听函数
      this.triggerEvent('myevent', myEventDetail) //myevent自定义名称事件，父组件中使用
    }
  }
})
