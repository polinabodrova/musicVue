<template>
  <div id="app">
    <div>
      <nav>
        <div class="logo">
          <img
            v-if="$route.path === '/'"
            class="nav__container-logo-img"
            src="./assets/img/alex-logo.svg"
            width="130"
            alt=""
          />
        </div>
        <ul
          class="nav-links"
          v-bind:class="{ ['nav-active']: toggleNav, transform: toggleNav }"
        >
          <router-link
            v-bind:class="{
              ['animate__animated animate__fadeInRight delay1']: toggleNav,
            }"
            to="/"
            >Home</router-link
          >
          <router-link
            v-bind:class="{
              ['animate__animated animate__fadeInRight delay2']: toggleNav,
            }"
            to="/work"
            >Work</router-link
          >
          <router-link
            v-bind:class="{
              ['animate__animated animate__fadeInRight delay3']: toggleNav,
            }"
            to="/pricing"
            >Pricing</router-link
          >
          <router-link
            v-bind:class="{
              ['animate__animated animate__fadeInRight delay4']: toggleNav,
            }"
            to="/contacts"
            >Contacts</router-link
          >
        </ul>
        <div class="burger" v-on:click="toggleNav = !toggleNav">
          <div
            v-bind:class="{
              ['burger-line1']: toggleNav,
            }"
          ></div>
          <div
            v-bind:class="{
              ['burger-line2']: toggleNav,
            }"
          ></div>
          <div
            v-bind:class="{
              ['burger-line3']: toggleNav,
            }"
          ></div>
        </div>
      </nav>
      <transition name="fade">
        <section
          id="initial-page"
          v-bind:class="{ out: initialPageOut }"
          v-if="initialPage"
        >
          <img
            class="pic"
            src="./assets/initial-page-background/5-opt.jpg"
            alt=""
          />
          <div class="initial-page__logo">
            <span
              class="
                initial-page__logo-name
                logo-name
                animate__animated animate__fadeInUp
                delay2
              "
              >alex</span
            >
            <span
              class="
                initial-page__logo-name
                logo-surname
                animate__animated animate__fadeInUp
                delay4
              "
              >Naumov</span
            >
          </div>
        </section>
      </transition>

      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initialPage: true,
      initialPageOut: false,
      enterName: false,
      enterSurname: false,
      exitName: false,
      exitSurname: false,
      toggleNav: false,
    };
  },
  watch: {
    $route() {
      if (window.innerWidth < 908) this.toggleNav = !this.toggleNav;
    },
  },
  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.initialPage = false;
    // }, 3000);
    // this.$router.push("/");
    // setTimeout(() => {
    //   this.enterName = true;
    // }, 500);
    // setTimeout(() => {
    //   this.enterSurname = true;
    // }, 1000);
    // setTimeout(() => {
    //   // this.exitName = true;
    //   // this.exitSurname = true;
    // }, 2700);
    setTimeout(() => {
      this.initialPage = false;
    }, 3000);
  },
};
</script>
<style lang="scss">
//BASIC
displayMenu {
  display: none;
}
$main: #393e46;
$greenblue: #00adb5;
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
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
html {
  //1200-1800 our normal size
  font-size: 62.5%; //1 rem = 10px; 10/16*100
  @include respond(tab-land) {
    font-size: 56.25%; //1 rem = 9px (900-1200px) <1200
  }
  @include respond(tab-port) {
    font-size: 50%; //1 rem = 8px (600-900px) <900
  }
  @include respond(big-desktop) {
    font-size: 75%; //1 rem = 8px (1800px) <1800
  }
}
body {
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.7;
  font-family: "Lato", sans-serif;
  overflow-x: hidden;
  background-image: url(./assets/img/peter-unsplash.jpg);
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
}

//INITIAL SPLASH PAGE
#initial-page {
  position: fixed;
  z-index: 1;
  // left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #07090f;
  // background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  // background-image: url(./assets/img/curve.svg);
  // background-image: url(./assets/initial-page-background/5-opt.jpg);
  background-size: cover;
  transition: 1.2s;
  font-size: 11rem;
  font-weight: 100;
  letter-spacing: -1.5px;
  z-index: 5;
  @include respond(tab-port) {
    letter-spacing: -1px;
    font-size: 6.5rem;
  }
}
.pic {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  animation-name: fade-in;
  animation-duration: 3.5s;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  // animation: fade-in 0.2s forwards;
  // opacity: 0;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// @keyframes fade-in {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

// .content {
//   animation: fade-in .4s ease;
// }

.initial-page__logo {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  white-space: nowrap;
  text-shadow: 2px 2px 2px black;
  &-name {
    position: relative;
    display: inline-block;
    // bottom: 0rem;
    opacity: 1;
  }
}
// .logo-active {
//   bottom: 0;
//   opacity: 1;
//   transition: ease-in-out 0.5s;
// }
.logo-name {
  z-index: 1;
  left: 1.7rem;
}

// .logo-bottom {
//   bottom: 15rem;
//   opacity: 0;
//   transition: ease-in-out 0.5s;
//   filter: blur(2rem);
// }
.logo-surname {
  // position: relative;
  color: $greenblue;
  text-transform: uppercase;
}
.out {
  filter: blur(2rem);
  top: -100%;
}
//////INITIAL PAGE ANIMATION
.fade-leave-active {
  transition: 0.5s;
}
.fade-leave-to {
  transform: translateY(-100%);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 2;
  // min-height: 5vh;
  // margin: 0.5rem;
}
.router-link-exact-active {
  color: $greenblue !important;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 30%;
  z-index: 2;
  & a {
    color: white;
    text-decoration: none;
    font-size: 1.9rem;
    letter-spacing: 1px;
    // font-weight: bold;
  }
  & li {
    list-style: none;
  }
}
.burger {
  display: none;
  z-index: 2;
  & div {
    width: 2.5rem;
    height: 0.3rem;
    background-color: #fff;
    margin: 0.5rem;
    transition: all 0.3s ease;
  }
}

@media screen and (max-width: 908px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    width: 100%;
    position: absolute;
    right: 0;
    height: 100vh;
    top: 0vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    z-index: 3;
    justify-content: space-evenly;
    &router-link {
      opacity: 0;
      transition: transform 3s ease-in;
    }
  }

  .transform {
    transition: transform 0.2s ease-in;
  }

  .burger {
    display: block;
    cursor: pointer;
    z-index: 3;
    &-line1 {
      transform: rotate(-45deg) translate(-0.5rem, 0.5rem);
    }
    &-line2 {
      background-color: transparent !important;
    }
    &-line3 {
      transform: rotate(45deg) translate(-0.6rem, -0.7rem);
    }
  }
}
.nav-active {
  transform: translateX(0%);
}
//NAV-LINKS ANIMATIONS
.delay1 {
  animation-delay: 0.1s;
}
.delay2 {
  animation-delay: 0.2s;
}
.delay3 {
  animation-delay: 0.3s;
}
.delay4 {
  animation-delay: 0.4s;
}
</style>
