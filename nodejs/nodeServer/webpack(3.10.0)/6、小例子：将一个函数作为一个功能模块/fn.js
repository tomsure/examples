
   function add(n1,n2){
   	  return n1+n2
   }
//    如果数据量比较大,还可以通过获取函数的实参arguments对象,来进行计算
   
   
    //封装一个小的功能函数，在使用的时候调用，在需要修改的时候，只需要修改这里而不是修改整个js文件，比较方便
   
   module.exports={    // 输出
   	addnum:add
   }
   

