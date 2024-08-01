<script>
import {RouterLink} from 'vue-router'

export default {
  name: "Fifth",
  mounted() {
    this.video = this.$refs.video
    this.canvas = this.$refs.canvas
    this.startCapture()
  },
  methods: {
    startCapture(){
      navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
        this.video.srcObject = stream
        this.video.play()
      }).catch(error => {
        console.log(error)
      })
    },
    // takePicture(){
    //   let context = this.canvas.getContext('2d')
    //   context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight)
    //   this.$emit('picture-taken', this.canvas.toDataURL('image/png'))
    // },
    initializeCanvas(){
      this.canvas.setAttribute('width', this.video.videoWidth)
      this.canvas.setAttribute('height', this.video.videoHeight)
    }
  },
  data() {
    return {
      video: null,
      canvas: null,
    }
  }
}

</script>

<template>
  <div class="about">
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXk5aHpkMXBmNGdwMGc0OHRzaDQ2OWdtMGtjNmZrMm1xdjlocmJvOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pHSNsdk7IzjzZ4qjOy/giphy.webp" width="120" height="111" style="" frameBorder="0" class="logo"/>

    <div class="polaroid">
      <video ref="video">Unavailable</video>
      <!-- <button @click="takePicture()">Take picture</button> -->
      <canvas ref="canvas" style="display: none;"/>
      <p class="cursive">Happy GF day, boss!</p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cursive {
    margin-top: 20px;
    font-family: "Cedarville Cursive", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    color: rgb(114, 27, 42);
  }

  .maintext {
    margin-top: 20px;
    display: flex;
  color: rgb(114, 27, 42);
  font-size: large;
  }

  .polaroid {
    margin-top: 20px;
    background-color: white;
    height: 70vh;
    width: 38vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
  }
</style>
