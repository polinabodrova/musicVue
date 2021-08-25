<template>
  <div>
    <div class="home-page__main-container">
      <div class="home-page__main-container-img">
        <img src="../assets/img/sasha.png" alt="" />
      </div>
      <div class="home-page__main-container-text">
        <h2 class="home-page__main-container-text-h">Official site</h2>
        <img src="../assets/img/alex-logo.svg" width="550" alt="" />
        <p class="home-page__main-container-text-p">
          “Music expresses feeling and thought, without language; it was below
          and before speech, and it is above and beyond all words.” – Robert G.
          Ingersoll
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped lang="scss">
$main: #393e46;
$greenblue: #00adb5;
.home-page__main-container {
  // background-image: url(./img/frantisek-unsplash.jpg);
  // background-size: cover;
  // min-height: 102vh;
  // margin-top: -6rem;
  display: flex;
  flex-direction: row;
  &-img {
    width: 80%;
    opacity: 0;
  }
  &-text {
    align-self: center;
    font-size: 1.5rem;
    color: white;
    &-h {
      font-size: 4.3rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    &-p {
      font-size: 1.8rem;
      // padding-top: 1rem;
    }
  }
}
</style>
