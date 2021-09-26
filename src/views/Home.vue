<template>
  <section id="home">
    <div class="home-page__main-container">
      <div class="home-page__main-container-text">
        <h2 class="home-page__main-container-text-h">About</h2>
        <img
          v-bind:class="{ fouc: afterLoading }"
          src="../assets/img/alex-logo.svg"
          width="450"
          alt=""
        />
        <p class="home-page__main-container-text-p">
          Alex is a freelance music producer and beatmaker. His experience and
          inspiration is what makes his beats unique and colorful. The beats he
          creates are thoughtfully handcrafted and tailored for you.
        </p>
      </div>
      <div class="home-page__main-container-img">
        <img src="../assets/img/IMG_2086.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      afterLoading: false,
    };
  },
  name: "Home",
  components: {
    // HelloWorld,
  },

  methods: {},
};
</script>

<style scoped lang="scss">
$main: #393e46;
$greenblue: #00adb5;
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 37.5em) {
      @content;
    } // 600px
  }
  @if $breakpoint == tab-port {
    @media (max-width: 56.25em) {
      @content;
    } // 900px
  }
  // @if $breakpoint == tab-apple {
  //   @media (max-width: 1024px) {
  //     @content;
  //   } //NEW
  // }
  @if $breakpoint == tab-land {
    @media (max-width: 75em) {
      @content;
    } //1200px
  }
  @if $breakpoint == big-desktop {
    @media (min-width: 112.5em) {
      @content;
    } //1800
  }
}
.fouc {
  display: none;
}
#home {
  height: 93vh;
  @include respond(tab-port) {
    position: relative;
  }
}
.home-page__main-container {
  width: 54%;
  display: flex;
  height: 99%;
  align-items: center;
  background-color: rgba(250, 249, 254, 0.1);
  margin-left: 1rem;

  @include respond(tab-port) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 35rem;
    width: 60%;
  }
  &-img {
    width: 45%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 100%;
      height: 100%;
    }
    @include respond(tab-land) {
      width: 30%;
      height: 20%;
    }
    @include respond(tab-port) {
      display: none;
    }
  }
  &-text {
    // font-size: 1.7rem;
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include respond(tab-port) {
      width: 90%;
      margin: 0 auto;
    }
    &img {
      @include respond(tab-port) {
        // max-width: 100%;
        // height: auto;
        display: inline-block;
        margin: auto;
        // width: 60%;
      }
    }
    &-h {
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: 500;
      @include respond(tab-port) {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
    }
    &-p {
      padding-top: 2.5rem;
      font-size: 2rem;
      width: 50%;
      @include respond(tab-port) {
        text-align: center;
        margin-top: 2rem;
      }
    }
  }
  @include respond(tab-port) {
    // justify-content: center;
  }
  .container {
    @include respond(tab-port) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
