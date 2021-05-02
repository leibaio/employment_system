// pages/students/dataCharts/dataCharts.js

var wxCharts = require('../../../utils/wxcharts-min.js');
var app = getApp();
var columnChart = null;
var pieChart = null;


Page({

    /**
     * 页面的初始数据
     */
    data: {
        isMainChartDisplay: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    columnChart = new wxCharts({
        canvasId: 'industryRanking',
        width: 430,
        height: 200,
        // enableScroll: true,
        type: 'column',
        categories: ['金融/证券', '能源/矿产', '网络游戏', '学术/科研', '计算机', '互联网', '银行', '通信', '航天', '电子技术'],
        animation: true,
        yAxis: {
            format: function (val) {
                return val + '元';
            },
            title: '',
            min: 0
        },            
        series: [{
            name: '行业平均薪水',
            data: [12389, 11282, 11238, 10718, 10347, 10127, 10088, 9993, 9835, 9828],
            format: function (val, name) {
                return val.toFixed(0) + '';
            }
        }],
        xAxis: {
            disableGrid: false,
            type: 'calibration',
        },
        extra: {
            column: {
                width: 15
            }
        }
    });

    columnChart = new wxCharts({
        canvasId: 'occupationRanking',
        width: 430,
        height: 200,
        // enableScroll: true,
        type: 'column',
        categories: ['高级管理', '人工智能', '投融资', '软件研发', '移动研发', '销售管理', '数据工程师', '运营管理', '产品经理', '通信及硬件研发'],
        animation: true,
        yAxis: {
            format: function (val) {
                return val + '元';
            },
            title: '',
            min: 0
        },            
        series: [{
            name: '具体职位薪水',
            data: [21814, 19121, 14599, 14399, 14068, 14005, 13294, 13253, 13190, 12807],
            format: function (val, name) {
                return val.toFixed(0) + '';
            }
        }],
        xAxis: {
            disableGrid: false,
            type: 'calibration',
        },
        extra: {
            column: {
                width: 15
            }
        }
    });

    pieChart = new wxCharts({
        canvasId: 'toGo',
        type: 'pie',
        series:[
         { name: '签就业协议形式就业', data: 74.72 },
         { name: '签劳动合同形式就业', data: 8.06 }, 
         { name: '升学', data: 7.82 }, 
         { name: '灵活就业', data: 3.08 },
         { name: '出国（境）', data: 2.85 },
         { name: '未就业', data: 3.20 },
        ],
         width: 320,
         height: 400,
         dataLabel: true,
    });

    pieChart = new wxCharts({
        canvasId: 'comNature',
        type: 'pie',
        series:[{ name: '上市公司、股份制公司', data: 38.30 },
         { name: '三资企业', data: 17.62 }, 
         { name: '国有企业', data: 11.04 }, 
         { name: '党政机关、事业单位以及部队', data: 2.95 },
         { name: '其他单位', data: 30.95 }],
         width: 320,
         height: 400,
         dataLabel: true,
    });

    columnChart = new wxCharts({
        canvasId: 'industryDistribution',
        width: 430,
        height: 200,
        // enableScroll: true,
        type: 'column',
        categories: ['制造业', '软件和信息技术', '居民服务、修理', '住宿和餐饮', '批发和零售', '建筑', '金融', '科研和技术服务', '租赁和商务服务', '教育'],
        animation: true,
        yAxis: {
            format: function (val) {
                return val + '%';
            },
            title: '',
            min: 0
        },            
        series: [{
            name: '就业行业分布',
            data: [28.51, 15.22, 12.10, 8.32, 6.43, 4.10, 4.00, 4.00, 3.92, 3.85],
            format: function (val, name) {
                return val.toFixed(0) + '%';
            }
        }],
        xAxis: {
            disableGrid: false,
            type: 'calibration',
        },
        extra: {
            column: {
                width: 15
            }
        }
    });    
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