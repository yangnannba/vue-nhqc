<template>
  <div class="indexbanner">
		<van-swipe :autoplay="3000" >
			<van-swipe-item v-for="item in indexbanner" :key="item.id">
				<div class="image"><img :src="item.image" /></div>
				<div class="sub_header">{{item.sub_header}}</div>
				<div class="header">{{item.header}}</div>
				<div class="description">{{item.description}}</div>
				<ul class="mybtn">
					<li @click="driving">预约驾驶</li>
					<router-link tag="li" :to="{name:'detail',params:{id:item.id}}">查看详情</router-link>
				</ul>
			</van-swipe-item>

		</van-swipe>
  </div>
</template>

<script>
export default {
  name: 'indexbanner',
  data () {
    return {
       
    }
  },
	computed:{
		indexbanner:function(){
			return this.$store.state.data.slides
		}
	},
	methods:{
   driving:function(){
		 this.$toast.fail('暂不支持');
	 }
	}
}
</script>


<style lang="scss" scoped>
.indexbanner,.van-swipe{
	height:calc(100vh - 96px);
}
.image{
	width:100%;
	margin-bottom: 30px;
	img{
		width:100%;
		height:100%;

	}
}
.sub_header{
	text-align: center;
	font-size: 16px;
	color:#777;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 10px;
}
.header{
	font-size: 36px;
	text-align: center;
	color:#000;
	font-weight: bold;
	margin-bottom: 30px;
}
.description{
	font-size: 16px;
	text-align: center;
	color:#333;	
	margin-bottom: 40px;
}
.mybtn{
	text-align: center;
	font-size: 0;
	-webkit-text-size-adjust: none;
	li{
		font-size: 18px;
		width:38%;
		background: #000;
		display: inline-block;
		color:#fff;
		line-height: 2.2em;
	}
	li:nth-child(1){
		background: #ccc;
		color:#000;
	}
}
</style>
