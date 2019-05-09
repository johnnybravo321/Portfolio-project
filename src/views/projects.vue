<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 class="mb-2">
        <h1 class="cayn--text text--lighten-1 font-weight-light">Top Projects</h1>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 sm4 class="mb-2" v-for="(project, index) in projects" :key="index">
        <v-card>
          <v-img v-bind:src="project.imgLink" aspect-ratio="1.6"></v-img>
          <router-link
            id="header-link"
            v-bind:to="{ name: 'project', params:
                {
                id: project.id,
                headline: project.headline, 
                description: project.description, 
                description1: project.description1,
                imgLink: project.Imglink,
                youtubeLink: project.youtubeLink 
                }
            } ">{{ project.headline }}</router-link>

          <v-card-title primary-title>
            <div>
              <span>{{ project.description }}</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="#3b4358"><router-link
            id="header-link1"
            v-bind:to="{ name: 'project', params:
            {id: project.id,
            headline: project.headline, 
            description: project.description, 
            description1: project.description1,
            imgLink: project.Imglink, 
            youtubeLink: project.youtubeLink 
            }} "> See More</router-link></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          headline: "Easv Promotional video",
          description: "A video promoting the Business aceademy southwest, in the quest to get more student",
          description1: "We were given the task of developing a method to attract more students to come and study at EASV. The group and I, of 4 people, decided to make a promo video that highlights the city a little and the school. This would give people a better idea of what kind of institution they would be coming to. We decided to use a teacher as a voiceover, to add a personal touch to the video, and it was important to us that the teacher had confidence and good english. A section of this project was also being able to present the video and its concept to the marketing coordinator of Business Academy Southwest and if the concept proved to be sufficient she would use it",
          imgLink: "https://i.imgur.com/erorJwU.png",
          youtubeLink: "https://www.youtube.com/embed/s11Ym8MmkFk"
        },
        {
          id: 2,
          headline: "GrizzlyMountain",
          description: "Photoshop assignment in dobule exposure",
          description1:"In photography and cinematography, a multiple exposure is the superimposition of two or more exposures to create a single image, and double exposure has a corresponding meaning in respect of two images. The exposure values may or may not be identical to each other. Using photoshop I created a layer mask on my on the original image and decreased the opacity. I created a layer mask on the background and started to take away some of it using the brush tool. ",
          imgLink: "https://i.imgur.com/KzUO5or.png",
          youtubeLink: ""
        },
        {
          id: 3,
          headline: "Let your mind grow",
          description: "Photoshop assignment in dobule exposure",
          description1:"In photography and cinematography, a multiple exposure is the superimposition of two or more exposures to create a single image, and double exposure has a corresponding meaning in respect of two images. The exposure values may or may not be identical to each other. Using photoshop I created a layer mask on my on the original image and decreased the opacity. I created a layer mask on the background and started to take away some of it using the brush tool. ",
          imgLink: "https://i.imgur.com/j3i3fDS.jpg",
            youtubeLink: ""
        },
        {
          id: 4,
          headline: "Info Documentary",
          description: "A info Documentary about Boulder hulen, which explains about the climbing gym",
          description1: "This was a video that was made to be a informercial about a climbing gym in Esbjerg where we wanted to advertise the gym to beginners. We wanted to have some stylish b-roll and show off the gym to catch the attention of the viewer. We had a interview with the manager of the gym so that the viewers would get an insight on what the manager's opinions are and so that the viewer would like the gym is a more down to earth kind of place.",
          imgLink: "https://i.imgur.com/jRtqgHM.png",
          youtubeLink: "https://www.youtube.com/embed/dWiHlWpMhe8"
        },
        {
          id: 5,
          headline: "Space Project",
          description: "A informantional website about our solar system",
          description1:"",
          imgLink: "https://i.imgur.com/topXkmW.png",
            youtubeLink: ""
        },
      ]
    };
    ({ reviews: 413, value: 4.5 });
  }
};
</script>

<style lang="scss" scoped>
a#header-link {
  color: #3b4358;
  font-size: 25px;
  font-weight: 400;
  padding: 10px 5px 0 10px;
  text-decoration: none;
}
  a#header-link1 {
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  padding: 10px 5px;
  text-decoration: none;
}
</style>