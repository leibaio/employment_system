// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {


    },

    show(){
        console.log("登录")
    },

     

    stuEnroll: function(){
      wx.navigateTo({ /* 学生注册页面 */
        url: '/pages/students/enroll/enroll',
      })
    },

    goToStuIndex: function() { /* 跳转到学生首页 */
      wx.switchTab({
        url: '../students/position/position',
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    }
})