// pages/company/postRelease/postRelease.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ['上海市', '上海市', '浦东新区'],
        picker: ['全职', '兼职', '实习'],
        picker1: ['互联网|计算机','金融|银行','保险','医疗','物流运输','化工|能源','服务业','媒体|广告','其他'],
        picker4: ['初中及以下','高中/中技/中专','大专','本科','硕士','博士','无学历要求']
    },

    RegionChange: function(e) {
        this.setData({
          region: e.detail.value
        })
      },

    PickerChange(e) {//职位类型
        console.log(e);
        this.setData({
          index: e.detail.value
        })
    },
    PickerChange1(e) {//工作行业
        console.log(e);
        this.setData({
          index1: e.detail.value
        })
    },

    PickerChange4(e) {//学历要求
        console.log(e);
        this.setData({
          index4: e.detail.value
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