// pages/mine/mine.js
var ctx;
Page({
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  videoContextDanmu: null,

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      headImg: '../../images/jnwh.jpg',
      nickName: '三金哥哥',
    },
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../images/waiting_pay.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '../../images/waiting_fahuo.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '../../images/waiting_shouhuo.png',
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '../../images/waiting_pjia.png',
      },
    ],
    chooseVideoShow: false,
    chooseVideoUrl: '',
    showCreateVideoContext: false,
    createCameraContext: false,
    inputValueDanmu: '', // 弹幕发生输入的值
    srcTakePhoto: '', // 拍照后生成的位置
    animationData: {},
    myCanvas1X: 0,
    myCanvas1Y: 0,
    myCanvas1Hideen:  true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#f0145a',
    })

    testFillRect(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    });
    this.animation = animation;
    animation.scale(2, 2).rotate(45).step();
    this.setData({
      animationData: animation.export(),
    });
    setTimeout(function() {
      animation.translate(30).step();
      this.setData({
        animationData: animation.export(),
      });
    }.bind(this), 1500);
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

  toOrder: function() {
    wx.navigateTo({
      url: '../order/order',
    })
  },

  /**
   * 打开背景音乐播放器
   */
  backAudio: function () {
    // 创建背景音乐播放器。当离开小程序后会在会话列表置顶显示音乐播放器
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '汪峰'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
  },

  /**
   * 选择视频文件并播放
   */
  chooseVideo: function() {
    console.log("chooseVideo: " + this.data.chooseVideoShow);
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: 'false',
      maxDuration: 60,
      camera: 'back',
      success: function(res) {
        console.log("chooseVideo1: " + res.tempFilePath);
        that.setData({
          chooseVideoShow: !that.data.chooseVideoShow,
          chooseVideoUrl: res.tempFilePath,
        });
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  createVideoContext: function() {
    console.log("createVideoContext: " + this.data.showCreateVideoContext);
    this.videoContextDanmu = wx.createVideoContext('myVideoDanmu', this)
    this.setData({
      showCreateVideoContext: !this.data.showCreateVideoContext,
    });
  },

  /**
   *  createVideoContext：获取输入的弹幕内容
   */
  bindInputBlur: function(e) {
    this.data.inputValueDanmu = e.detail.value;
  },

  /**
   * createVideoContext：发送弹幕
   */
  bindSendDanmu: function() {
    this.videoContextDanmu.sendDanmu({
      text: this.data.inputValueDanmu,
      color: getRandomColor()
    });
  },

  createCameraContext: function() {
    this.setData({
      createCameraContext: !this.data.createCameraContext,
    });
    if (!this.data.createCameraContext) {
      console.log("createCameraContext.!false");
      stopCameraRecord(this);
    }
  },

  takePhoto:function() {
    if (null == ctx) {
      ctx = wx.createCameraContext(this);
    }
   
    let that = this;
    ctx.takePhoto({
      quality: 'high',
      success: function(res) {
        that.setData({
          srcTakePhoto: res.tempImagePath,
        });
      }
    });
  },

  statechangeLivePlayer: function (e) {
    console.log('statechangeLivePlayer code:', e.detail.code)
  },

  errorLivePlayer:function(e) {
    console.log('errorLivePlayer code', e.detail.code)
  },

  statechangeLivePush: function(e) {
    console.log('statechangeLivePush code', e.detail.code)
  },

  rotateAndScale: function() {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step();
    this.setData({
      animationData: this.animation.export(),
    });
  },

  rotateThenScale: function() {
    // 先旋转后放大
    this.animation.rotate(45).step();
    this.animation.scale(2, 2).step();
    this.setData({
      animationData: this.animation.export(),
    });
  },

  rotateAndScaleThenTranslate: function() {
    //先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step();
    this.animation.translate(100, 100).step({
      duration: 1000,
    });
    this.setData({
      animationData: this.animation.export(),
    });
  },

  // 返回一个SelectorQuery对象实例。
  // 可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
  queryMultipleNodes: function() {
    var query = wx.createSelectorQuery();
    query.select('#feature_lay').bindingClientRect(); // 选择#feature_lay节点，查询边界信息
    query.selectViewport().scrollOffset(); // 选择可视区域。查看滚动位置
    query.exec(function(res) {
      res(0).top; // #the-id节点的上边界坐标
      res(1).scrollTop; // 显示区域的竖直滚动位置
    });
  },

  getRect: function() {
    var query = wx.createSelectorQuery();
    query.select('#the-id').boundingClientRect(function(rect) {
      rect.id; // 节点的id
      rect.dataset; // 节点的dataset
      rect.left; // 节点的左边界坐标
      rect.right; // 节点的右边界坐标
      rect.top; // 节点的上边界坐标
      rect.bottom; // 节点的下边界坐标
      rect.width; // 节点的宽度
      rect.height; // 节点的高度
    }).exec();
  },

  getAllRect: function() {
    var query = wx.createSelectorQuery();
    query.selectAll('.a-class').boundingClientRect(function(rects) {
      rects.forEach(function(rect) {
        rect.id;
        rect.dataset;
        rect.left;
        rect.right;
        rect.top;
        rect.bottom;
        rect.width;
        rect.height;
      });
    }).exec();;
  },

  getScrollOffset: function() {
    var query = wx.createSelectorQuery();
    query.selectViewport().scrollOffset(function(res) {
      res.id;
      res.dataset;
      res.scrollLeft;
      res.scrollTop;
    }).exec();
  },

  getFields : function() {
    var query =  wx.createSelectorQuery();
    query.select('the-id').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY']
    }, function(res) {
      res.dataset;
      res.width;
      res.heihgt;
      res.scrollLeft;
      res.scrollTop;
      res.scrollX;
      res.scrollY;
    }).exec();
  },

  myCanvas1Start: function(e) {
    this.setData({
      myCanvas1Hideen: false,
      myCanvas1X: e.touches[0].x,
      myCanvas1Y: e.touches[0].y
    });
  },

  myCanvas1Move: function(e) {
    this.setData({
      myCanvas1X: e.touches[0].x,
      myCanvas1Y: e.touches[0].y
    });
  },

  myCanvas1End: function(e) {
    this.setData({
      myCanvas1Hideen: true,
    });
  },

  test: function() {
    //testSaveFile(this);
    //testGetSavedFileList(this);
    //testDownloadFile(this);
    //testShowActionSheet(this);
    //testTopBarText(this);
    //testNavigationBarTitle(this);
    //testNavigationBarColor(this);
    //testShowNavigationBarLoading(this);
    //testTabBarBadge(this);
    //testTabBarRedDot(this);
    //testTabBarStyle(this);
    //testShowTabBar(this);
    testPageScrollTo(this);
  },

  
})

