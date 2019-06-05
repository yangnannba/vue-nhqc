<template>
  <div class="MyFooter">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
			<van-tabbar-item icon="video-o" to="/story">故事</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  data () {
    return {
      active:0
    }
  }
}
</script>


<style scoped>

</style>
