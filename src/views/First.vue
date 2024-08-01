<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="about">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGg0dGQ0MmcxMzNldTNydWxnaW80dms0a2p6MHI0cDBwMWZ6OXozbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2widz3Ak6YuqdEJ2MI/giphy.webp" width="80" height="74" style="" frameBorder="0" class="logo"/>
        <nav>
          <RouterLink to="/second">
          <p class="textbutton">
            Click to reveal kinsay best gurl!
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

  .textbutton {
    margin-top: 20px;
  display: flex;
  color: rgb(114, 27, 42);
  font-size: large;
}

.textbutton:hover {
  color: rgb(190, 57, 80);
  cursor: pointer;
}
</style>
