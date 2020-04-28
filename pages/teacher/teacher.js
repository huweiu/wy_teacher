Page({
  data:{
    
      isChecked: false
    
  },
  radioChange(e){
    console.log("111111111111 = ",e)
    console.log(this.isChecked)
    this.isChecked = !this.isChecked
  },
  gotoTeacherReg(){
    console.log("跳转老师注册信息页面11")
    wx.navigateTo({
      url: '../teacherfirst/teacherfirst',
    })
  }
})