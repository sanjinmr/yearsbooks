 // pages/home/home.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab:  0,

    // banner
    imgUrls: [
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    // navitems
    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: "bill",
        imageUrl: "../../images/navItems/home_icon_brand.png",
      },
      {
        typeId: 3,
        name: '类目',
        url: "bill",
        imageUrl: "../../images/navItems/home_icon_sort.png",
      },
      {
        typeId: 2,
        name: '特惠专场',
        url: "bill",
        imageUrl: "../../images/navItems/home_icon_gift.png",
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: "bill",
        imageUrl: "../../images/navItems/home_icon_friends.png",
      },
    ],

    newgoods_head_url: "http://mz.djmall.xmisp.cn/files/banner/20161202/148066062976.jpg",

    goodsItems: [
      {
        goodId: 0,
        name: '兰蔻小黑瓶',
        url: 'bill',
        imageUrl: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620.jpg",
        newPrice: "￥200.00",
        oldPrice: "￥300.00",
      },

      {
        goodId: 1,
        name: '兰蔻清莹柔肤爽肤水',
        url: 'bill',
        imageUrl: "http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg",
        newPrice: "￥120.00",
        oldPrice: "￥300.00",
      },

      {
        goodId: 2,
        name: '倩碧水嫩保湿精华面霜',
        url: 'bill',
        imageUrl: "http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg",
        newPrice: "￥320.00",
        oldPrice: "￥400.00",
      },

      {
        goodId: 3,
        name: '特效润肤露',
        url: 'bill',
        imageUrl: "http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg",
        newPrice: "￥30.00",
        oldPrice: "￥80.00",
      },

      {
        goodId: 4,
        name: '倩碧焕妍活力精华露',
        url: 'bill',
        imageUrl: "http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg",
        newPrice: "￥30.00",
        oldPrice: "￥80.00",
      },

      {
        goodId: 5,
        name: '日本资生堂洗颜',
        url: 'bill',
        imageUrl: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        newPrice: "￥30.00",
        oldPrice: "￥80.00",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.debug("onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.debug("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.debug("onShow");
    // 创建背景音乐播放器。当离开小程序后会在会话列表置顶显示音乐播放器
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '汪峰'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.debug("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.debug("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.debug("onPullDownRefresh");
    wx.showNavigationBarLoading();//在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.debug("onReachBottom");
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true,
        recommends: [
          {
            goodId: 7,
            name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
            url: 'bill',
            imageUrl: 'http://mz.djmall.xmisp.cn/files/product/20161213/148162245074.jpg',
            newPrice: "￥36.60",
            oldPrice: "￥40.00",
          },
          {
            goodId: 10,
            name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
            url: 'bill',
            imageUrl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg',
            newPrice: "￥30.00",
            oldPrice: "￥80.00",
          }, {
            goodId: 11,
            name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
            url: 'bill',
            imageUrl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
            newPrice: "￥30.00",
            oldPrice: "￥80.00",
          },
          {
            goodId: 12,
            name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
            url: 'bill',
            imageUrl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
            newPrice: "￥239.00",
            oldPrice: "￥320.00",
          },
          {
            goodId: 13,
            name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
            url: 'bill',
            imageUrl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058014894.jpg',
            newPrice: "￥130.00",
            oldPrice: "￥180.00",
          },
        ],
      })
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.debug("onShareAppMessage");
  },

  navbarTap: function(e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    });
  },

  
})