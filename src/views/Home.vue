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
          <span class="home-page__main-container-text-p-first-word">
            Alex
          </span>
          is a freelance music producer and beatmaker. His experience and
          inspiration is what makes his beats unique and colorful. The beats he
          creates are thoughtfully handcrafted and tailored for you.
        </p>
      </div>
      <div class="home-page__main-container-img">
        <img src="../assets/img/IMG_2083.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      afterLoading: false,
    };
  },
  name: "Home",
  components: {},

  methods: {},
};
</script>

<style scoped lang="scss">
$main: #393e46;
$greenblue: #00adb5;
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 600px) {
      @content;
    } // 600px
  }
  @if $breakpoint == tab-port {
    @media (max-width: 900px) {
      @content;
    } // 900px
  }
  // @if $breakpoint == tab-apple {
  //   @media (max-width: 1024px) {
  //     @content;
  //   } //NEW
  // }
  @if $breakpoint == tab-land {
    @media (max-width: 1279px) {
      @content;
    } //1200px
  }
  @if $breakpoint == big-desktop {
    @media (min-width: 1800px) {
      @content;
    } //1800
  }
}
.fouc {
  display: none;
}
#home {
  height: 93vh;
  overflow-x: hidden;
  @include respond(tab-land) {
    position: relative;
  }
}
.home-page__main-container {
  width: 55%;
  display: flex;
  height: 99%;
  min-height: 700px;
  background-color: rgba(250, 249, 254, 0.1);
  margin-left: 1rem;

  @include respond(tab-land) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    margin-left: 0;
    min-height: 500px;
  }

  &-img {
    position: absolute;
    top: 0;
    right: 0;
    img {
      height: 100vh;
      min-height: 700px;
      @include respond(phone) {
        height: 95vh;
        min-height: 400px;
      }
    }
    @include respond(tab-land) {
      top: 0;
      left: 0rem;
      z-index: -2;
      opacity: 0.3;
    }
    @include respond(phone) {
      left: 0rem;
    }
  }
  &-text {
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    @include respond(tab-land) {
      width: 90%;
      margin: 0 auto;
    }
    img {
      @include respond(tab-land) {
        max-width: 95%;
        min-width: 100%;
        display: inline-block;
        margin: auto;
      }
    }
    &-h {
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: 500;
      @include respond(tab-land) {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
    }
    &-p {
      padding-top: 3rem;
      font-size: 2rem;
      width: 70%;
      text-align: center;
      &-first-word {
        font-weight: 600;
      }
      @include respond(tab-land) {
        width: 90%;
        text-align: center;
        margin-top: 2rem;
      }
    }
  }
  .container {
    @include respond(tab-land) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
