<template>
  <v-app>
    <div id="fullpage">
      <div class="section" id="section1">
        <div id="canvas">
        <img class="cloud2" src="./assets/cloud2.png" alt="little cloud moving" />
        </div><v-row justify="center" class="pt-16">
          <v-col cols="11" lg="9" align="left" class="mt-16 pt-16">
            <h1 class="mb-2">
              Emmanuelle <br />
              <b> ZENOU </b>
            </h1>
            <hr />
            <h3 class="mt-5">Etudiante en développement web</h3>
          </v-col>
        </v-row>
      </div>
      <div class="section" id="section2">Some section</div>
      <div class="section" id="section3">Some section</div>
      <div class="section" id="section4">Some section</div>
      <div class="section" id="section5">Some section</div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
h1 {
  margin-top: 0;
  font-family: "Open Sans Condensed";
  font-style: normal;
  font-weight: 300;
  font-size: 96px;
  line-height: 100px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  color: white;
  letter-spacing: 0.5rem;
}
hr {
  width: 50%;
  height: 1px;
  border: 0;
  border-top: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
h3 {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 44px;
  color: #c1c1c1;
  text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
}
#section1 {
  background: linear-gradient(180deg, #0b525b 0%, #144552 100%);
}
#section2 {
  background: linear-gradient(180deg, #144552 0%, #1b3a4b 100%);
}
#section3 {
  background: linear-gradient(180deg, #1b3a4b 0%, #272640 100%);
}
#section4 {
  background: linear-gradient(180deg, #272640 0%, #312244 100%);
}
#section5 {
  background: linear-gradient(180deg, #312244 0%, #4d194d 100%);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
