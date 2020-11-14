<template>
  <v-app>
    <div id="fullpage">
      <div class="section" id="section1" data-anchor="firstPage">
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
          <v-col cols="10" lg="9" align="right" class="mt-8 pt-16"> </v-col>
        </v-row>
      </div>
      <div class="section" id="section2" data-anchor="secondPage">
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          height="100%"
          transition="fade-transition"
        >
          <v-row class="pt-16 pl-16 ml-16">
            <v-col cols="11" lg="9" align="left" class="mt-16 pt-10">
              <h1>A propos de moi</h1>
            </v-col>
            <v-col cols="10" lg="6" align="left" class="mt-16 ml-16 pt-10">
              <div class="element">
                <v-row @mouseover="changeColor(1)" @mouseleave="removeColor(1)">
                  <v-col cols="2">
                    <svg
                      width="50"
                      height="90"
                      viewBox="0 0 86 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          class="icon"
                          id="planet"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M43 7.16663C23.22 7.16663 7.16669 23.22 7.16669 43C7.16669 62.78 23.22 78.8333 43 78.8333C62.78 78.8333 78.8334 62.78 78.8334 43C78.8334 23.22 62.78 7.16663 43 7.16663ZM14.3334 42.9999C14.3334 40.8141 14.62 38.6641 15.0859 36.6216L32.2142 53.7499V57.3332C32.2142 61.2749 35.4392 64.4999 39.3809 64.4999V71.4157C25.2984 69.6241 14.3334 57.584 14.3334 42.9999ZM57.2975 57.3333C60.5225 57.3333 63.1742 59.4475 64.1058 62.35C68.7642 57.2617 71.6667 50.4533 71.6667 43C71.6667 30.9958 64.2133 20.6758 53.7141 16.4475V17.9166C53.7141 21.8583 50.4892 25.0833 46.5475 25.0833H39.3808V32.25C39.3808 34.2208 37.7683 35.8333 35.7975 35.8333H28.6308V43H50.1308C52.1017 43 53.7141 44.6125 53.7141 46.5833V57.3333H57.2975Z"
                          fill="white"
                          fill-opacity="0.9"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="-4"
                          y="0"
                          width="94"
                          height="97"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="7" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </v-col>
                  <v-col cols="10">
                    <p id="planetText">
                      Originaire de Paris et habitant à Clermont-Ferrand, je
                      suis passionée d’informatique et particulièrement de
                      développement web, domaine transversal et complet.
                    </p>
                  </v-col>
                </v-row>
              </div>
              <div class="element">
                <v-row @mouseover="changeColor(2)" @mouseleave="removeColor(2)">
                  <v-col cols="2">
                    <svg
                      width="50"
                      height="89"
                      viewBox="0 0 86 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          class="icon"
                          id="case"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M56.8854 23.7396H71.2188C75.1963 23.7396 78.3854 26.9287 78.3854 30.9062V70.3229C78.3854 74.3004 75.1963 77.4896 71.2188 77.4896H13.8854C9.90792 77.4896 6.71875 74.3004 6.71875 70.3229L6.75458 30.9062C6.75458 26.9287 9.90792 23.7396 13.8854 23.7396H28.2188V16.5729C28.2188 12.5954 31.4079 9.40625 35.3854 9.40625H49.7188C53.6963 9.40625 56.8854 12.5954 56.8854 16.5729V23.7396ZM35.3854 23.7396H49.7188V16.5729H35.3854V23.7396Z"
                          fill="white"
                          fill-opacity="0.9"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="-4"
                          y="0"
                          width="94"
                          height="97"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="7" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </v-col>
                  <v-col cols="10">
                    <p id="caseText">
                      J’aspire dans le cadre d’une formation en alternance à
                      exercer le metier de développeuse full-stack.
                    </p>
                  </v-col>
                </v-row>
              </div>
              <div class="element">
                <v-row @mouseover="changeColor(3)" @mouseleave="removeColor(3)">
                  <v-col cols="2">
                    <svg
                      width="50"
                      height="92"
                      viewBox="0 0 86 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          class="icon"
                          id="flower"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M31.0317 48.6258C31.5692 48.6258 32.0709 48.59 32.5725 48.5183C34.2567 52.6392 38.3059 55.5417 43 55.5417C47.6942 55.5417 51.7434 52.6392 53.4275 48.5183C53.9292 48.59 54.4667 48.6258 54.9684 48.6258C61.1675 48.6258 66.22 43.5733 66.22 37.3742C66.22 34.83 65.3242 32.3933 63.8192 30.4583C65.36 28.5233 66.22 26.0867 66.22 23.5425C66.22 17.3433 61.1675 12.2908 54.9684 12.2908C54.4309 12.2908 53.9292 12.3267 53.4275 12.3983C51.7434 8.2775 47.6942 5.375 43 5.375C38.3059 5.375 34.2567 8.2775 32.5725 12.3983C32.0709 12.3267 31.5334 12.2908 31.0317 12.2908C24.8325 12.2908 19.78 17.3433 19.78 23.5425C19.78 26.0867 20.6759 28.5233 22.1809 30.4583C20.64 32.3933 19.7442 34.83 19.7442 37.3742C19.7442 43.5733 24.7967 48.6258 31.0317 48.6258ZM43 48.3752C40.7783 48.3752 38.9866 46.6193 38.915 44.4335L39.345 40.5277C40.4916 40.9577 41.71 41.2085 43 41.2085C44.29 41.2085 45.5441 40.9577 46.6908 40.5277L47.085 44.4335C47.0133 46.6193 45.2216 48.3752 43 48.3752ZM52.675 40.7424C53.32 41.2083 54.1084 41.4591 54.9684 41.4591C57.2259 41.4591 59.0892 39.6316 59.0892 37.3383C59.0892 35.7616 58.1575 34.3283 56.7242 33.6474L53.5709 32.1424C53.1409 34.7941 51.7434 37.0874 49.7725 38.6999L52.675 40.7424ZM52.6392 20.1743C53.3558 19.7085 54.1442 19.4576 54.9683 19.4576C57.2258 19.4576 59.0533 21.2851 59.0533 23.5426C59.0533 25.1193 58.1575 26.5168 56.6883 27.2335L53.535 28.7385C53.105 26.0868 51.7075 23.7935 49.7008 22.181L52.6392 20.1743ZM47.085 16.4833C47.0133 14.2975 45.2216 12.5417 43 12.5417C40.7783 12.5417 38.9866 14.2975 38.915 16.4833L39.345 20.3892C40.4916 19.9592 41.71 19.7083 43 19.7083C44.29 19.7083 45.5441 19.9592 46.6908 20.3892L47.085 16.4833ZM31.0317 19.4576C31.8917 19.4576 32.68 19.7085 33.325 20.1743L36.2275 22.181C34.2567 23.7935 32.8592 26.0868 32.4292 28.7385L29.2759 27.2335C27.8425 26.5168 26.9109 25.1193 26.9109 23.5426C26.9109 21.2851 28.7742 19.4576 31.0317 19.4576ZM32.4293 32.1783L29.276 33.6833C27.8426 34.4 26.911 35.7975 26.9468 37.3383C26.9468 39.5958 28.7743 41.4233 31.0318 41.4233C31.856 41.4233 32.6443 41.1725 33.361 40.7066L36.2635 38.7358C34.2568 37.1233 32.8593 34.83 32.4293 32.1783ZM43 80.625C60.8092 80.625 75.25 66.1842 75.25 48.375C57.4408 48.375 43 62.8158 43 80.625ZM10.75 48.375C10.75 66.1842 25.1908 80.625 43 80.625C43 62.8158 28.5592 48.375 10.75 48.375ZM51.7432 71.8815C54.2874 65.0732 59.6982 59.6265 66.5065 57.1182C63.9624 63.9265 58.5515 69.3374 51.7432 71.8815ZM19.4932 57.1182C26.3015 59.6624 31.7482 65.0732 34.2565 71.8815C27.4482 69.3374 22.0374 63.9265 19.4932 57.1182Z"
                          fill="white"
                          fill-opacity="0.9"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="-4"
                          y="0"
                          width="94"
                          height="97"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="7" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </v-col>
                  <v-col cols="10">
                    <p id="flowerText">
                      Curieuse, j’apprécie aussi les aspects les plus ludiques
                      de ma discipline : je développe des compétences en design
                      et ergonomie utilisateur sur mon temps libre.
                    </p>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-lazy>
      </div>
      <div class="section" id="section3" data-anchor="thirdPage">
        <v-balloon></v-balloon>
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          height="100%"
          transition="fade-transition"
        >
          <v-row class="pt-16 pl-16 ml-16" height="100%">
            <v-col cols="11" lg="9" align="left" class="mt-16 pt-10">
              <h1>Ma vie, mon oeuvre</h1>
            </v-col>
            <v-col cols="11" lg="6">
              <v-timeline>
                <v-timeline-item
                  v-for="(year, i) in years"
                  :key="i"
                  :color="year.color"
                  small
                >
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold ${year.color}--text`"
                      v-text="year.year"
                    ></span>
                  </template>
                  <div class="py-0">
                    <h2
                      :class="`headline font-weight-light mb-0 ${year.color}--text`"
                    >
                      Lorem ipsum
                    </h2>
                    <div>
                      {{year.text}}
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-col>
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
        </v-lazy>
      </div>
    </div>
  </v-app>
</template>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
import VCloud from "@/components/VCloud";
import VBalloon from "@/components/VBalloon";

// import { gsap } from "gsap";
export default {
  name: "App",
  components: {
    VCloud,
    VBalloon,
  },
  data: () => ({
    isOnScreen: false,
    years: [
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
      {
        color: "amber",
        year: "2020",
        text : "DUT Informatique en année spéciale"
      },
      {
        color: "orange",
        year: "2021",
        text: "Licence Professionelle Développement Web <br/> Apprentissage au sein de la société SISTEMIC"
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
      let id;
      let idText;
      if (i == 1) {
        id = "planet";
        idText = "planetText";
      } else if (i == 2) {
        id = "case";
        idText = "caseText";
      } else if (i == 3) {
        id = "flower";
        idText = "flowerText";
      }
      let icon = document.getElementById(id);
      let text = document.getElementById(idText);
      icon.setAttribute("fill", "orange");
      console.log("text", text);
      text.setAttribute("style", "color:orange;  text-shadow: 0 0 0");
    },
    removeColor(i) {
      let id;
      let idText;
      if (i == 1) {
        id = "planet";
        idText = "planetText";
      } else if (i == 2) {
        id = "case";
        idText = "caseText";
      } else if (i == 3) {
        id = "flower";
        idText = "flowerText";
      }
      let icon = document.getElementById(id);
      let text = document.getElementById(idText);
      icon.setAttribute("fill", "white");
      console.log("text", text);
      text.setAttribute("style", "color:white");
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
p {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
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
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  z-index: -1;
}

.element:hover:after {
  width: 120%;
}
.element:after {
  background: #ffffff;
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
</style>
