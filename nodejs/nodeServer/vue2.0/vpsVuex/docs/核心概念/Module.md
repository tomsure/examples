## 一、module 结构：
![Image text](./images/modules.png) 

如上图：modules 中有多个文件夹或者多个js文件，单独的文件夹里面又有多个js文件，这样可以把模块化的状态对象分类整理比较容易管理，避免混乱。 

例如此图： queryCenter是一个模块，reportCenter是一个模块，user.js也是一个模块。

注意: 图片中的modules 只是纯文件夹，名字不是定死的
## 二、定义模块
### 1,模块内多个单独的包含状态对象的js?
这种形式是把多个单独的模块放在一个js这种再作为一个模块导出，例如：
模块data1.js
```javascript
export default {
    state:{
      name:100,
      age:200,
      num:100
    },
    mutations:{
   
    },
    actions:{
    
    },
    getters:{

    }
     }
```
模块data2.js
```javascript
export default {
    state:{
      name1:100,
      age1:200,
      num1:100
    },
    mutations:{
   
    },
    actions:{
   
    },
    getters:{

    }
     }

```
模块data3.js
```javascript
export default {
    state:{
      name3:100,
      age3:200,
      num3:100
    },
    mutations:{
    
    },
    actions:{
    },
    getters:{

    }
     }
```
最后引入index.js中导出：
```javascript
import data1 from './data1'
import data2 from './data2'
import data3 from './data3'
export default {
    namespaced: true,
    modules: {
        data1,
        data2,
        data3
        }
    }
```
注意index.js中要使用namespaced选项，另外，其他引入的模块放在modules选项中
### 2，单独一个文件作为一个模块，包含多个状态对象？
例如模块 user.js 
```javascript
export default {
    state:{
      uname:'tom',
      uage:30,
      unum:100
    },
    mutations:{
   
    },
    actions:{
   
    },
    getters:{

    },
   
}
```
这种就是把一个模块放在一个js文件中定义然后导出
### 3,模块内将状态对象拆分为单独的js文件？
这种就是把state,actions,mutations等对象放在单独的文件里面，再统一通过index.js导出。避免数据太大，比较混乱,例如

单独定义 actions:
```javascript
 const actions={
	
	testSub:function(context,plaload){ //倒计时，异步操作
      setTimeout(() => {
		context.commit('subNum',plaload) 
	  }, 2000);
	}
}
export default actions
```
单独定义getters:
```javascript
const getters={
    
   }
export default getters 
```
单独定义mutation：
```javascript
const mutations={  
	add(state,t){
		state.data1=state.data1+t
	},
	}
export default  mutations
```
等等。。。

再通过当前目录的index.js导出： 
```javascript
import state from './state'
import actions from './actions'
import mutations from './mutation'
import getters from './getter'
export default{
    state,actions,mutations,getters
}
```
这种其实和第2中相同，只不过是第二种把action,state状态对象放在了单独的js 文件里
## 三，模块的局部状态对象的定义
### 1,getter
```javascript

```
### 2,mutation
```javascript
```
### 3,action
```javascript
```
## 四，使用
### 1，state 数据的获取
```javascript
```
## 五，命名空间
### 0，为何要使用命名空间？

### 1，设置命名空间
```javascript
```
### 2，访问设置了命名空间的模块
```javascript
```
### 3，模块中的辅助函数的使用

```javascript
```
### 4，在带命名空间的模块内访问全局内容
```javascript
```
### 5，将模块内的 action 注册为全局
### 6，使用createNamespacedHelpers映射到命名空间
### 7，插件开发者的注意事项
## 六，模块动态注册
### 1,注册
```javascript
```
### 2,访问
```javascript
```
### 3,卸载
```javascript
```
### 4,保留 state
```javascript
```
## 七，模块重用
```javascript
```
 