<template>
  <section id="pricing">
    <logo-section />
    <div class="main">
      <div class="price__container">
        <div class="price__container-item">
          <div class="price__container-item-head">30 $ BASIC</div>
          <div class="price__container-item-main"></div>
        </div>
        <div class="price__container-item">
          <div class="price__container-item-head">40 $ STANDARD</div>
          <div class="price__container-item-main"></div>
        </div>
        <div class="price__container-item">
          <div class="price__container-item-head">50 $ PREMIUM</div>
          <div class="price__container-item-main"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
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
.main {
  position: absolute;
  background-image: url(../assets/video/pexels-cottonbro.gif);
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
  top: 0rem;
}
.price__container {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 25rem;
  flex-wrap: wrap;
  cursor: pointer;
  @include respond(tab-port) {
    margin-top: 15rem;
    // height: 60rem;
  }
  // z-index: 5;
  &-item {
    position: relative;
    flex-basis: 25rem;
    height: auto;
    margin: 2rem;
    &:hover &-head {
      color: $greenblue !important;
      transform: translateY(-2rem);
    }
    &:hover &-main {
      color: $greenblue !important;
      transform: translateY(-2rem);
    }
    &-head {
      position: relative;
      height: 7.5rem;
      width: 100%;
      background-color: #c4c4c4;
      border-radius: 1.5rem;
      color: white;
      margin-bottom: 1.5rem;
      text-align: center;
      line-height: 7.5rem;
      font-size: 1.7rem;
      transition: 0.3s ease-in-out;
      @include respond(tab-port) {
        color: $greenblue;
      }
    }
    &-main {
      height: 30rem;
      background-color: #c4c4c4;
      position: relative;
      border-radius: 1.5rem;
      transition: 0.3s ease-in-out;
      @include respond(tab-port) {
        color: $greenblue;
      }
    }
  }
}
</style>
