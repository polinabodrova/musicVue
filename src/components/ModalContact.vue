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
.vm--modal {
  padding: 2rem;
  background-color: #00adb5 !important;
  border-radius: 10px !important;
  height: 55vh !important;
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
