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

    login: function(e){ /* 登录功能实现 */
      var me = this;
      //获取前台form表单传递过来的信息
      //e.detail.value.xxx: xxx为name属性的值
      var formObject = e.detail.value;
      console.log(e.detail);
      console.log(formObject);
      var username = formObject.username;
      var password = formObject.password;
      console.log('输入的账号' + username);
      console.log('输入的密码' + password);
      //发起网络请求
      wx.request({
        // url:'http://www.employment_system.com/employment_system/login.php',
        url:'http://192.168.50.144/employment_system/login.php',
        //声明请求方式为 POST 请求
        method:'POST',
        //向后台传递的数据： 账号，密码 (通过e.detail.value.xxx获取input输入框输入的值) 
        data:{
          'username':e.detail.value.username, 
          'password':e.detail.value.password
        },
        //POST请求，header的声明如下
        //若为GET请求， header的声明为 'content-type': 'application/json'
        header:{
          "Content-Type" : "application/x-www-form-urlencoded"
        },
        //接口请求成功的返回数据
        success:function(res){
          console.log("res.data = " + res.data);
          //如果后台返回的数据为 "毕业生登录成功", 跳转到毕业生首页
          if("毕业生登录成功" == res.data){
            wx.showModal({
              title:'Employment_system',
              content:'登陆成功'
            })
            wx.switchTab({
              url: '/pages/students/position/position',
            })
          }else if("用户名或密码错误" == res.data){
            wx.showModal({
              title: 'Employment_system',
              content: '用户名或密码错误',
              success (res) {
                if (res.confirm) {
                console.log('用户点击确定');
                wx.redirectTo({
                  url: '../login/login',
                })
                }
              }
            })
          }else{
            wx.showModal({
              title:'Employment_system',
              content:'登陆失败'
            })
          }
        }
      })
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