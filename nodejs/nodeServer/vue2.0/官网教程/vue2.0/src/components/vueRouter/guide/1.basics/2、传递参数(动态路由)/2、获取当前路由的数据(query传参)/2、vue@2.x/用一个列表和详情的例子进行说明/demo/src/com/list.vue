<template>
	<div class="">
		列表内容
        <ul>
        	<li v-for="(hero,index) in heros" :key="index">
        		  {{hero.name}}

        		 <router-link :to="{name:'detail',query:{id:index}}">详情</router-link>
        	</li>
        </ul>

	</div>
</template>

<script>
  import router from 'vue-router'
	export default{
		name:'news',
		data(){

			return {
				heros:[
				{name:'李白'},
				{name:'王昭君'},

				{name:'刘德华'},
				]
			}
		}



	}
</script>

<style>
</style>