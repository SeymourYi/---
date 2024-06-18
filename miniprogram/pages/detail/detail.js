Page({
  onLoad(options) {
    // 接收跳转时传递的参数
    const { id } = options;
    this.setData({
      categoryId: id,
    });
  },
  data: {
    categoryId: null, // 用于存储传递过来的分类 ID
  },
});
