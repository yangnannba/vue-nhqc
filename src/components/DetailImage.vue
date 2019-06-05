<template>
  <div class="detailimage">
				<img :src="vehicle.image" />
				<div class="img-bot">
					<h1>{{vehicle.header}}</h1>
					<p>{{vehicle.sub_header}}</p>
					<span>{{vehicle.meta.price}}</span>
				</div>
  </div>
</template>

<script>
export default {
  name: 'detailimage',
	props:["vehicle"],
  data () {
    return {
 
    }
  },

}
</script>


<style scoped lang="scss">
.detailimage{
	width:100%;
	height:38vh;	
	position: relative;
	img{
		width:100%;
		height:100%;
	}
	.img-bot{
		position: absolute;
		left: 0;
		bottom: 0;
		width:100%;
		background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
		color:#fff;
		h1{
			font-size: 16px;
			padding-left:10px;
		}
		p{
			font-size: 12px;
			letter-spacing: 3px;
			text-transform: uppercase;
			padding-left:10px;	
					line-height: 2em;
		}
		span{
			position: absolute;
			bottom:10px;
			right: 10px;
			font-size: 14px;
		}
	}
}
</style>
