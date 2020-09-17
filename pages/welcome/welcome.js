// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({
      key: 'isshow',
      data: true,
    })
    wx.setNavigationBarTitle({
      title:"听歌识曲",
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var app = getApp()
    this.setData({
      grade : app.globalData.grade
    })
    
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

  // 跳转进入游戏
  gotomusic:function () {
    wx.redirectTo({
      url: '/pages/playmusic/playmusic',
    })
  },
  onShareAppMessage:function(res){
    // 如果接受到的是按钮信息
    if(res.from ==="menu") {
      console.log(res.target,res)
    }
    return{
      title:'听歌识曲',
      path:"pages/welcome/welcome"
      
    }
  }
})