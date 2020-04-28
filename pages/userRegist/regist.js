const app = getApp()

Page({
    data: {

    },    

    goTeacherRegPage(){
      console.log("跳转老师注册页面")
      wx.navigateTo({
        url: '../teacher/teacher',
      })
    },
    goParentsRegPage(){
      console.log("跳转家长注册页面")
      wx.navigateTo({
        url: '../parents/parents',
      })
    }
})