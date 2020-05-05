//index.js
//获取应用实例
// var app = getApp();
Page({
    data: {
      indexmenu:[],
      imgUrls: [],
      searchInput: '',
      activeCategoryId: 0
    },
    onLoad:function(){
      //生命周期函数--监听页面加载
      this.fetchData();
      // var that = this
      // //调用应用实例的方法获取全局数据
      // app.getUserInfo(function(userInfo){
      //   //更新数据
      //   that.setData({
      //     userInfo:userInfo
      //   })
      // })
    },
    fetchData:function(){
      this.setData({
        indexmenu:[
          {
            'icon':'./../images/class/语文.png',
            'text':'语文',
            'url':'chinese'
          },
          {
            'icon':'./../images/class/数学.png',
            'text':'数学',
            'url':'math'
          },
          {
            'icon':'./../images/class/英语.png',
            'text':'英语',
            'url':'conference'
          },
          {
            'icon':'./../images/class/地理.png',
            'text':'地理',
            'url':'resource'
          },
          {
            'icon':'./../images/class/历史.png',
            'text':'历史',
            'url':'question'
          },
          {
            'icon':'./../images/class/物理.png',
            'text':'物理',
            'url':'property'
          },
          {
            'icon':'./../images/class/化学.png',
            'text':'化学',
            'url':'apply'
          },
          {
            'icon':'./../images/class/篮球.png',
            'text':'篮球',
            'url':'apply'
          },
          {
            'icon':'./../images/class/跆拳道.png',
            'text':'跆拳道',
            'url':'apply'
          },
          {
            'icon':'./../images/class/美术.png',
            'text':'美术',
            'url':'apply'
          }
        ],
        imgUrls: [
          '../images/ad/ad1.jpg',
          '../images/ad/ad2.jpg',
          '../images/ad/ad3.jpg'
          //'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          //'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
      })
    },
    changeRoute:function(url){
      wx.navigateTo({
        url: `../${url}/${url}`
      })
    },
    
    listenerSearchInput: function(e) {
      this.setData({
        searchInput: e.detail.value
      })
    },
    toSearch: function() {
      this.setData({
        curPage: 1
      });
      this.getGoodsList(this.data.activeCategoryId);
    },
    onReady:function(){
      //生命周期函数--监听页面初次渲染完成
      // console.log('onReady');
    },
    onShow :function(){
      //生命周期函数--监听页面显示
      // console.log('onShow');
    },
    onHide :function(){
      //生命周期函数--监听页面隐藏
      // console.log('onHide');
    },
    onUnload :function(){
      //生命周期函数--监听页面卸载
      // console.log('onUnload');
    },
    onPullDownRefresh:function(){
      //页面相关事件处理函数--监听用户下拉动作
      // console.log('onPullDownRefresh');
    },
    onReachBottom:function(){
      //页面上拉触底事件的处理函数
      // console.log('onReachBottom');
    }
  })
  