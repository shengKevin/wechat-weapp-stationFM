// pages/find/find.js
Page({
  data:{
    loadingHidden:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'http://mobile.ximalaya.com/mobile/discovery/v4/recommends?channel=ios-b1&device=iPhone&includeActivity=true&includeSpecial=true&scale=2&version=5.4.57',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        that.setData({
          focusImages:res.data.focusImages,
          specialColumn:res.data.specialColumn,
editorRecommendAlbums:res.data.editorRecommendAlbums,
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
    })

    wx.request({
      url: 'http://mobile.ximalaya.com/mobile/discovery/v2/recommend/hotAndGuess?code=43_310000_3100&device=iPhone&version=5.4.57',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        that.setData({
          member:res.data.member,                discoveryColumns:res.data.discoveryColumns,
guess:res.data.guess,
cityColumn:res.data.cityColumn,
hotRecommends:res.data.hotRecommends,
        })

      },
      fail: function() {
        // fail
        that.setData({
        })
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