//logs.js
//https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  onUnload: function () {
    console.log("Logs page onUnload");
  },

  onShow: function() {
    console.log("Logs page onShow");
  },

  onHide: function () {
    console.log("Logs page onHide");
  },

  onReady: function() {
    console.log("Logs page onReady");
  }

})
