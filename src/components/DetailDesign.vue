<template>
	<div class="detaildesign" :class="{hui:back}">

		<van-swipe>
			<van-swipe-item v-for="item in design" :key="item.id" class="item">
                <h2>{{title}}</h2>
				<h3>{{item.header}}</h3>
				<p class="description">{{item.description}}</p>
				<div class="image"><img :src="item.image" @click="show=true" /></div>					
			</van-swipe-item>

		</van-swipe>
		<van-image-preview
		  v-model="show"
		  :images="designimage"
		  @change="onChange"
		>
		  <template v-slot:index>第{{index+1}}页</template>
		</van-image-preview>		
		
	</div>

</template>

<script>
export default {
  name: 'detaildesign',
  props:["design","title","back"],
  data () {
    return {
      show: false,
      index: 0,
      designimage:[]
    }
  },
  methods:{
    onChange(index) {
      this.index = index;
    }
  },
  mounted:function(){
	  for(var i=0;i<this.design.length;i++){
	       this.designimage.push(this.design[i].image)		  
	  }

  }

}
</script>


<style scoped lang="scss">
	.hui{
		background: #f2f2f2;
	}
.detaildesign{
	padding:30px 0;
	text-align: center;
	h2{
		font-size: 12px;
		color:#666;
		margin-bottom: 20px;
	}
	h3{
		font-size: 30px;
		color:#000;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.description{
		font-size: 14px;
		line-height: 1.8em;
		padding:0 50px;
		height:160px;
	}
	.image{
		width:100%;
		img{
			width:100%;
			height: auto;			
		}
	}
	.item{
		display: flex;
		flex-direction: column;
	     justify-content:center;
	}
}
</style>
