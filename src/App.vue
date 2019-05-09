<template id="turbo">
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span >My Portfolio</span>
        <span class="font-weight-light">Page</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link id="home" to="/">Home</router-link>
      <router-link id="projects" to="/projects">Projects</router-link>
      <router-link id="contact" to="/contact">Contact</router-link>


      <v-spacer></v-spacer>

      <v-btn flat depressed class="custom-btn" href="https://www.facebook.com/Frederik.K.Christ"> <img  id="fb" src="./assets/fb.png" height="30px" alt=""></v-btn>
      <v-btn flat depressed class="custom-btn" href="https://www.linkedin.com/in/frederik-køhler-christensen"> <img id="li" src="./assets/li.png" height=30px alt=""></v-btn>
      <v-btn flat depressed class="custom-btn" href="https://www.instagram.com/frederik_koehler/?hl=da"><img id="ig" src="./assets/ig.png" height=30px alt=""></v-btn>


    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style>


#home {
  
  margin-right: 20px;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid #000000;
}
#projects {
   margin-right: 20px;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid #000000;
}

#contact {
  text-decoration: none;
  color: black;
  border-bottom: 2px solid #000000;
}

#fb {
  margin-right: 18px;
}
#li {
  margin-right: 18px;
}
#ig {
  margin-right: 12px;
  margin-top: 4px;
}
.custom-btn::before {
    color: transparent
}

.custom-btn:hover {
    color:transparent;
}
.custom-btn::after {
    color: transparent
}
</style>