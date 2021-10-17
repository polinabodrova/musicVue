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
