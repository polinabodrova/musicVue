<template>
  <section id="home">
    <div class="home-page__main-container">
      <div class="home-page__main-container-img">
        <img src="../assets/img/sasha.png" alt="" />
      </div>
      <div class="home-page__main-container-text">
        <h2 class="home-page__main-container-text-h">Official site</h2>
        <div class="container">
          <img
            v-bind:class="{ fouc: afterLoading }"
            src="../assets/img/alex-logo.svg"
            width="450"
            alt=""
          />
        </div>
        <p class="home-page__main-container-text-p">
          “Music expresses feeling and thought, without language; it was below
          and before speech, and it is above and beyond all words.” – Robert G.
          Ingersoll
        </p>
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
  @include respond(tab-port) {
    position: relative;
  }
}
.home-page__main-container {
  // background-image: url(./img/frantisek-unsplash.jpg);
  // background-size: cover;
  // min-height: 102vh;
  // margin-top: -6rem;
  display: flex;
  flex-direction: row;
  @include respond(tab-port) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 35rem;
    width: 60%;
  }
  &-img {
    width: 80%;
    opacity: 0;
    @include respond(tab-land) {
      width: 30%;
      height: 20%;
    }
    @include respond(tab-port) {
      display: none;
    }
  }
  &-text {
    align-self: center;
    font-size: 1.5rem;
    color: white;
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
      font-size: 4.3rem;
      text-transform: uppercase;
      font-weight: 500;
      @include respond(tab-port) {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
    }
    &-p {
      font-size: 1.8rem;
      // padding-top: 1rem;
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
