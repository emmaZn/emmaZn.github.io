<template>
  <span>
    <!-- <img
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
    <img
      class="cloud"
      id="cloud3"
      src=".././assets/cloud3.png"
      alt="little cloud moving"
    />
    <img
      class="cloud"
      id="cloud4"
      src=".././assets/cloud4.png"
      alt="little cloud moving"
    />
    <img
      class="cloud"
      id="cloud5"
      src=".././assets/cloud5.png"
      alt="little cloud moving"
    /> -->
  </span>
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
      let speed;

      elem.forEach((cloud) => {
        speed = Math.floor(Math.random() * (180000 - 200900) + 200900);
        // let rand = Math.floor(Math.random() * (40 - 20 + 1) + 20);
        // let speed = rand;
        // let pos = cloud.style.right;

        cloud.animate([{ transform: "translate(-1500px)" }], {
          duration: speed,
          iterations: Infinity,
          easing: "ease",
          direction: "alternate"
        });
      });
    },
  },
};
</script>

<style>
.cloud {
  position: fixed;
}
#cloud1 {
  width: 200px;
  top: 10px;
  right: -20px;
}
#cloud2 {
  width: 300px;
  top: 10%;
  right: -60%;
}

#cloud3 {
  top: 20%;
  width: 10%;
  right: -23%;
}
#cloud4 {
  width: 250px;
  top: 65%;
  right: 20%;
}
#cloud5 {
  width: 250px;
  right: 50%;
  top:70%;
}
</style>