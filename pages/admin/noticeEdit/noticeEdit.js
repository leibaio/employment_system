// pages/admin/noticeEdit/noticeEdit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        noticeId:"",
        noticeContent:"",
    },


    noticeInput:function(e){
        this.data.noticeContent = e.detail.value;
    },

    noticeSubmit: function(e){
        console.log(e.detail.value);
        wx.request({
          url: 'http://192.168.50.144/employment_system/sendNotice.php',
          method: 'POST',
          data:{
              noticeId: e.detail.value.noticeId,
              noticeContent: e.detail.value.noticeContent,
          },
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          success: function(res){
              if("发送失败" == res.data){
                  wx.showModal({
                      title: 'Employment_system',
                      content: '发送失败',
                  })
              }else if("发送成功" == res.data){
                  wx.showModal({
                    title: 'Employment_system',
                    content: '发送成功',        
                  })
              }
          }
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