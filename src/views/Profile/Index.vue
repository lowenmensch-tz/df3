<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <h1>Profile View</h1>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import MainBlock from '@/views/Profile/Mainblock/Index.vue'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',

  mixins: [
    setError
  ],

  components: {
    BaseLoading,
    MainBlock
  },

  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },

  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params

    // this.$route.params -> { region: "eu", battleTag: "SuperRambo-2613" }
    this.fetchData(region, account)
  },

  methods: {
    fetchData (region, account) {
      // Llamada API
      // Llamada a la API con los datos necesarios
      getApiAccount({ region, account })
        .then(({ data }) => {
          // Guardamos los datos en una variable local
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
        	// Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
        	// Hacemos uso del Mixin
	        // Guardamos el objeto en el Store
          this.setApiErr(errObj)
	        // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
