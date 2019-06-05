<template>
  <div class="myheader">
		<van-nav-bar
			:title="title"
			:left-arrow="arrowtrue"
			fixed
			@click-left="onClickLeft"
		/>
  </div>
</template>

<script>
export default {
  name: 'myheader',
	props:{
		title:{
			type:String,
			default:"汽车"
		}
	},
  data () {
    return {
      
    }
  },
	computed:{
		 arrowtrue:function(){
			 return this.$route.name=='detail'
		 }
	},
	methods:{
		onClickLeft() {
      this.$router.push({path:'/'});
    }
	}
}
</script>


<style scoped>

</style>
