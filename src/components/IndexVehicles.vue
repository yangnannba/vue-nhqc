<template>
  <div class="indexvehicles">
    <router-link v-for="item in indexvehicles" :key="item.id" class="vehicles-item" tag="div" :to="{name:'detail',params:{id:item.id}}">
		<img class="image" :src="item.image" />
		<div class="vehicles-jiaoshao">
			<h2 class="header">{{item.header}}</h2>
			<h2 class="sub_header">{{item.sub_header}}</h2>
			<p class="description">{{item.description}}</p>
			<p class="price">{{item.meta.price}}</p>			
		</div>

	</router-link>
  </div>
</template>

<script>
export default {
  name: 'indexvehicles',
  data () {
    return {
       
    }
  },
	computed:{
		indexvehicles:function(){
			return this.$store.state.data.vehicles
		}
	}
}
</script>


<style lang="scss" scoped>
	.indexvehicles{
		padding:15px;
		background: #fdfdfd;
	}
.vehicles-item{
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
	}
	.sub_header{
			font-size: 16px;
			letter-spacing: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-bottom: 15px;
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
	}
	.vehicles-jiaoshao{
		padding:30px;
	}
}
</style>
