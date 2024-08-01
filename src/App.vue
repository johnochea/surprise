<script>
import {RouterLink, RouterView} from 'vue-router'

export default {
  name: 'App',
  data() {
    return {
      imageSrc: null,
    }
  }
}
</script>

<template>
    <div class="wrapper">
        <RouterView @picture-taken="imageSrc=$event"/>
        <!-- <img :src="imageSrc"/> -->
    </div>
</template>

<style scoped>

.wrapper {
    height: 100vh;
    width: 100vw;
    left: 0;
    background-color: rgb(255, 219, 225);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    display: flex;
  }



</style>
