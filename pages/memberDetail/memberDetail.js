// pages/memberDetail/memberDetail.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    options.id!=='fail'?
    this.setData({
      title:'别做梦了了，不付费还想听会员专场!\n',
      subtitle:'算了，看你这么可怜，送你张图片好了'
    }):
    this.setData({
      title:'对不起这个接口是post请求，没有抓到!\n',
      subtitle:'奉上一张图片以表歉意'
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