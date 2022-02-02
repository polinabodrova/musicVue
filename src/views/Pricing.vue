<template>
  <section id="pricing">
    <logo-section />
    <div v-if="!mobileVersion" class="main-container-price">
      <ModalContact ref="modalRef" :modificator="mod" />
      <div class="price__container">
        <div class="price__container-item" @click="show('basic')">
          <div class="price__container-item-main">
            <div class="price__container-picture picture--1"></div>
            <h3>BASIC</h3>
            <ul>
              <li>Simple demo beat</li>
              <li>(up to 2 minutes)</li>
              <li>Non exclusive license</li>
            </ul>
            <p>$50</p>
          </div>
        </div>
        <div class="price__container-item" @click="show('standart')">
          <div class="price__container-item-main">
            <div class="price__container-picture picture--2"></div>
            <h3>STANDARD</h3>
            <ul>
              <li>Custom beat</li>
              <li>(up to 4 minutes)</li>
              <li>Exclusive license</li>
            </ul>
            <p>$70</p>
          </div>
        </div>
        <div class="price__container-item" @click="show('premium')">
          <div class="price__container-item-main">
            <div class="price__container-picture picture--3"></div>
            <h3>PREMIUM</h3>
            <ul>
              <li>Custom beat</li>
              <li>(up to 4 minutes)</li>
              <li>Exclusive license + Stems</li>
            </ul>
            <p>$90</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mobile">
      <ModalContact ref="modalRef" :modificator="mod" />
      <div class="carousel-container">
        <transition-group class="carousel" tag="div">
          <div v-for="slide in slides" class="slide" :key="slide.id">
            <div class="carousel-item" @click="show(slide.name)">
              <div
                class="carousel-picture"
                :class="'picture--' + slide.id"
              ></div>
              <h3 class="name">{{ slide.name }}</h3>
              <ul>
                <li
                  class="description"
                  v-for="(description, index) in slide.description"
                  :key="index"
                >
                  {{ description }}
                </li>
              </ul>
              <p class="price">${{ slide.price }}</p>
            </div>
          </div>
        </transition-group>
        <div class="carousel-controls">
          <button class="carousel-controls__button" @click="previous">
            &#60;
          </button>
          <button class="carousel-controls__button" @click="next">&#62;</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ModalContact from "../components/ModalContact.vue";
export default {
  name: "Pricing",
  components: { ModalContact },
  data() {
    return {
      mobileVersion: false,
      mod: "default",
      slides: [
        {
          id: 1,
          name: "BASIC",
          description: [
            "Simple demo beat",
            "(up to 2 minutes)",
            "Non exclusive license",
          ],
          price: 50,
          img: "../assets/img/guitar2.jpg",
        },
        {
          id: 2,
          name: "STANDARD",
          description: [
            "Custom beat",
            "(up to 4 minutes)",
            "Exclusive license",
          ],
          price: 70,
          img: "../assets/img/piano.jpg",
        },
        {
          id: 3,
          name: "PREMIUM",
          description: [
            "Custom beat",
            "(up to 4 minutes)",
            "Exclusive license + Stems",
          ],
          price: 90,
          img: "../assets/img/studio.jpg",
        },
      ],
    };
  },

  computed: {
    // mobileVersion: function () {
    //   if (window.innerHeight > window.innerWidth) {
    //     return false;
    //   } else return true;
    // },
  },

  methods: {
    onResize() {
      if (window.innerHeight / 0.8 > window.innerWidth) {
        console.log("mobile");
        this.mobileVersion = true;
      } else this.mobileVersion = false;
    },
    show(pack) {
      this.mod = pack;
      this.$refs.modalRef.show();
    },
    hide() {
      this.$refs.modalRef.hide();
    },
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    if (window.innerHeight / 0.8 > window.innerWidth) {
      console.log("this is mobile");
      this.mobileVersion = true;
    } else {
      // const priceCont = document.querySelector(".price__container");
      // priceCont.style.overflow = "scroll";
      document.body.style.overflowY = "scroll";
      this.mobileVersion = false;
    }

    // let isMobile = /iPhone|Android/i.test(navigator.userAgent);
    // if (isMobile) {
    //   /* your code here */
    //   this.mobileVersion = true;
    //   console.log("this is mobile here");
    // }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
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

.mobile {
  border-radius: 10px;
  padding: 6rem;
  transition: all 0.2s;
  text-align: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  height: 60vh;
  align-items: center;
  // padding: 50px 0;

  background: transparent;
  margin: 20px 0;
}

.carousel-controls__button {
  cursor: pointer;
  background: $greenblue;
  border: 0;
  color: #fff;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 18px;
  margin: 5px;
}

.carousel-picture {
  background-blend-mode: color;
  background-size: cover;
  height: 30rem;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.carousel-item {
  width: 100%;
  height: 100%;
  background-color: #5b64679b;
  position: relative;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  font-size: 2rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px #292c32;
}

.name {
  font-size: 2.5rem;
  text-shadow: 1px 1px 5px #000000;
}

.description {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  // padding-top: 1.5rem;
}

.price {
  font-size: 2.2rem;
}

h3 {
  color: $greenblue;
}

p {
  padding: 0.5rem;
  font-size: 2.5rem;
}

ul {
  list-style-type: none;
}

// .main-container-price {
//   overflow: scroll !important;
//   // overflow-x: hidden;
// }

.price__container-picture {
  background-blend-mode: color;
  background-size: cover;
  height: 20rem;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.picture--1 {
  background-image: linear-gradient(to right bottom, $greenblue, $main),
    url(../assets/img/guitar2.jpg);
}
.picture--2 {
  background-image: linear-gradient(to right bottom, $greenblue, $main),
    url(../assets/img/piano.jpg);
}
.picture--3 {
  background-image: linear-gradient(to right bottom, $greenblue, $main),
    url(../assets/img/studio.jpg);
}
.main-container-price {
  position: absolute;
  background-color: #5b6467;
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%),
    url(../assets/img/background_sasha.jpg);
  background-blend-mode: multiply;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
  top: 0rem;
  // @include respond(phone) {
  //   overflow: scroll !important;
  //   -webkit-overflow-scrolling: touch;
  //   height: 100%;
  // }
}

////////previous version
.price__container {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 20rem;
  flex-wrap: wrap;
  cursor: pointer;
  @include respond(phone) {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
  &-item {
    position: relative;
    flex-basis: 27rem;
    height: auto;
    margin: 3rem;

    @include respond(phone) {
      // max-width: 33.333%;
      // // padding: 0.75rem;
      // // margin-bottom: 5rem;
      // // border: 0;
      // flex-basis: 33.333%;
      // // flex-grow: 0;
      // flex-shrink: 0;
    }

    &:hover &-main {
      transform: translateY(-2rem);
      text-shadow: 1px 1px 7px #000000;
    }

    &-main {
      height: 40rem;
      background-color: #5b64679b;
      position: relative;
      border-radius: 4px;
      transition: 0.3s ease-in-out;
      font-size: 2rem;
      text-align: center;
      color: white;
      text-shadow: 1px 1px 1px #292c32;
      // overflow: hidden;
      @include respond(tab-port) {
      }
    }
  }
}
@media screen and (max-height: 500px) and (orientation: landscape) {
  .price__container {
    margin-top: 10rem;
  }
}
</style>
