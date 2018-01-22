// pages/mine/mine.js
var ctx;
Page({

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
    this.videoContext = wx.createVideoContext('myVideo')
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

  test: function() {
    testSaveFile(this);
    testGetSavedFileList(this);
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