<template>
  <div id="homed">
    <img id="jul" src="https://i.imgur.com/CjYFSn8.png" alt>
    <img id="jul1" src="https://i.imgur.com/C9e4XwA.png" alt>

    <i class="material-icons md-150">expand_more</i>

    <img id="skills1" src="https://i.imgur.com/KcPv7OS.png" alt>
    <div class="iframe-container">
      <iframe
        aspect-ratio="1.6"
        width="73%"
        height="470px"
        src="https://www.youtube.com/embed/CGzPwzB5eno"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <v-divider></v-divider>

    <img id="skills1" src="https://i.imgur.com/GXL3S72.png" alt>
    <img id="skills" src="https://i.imgur.com/ylXWqD5.png" alt>

    <div></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    window: 0
  })
};
</script>

<style>
#homed {
  position: relative;
  text-align: center;
  color: #17364a;
}

#jul {
  width: 100%;
  margin-bottom: 40px;
}
.material-icons.md-150 {
  font-size: 150px;
  position: absolute;
  left: 43%;
  top: 27%;
}
#skills {
  width: 100%;
}
#skills1 {
  width: 40%;
 
}
#jul1 {
  position: absolute;
  top: 20%;
  left: 13%;
  width: 70%;
}
.iframe-container {
  margin-bottom: 60px;
}
</style>