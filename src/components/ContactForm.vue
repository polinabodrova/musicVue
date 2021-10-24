<template>
  <form v-on:submit.prevent>
    <div class="contacts__form-field">
      <label for="name">Your name:</label><br />
      <input
        class="contacts__form-input"
        type="text"
        id="name"
        name="name"
        v-model="name"
        autocomplete="off"
        v-bind:class="{ 'error-boarder': $v.name.$invalid }"
      />
      <i class="fa fa-user"></i><br />
    </div>
    <div class="contacts__form-field">
      <label for="mail">Your e-mail:</label><br />
      <input
        class="contacts__form-input"
        type="text"
        id="mail"
        name="email"
        v-model.trim="email"
        autocomplete="off"
        v-bind:class="{ 'error-boarder': $v.email.$invalid }"
      />
      <i class="fa fa-envelope"></i><br />
    </div>
    <div class="contacts__form-field">
      <label for="msg">Your message:</label><br />
      <textarea
        class="contacts__form-textarea"
        name="msg"
        id="msg"
        placeholder="Type your message here..."
        v-model="msg"
        autocomplete="off"
        v-bind:class="{ 'error-boarder': $v.msg.$invalid }"
      ></textarea>
      <i class="fa fa-comment-alt"></i><br />
    </div>

    <div class="contacts__form-button">
      <button v-on:click="submitForm()" type="submit" value="submit">
        Send message
      </button>
      <span class="contacts__form-button-status-positive"
        >Your massage has been sent</span
      >
      <div v-if="$v.name.$error" class="contacts__form-button-status">
        <span v-if="$v.name.$dirty && !$v.name.required">Enter your name</span>
      </div>
      <div v-else-if="$v.email.$error" class="contacts__form-button-status">
        <span v-if="!$v.email.required">E-mail is required</span>
        <span v-if="email && !$v.email.email">Enter valid e-mail address</span>
      </div>
      <div v-else-if="$v.msg.$error" class="contacts__form-button-status">
        <span v-if="!$v.msg.required">Enter your message</span>
      </div>
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  name: "contact-form",
  props: ["modificator"],
  data() {
    return {
      // displayMessage: true,
      name: "",
      email: "",
      msg: "",
      // modificator: "default",
    };
  },
  validations: {
    name: { required },
    email: {
      required,
      email,
    },
    msg: { required },
  },
  methods: {
    submitForm() {
      const message = document.getElementById("msg").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("mail").value;
      const mailStatus = document.querySelector(
        ".contacts__form-button-status-positive"
      );
      const form = document.querySelector("form");
      if (this.$v.$invalid) {
        this.$v.$touch();
        return false;
      } else {
        const newMessage = `
        Name:${name} 
        Modificator: ${this.modificator || "from contact page"} 
        E-mail: ${email} 
        Message: ${message}`;
        const token = `1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q`;
        fetch(
          `https://api.telegram.org/bot${token}/sendMessage?chat_id=915692945&text=${newMessage}`
        );
        form.reset();
        mailStatus.style.display = "inline-block";
        setTimeout(() => {
          mailStatus.style.display = "none";
        }, 3000);
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.error-boarder:focus {
  border: 0.2rem solid rgba(255, 0, 0, 0.601);
}

.contacts__form-field {
  position: relative;
  & i {
    position: absolute;
    left: 1rem;
    top: 4rem;
    color: rgba(128, 128, 128, 0.6);
    // &:focus {
    //   color: $greenblue;
    // }
  }
}
.contacts__form-button-status {
  display: inline-block;
  padding-left: 2rem;
  & span {
    color: red;
    font-size: 1.9rem;
  }
}
.contacts__form-button-status-positive {
  padding-left: 2rem;
  font-size: 1.9rem;
  display: none;
}
</style>
