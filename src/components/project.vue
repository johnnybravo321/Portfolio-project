<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>



        <div class="iframe-container">
          <iframe
            width="721px"
            height="400px"
            v-bind:src="project.youtubeLink"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
  
    
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ project.headline }}</div>
            <span class="grey--text">{{ project.description }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <Span> See more</Span>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text
            v-show="show"
          > {{ project.description1 }}</v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    var project = this.$route.params;
    return {
      show: false,
      project: {
        id: project.id,
        headline: project.headline,
        description: project.description,
        description1: project.description1,
        description2: project.description2,
        imgLink: project.Imglink,
        youtubeLink: project.youtubeLink 
      },
      doneLoading : 0}
    }
  };

</script>

<style lang="scss" scoped>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

iframe img {
    height: 300px;
    width: 300px;
}

/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}
</style>