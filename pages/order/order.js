// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: {
      list: [
        {
          id: 0,
          title: '全部',
        },
        {
          id: 1,
          title: '待付款',
        },
        {
          id: 2,
          title: '待发货',
        },
        {
          id: 3,
          title: '待收货',
        },
        {
          id: 4,
          title: '待评价',
        },
      ],
      selectedId: 0,
      scroll: false,
    },
    contentData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#f0145a',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  navbarTap: function(e) {
    var index = e.target.dataset.index;
    console.log("navbarTap index: " + index);
    this.data.navbar.selectedId = index;
    this.setData({
      navbar: this.data.navbar,
    });
  },
})