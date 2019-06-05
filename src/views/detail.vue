<template>
  <div class="detail">
	<my-header :title="vehicle.header"></my-header>
	<detail-image :vehicle="vehicle"></detail-image>
	<detail-yy :vehicle="vehicle"></detail-yy>
	<detail-design title="外观" :design="exterior" :back="true"></detail-design>
	<detail-design title="内饰" :design="interior" :back="false"></detail-design>			
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import DetailImage from '../components/DetailImage'
import DetailYy from '../components/DetailYy'
import DetailDesign from '../components/DetailDesign'
export default {
  name: 'detail',
  data () {
    return {
      
    }
  },
	computed:{
		vehicle:function(){
			return this.$store.state.data.vehicles[this.$route.params.id-1]
		},
		exterior:function(){
			return this.vehicle.meta.exterior_design
		},
		interior:function(){
			return this.vehicle.meta.interior_design
		},			
	},
	components:{
		MyHeader,
		DetailImage,
		DetailYy,
		DetailDesign
	}
}
</script>


<style scoped >


</style>
