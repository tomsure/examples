module.exports = {
  title: 'Hello VuePress', //页面左侧头部标题
  description: 'Just playing around',
  home: true,
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/logo.jpg'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [ // 导航栏配置
      {
        text: '路由API',
        link: '/vueRouter/'
      },
      
      {
        text: '指南',
        link: '/aaa/'
      },
      {
        text: '微博',
       
        items:[
          {
          text: '微博',
        link: 'https://baidu.com',},
        {
          text: '微博',
        link: 'https://baidu.com',}
        ]
      },
      {
        text: '功能',
        link: 'https://baidu.com'
      }
    ],
    
     sidebar:[
      {
        title: '开发指南',
        collapsable: true, //是否展开
              children: [
            '/vueRouter/api/router-link/',
         '/vueRouter/api/router-link/attr/'
           ]
    },
     ['/vueRouter/api/','aaa'],
   
     ['/vueRouter/api/','bbb'],
    {
        title: '组件',
        collapsable: false
    },
   
     ],
    // sidebar: 
    //  [
     
    //    {
    //     title: 'router-link标签',
    //     collapsable: true, //是否展开
         
    //     children: [
          
    //    '/vueRouter/api/router-link/',
    //     '/vueRouter/api/router-link/attr/'
    //     ]
    //   },
    //   { 
    //     title: 'router-view标签',
    //     collapsable: true
    //   },
     
    // ],
    sidebarDepth: 5 // 侧边栏显示2级
  }
};