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
.logo-text {
  position: relative;
  left: 5rem;
  margin-top: 3rem;
  &__hr {
    width: 18%;
    border: 1px solid $greenblue;
    background-color: $greenblue;
  }
  &__description {
    color: white;
    font-size: 2rem;
    line-height: 2.7rem;
  }
}
</style>
