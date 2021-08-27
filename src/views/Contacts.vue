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
          If you are interested in working with me or have any questions <br />
          contact me directly through social media or fill out the form <br />
          and I'll get back to you soon
        </p>
        <form v-on:submit.prevent>
          <div class="contacts__form-field">
            <label for="name">Your name:</label><br />
            <input type="text" id="name" name="name" />
            <i class="fa fa-user"></i><br />
          </div>
          <div class="contacts__form-field">
            <label for="mail">Your e-mail:</label><br />
            <input id="mail" name="email" />
            <i class="fa fa-envelope"></i><br />
          </div>
          <div class="contacts__form-field">
            <label for="msg">Your message:</label><br />
            <textarea
              name="msg"
              id="msg"
              placeholder="Type your message here..."
            ></textarea>
            <i class="fa fa-comment-alt"></i><br />
          </div>

          <div class="contacts__form-button">
            <button
              v-on:click="
                submitForm();
                mailStatus = true;
              "
              type="submit"
              value="submit"
            >
              Send message
            </button>
            <span
              class="contacts__form-button-status"
              v-bind:class="{ display: mailStatus }"
              >Your message has been sent</span
            >
          </div>
        </form>
        <!-- <div class="contacts__social">
          <div class="k"><img src="/img/fiverr.svg" width="40" alt="" /></div>
          <div class="k"><img src="/img/facebook.svg" width="40" alt="" /></div>
          <div class="k">
            <img src="/img/instagram.svg" width="40" alt="" />
          </div>
        </div> -->
      </div>
      <div class="contacts-img">
        <img src="../assets/img/sasha.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contacts",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      mailStatus: false,
    };
  },
  methods: {
    submitForm() {
      const message = document.getElementById("msg").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("mail").value;
      const mailStatus = document.querySelector(
        ".contacts__form-button-status"
      );
      const form = document.querySelector("form");
      if (!name) {
        mailStatus.innerHTML = "Enter your name";
        mailStatus.style.color = "red";
      } else if (!email) {
        mailStatus.innerHTML = "Enter your e-mail address";
        mailStatus.style.color = "red";
      } else if (!message) {
        mailStatus.innerHTML = "Enter your message";
        mailStatus.style.color = "red";
      } else if (!email.match(/\S+@\S+\.\S+/)) {
        mailStatus.innerHTML = "Enter a valid e-mail address";
        mailStatus.style.color = "red";
      } else {
        const newMessage = `Name:${name} E-mail:${email} Message:${message}`;
        const token = `1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q`;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=915692945&text=`;
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + newMessage, true);
        xhttp.send();
        console.log(form);
        form.reset();
        setTimeout(() => {
          mailStatus.style.display = "none";
        }, 3000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
$main: #393e46;
$greenblue: #00adb5;
.contacts {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  font-size: 1.8rem;
  line-height: 2.8rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  &__form {
    color: white;
    & p {
      margin: 1.5rem 0;
    }
    & span {
      color: $greenblue;
    }
    & input {
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
    }
    textarea {
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
      &:focus {
        border: 0.2rem solid $greenblue;
        & ~ i {
          color: $greenblue;
        }
      }
    }
    & button {
      // width: 15rem;
      // height: 4rem;
      padding: 1.5rem 2.5rem;
      border-radius: 1rem;
      background-color: $greenblue;
      border: none;
      cursor: pointer;
      // margin-right: 1rem;
    }
  }
  &__social {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3.5rem;
    & img {
      opacity: 0.5;
      margin-left: 2rem;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
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
  visibility: hidden;
}
.display {
  visibility: visible;
}
.contacts-img {
  &img {
    // visibility: hidden;
  }
}
</style>
