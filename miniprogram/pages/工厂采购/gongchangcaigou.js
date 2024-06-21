// pages/传递页面/传递页面.js
const store = require('../../store/store.js');

Page({
  data: {
    items: [],
    mainActiveIndex: 0, // 默认选中的一级分类索引
    activeId: null, // 默认选中的二级分类 ID
  },

  onLoad() {
    // 在页面加载时发起网络请求
    wx.request({
      url: 'http://localhost/dev-api/chanpin/chanpin/list?pageNum=1&pageSize=10',
      method: 'GET',
      header: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImQwNDMyYmQxLTdhYzYtNGRkYy05N2JhLTVmODVlYzJlZDEwNiJ9.uRCj802q9-52Sr5naNkK4M2LhNmSNPROPXJQP3-qZyKxiO9_fjtCeL-Nll-v333GVMR_MJ6091ZC_-yR8FCfdA'
      },
      success: (res) => {
        // 假设服务器返回的数据格式为 { rows: [...] }
        const data = res.data.rows;
        console.log(data);
        
        // 对返回的数据进行转换
        const items = this.formatData(data);
        
        // 将转换后的数据设置到页面的 data 中
        this.setData({
          items: items,
        });
      },
      fail: (err) => {
        console.error('请求失败', err);
      },
    });
  },

  formatData(data) {
    // 假设服务器返回的数据格式需要转换成如下格式
    // 遍历数据，创建新的数据结构
    const itemsMap = {};
    
    data.forEach(item => {
      if (!itemsMap[item.pinlei]) {
        itemsMap[item.pinlei] = {
          text: item.pinlei,
          children: []
        };
      }
      
      itemsMap[item.pinlei].children.push({
        text: item.chexing,
        id: item.id,
        ...item // 将所有数据包括进去
      });
    });
    
    // 将 itemsMap 转换为数组
    return Object.values(itemsMap);
  },

  onClickNav(event) {
    // 更新主列表的选中索引
    this.setData({
      mainActiveIndex: event.detail.index,
    });
  },

  onClickItem(event) {
    // 获取被点击的二级分类的数据对象
    const item = event.detail;

    // 更新当前选中的二级分类 ID
    this.setData({
      activeId: item.id,
    });

    // 将数据对象存储到全局状态管理器
    store.setSelectedItem(item);

    // 进行页面跳转
    wx.navigateTo({
      url: `/pages/detail/detail`,
    });
  },
});
