<template>
  <v-app>
    <div id="fullpage">
      <div class="section" id="section1">
        <v-cloud></v-cloud>
        <v-row justify="center" class="pt-16">
          <v-col cols="11" lg="9" align="left" class="mt-16 pt-16">
            <h1 class="mb-2">
              Emmanuelle <br />
              <b> ZENOU </b>
            </h1>
            <hr class="trans--grow" id="li" />
            <h3 class="mt-5">Etudiante en développement web</h3>
          </v-col>
        </v-row>
        <v-row justify="center" class="pt-16">
          <v-col cols="11" lg="9" align="right" class="mt-8 pt-16">
            <h1>Mon CV digital</h1>
          </v-col>
        </v-row>
      </div>
      <div class="section" id="section2">
        <v-row justify="center" class="pt-16">
          <v-col cols="11" lg="9" align="left" class="mt-16 pt-10">
            <h1>A propos de moi</h1>
          </v-col>
        </v-row>
      </div>
      <div class="section" id="section3">Some section</div>
      <div class="section" id="section4">Some section</div>
      <div class="section" id="section5">Some section</div>
    </div>
  </v-app>
</template>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
import VCloud from "@/components/VCloud";
// import { gsap } from "gsap";
export default {
  name: "App",
  components: {
    VCloud,
  },
  data: () => ({
    //
  }),
  mounted() {
    let hr = document.getElementById("li");
    console.log("hr", hr);
    setTimeout(function () {
      hr.classList.add("grow");
    }, 200);
  },
};
</script>
<style>
.trans--grow {
  -webkit-transition: width 1s ease-out; /* For Safari 3.1 to 6.0 */
  transition: width 1s ease-out;
  width: 0%;
}
.grow {
  width: 60%;
}
hr {
  margin-top: 20px;
  margin-left: 0;
  height: 0px;
  border: 1px;
  border-top: 2px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
h3,
h1 {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 44px;
  color: #c1c1c1;
  text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
  transition: opacity 900ms ease-in;

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
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
  z-index: 5;
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
