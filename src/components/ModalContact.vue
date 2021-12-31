<template>
  <modal name="my-first-modal">
    <ContactForm :modificator="modificator" />
  </modal>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  props: ["modificator"],
  name: "MyComponent",
  components: { ContactForm },
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  mount() {},
};
</script>
<style lang="scss">
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
.vm--modal {
  padding: 2rem;
  background-color: rgba(37, 37, 37, 0.96) !important;
  border-radius: 10px !important;
  height: 50vh !important;
  position: absolute !important;
  top: 55% !important;
  left: 50% !important;
  transform: translate(-50%, -55%) !important;
  @include respond(phone) {
    width: 90% !important;
    border-radius: 5px !important;
    height: 43rem !important;
  }
}
.vm--overlay {
  background-color: black !important;
  opacity: 0.8 !important;
}
.label-for-name {
  color: white;
  font-size: 2rem;
}
.label-for-mail {
  color: white;
  font-size: 2rem;
}
.label-for-msg {
  color: white;
  font-size: 2rem;
}
</style>
