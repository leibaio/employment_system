// pages/students/stuInfo/showStuInfo/showStuInfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    goToModify: function(){
        wx.navigateTo({
          url: '/pages/students/stuInfo/stuInfo',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let that = this;

      wx.request({
        url: 'http://192.168.50.144/employment_system/showStuInfo.php',
        // url: 'http://172.20.10.8/employment_system/positionList.php',
        data: {},
        method: 'GET',
        header:{
          'content-type': 'application/json'
        },
        success: function(res){
          console.log(res.data);
          //如果在success直接写this就变成了wx.request里的this
          that.setData({
            //绑定json格式的数据给posiList变量， res.data即为positionList.php文件返回的数据
            stuInfoList: res.data
          })
        },
        fail: function(res){
          wx.showModal({
            title:'Employment_system',
            content: res.data,
          })
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

    }
})