// pages/detail/detail.js
Page({
  data:{
    loadingHidden:false
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    //detaildata
    wx.request({
      url: 'http://mobile.ximalaya.com/mobile/v1/album?albumId='+ options.id +'&device=iPhone&pageSize=20&source=5&statEvent=pageview%2Falbum%40310684&statModule=%E6%9C%AC%E5%9C%B0%E5%90%AC&statPage=tab%40%E5%8F%91%E7%8E%B0_%E6%8E%A8%E8%8D%90&statPosition=3',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data.data.album);
        that.setData({
          album:res.data.data.album,
          detail:res.data.data.detail,
        });
        setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });

    //audio
    wx.request({
      url: 'http://mobile.ximalaya.com/mobile/v1/album/track?albumId='+options.id+'&device=iPhone&isAsc=true&pageId=1&pageSize=20&statEvent=pageview%2Falbum%40310684&statModule=%E6%9C%AC%E5%9C%B0%E5%90%AC&statPage=tab%40%E5%8F%91%E7%8E%B0_%E6%8E%A8%E8%8D%90&statPosition=3',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        that.setData({
          audioList:res.data.data.list
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})