<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="about">
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNlb3dlbGQ2cnZjMnA2dGI5c2l2anU1NXluMmExazMyc29rcWUwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fSCyfykEvtsQnqsoZS/giphy.webp" width="120" height="111" style="" frameBorder="0" class="logo"/>
    <p class="maintext"> Abi nimo ikaw? </p>
        <nav>
          <RouterLink to="/third">
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
