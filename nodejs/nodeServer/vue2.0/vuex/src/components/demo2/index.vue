<template>
     <div>
         <div>
	   {{$store.state.data1}}
    </div>
     <div>
         {{data1}}  
         <!-- 访问数据 -->
     </div>
     <div>{{data2}}</div>
      <div>
        <button @click="handleAdd">加</button>
      </div>
      <div>
       <button @click="handleSub">减</button>
      </div>
       <div>
           <button @click="add1">mapMutations add1</button>
           <button @click="add2">mapMutations add2</button>
           <!-- <button @click="add3">mapMutations add3</button> -->
     </div>
      <div><button @click="asyncSub">倒计时减</button></div>
      <div><button @click="handleNewSub">mapActions</button></div>
      <div><button >访问Getters {{$store.getters.dataChange}}</button></div>
      <div><button >通过mapGetters访问Getters {{test}}</button></div>
      
       <div>
           <button>mudules</button>
            <div class="border-box">{{`this.$store.state.user.uname: ${this.$store.state.user.uname}`}}</div>
            <div class="border-box">{{`queryCenter.data1: ${this.$store.state.queryCenter.data1}`}}</div>
            <div class="border-box">
                <div>{{`reportCenter.data1.name: ${this.$store.state.reportCenter.data1.name}`}}</div>
                <div>{{`reportCenter.data1.age: ${this.$store.state.reportCenter.data1.age}`}}</div>
                <div>{{`reportCenter.data1.num: ${this.$store.state.reportCenter.data1.num}`}}</div>
                 
            </div>


       </div>
     </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
import common from '../common'
export default {
     components:{
     common
    }, 
    data(){
     return{}
    },
    created(){
      window.console.log(this.data3,this.data4)  //访问数据
    },
    computed:{
        ...mapState(['data1','data2','data3','data4']) ,  //获取数据
         ...mapGetters(['test'])
    },
    methods:{
        handleAdd(){
         this.$store.commit('add',100)
        },
        handleSub(){
         this.$store.commit('sub',100)
        },
        ...mapMutations(['add1','add2']),
        // 也可以这样，映射为别的方法名 ...mapMutations({add3:'add2'})
        asyncSub(){
            this.$store.dispatch('testSub',9000)
        },
        ...mapActions(['testSub','changeData']),
        handleNewSub(){
            this.testSub(100)
        }
       
    }
};
</script>

<style scoped lang="">

</style>
