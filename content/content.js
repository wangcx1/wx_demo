// content/content.js
let behavior=require('../behaviorJs/behavior.js');
const app=getApp()
Component({
  behaviors:[behavior],
  relations:{
    '../header/header': {
      type: 'parent',
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
    index: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGetCode:function(e){
      console.log(e)
    }
  },
  ready:function(){
    
  }
})
