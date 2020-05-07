<template>
    <div>
     <div>
			<button @click="$router.push({path:'/demo1/action'})">核心概念/Actoin</button>
   <button @click="$router.push({path:'/demo1/getter'})">核心概念/Getter</button>
   <button @click="$router.push({path:'/demo1/module'})">核心概念/Module</button>
   <button @click="$router.push({path:'/demo1/mutaion'})">核心概念/Mutaion</button>
   <button @click="$router.push({path:'/demo1/state'})">核心概念/State</button></div>
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

    }
};
</script>

<style scoped lang="">

</style>
