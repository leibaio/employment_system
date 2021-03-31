Page({
    data: {
      cardCur: 0,
      swiperList: [{
        id: 0,
          type: 'image',
          link: 'http://joinus.cambricon.com/campus_apply/cambricon/1112#/',
          url: 'https://uploadfiles.nowcoder.com/images/20210219/204469590_1613704252241/D901C496D9F520B4EE80DFA889A01670'
      }, {
        id: 1,
          type: 'image',
          url: 'https://uploadfiles.nowcoder.com/images/20210220/689677914_1613788932376/D4D3E71541F1D8C1AA65D924FD6D8495',
      }, {
        id: 2,
          type: 'image',
          url: 'https://uploadfiles.nowcoder.com/images/20210219/799604146_1613716075596/F92D472D1AD76FBAD01105D4C4599AEA'
      }, {
        id: 3,
          type: 'image',
          url: 'https://uploadfiles.nowcoder.com/images/20210220/799604146_1613809814570/520C8404A610A5F97AAF0A45C456DE70'
      }],
      region: ['上海市', '上海市', '浦东新区'],
      picker: ['全职', '兼职', '实习'],
      picker1: ['互联网|计算机','金融|银行','保险','医疗','物流运输','化工|能源','服务业','媒体|广告','其他'],
      picker2: ['民营企业','事业单位','国企','外资','中外合资']
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

    PickerChange2(e) {//企业性质
      console.log(e);
      this.setData({
        index2: e.detail.value
      })
    },

    onLoad() {
      this.towerSwiper('swiperList');
      // 初始化towerSwiper 传已有的数组名即可
    },
    DotStyle(e) {
      this.setData({
        DotStyle: e.detail.value
      })
    },
    // cardSwiper
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    }
  })