// pages/list/list.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telenumber: '19157725798',
    imgSrc: '../../img/',
    randomNum: (Math.random()*10).toFixed(2),
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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

    /**
   * 按钮相关事件处理函数
   */
  btnTapHandler(e: object){
    console.log(e)
    console.log(this.data.count)
    this.setData({
      count: this.data.count + 1
    })
    console.log(this.data.count)
  }
})

/*
  ① 事件监听API
    以on开头，用来监听事件的触发
    wx.onWindowResize(function callback)监听窗口尺寸变化
  ② 同步API
    以Sync结尾的API
    同步API执行结果，可以通过函数返回值直接获取，如果出错会抛出异常
    wx.setStorageSync('key', 'value')向本地存储中写入内容
  ③ 异步API
    需要通过回调函数（success，fail，complete接收调用的结果）
    wx.request()发起网络请求，通过success回调函数接受数据
*/