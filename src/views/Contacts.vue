<template>
  <!-- //
  https://api.telegram.org/bot1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q/getUpdates -->
  <!-- https://api.telegram.org/bot1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q/sendMessage?chat_id=915692945&text=hi -->

  <!-- "id":915692945 -->

  <div class="main-container">
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
      </div>
      <div class="contacts-img">
        <img src="../assets/img/IMG_2094.png" alt="sasha-v-profil" />
      </div>
      <div class="contacts__social">
        <div class="k">
          <a href="https://www.fiverr.com/gigantballs" target="_blank">
            <img src="../assets/img/fiverr.svg" width="40" alt=""
          /></a>
        </div>
        <div class="k">
          <a
            href="https://www.facebook.com/alexandr.naumov.564"
            target="_blank"
          >
            <img src="../assets/img/facebook.svg" width="40" alt="" />
          </a>
        </div>
        <div class="k">
          <a href="https://www.instagram.com/alex_naumov_prod/" target="_blank">
            <img src="../assets/img/instagram.svg" width="40" alt="" />
          </a>
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
          `https://api.telegram.org/bot${token}/sendMessage?chat_id=28533096&text=${newMessage}`
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

.main-container {
  overflow-x: hidden;
}

.contacts {
  margin-left: 7rem;
  flex-direction: row;
  font-size: 1.8rem;
  line-height: 2.8rem;
  justify-content: space-around;
  align-items: center;
  &__form {
    color: white;
    width: 50%;
    position: absolute;
    top: 18rem;
    @include respond(tab-port) {
      width: 55%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @include respond(phone) {
      width: 90%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & p {
      margin: 1.5rem 0;
      width: 100%;
      @include respond(tab-port) {
        width: 100%;
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
        width: 100%;
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
        min-width: 100%;
        max-width: 100%;
      }
    }
    & button {
      border-radius: 1rem;
      background-color: $greenblue;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
  &__social {
    position: relative;
    top: 50rem;
    display: flex;
    justify-content: center;
    width: 50%;
    @include respond(tab-port) {
      width: 100%;
    }
    & img {
      opacity: 0.7;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
}

.contacts-img {
  position: fixed;
  top: 5rem;
  // bottom: 2rem;
  right: 3rem;
  @include respond(tab-port) {
    opacity: 0.25;
    left: 50%;
    transform: translateX(-50%);
  }
  @include respond(phone) {
    opacity: 0.25;
    left: 10%;
    transform: translateX(-10%);
  }
  img {
    height: 95vh;
    min-height: 700px;
    max-height: 950px;
    @include respond(phone) {
      height: 95vh;
      max-height: 790px;
    }
  }
}
</style>
