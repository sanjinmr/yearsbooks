// pages/cart/cart.js
var carts = new Array();
// 购物车价格没有乘以数量
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    isAllSelected: false,
    totalMoney: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    createCartsData(this);
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

  bindMinus: function(e) {
    var index = e.target.dataset.index;
    var quantity = e.target.dataset.quan;
    var min = e.target.dataset.min;
    console.log("bindMinus index: " + index);
    console.log("bindMinus quantity: " + quantity);
    console.log("bindMinus min: " + min);
    if (quantity <= min) {
      wx.showToast({
        title: "最少为：" + min,
      });
      return;
    }
    carts[index].count.quantity = quantity - 1;
    this.setData({
      carts: carts,
    });
    
  },

  bindManual: function(e) {
    var index = e.target.dataset.index;
    var quantity = e.target.dataset.quan;
    var max = e.target.dataset.max;
    var min = e.target.dataset.min;
    var value = e.detail.value;
    console.log("bindMinus index: " + index);
    console.log("bindMinus quantity: " + quantity);
    console.log("bindMinus max: " + max);
    console.log("bindMinus min: " + min);
    console.log("bindMinus value: " + value);
    if (value > max) {
      wx.showToast({
        title: '不能大于'+max,
      })
      carts[index].count.quantity = quantity;
    } else if (value < min) {
      wx.showToast({
        title: '不能小于' + min,
      })
      carts[index].count.quantity = quantity;
    } else {
      carts[index].count.quantity = value;
    }
    this.setData({
      carts: carts,
    });
  },

  bindPlus: function(e) {
    var index = e.target.dataset.index;
    var quantity = e.target.dataset.quan;
    var max = e.target.dataset.max;
    console.log("bindMinus index: " + index);
    console.log("bindMinus quantity: " + quantity);
    console.log("bindMinus max: " + max);
    if (quantity >= max) {
      wx.showToast({
        title: "最多为：" + max,
      });
      return;
    }
    carts[index].count.quantity = quantity + 1;
    this.setData({
      carts: carts,
    });
  },

  itemSelected: function(e) {
    var index = e.target.dataset.index;
    console.log("itemSelected index: " + index);
    carts[index].isSelect = !carts[index].isSelect;
    if (carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + carts[index].price;
    } else {
      this.data.totalMoney = this.data.totalMoney - carts[index].price;
    }
    if (this.data.isAllSelected) {
      this.data.isAllSelected = false;
    }
    this.setData({
      carts: carts,
      totalMoney: this.data.totalMoney,
      isAllSelected: this.data.isAllSelected,
    });
  },

  allSelected: function() {
    this.data.totalMoney = 0;
    for (var i = 0; i < carts.length; i ++) {
      carts[i].isSelect = !this.data.isAllSelected;
      if (!this.data.isAllSelected) {
        this.data.totalMoney = this.data.totalMoney + carts[i].price;
      }
    }

    this.setData({
      carts: carts,
      isAllSelected: !this.data.isAllSelected,
      totalMoney: this.data.totalMoney,
    });
  },

  commitCal: function() {
    if (this.data.totalMoney < 1) {
      wx.showToast({
        title: '清单不能为空',
      })
    } else {
      wx.showToast({
        title: '去结算',
      })
    }

  },
});

function createCartsData(that) {
  carts = [
    {
      pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
      name: '日本资深堂洗颜',
      price: 200,
      isSelect: false,
      // 数据设定
      count: {
        quantity: 2,
        min: 1,
        max: 20,
      },
    },
    {
      pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
      name: '特效润肤露',
      price: 390,
      isSelect: false,
      // 数据设定
      count: {
        quantity: 3,
        min: 1,
        max: 20,
      },
    },
    {
      pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
      name: '倩碧水嫩保湿精华面霜',
      price: 490,
      isSelect: false,
      // 数据设定
      count: {
        quantity: 1,
        min: 1,
        max: 20,
      },
    },
    {
      pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
      name: '兰蔻清莹柔肤爽肤水',
      price: 289,
      isSelect: false,
      // 数据设定
      count: {
        quantity: 10,
        min: 1,
        max: 20,
      },
    },
    {
      pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
      name: "LANCOME兰蔻小黑瓶精华",
      price: 230,
      isSelect: false,
      // 数据设定
      count: {
        quantity: 1,
        min: 1,
        max: 20
      },
    },
  ];
  that.setData({
    carts: carts,
  });
}