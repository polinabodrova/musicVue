<template>
  <section id="pricing">
    <logo-section />
    <div class="main-container-price">
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
  </section>
</template>
<script>
import ModalContact from "../components/ModalContact.vue";
export default {
  name: "Pricing",
  components: { ModalContact },
  data() {
    return {
      mod: "default",
    };
  },
  methods: {
    show(pack) {
      this.mod = pack;
      this.$refs.modalRef.show();
    },
    hide() {
      this.$refs.modalRef.hide();
    },
  },
  mount() {},
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

body,
html {
  // overflow-x: hidden;
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
.main-container {
  position: absolute;
  background-color: #5b6467;
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%),
    url(../assets/img/background_sasha.jpg);
  background-blend-mode: multiply;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
  top: 0rem;
}
.price__container {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 20rem;
  flex-wrap: wrap;
  cursor: pointer;
  @include respond(tab-port) {
    // margin-top: 20rem;
  }
  &-item {
    position: relative;
    flex-basis: 27rem;
    height: auto;
    margin: 3rem;

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
</style>
