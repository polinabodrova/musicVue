<template>
  <div class="logo-text">
    <img
      class="logo-text__img"
      src="../assets/img/alex-logo.svg"
      width="250"
      alt=""
    />
    <hr class="logo-text__hr" width="19%" />
    <p class="logo-text__description">
      professional music producer<br />and beat maker
    </p>
  </div>
</template>

<script>
export default {};
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
.logo-text {
  position: relative;
  left: 5rem;
  margin-top: 3rem;
  z-index: 2;
  @include respond(tab-port) {
    top: 10%;
    position: absolute;
    margin-top: 3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 1.5rem;
  }
  & img {
    @include respond(tab-port) {
      display: inline-block;
      margin: auto;
    }
  }
  &__hr {
    width: 245px;
    border: 1px solid $greenblue;
    background-color: $greenblue;
    @include respond(tab-port) {
    }
  }
  &__description {
    color: white;
    font-size: 2rem;
    line-height: 2.7rem;
    @include respond(tab-port) {
      text-align: center;
      margin-bottom: 1.4rem;
    }
  }
}
</style>
