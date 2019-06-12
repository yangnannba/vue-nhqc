<template>
  <div class="story">
	  <my-header :title="storytitle"></my-header>
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
      storytitle:"故事"
    }
  },
	components:{
		MyHeader,
		StoryList
	}
}
</script>


<style scoped>
.story{
		width:100%;
	overflow: hidden;
}
</style>
