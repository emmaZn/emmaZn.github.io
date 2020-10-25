<template>
  <div id="container">
    <img
      class="cloud"
      id="cloud2"
      src=".././assets/cloud2.png"
      alt="little cloud moving"
    />
    <img
      class="cloud"
      id="cloud1"
      src=".././assets/cloud1.png"
      alt="little cloud moving"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.move();
  },
  methods: {
    move() {
      let elem = document.querySelectorAll(".cloud");
      console.log("clouds", elem);
      elem.forEach((cloud) => {
        let rand = Math.floor(Math.random() * (30 - 20 + 1) + 20);
        let rand2 = Math.floor(Math.random() * (600 - 200 + 1) + 200);
        let speed = rand;
        let pos = rand2;
        setInterval(frame, speed);
        function frame() {
          if (pos == 2000) {
            pos = -300;
          } else {
            // console.log("coucou");
            // console.log(cloud.style.right)
            pos++;
            cloud.style.right = pos + "px";
          }
        }
      });
    },
  },
};
</script>

<style>
#container {
  position: relative;
}
.cloud2 {
  position: absolute;
  width: 300px;
  top: 100px;
}
.cloud1 {
  position: absolute;
  width: 200px;
  top: 200px;
}
</style>