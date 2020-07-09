module.exports = {
  title: "vuex3.0(ts)", //页面左侧头部标题
  description: "",
  home: true,
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      // 导航栏配置
      {
        text: "API",
        link: "/api/",
      },
    ],

    sidebar: [
      {
        title: "基本使用",
        collapsable: true, //是否展开
        children: [["/test", "测试"]],
      },
    ],
    sidebarDepth: 5, // 侧边栏显示2级
  },
};
