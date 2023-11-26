module.exports = {
  title: "gaoyan",
  description: "blog",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: "./dist",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" }, // 内部链接 以docs为根目录
      { text: "Vue", link: "/vue/vue全家桶/" }, // 外部链接
      { text: "项目难点汇总", link: "/project/" }, // 项目难点
      { text: "JS基础", link: "/foo/" }, // 项目难点
    ],
    sidebar: {
      "/foo/": [
        "","one","two"
      ],
      "/vue/vue全家桶/":["","vuex","vue-router","vue基础知识","组件间通信","自定义事件"]
    },
  },
};
