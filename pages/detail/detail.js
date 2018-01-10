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

    numStepper: {
      num: 1, // 购买数量
      minusStatus: 'disabled',  // 使用data数据对象设置样式名   默认1时不能减少了
      min: 1,
      max: 20,
    },

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
   * 预览图片
   */
  previewImg: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
        current: current,
        urls: this.data.imgUrls,
    });
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

  /**
   * 减购买数量
   */
  bindMinus: function() {
    console.log("bindMinus.");
    var num1 = this.data.numStepper.num;
    if (num1 > 1) {
      num1 --;
    }
    var minusStatus1 = num1 <= 1 ? 'disabled' : 'normal';
    this.setData({
      numStepper: {
        num: num1,
        minusStatus: minusStatus1,
      },
    });
    console.log("bindMinus num: " + num1);
  },

  /**
   * 加购买数量
   */
  bindPlus: function () {
    console.log("bindPlus.");
    var num1 = this.data.numStepper.num;
    num1 ++;
    var minusStatus1 = num1 <= 1 ? 'disabled' : 'normal';
    this.setData({
      numStepper: {
        num: num1,
        minusStatus: minusStatus1,
      },
    });
    console.log("bindPlus num: " + num1);
  },

  /**
   * 输入购买数量
   */
  bindManual: function (e) {
    console.log("bindManual.");
    var num1 = e.detail.value;
    if (0 == num1) {
      //num1 = 1;
    }
    var minusStatus1 = num1 <= 1 ? 'disabled' : 'normal';
    this.setData({
      numStepper: {
        num: num1,
        minusStatus: minusStatus1,
      },
    });
    console.log("bindManual num: " + num1);
  },

  /**
   * 加入购物车
   */
  addCart: function() {

  },

  /**
   * 关注
   */
  toFollow: function () {

  },

  /**
   * 立即购买
   */
  immeBuy: function () {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000,
    })
  },

  /**
   * 进入购物车
   */
  toCar: function () {

  },

})