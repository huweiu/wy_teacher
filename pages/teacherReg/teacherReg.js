Page({

  /**
   * 页面的初始数据
   */
  data: {
    userimg: '',
    nickname: '',
  },

  // 点击上传图片
  upShopLogo: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImageShop('album');//从相册中选择
          } else if (res.tapIndex == 1) {
            that.chooseWxImageShop('camera');//手机拍照
          }
        }
      }
    })
  },

 // 3.选择图片

chooseWxImageShop: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        that.data.userimg = res.tempFilePaths[0],
          that.upload_file(urldate.upimg + 'shop/shopIcon', res.tempFilePaths[0])
        userimg = res.tempFilePaths[0];
        that.setData({
          userimg: userimg
        })
      }
    })
  },

 // 4.上传图片到服务器
upload_file: function (url, filePath) {
    var that = this;
    var signature = signa.signaturetik('token=' + token, 'userAccessToken=' + userAccessToken, 'studentAccessToken=' + studentAccessToken);
    wx.uploadFile({
      url: urldate.upimg,//后台处理接口
      filePath: filePath,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header
      formData: {//需要的参数
        'token': token,
        'signature': signature,
        'userAccessToken': userAccessToken,
        'studentAccessToken': studentAccessToken
      }, // HTTP 请求中其他额外的 form data
      success: function (res) {
        var data = JSON.parse(res.data);
        that.setData({
          userimg: data.path,
        });
        that.showMessage('上传成功');
      },
      fail: function (res) {
      }
    })
  },  
})