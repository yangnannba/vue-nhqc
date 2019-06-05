<template>
  <div class="index">
			<MyHeader></MyHeader>		
     <index-banner></index-banner>
		 <index-vehicles></index-vehicles>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import IndexBanner from '../components/IndexBanner'
import IndexVehicles from '../components/IndexVehicles'
export default {
  name: 'index',
  data () {
    return {

    }
  },
	methods:{

	},
	components:{
		IndexBanner,
		MyHeader,
		IndexVehicles
	}
}
</script>


<style scoped>

</style>
