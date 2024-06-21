// pages/detail/detail.js
const store = require('../../store/store');

Page({
  onLoad() {
    // 从全局状态管理器中获取数据对象
    const selectedItem = store.getSelectedItem();

    // 将数据对象设置到页面的 data 中
    this.setData({
      productDetails: selectedItem,
    });
  },
  data: {
    productDetails: {}, // 用于存储产品详情数据
  },
});
