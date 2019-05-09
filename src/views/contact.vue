<template>
<div id="all">
  <h1>Contact</h1>
  
  <i id="call" class="material-icons md-50">
call
</i>
<p id="phone">+45 22 70 56 55</p>
<v-sapcer></v-sapcer>
<i id="email" class="material-icons md-50">
email
</i>
<p id="mail">Frederikkohler95@gmail.com</p>

<p id="location_on">Kronsprinsensgade 48, 6700 Esbjerg</p>

<a id="CV" href="https://drive.google.com/open?id=1iwdy3CvPdh1Eyri-lO21icdoVQSpQDhO"> Preview CV</a>
<a id="BC"  href="https://drive.google.com/open?id=1VveEIs5XU_DducR9mdcrsNH9R-Lik4sZ"> Preview Business Card</a>


<i id="location" class="material-icons md-50">
location_on
</i>
</div>
</template>

<style lang="scss" scoped>
#all {
color:#17364A;
}

.material-icons.md-50 {
  font-size: 50px; 
}

h1 {
  font-size: 70px;
  position: absolute;
  left: 10vh;
  top: 2vh;
}
#call {
position: absolute;
top: 20vh;
left: 10vh;


}
#email {
position: absolute;
top: 40vh;
left: 10vh;
}
#location {
position: absolute;
top: 60vh;
left: 10vh;
}

#phone {
  font-size: 50px;
  position: absolute;
  top: 18vh;
  left: 20vh;
}
#mail {
  font-size: 50px;
  position: absolute;
  top: 39vh;
  left: 20vh;
}
#location_on {
  font-size: 50px;
  position: absolute;
  top: 59vh;
  left: 20vh;
}
#CV {
  font-size: 20px;
  text-decoration: none;
  color: #17364A;
  position: absolute;
  top: 80vh;
  left: 70vh;
  border-bottom: 2px solid #17364A;

}
#BC {
  font-size: 20px;
  text-decoration: none;
  color: #17364A;
  position: absolute;
  top: 80vh;
  left: 90vh;
  border-bottom: 2px solid #17364A;
  
}
  
</style>
