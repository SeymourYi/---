// pages/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.usernameInput = this.selectComponent('.input-group:first-child input');
    this.passwordInput = this.selectComponent('.input-group:last-child input');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onLogin: function() {
    // 这里添加登录逻辑，比如验证用户信息，处理登录请求等。
    const username=this.usernameInput.value;
    const password=this.passwordInput.value;
    if(username&&password){
        console.log("登录成功");
    }else{
        wx.showToast({
          title: '请输入正确的用户名或密码',
          icon:'none'
        });
    }
  }
})