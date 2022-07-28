<template>
  <div class="home">
    <HomeTitle/>

    <MainForm/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MainForm from '@/views/Home/HomeForm'
import HomeTitle from '@/views/Home/HomeTitle'

export default {
  name: 'HomeView',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
