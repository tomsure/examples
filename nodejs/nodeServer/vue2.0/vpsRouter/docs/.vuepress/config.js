module.exports = {
    title: "Hello 1VuePress1", //页面左侧头部标题
    description: "Just playing around",
    home: true,
    head: [
      // 注入到当前页面的 HTML <head> 中的标签
      [
        "link",
        {
          rel: "icon",
          href: "/logo.jpg"
        }
      ] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: "/", // 这是部署到github相关的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      displayAllHeaders: true,
      nav: [
        // 导航栏配置
        {
          text: "路由API",
          link: "/vueRouter/"
        },
  
        {
          text: "指南",
          link: "/aaa/"
        },
        {
          text: "微博",
  
          items: [
            {
              text: "微博",
              link: ""
            },
            {
              text: "微博",
              link: ""
            }
          ]
        },
        {
          text: "功能",
          link: ""
        }
      ],
      
      sidebar: [
        {
          title: "router-link标签",
          collapsable: true, //是否展开
          children: [
                   ['/vueRouter/api/router-link/属性/to', 'to'],
                   ['/vueRouter/api/router-link/属性/tag', 'tag'],
                   ['/vueRouter/api/router-link/属性/replace', 'replace'],
                   ['/vueRouter/api/router-link/属性/exact', 'exact'],
                   ['/vueRouter/api/router-link/属性/event', 'event'],
                   ['/vueRouter/api/router-link/属性/append', 'append'],
                   ['/vueRouter/api/router-link/属性/active-class', 'active-class'],
                   ["/vueRouter/api/router-link/exact-active-class",'exact-active-class'],
                   ["/vueRouter/api/router-link/router-link基本用法",'router-link基本用法']
                    ]
        },
        {
          title: "router-view标签",
          collapsable: true,
          children: [
            ['/vueRouter/api/router-view/属性/name属性', 'name属性'],
            ['/vueRouter/api/router-view/router-view', 'router-view基本使用'],
            
             ]
        },
        {
          title: "Router构建选项",
          collapsable: true,
          children:[
            ['/vueRouter/api/router构建选项/选项/routes','routes'],
            ['/vueRouter/api/router构建选项/选项/base', 'base'],
            ['/vueRouter/api/router构建选项/选项/fallback', 'fallback'],
            ['/vueRouter/api/router构建选项/选项/linkActiveClass', 'linkActiveClass'],
            ['/vueRouter/api/router构建选项/选项/linkExactActiveClass', 'linkActiveClass'],
            ['/vueRouter/api/router构建选项/选项/mode','mode'],
            ['/vueRouter/api/router构建选项/选项/parseQuery','parseQuery'],
            ['/vueRouter/api/router构建选项/选项/stringifyQuery','stringifyQuery'],
                   ]
  
        },
        {
          title: "Router实例属性",
          collapsable: true,
          children:[
            ['/vueRouter/api/router实例属性/router.app','router.app'],
            ['/vueRouter/api/router实例属性/router.currentRoute','router.currentRoute'],
            ['/vueRouter/api/router实例属性/router.mode','router.mode'],
            
                   ]
        },
        {
          title: "Router实例方法",
          collapsable: true,
          children:[
            ['/vueRouter/api/router实例方法/router.beforeEach','router.beforeEach'],
            ['/vueRouter/api/router实例方法/router.afterEach','router.afterEach'],
            ['/vueRouter/api/router实例方法/router.beforeResolve','router.beforeResolve'],
            ['/vueRouter/api/router实例方法/router.resolve','router.resolve'],
            ['/vueRouter/api/router实例方法/router.addRoutes','router.addRoutes'],
            ['/vueRouter/api/router实例方法/router.back','router.back'],
            ['/vueRouter/api/router实例方法/router.go','router.go'],
            ['/vueRouter/api/router实例方法/router.forward','router.forward'],
            ['/vueRouter/api/router实例方法/router.getMatchedComponents','router.getMatchedComponents'],
            ['/vueRouter/api/router实例方法/router.onError','router.onError'],
            ['/vueRouter/api/router实例方法/router.onReady','router.onReady'],
            ['/vueRouter/api/router实例方法/router.replace','router.replace'],
            ['/vueRouter/api/router实例方法/router.push','router.push'],
  
            
                   ]
  
        },
        {
          title: "路由对象",
          collapsable: true,
          children:[
            ['/vueRouter/api/路由对象/路由对象','路由对象'],
            ['/vueRouter/api/路由对象/路由对象属性/fullPath','路由对象属性--$route.fullPath'],
            ['/vueRouter/api/路由对象/路由对象属性/hash','路由对象属性--$route.hash'],
            ['/vueRouter/api/路由对象/路由对象属性/matched','路由对象属性--$route.matched'],
            ['/vueRouter/api/路由对象/路由对象属性/name','路由对象属性--$route.name'],
            ['/vueRouter/api/路由对象/路由对象属性/params','路由对象属性--$route.params'],
            ['/vueRouter/api/路由对象/路由对象属性/path','路由对象属性--$route.path'],
            ['/vueRouter/api/路由对象/路由对象属性/query','路由对象属性--$route.query'],
            ['/vueRouter/api/路由对象/路由对象属性/redirectedFrom','路由对象属性--$route.redirectedFrom'],
           
                   ]
        },
        {
          title: "组件注入",
          collapsable: true,
          children:[
            ['/vueRouter/api/组件注入/增加的组件配置选项/beforeRouteEnter','组件配置选项1：beforeRouteEnter'],
            ['/vueRouter/api/组件注入/增加的组件配置选项/beforeRouteLeave','组件配置选项2：beforeRouteLeave'],
            ['/vueRouter/api/组件注入/增加的组件配置选项/beforeRouteUpdate','组件配置选项3：beforeRouteUpdate'],
            ['/vueRouter/api/组件注入/注入的属性/route','注入的属性:this.$route'],
            ['/vueRouter/api/组件注入/注入的属性/router','注入的属性:this.$router'],
          ]
  
        }
      ],
  
      sidebarDepth: 5 // 侧边栏显示2级
    }
  };
  