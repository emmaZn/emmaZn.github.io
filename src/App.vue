<template>
  <v-app>
    <div id="fullpage">
      <div class="section" id="section1" data-anchor="firstPage">
        <v-cloud></v-cloud>
        <v-parallax src="./assets/profil.jpg" height="400">
          <v-row justify="center">
            <v-col cols="11" lg="7" align="center">
              <button class="funbtn" id="phone">
                <v-icon dark large class="mr-3 pl-2">mdi-phone</v-icon>
                0658913930
              </button>
              <button class="funbtn" id="mail">
                <v-icon large dark class="mr-3 pl-2">mdi-email</v-icon>
                emmanuelle.zenou.rogala@gmail.com
              </button>
              <button class="funbtn" id="linkedin">
                <v-icon dark large class="mr-3 pl-2">mdi-linkedin</v-icon>
              </button>

              <h1 class="mb-2">
                Emmanuelle
                <b> ZENOU </b>
              </h1>
              <hr class="trans--grow" id="li" />
              <h3 class="mt-5">Etudiante en développement web</h3>
            </v-col>
          </v-row>
        </v-parallax>
        <v-btn class="mt-16" href="#secondPage" dark>Découvrez-moi</v-btn>
      </div>
      <div class="section" id="section2" data-anchor="secondPage">
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          height="100%"
          transition="fade-transition"
        >
          <v-row no-gutters justify="center">
            <v-col cols="12">
              <h1 class="head">A propos</h1>
            </v-col>
            <v-col cols="12" lg="2" class="mt-8 ml-3 mr-3">
              <v-card
                class="mx-auto"
                max-width="400"
                height="520px"
                elevation="17"
                tile
                dark
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="./assets/dev.jpg"
                >
                </v-img>
                <v-card-title>Métier-Passion</v-card-title>
                <v-card-text>
                  <div>
                    M'épanouissant dans la pratique du développement web, j'aime
                    mettre à profit mes compétences au sein de projets
                    professionnels comme personnels. Je m'implique
                    continuellement dans l'apprentissage de nouvelles
                    technologies et dans la maitrise des technologies acquises.
                    Ce domaine challengeant ne cesse de me passionner et c'est
                    pourquoi j’aspire dans le cadre d’une formation en
                    alternance à exercer le metier de développeuse full-stack.
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="2" class="mt-8 ml-3 mr-3">
              <v-card
                class="mx-auto"
                max-width="400"
                height="520px"
                elevation="17"
                tile
                dark
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="./assets/art.png"
                >
                </v-img>
                <v-card-title>Art et Design</v-card-title>
                <v-card-text>
                  <div>
                    Curieuse et créative, j’apprécie aussi les aspects les plus
                    ludiques de ma discipline : je développe des compétences en
                    design et ergonomie utilisateur sur mon temps libre. De
                    plus, je pratique la peinture acrylique en loisir mais ne
                    saurait m'y cantonner: la peinture aquarelle et la peinture
                    de figurine font aussi parti de mes hobbies.
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="2" class="mt-8 ml-3 mr-3">
              <v-card
                dark
                class="mx-auto"
                max-width="400"
                height="520px"
                elevation="17"
                tile
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="./assets/puy.jpg"
                >
                </v-img>
                <v-card-title>Mon parcours</v-card-title>

                <v-card-text>
                  <div>
                    C'est à la suite d'un DUT Informatique en année spéciale que
                    je suis en formation au sein de la Licence Professionnelle
                    Développement web et mobile de l'Université de
                    Cergy-Pontoise. J'effectue mon apprentissage dans la société
                    SISTEMIC basée à Clermont-Ferrand. J'ai donc la chance de me
                    former en développement front-end et back-end pour
                    différents projets tous aussi ambitieux les uns que les
                    autres.
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <div class="multibuttons">
                <v-btn class="mt-16" dark>Télécharger mon CV</v-btn>
              </div></v-col
            >
          </v-row>
        </v-lazy>
      </div>

      <div class="section" id="section4" data-anchor="fourthPage">
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          height="100%"
          transition="fade-transition"
        >
          <v-row no-gutters justify="center">
            <v-col cols="12">
              <h1 class="head">Mes compétences</h1>
            </v-col>
            <v-row style="margin-left: 32%; margin-right: 32%">
              <v-col v-for="(app, i) in apps" :key="i" cols="4" align="center">
                <v-card tile elevation="16">
                  <v-img
                    height="200px"
                    width="200px"
                    :src="require(`./assets/${app.image}`)"
                    :lazy-src="require(`./assets/${app.image}`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-row>
        </v-lazy>
      </div>

      <div class="section" id="section5" data-anchor="fifthPages">
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          height="100%"
          transition="fade-transition"
        >
          <v-row no-gutters justify="center">
            <v-col cols="12">
              <h1 class="head">Contact</h1>
            </v-col>
            <v-col cols="12" lg="5" class="mt-16">
              <v-card elevation="17" dark tile class="mt-16">
                <v-form>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-text-field
                        v-model="object.lastname"
                        :rules="required"
                        label="Nom"
                        required
                        dark
                        class="pa-3"
                      ></v-text-field>
                      <v-text-field
                        v-model="object.firstname"
                        :rules="required"
                        label="Prénom"
                        required
                        dark
                        class="pa-3"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="object.mail"
                        :rules="required"
                        label="Adresse mail"
                        required
                        dark
                        class="pa-3"
                      ></v-text-field>
                      <v-text-field
                        v-model="object.phone"
                        :rules="required"
                        label="Numéro de téléphone"
                        required
                        dark
                        class="pa-3"
                      ></v-text-field>
                    </v-col>
                    <v-textarea
                      v-model="object.message"
                      outlined
                      name="input-7-4"
                      label="Votre message"
                      dark
                      class="pa-5"
                    /> </v-row
                  ><v-btn dense class="mb-5">Envoyer</v-btn>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-lazy>
      </div>
    </div>
  </v-app>
