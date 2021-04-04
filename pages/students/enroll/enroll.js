// pages/students/enroll/enroll.js
Page({

    /**
     * 组件的初始数据
     */
    data: {
        //定义变量用于存储input输入的值
        username:"",
        password:"",
        passwordAck:"",
        stuPhone:"",
        stuMail:""
    },

    //每当input发生改变，触发这个方法
    usernameInput:function(e){
        //获取input输入框的值
        this.data.username = e.detail.value;   
    },
    passwordInput:function(e){
        this.data.password = e.detail.value;
    },
    passwordInputAck:function(e){
        this.data.passwordAck = e.detail.value;
    },
    stuPhoneInput:function(e){
        this.data.stuPhone = e.detail.value;
    },
    stuMailInput:function(e){
        this.data.stuMail = e.detail.value;
    },

    //注册
    regist:function(e){
        var that = this;
        if(that.data.username == ''){
            wx.showModal({
                title: 'Employment_system',
                content: '请输入用户名',
                showCancel: false,
                success (res){
                }
            })
        }else if(that.data.password == ''){
            wx.showModal({
                title: 'Employment_system',
                content: '请输入密码',
                showCancel: false,
                success (res){
                }
            })
        }else if(that.data.passwordAck == ''){
            wx.showModal({
                title: 'Employment_system',
                content: '请再次输入密码',
                showCancel: false,
                success (res){
                }
            })
        }else if(that.data.passwordAck != that.data.password){
            wx.showModal({
                title: 'Employment_system',
                content: '两次密码输入不一致',
                showCancel: false,
                success (res){
                }
            })
        }else if(that.data.stuPhone == ''){
            wx.showModal({
                title: 'Employment_system',
                content: '请输入手机号',
                showCancel: false,
                success (res){
                }
            })
        }else if(that.data.stuPhone.length != 11){
            wx.showModal({
                title: 'Employment_system',
                content: '手机号位数不正确， 请重新输入',
                showCancel: false,
                success (res){
                }
            })
        }else{
            wx.request({
            //   url: 'http://www.employment_system.com/employment_system/register.php',
                //使用本地ipv4
            url: 'http://192.168.50.144/employment_system/register.php',
              method: 'POST',
              data: {
                  'username':e.detail.value.username,
                  'password':e.detail.value.password,
                  'stuPhone':e.detail.value.stuPhone,
                  'stuMail':e.detail.value.stuMail,
              },
              header:{
                  'content-type':'application/x-www-form-urlencoded'
              },
              success(res){
                  if("注册失败" == res.data){
                      wx.showModal({
                        title: 'Employment_system',
                        content: '注册失败',
                      })
                  }else if("注册成功" == res.data){
                    wx.showModal({
                        title: 'Employment_system',
                        content: '注册成功',
                      })
                  }
                  console.log(res.data);
              }
            })
        }
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
