//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    array:[{title:'我的购物',icon:'success'},{title:'我的钱包',icon:'info'},
          {title:'更多',icon:'info'},{title:'赞过谁',icon:'safe_success'},
           {title:'意见反馈',icon:'info_circle'},{title:'设置',icon:'success_circle'},
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
