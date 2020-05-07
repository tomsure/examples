<template>
    <div>
            <button @click="toDemo">基本demo</button>
            <button @click="toDemo2">demo2</button>
       
    </div>
</template>

<script>

export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
     toDemo(){
          this.$router.push('/demo1')
     },
     toDemo2(){
          this.$router.push('/demo2')
     }
    }
};
</script>
