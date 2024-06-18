Page({
  data: {
    items: [
      {
        // 一级分类
        text: '产品品类',
        children: [
          {
            // 二级分类
            text: '货车',
            id: 1,
          },
          {
            text: '客车',
            id: 2,
          },
        ],
      },
      {
        text: '车型选择',
        children: [
          {
            text: '奥迪',
            id: 3,
          },
          {
            text: '奔驰',
            id: 4,
          },
        ],
      },
    ],
    mainActiveIndex: 0, // 默认选中的一级分类索引
    activeId: null, // 默认选中的二级分类 ID
  },

  onClickNav(event) {
    // 更新主列表的选中索引
    this.setData({
      mainActiveIndex: event.detail.index,
    });
  },

  onClickItem(event) {
    // 获取被点击的二级分类的 ID
    const { id } = event.detail;

    // 更新当前选中的二级分类 ID
    this.setData({
      activeId: id,
    });

    // 进行页面跳转，携带选中的分类 ID
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  },
});
