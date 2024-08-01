<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="about">
    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NrdXFvZjBuaWxzZW5wbnI2M2IzMzQ3eHRjY21wcHF3YzdpNmhpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Wsq20ZI3cqj96k8rKC/giphy.webp" width="120" height="111" style="" frameBorder="0" class="logo"/>
    <p class="maintext"> Smile sa bi :> </p>
        <nav>
          <RouterLink to="/fifth">
          <p class="textbutton">
            Next >>>
          </p>
        </RouterLink>
        </nav>
  </div>
</template>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .maintext {
    margin-top: 20px;
    display: flex;
  color: rgb(114, 27, 42);
  font-size: large;
  }
</style>