</template>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
import VCloud from "@/components/VCloud";
import VBalloon from "@/components/VBalloon";
import VPortrait from "./components/VPortrait";
// import { gsap } from "gsap";
export default {
  name: "App",
  components: {
    VCloud,
    VBalloon,
    VPortrait,
  },
  data: () => ({
    isOnScreen: false,
    object: {
      lastname: "",
      firstname: "",
      mail: "",
      phone: "",
      message: "",
    },
    years: [
      {
        color: "orange",
        year: "2021",
        title: "Licence Professionelle Développement Web ",
        text: "Apprentissage au sein de la société SISTEMIC. ",
      },
      {
        color: "amber",
        year: "2020",
        title: "DUT Informatique en année spéciale",
      },
      {
        color: "cyan",
        year: "1960",
      },
      {
        color: "green",
        year: "1970",
      },
      {
        color: "pink",
        year: "1980",
      },
    ],
    apps: [
      {
        name: "HTML",
        image: "html.png",
      },
      {
        name: "CSS",
        image: "css.png",
      },
      {
        name: "JS",
        image: "java.png",
      },
      {
        name: "VueJS",
        image: "vue.png",
      },
      {
        name: "Ionic",
        image: "ionic.jpg",
      },
      {
        name: "NodeJS",
        image: "node.png",
      },
      {
        name: "PHP",
        image: "php.png",
      },
      {
        name: "mySQL",
        image: "mysql.png",
      },
      {
        name: "mongoDB",
        image: "mongo.png",
      },
    ],
  }),
  mounted() {
    let hr = document.getElementById("li");
    console.log("hr", hr);
    setTimeout(function () {
      hr.classList.add("grow");
    }, 200);
  },

  methods: {
    changeColor(i) {
      // let id;
      // let idText;
      // if (i == 1) {
      //   id = "planet";
      //   idText = "planetText";
      // } else if (i == 2) {
      //   id = "case";
      //   idText = "caseText";
      // } else if (i == 3) {
      //   id = "flower";
      //   idText = "flowerText";
      // }
      // let icon = document.getElementById(id);
      // let text = document.getElementById(idText);
      // icon.setAttribute("fill", "black");
      // console.log("text", text);
      // text.setAttribute("style", "color:black;  text-shadow: 0 0 0");
    },
    removeColor(i) {
      // let id;
      // let idText;
      // if (i == 1) {
      //   id = "planet";
      //   idText = "planetText";
      // } else if (i == 2) {
      //   id = "case";
      //   idText = "caseText";
      // } else if (i == 3) {
      //   id = "flower";
      //   idText = "flowerText";
      // }
      // let icon = document.getElementById(id);
      // let text = document.getElementById(idText);
      // icon.setAttribute("fill", "white");
      // console.log("text", text);
      // text.setAttribute("style", "color:white");
    },
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
  border-top: 1px solid white;
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
p {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #c1c1c1;
  text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
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
.bg {
  position: fixed;
  top: 60%;
  height: 00px;
  width: 100%;
  background-color: white;
}
.head {
  margin-top: 0;
  font-family: "Open Sans Condensed";
  font-style: normal;
  font-weight: 300;
  font-size: 65px;
  line-height: 100px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 5;
  text-align: left;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 40px;
}
.element {
  display: block;
  width: 100%;
  position: relative;
  z-index: 2;
  text-decoration: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.element:after {
  content: "";
  height: 100%;
  left: 0;
  top: 0;
  width: 0px;
  position: absolute;
  transition: all 0.3s ease 0.1s;
  -webkit-transition: all 0.3s ease 0.1s;
  background: black;
  z-index: -1;
}

.element:hover:after {
  width: 120%;
  transform: skew(-10deg);
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: white !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.funbtn {
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  justify-content: start;
  background: #212121;
  border-radius: 25px;
  white-space: nowrap;
  margin: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}
.funbtn#mail:hover {
  width: 400px;
}
.funbtn#phone:hover {
  width: 200px;
}
.funbtn#linkedin:hover {
  transform: scale(1.2);
}
</style>
