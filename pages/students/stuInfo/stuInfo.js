// pages/students/stuInfo/stuInfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //定义变量用于存储input输入的值
        'username':"",
        'stuName':"",
        'stuAge':"",
        'stuNum':"",
        'stuClass':"",
        'stuPhone':"",
        'stuMail':"",
    },

    //每当input发生改变，触发这个方法
    usernameInput:function(e){
        //获取input输入框的值
        this.data.username = e.detail.value;   
    },
    stuNameInput:function(e){
        this.data.stuName = e.detail.value;
    },
    stuSexInput:function(e){
        this.data.stuSex = e.detail.value;
    },
    stuAgeInput:function(e){
        this.data.stuAge = e.detail.value;
    },
    stuNumInput:function(e){
        this.data.stuNum = e.detail.value;
    },
    stuClassInput:function(e){
        this.data.stu = e.detail.value;
    },
    stuPhoneInput:function(e){
        this.data.stuPhone = e.detail.value;
    },
    stuMailInput:function(e){
        this.data.stuMail = e.detail.value;
    },    

    modifyInfo: function(e){
        console.log(e.detail.value);
        var that = this;
        wx.request({
          url: 'http://192.168.50.144/employment_system/stuInfoModify.php',
          method: 'POST',
          data:{
            'username':e.detail.username,
            'stuName': e.detail.stuName,
            'stuAge': e.detail.stuAge,
            'stuNum': e.detail.stuNum,
            'stuClass': e.detail.stuClass,
            'stuPhone': e.detail.stuPhone,
            'stuMail': e.detail.stuMail,
          },
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          success: function(res){
              console.log(111);
            if("修改失败" == res.data){
                wx.showModal({
                    title: 'Employment_system',
                    content: '修改失败',
                })
            }else if("修改成功" == res.data){
                wx.showModal({
                  title: 'Employment_system',
                  content: '修改成功',        
                })
            }
        }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {

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