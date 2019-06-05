<template>
  <div class="story">
	  <my-header title="故事"></my-header>
		<story-list></story-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import StoryList from '../components/StoryList'
export default {
  name: 'story',
  data () {
    return {
      
    }
  },
	components:{
		MyHeader,
		StoryList
	}
}
</script>


<style scoped>

</style>
