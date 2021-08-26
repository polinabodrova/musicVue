<template>
  <!-- //
  https://api.telegram.org/bot1960776155:AAEbt5s2YGVHFpDOrFwgsqhp2WrfDYUW29Q/getUpdates -->

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
        <form
          method="POST"
          action="send"
          enctype="application/x-www-form-urlencoded"
        >
          <div class="contacts__form-field">
            <label for="name">Your name:</label><br />
            <input type="text" id="name" name="name" />
            <i class="fa fa-user"></i><br />
          </div>
          <div class="contacts__form-field">
            <label for="mail">Your e-mail:</label><br />
            <input type="email" id="mail" name="email" />
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
            <button type="submit" value="submit">Send message</button>
            <span>Sending your message...</span>
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
      text-indent: 3.5rem;
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
      text-indent: 3rem;
      line-height: 2.5rem;
      font-size: 1.7rem;
      margin: 0.6rem 0;
      color: white;
      padding-left: 1rem;
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
      margin-right: 3rem;
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
.contacts-img {
  &img {
    // visibility: hidden;
  }
}
</style>
