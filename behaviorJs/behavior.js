module.exports=Behavior({
  methods: {
    // 获取父组件实例的快捷方法
    _parent() {
      // 如果根据该路径获取到acestor组件为null，则说明this为ancesor
      var parentNode = this.getRelationNodes('../content/content');
      console.log(parentNode)
      if (parentNode && parentNode.length !== 0) {
        return parentNode[0]
      } else {
        return this
      }
    },
    // 获取兄弟组件实例的快捷方法
    _sibling(name) {
      console.log(name)
      var node = this._parent().getRelationNodes(`../${name}/${name}`)
      if (node && node.length > 0) {
        return node[0]
      }
    },
    
  }
})