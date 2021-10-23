<template>
  <!-- //
  https://api.telegram.org/bot1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q/getUpdates -->
  <!-- https://api.telegram.org/bot1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q/sendMessage?chat_id=915692945&text=hi -->

  <!-- "id":915692945 -->

  <div>
    <logo-section />
    <div class="contacts">
      <div class="contacts__form">
        <h2>Get <span>in</span> touch</h2>
        <p>
          If you are interested in working with me or have any questions contact
          me directly through social media or fill out the form and I'll get
          back to you soon
        </p>
        <ContactForm />
        <!-- <div class="contacts__social">
          <div class="k">
            <img src="../assets/img/fiverr.svg" width="40" alt="" />
          </div>
          <div class="k">
            <img src="../assets/img/facebook.svg" width="40" alt="" />
          </div>
          <div class="k">
            <img src="../assets/img/instagram.svg" width="40" alt="" />
          </div>
        </div> -->
      </div>
      <div class="contacts-img">
        <img src="../assets/img/IMG_2094.png" alt="sasha-v-profil" />
      </div>
      <div class="contacts__social">
        <div class="k">
          <img src="../assets/img/fiverr.svg" width="40" alt="" />
        </div>
        <div class="k">
          <img src="../assets/img/facebook.svg" width="40" alt="" />
        </div>
        <div class="k">
          <img src="../assets/img/instagram.svg" width="40" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { email, required } from "vuelidate/lib/validators";
import ContactForm from "../components/ContactForm.vue";
export default {
  name: "Contacts",
  components: { ContactForm },
  data() {
    return {
      // displayMessage: true,
      name: "",
      email: "",
      msg: "",
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
        const newMessage = `Name:${name} E-mail:${email} Message:${message}`;
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
};
</script>

<style lang="scss">
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
.contacts {
  margin-top: -3.5rem;
  display: flex;
  flex-direction: row;
  font-size: 1.8rem;
  line-height: 2.8rem;
  justify-content: space-around;
  align-items: center;
  // flex-wrap: wrap;
  @include respond(tab-port) {
    text-align: center;
    margin-top: 12rem;
  }
  &__form {
    color: white;
    width: 50%;
    & p {
      margin: 1.5rem 0;
      width: 100%;
      @include respond(tab-port) {
        width: 90%;
        margin: 1rem auto;
        padding: 0 1rem;
      }
    }
    & span {
      color: $greenblue;
    }
    &-input {
      width: 100%;
      height: 3.5rem;
      border: none;
      outline: none;
      border-radius: 1.2rem;
      background-color: rgba(128, 128, 128, 0.2);
      margin: 0.6rem 0;
      text-indent: 2rem;
      color: white;
      &:focus {
        border: 0.2rem solid $greenblue;
        & ~ i {
          color: $greenblue;
        }
      }
      @include respond(tab-port) {
        width: 80%;
      }
    }
    &-textarea {
      border: none;
      outline: none;
      min-height: 12rem;
      max-height: 18rem;
      min-width: 100%;
      max-width: 45rem;
      border-radius: 1.2rem;
      background-color: rgba(128, 128, 128, 0.2);
      vertical-align: super;
      text-indent: 2rem;
      line-height: 2.5rem;
      font-size: 1.7rem;
      margin: 0.6rem 0;
      color: white;
      padding-top: 0.5rem;
      resize: none;

      &:focus {
        border: 0.2rem solid $greenblue;
        & ~ i {
          color: $greenblue;
        }
      }
      @include respond(tab-port) {
        min-width: 80%;
        max-width: 80%;
      }
    }
    & button {
      padding: 1.5rem 2.5rem;
      border-radius: 1rem;
      background-color: $greenblue;
      border: none;
      cursor: pointer;
      font-family: Lato;
      font-size: 1.5rem;
    }
  }
  &__social {
    position: absolute;
    bottom: 1rem;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    // width: 50%;
    & img {
      opacity: 0.7;
      // margin-left: 2rem;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
}

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
//Messages status
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

.contacts-img {
  // visibility: hidden;
  // display: block;
  @include respond(tab-port) {
    display: none;
  }
}
</style>
