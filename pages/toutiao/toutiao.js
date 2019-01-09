// pages/toutiao/toutiao.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'http://v.juhe.cn/toutiao/index?key=be440f133a8d130bf36cc824282a9d8c',
    newsData : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: that.data.url,

      success: function (res) {
        console.log("res = " , res)
        if(res) {
            if(res.statusCode == 200) {
              let rawData = res.data;
              if (rawData) {
                that.setData({
                  newsData: rawData.result.data
                })
              } else {
                console.error("rawData is  " + rawData);
              }
            } else {
              console.error("errorCode " + res.statusCode + " errMsg = " + res.errMsg);
            }
        } else {
          console.error("no res found");
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
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

  showNewsDetail : function(e) {
    console.log(e);
    let url = e.currentTarget.id;
    wx.navigateTo({
      url: './detail/detail?url='+ url
    })
  }
})