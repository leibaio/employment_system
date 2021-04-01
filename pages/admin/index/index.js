let app = getApp()

Page({
  data: {
    currentTab: 0,
    items: [
      {
        "iconPath": "/images/发布未选中.png",
        "selectedIconPath": "/images/发布选中.png",
        "text": "Notice"
      },
      {
        "iconPath": "/images/student.png",
        "selectedIconPath": "/images/xuesheng.png",
        "text": "Student"
      },
      {
        "iconPath": "/images/gongsi_1.png",
        "selectedIconPath": "/images/gongsi.png",
        "text": "Company"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {

  }
})
