<template>

<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>

  	<el-form-item label="手机号码" prop="phone">
    <el-input v-model.number="ruleForm2.phone"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
   <el-button @click="toadd()">跳转</el-button>
</el-form>


</template>

<script>
	import {isTelCode} from '../../../untils/validate'


	  export default {
    data() {
//    var checkAge = (rule, value, callback) => {
//      if (!value) {
//        return callback(new Error('年龄不能为空'));
//      }
//
//        if (!Number.isInteger(value)) {
//          callback(new Error('请输入数字值'));
//        } else {
//          if (value < 18) {
//            callback(new Error('必须年满18岁'));
//          } else {
//            callback();
//          }
//        }
//
//    };

       let checkAge=(rules,value,callback)=>{
          if(value===''){
          	callback(new Error('请输入年龄'))
          }
       }

       let chackPhone=(ruls,value,callback)=>{

       	if(!isTelCode(value)){
       		callback(new Error('请输入正确的手机号'))
       	}else{
       		callback()
       	}
       }
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          phone:''
        },
        rules2: {

          age:[
           {validator:checkAge,trigger:['blur','change']}
          ],
          phone:[
           {required:true,message:'请输入手机号'},
          {validator:chackPhone,trigger:['blur','change']},


          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toadd(){
      	this.$router.push({name:'files'})
      }
    }
  }
</script>
<!--
   1、自定义的验证规则写在data里面，return外面
   2、自定义验证回调函数编写,例如:
        ES6写法   let checkAge = (rules, value, callback) => {...}
        ES5写法   var  checkAge=function(rules,value,callback){...}

           写法说明：1/ 声明一个函数，函数里面三个参数:rules,value,callback
               2/ 参数rules表示的是自定义正则表达式，可以写在外部文件中在这里引用
               3/ value是用户输入的表单内容
               4/   函数代码块就是用来验证输入的是否正常，需要使用if else条件语句来使用
                                    参 数 callback是各种条件下执行的语句，一般在错误或者正确的时候执行，
                                    错误的时候执行callback(new Error('错误内容'))
                                    正确则直接调用callback()不传参数

   3、自定义规则编写：
          在data中写一个rules后者其他数据，需要与el-form元素中的 :rules:对应
         rules是一个对象，对象中的每个属性是一个数组代表一个要验证的表单元素，例如：
            data(){
            	rules:{
            		name:[
                     {}
            		]
            	}
            }

        rules对象中的元素的key值与表单中的prop的值相等，value值是一个数组，数组中是多个对象，每个对象表示一个验证规则，
        validator的值就是自定义验证回调函数的名称

     4、表单中form-el需要填写的有：：model这个是data()中的空数据，ref,这个是元素的DOM操作符号，用于submit或者取消验证规则时候，传递的，参数-->
<style>
</style>