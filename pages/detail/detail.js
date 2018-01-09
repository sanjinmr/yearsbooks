// pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔，3s
    duration: 1000, // 滑动动画的时长1s
    showDialog: false,
    hasFollow: false,

    // banner
    imgUrls: [
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057922659_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057923813_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057924965_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057925958_middle.jpg"
    ],

    // 商品详情（图）
    detailImg: [
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_1.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_2.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_3.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_4.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_5.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_6.jpg",
    ],

    follow_img:"../../images/bottomNav/follow_normal.png",
    follow_selected_img: "../../images/bottomNav/follow_selected.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 选择购买商品数量
   */
  num_choice: function() {

  },

  /**
   * 切换选择数量对话框的显示
   */
  toggleDialog: function() {
    this.setData({
      showDialog: !this.data.showDialog,
    });
  },
})