<template>
	<div class="storylist">
		<div v-for="item in stories" class="story-item">
			<div class="image-wrap">
			    <img class="image" :src="item.image" @click="myid=item.id"/>
				<span>{{item.duration}}</span>
			</div>
			<div class="story-jiaoshao">
				<h2 class="header">{{item.header}}</h2>
				<p class="description">{{item.description}}</p>
			</div>
			
			<div v-if="myid==item.id" class="video" @click="myid=-1">
				<video width="100%" autoplay  controls :poster="item.image">
					<source :src="item.video" type="video/mp4">
					您的浏览器不支持 video 标签。
				</video>
			</div>
			
		</div>
		
	</div>

</template>

<script>
export default {
  name: 'storylist',

  data () {
    return {
        myid:-1 
    }
  },
  computed:{
	stories:function(){
		return this.$store.state.data.stories
	} 
  }

}
</script>


<style scoped lang="scss">
.storylist{
	padding:15px;
	background: #fdfdfd;
}
.story-item{
	margin-bottom: 15px;
	box-shadow: 0 2px 6px #e2e2e2;
	background: #fff;
	border-radius: 6px;
	img{
		width:100%;
	    border-radius: 6px 6px 0 0;		
	}
	.header{
		font-weight: bold;
		font-size: 26px;
		margin-bottom: 10px;
		line-height: 1.4em;
		&:after{
			content:"";
			display: block;
			width:12%;
			height:3px;
			background: #000;
			margin-top: 10px;
		}
	}
	p{
		color:#888;
		font-size: 14px;
		margin-bottom: 8px;
		line-height: 1.75em;
	}
	.story-jiaoshao{
		padding:30px;

	}
	.video{
		 position: fixed;
		 top:0;
		 bottom:0;
		 left:0;
		 right:0;
		 background: rgba(0,0,0,0.9);
		 z-index: 9;
		 video{
			 position: absolute;
			 top: 50%;
			 margin-top:-102px;
		 }
	}
}
.image-wrap{
	position: relative;
	span{
		position: absolute;
		bottom: 6px;
		right: 6px;
		font-size: 12px;
		background: rgba(0,0,0,0.8);
		color:#fff;
		padding:4px;
		border-radius: 2px;
	}
}
</style>