/**
 * 得到随机颜色值
 */
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

function stopCameraRecord(that) {
  if (null == ctx) {
    ctx = wx.createCameraContext(that);
  }
  console.log("stopCameraRecord");
  ctx.stopRecord({
    success: function() {
      console.log("stopCameraRecord.success");
    },
    fail: function () {
      console.log("stopCameraRecord.fail");
    },
    complete: function () {
      console.log("stopCameraRecord.complete");
    },
  });
}

function testSaveFile(that) {
  wx.chooseImage({
    success: function(res) {
      var tempFilePaths = res.tempFilePaths;
      wx.saveFile({
        tempFilePath: tempFilePaths[0],
        success: function(res) {
          var saveFilePath = res.savedFilePath;
          console.log("saveFilePath: " + saveFilePath);
        },
      })
    },
  })
}

function testGetSavedFileList(that) {
  console.log("testGetSavedFileList");
  wx.getSavedFileList({
    success: function (res) {
      console.log(res.fileList)
    }
  })
}

function testDownloadFile(that) {
  wx.downloadFile({
    url: 'http://qianjinxyz.oss-cn-beijing.aliyuncs.com/test.txt?Expires=1516680537&OSSAccessKeyId=TMP.AQFWr8bBv8iqAi8K49HiZjsMTYhyEjx5m06Gkl8EMYPJox2bRUHlzvelCxiDAAAwLAIUTjBk22QDg4WyzbcZXva7IUd_lXsCFHs-mqJKxEPlYTyubQ4kQQQSxSr6&Signature=VXl%2FfCKD3nGQ%2BIsc%2BiLb3xO0p2E%3D',
    success: function (res) {
      var filePath = res.tempFilePath
      wx.openDocument({
        filePath: filePath,
        success: function (res) {
          console.log('打开文档成功')
        }
      })
    }
  })
}

function testShowActionSheet(that) {
  wx.showActionSheet({
    itemList: ['A', 'B', 'C'],
    success: function (res) {
      console.log(res.tapIndex)
    },
    fail: function (res) {
      console.log(res.errMsg)
    }
  })
}

function testTopBarText(that) {
  wx.setTopBarText({
    text: 'hello, world!'
  })
}

function testNavigationBarTitle(that) {
  wx.setNavigationBarTitle({
    title: 'testNBarTitle',
  })
}

function testShowNavigationBarLoading(that) {
  wx.showNavigationBarLoading();
  setTimeout(function() {
    wx.hideNavigationBarLoading();
  }, 2000);
}

function testNavigationBarColor(that) {
  wx.setNavigationBarColor({
    frontColor: '#000000',
    backgroundColor: '#00f',
  })
}

function testTabBarBadge(that) {
  wx.setTabBarBadge({
    index: 2,
    text: '5'
  })
  setTimeout(function() {
    wx.removeTabBarBadge({
      index: 2,
    });
  }, 1500);
}

function testTabBarRedDot(that) {
  wx.showTabBarRedDot({
    index: 2,
  });
  setTimeout(function() {
    wx.hideTabBarRedDot({
      index:2,
    });
  }, 1500);
}

function testTabBarStyle(that) {
  wx.setTabBarStyle({
    color: '#FF0000',
    selectedColor: '#00FF00',
    backgroundColor: '#0000FF',
    borderStyle: 'white'
  });
}

function testShowTabBar(that) {
  wx.hideTabBar({
    aniamtion: true,
  });
}

function testPageScrollTo(that) {
  wx.pageScrollTo({
    scrollTop: 0,
    duration: 300
  })
}

function testFillRect(that) {
  const ctx = wx.createCanvasContext('myCanvas');
  ctx.setFillStyle('green');
  ctx.fillRect(10, 10, 150, 75);
  ctx.draw();
}
