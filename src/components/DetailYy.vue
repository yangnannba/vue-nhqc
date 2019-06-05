<template>
	<div class="detailyy">
	  <ul class="detailyy-ul">
		<li class="detail-li">
			<p>二氧化碳排放</p>
			<p><span>{{vehicle.meta.carbon_dioxide}}</span>克/公里</p>
		</li>
		<li class="detail-li">
			<p>综合燃油</p>
			<p><span>{{vehicle.meta.fuel}}</span>升/百公里</p>
		</li>
	  </ul>
	  <p class="description">{{vehicle.description}}</p>
	  <div class="driving" @click="driving">预约驾驶</div>	  
	</div>

</template>

<script>
export default {
  name: 'detailyy',
  props:["vehicle"],
  data () {
    return {
 
    }
  },
  methods:{
   driving:function(){
		 this.$toast.fail('暂不支持');
	 }
  }

}
</script>


<style scoped lang="scss">
	.detailyy{
		text-align: center;
		margin-bottom: 50px;
		.description{
			font-size: 18px;
	        margin-bottom: 20px;
		}
		.driving{
			font-size: 18px;
			width:38%;
			background: #000;
			display: inline-block;
			color:#fff;
			line-height: 2.2em;
		}
	}
.detailyy-ul{
	display: flex;
	justify-content:center;
	align-items:center;
	margin-bottom: 40px;
	p{
		line-height: 2em;
		font-family: 15px;
	}
	span{
		font-size: 30px;
		display: inline-block;
		margin-right: 10px;
	}
	.detail-li{
		flex:1;
		width:50%;
		border:1px solid #F0F0F0;
		padding:30px 20px;
	}
	
}
</style>
