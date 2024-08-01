<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="about">
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHYyZnd3dzhiMWRzdzloYmN5NG80dXFvdHI4YWxlbzhqNmRuMzI0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Hvo7s72zhS6zeBnhDr/giphy.webp" width="120" height="111" style="" frameBorder="0" class="logo"/>
    <p class="maintext"> Of course, ikaw! HAHAHAHA </p>
        <nav>
          <RouterLink to="/fourth">
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
