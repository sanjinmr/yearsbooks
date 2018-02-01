// components/Dialog/dialog.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  queryMultipleNodes: function () {
    var query = wx.createSelectorQuery().in(this);
    query.select('#the-id').boundingClientRect(function(res) {
      res.top; // 这个组件内#the-id节点的上边界坐标
    }).exec();
  }
})
