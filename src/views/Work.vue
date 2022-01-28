<template>
  <section id="work">
    <logo-section />
    <div class="work-page__main">
      <div class="work-page__main-animation">
        <div class="work-page__main-animation-block1 round"></div>
        <div class="work-page__main-animation-block2 round"></div>
        <div class="work-page__main-animation-block3 round"></div>
        <div class="player">
          <img class="player-img" :src="require('../assets/img/' + src())" />
          <div class="player__main">
            <audio
              v-on:timeupdate="onTimeUpdateListener"
              v-on:ended="ended"
              ref="audio"
              src="../assets/tracks/1.mp3"
              class="player__main-audio"
            ></audio>
            <div class="player__main-flex">
              <div
                v-on:click="setProgress"
                ref="progressBar"
                class="player__main-progress"
              >
                <div class="player__main-progress-line"></div>
              </div>
            </div>
            <div class="player__main-controls">
              <div v-on:click="prevSong" class="player__main-controls-prev">
                <font-awesome-icon :icon="['fas', 'backward']" />
              </div>
              <div class="player__main-controls-playpause">
                <font-awesome-icon
                  v-on:click="playSong"
                  v-bind:class="{ notactive: !playButton }"
                  :icon="['fas', 'play-circle']"
                />
                <font-awesome-icon
                  v-on:click="pauseSong"
                  v-bind:class="{ notactive: playButton }"
                  :icon="['fas', 'pause-circle']"
                />
              </div>
              <div v-on:click="nextSong" class="player__main-controls-next">
                <font-awesome-icon :icon="['fas', 'forward']" />
              </div>
            </div>
          </div>
        </div>
        <div class="feedback">
          <p class="feedback__text">
            Once again Alex has blown my mind away. The production and beat to
            this one is by far the best, so far! Communication was on point and
            he understood what the song I had in mind was! Be back again, thank
            you!
          </p>
          <div class="feedback__nameimg">
            <div class="feedback__nameimg-img">
              <img
                class="feedback__nameimg-img-src"
                src="../assets/img/user.png"
                width="50"
                alt=""
              />
            </div>
            <p class="feedback__nameimg-name">tobythegoatman</p>
          </div>
        </div>
      </div>
      <div class="work-page__main-music">
        <div>
          <img
            class="work-page__main-music-img"
            src="../assets/img/IMG_2086.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Work",
  components: {},
  data() {
    return {
      feedbacks: [
        {
          text: "Once again Alex has blown my mind away. The production and beat to this one is by far the best, so far! Communication was on point and he understood what the song I had in mind was! Be back again, thank you!",
          name: "tobythegoatman",
        },
        {
          text: "Fantastic delivery, seller has real music handcraft knowledge and will add it into your beat.",
          name: "branschforum",
        },
        {
          text: "Honestly for what I asked for? He made an amazing beat! It was just the right amount of edgy with a tinge of rock! I'm very happy and I can't wait to add vocals to it!!",
          name: "elizabethbars",
        },
        {
          text: "Very attentive to what I wanted... and BOY did he DELIVER!!!",
          name: "ajonz76",
        },
        {
          text: "My man made a FIRE beat in no time at all! He made the minor changes I requested and got back to me so fast! I will be using him again in the future!",
          name: "burleyboypod",
        },
        {
          text: "Above and Beyond. Not only provided the request I made, but added things to the song I did not expect that made it sound VERY NICE. I am very proud of this. I definitely recommend!",
          name: "itsjuss4",
        },
        {
          text: "Seller made exactly what I asked for and had an extremely fast turn around time to have it delivered to me.",
          name: "alvaartistmgmt",
        },
      ],
      songs: ["1", "2", "3", "4", "5", "6", "7"],
      currentSongIndex: 0,
      currentFeedbackIndex: 0,
      analizer: null,
      context: null,
      playButton: true,
    };
  },
  computed: {},
  mounted() {
    const img = document.querySelector(".player-img");
    img.addEventListener("load", function () {
      const palette = [
        [240, 248, 247],
        [114, 163, 176],
        [230, 238, 237],
      ];
      const div = document.getElementsByClassName("round");
      div.forEach(
        (el, i) => (el.style["boxShadow"] = `0 0 15rem rgb(${palette[i]})`)
      );
    });
  },
  methods: {
    src() {
      if (this.songs[this.currentSongIndex] === "1") {
        return "1.svg";
      } else if (this.songs[this.currentSongIndex] === "2") {
        return "2.svg";
      } else if (this.songs[this.currentSongIndex] === "3") {
        return "3.svg";
      } else if (this.songs[this.currentSongIndex] === "4") {
        return "4.svg";
      } else if (this.songs[this.currentSongIndex] === "5") {
        return "5.svg";
      } else if (this.songs[this.currentSongIndex] === "6") {
        return "6.svg";
      } else return "7.svg";
    },
    playSong() {
      this.playButton = !this.playButton;
      if (!this.context) {
        this.getContext();
      }
      this.$refs.audio.play();
      this.animationLoop();
    },
    pauseSong() {
      this.$refs.audio.pause();
      this.playButton = !this.playButton;
    },
    getContext() {
      this.context = new AudioContext();
      this.analyzer = this.context.createAnalyser();
      let src = this.context.createMediaElementSource(this.$refs.audio);
      src.connect(this.analyzer);
      this.analyzer.connect(this.context.destination);
      this.animationLoop();
      //
    },
    animationLoop() {
      if (!this.$refs.audio.paused) {
        window.requestAnimationFrame(this.animationLoop);
      }
      let array = new Uint8Array(this.analyzer.frequencyBinCount);
      this.analyzer.getByteFrequencyData(array);
      //Animation of rounds
      let arrayNum = [60, 120, 180];
      const div = document.getElementsByClassName("round");
      div.forEach((el, i) => {
        el.style.minHeight = array[arrayNum[i]] / 3 + "rem";
        el.style.width = array[arrayNum[i]] / 3 + "rem";
      });
    },
    loadSong(song) {
      this.$refs.audio.src = require(`../assets/tracks/${song}.mp3`);
    },
    loadFeedback(el) {
      const feedbackText = document.querySelector(".feedback__text");
      const img = document.querySelector(".feedback__nameimg-img-src");
      const name = document.querySelector(".feedback__nameimg-name");
      feedbackText.innerHTML = `${el.text}`;
      img.src = require("../assets/img/user.png");
      name.innerHTML = `${el.name}`;
    },
    prevSong() {
      this.currentSongIndex--;
      if (this.currentSongIndex < 0) {
        this.currentSongIndex = this.songs.length - 1;
      }
      this.currentFeedbackIndex--;
      if (this.currentFeedbackIndex < 0) {
        this.currentFeedbackIndex = this.feedbacks.length - 1;
      }
      this.loadSong(this.songs[this.currentSongIndex]);
      this.loadFeedback(this.feedbacks[this.currentFeedbackIndex]);
      this.playSong();
      this.playButton = false;
    },
    nextSong() {
      this.currentSongIndex++;
      if (this.currentSongIndex > this.songs.length - 1) {
        this.currentSongIndex = 0;
      }
      this.currentFeedbackIndex++;
      if (this.currentFeedbackIndex > this.feedbacks.length - 1) {
        this.currentFeedbackIndex = 0;
      }
      this.loadSong(this.songs[this.currentSongIndex]);
      this.loadFeedback(this.feedbacks[this.currentFeedbackIndex]);
      this.playSong();
      this.playButton = false;
    },
    ended() {
      this.nextSong();
    },
    onTimeUpdateListener(e) {
      const { duration, currentTime } = e.target;
      const progressPercent = (currentTime * 100) / duration;
      const line = document.querySelector(".player__main-progress-line");
      line.style.width = `${progressPercent}%`;
    },
    setProgress(e) {
      const width = this.$refs.progressBar.clientWidth;
      const clickX = e.offsetX;
      const duration = this.$refs.audio.duration;
      this.$refs.audio.currentTime = (clickX / width) * duration;
    },
  },
};
</script>
<style scoped lang="scss">
$main: #393e46;
$greenblue: #00adb5;
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 600px) {
      @content;
    } // 600px
  }
  @if $breakpoint == tab-port {
    @media (max-width: 1070px) {
      @content;
    } // 900px
  }
  @if $breakpoint == tab-land {
    @media (max-width: 1200px) {
      @content;
    } //1200px
  }
  @if $breakpoint == big-desktop {
    @media (min-width: 1800px) {
      @content;
    } //1800
  }
}

body, html {
overflow-x: hidden;
}

#work {
  overflow-x: hidden;
}
.work-page__main {
  // overflow: hidden;
  // width: 55%;
  height: 100%;
  @include respond(tab-land) {
    width: 40%;
  }
  @include respond(phone) {
  }
  // margin: -4rem 5rem 0 5rem;
  &-animation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute;
    width: 80%;
    left: -15rem;
    @include respond(tab-port) {
      position: absolute;
      margin-left: 0;
      left: 50%;
      top: 47%;
      transform: translate(-50%, -50%);
    }
    @include respond(phone) {
      position: absolute;
      margin-left: 0;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
    }
    @include respond(phone) {
      margin-top: 2rem;
    }
  }
  &-animation-block1 {
    width: 40rem;
    min-height: 40rem;
    border-radius: 50%;
    background: transparent;
    opacity: 2;
    position: absolute;
    filter: blur(2rem);
    // box-shadow: 0 0 15rem lighten($greenblue, 40%),
    //   0 0 15rem lighten($greenblue, 40%);
  }
  &-animation-block2 {
    width: 30rem;
    min-height: 30rem;
    border-radius: 50%;
    background: transparent;
    opacity: 2;
    position: absolute;
    filter: blur(2rem);
    // box-shadow: 0 0 15rem lighten(white, 40%), 0 0 15rem lighten(white, 40%);
  }
  &-animation-block3 {
    width: 20rem;
    min-height: 20rem;
    border-radius: 50%;
    background: transparent;
    opacity: 2;
    position: absolute;
    filter: blur(2rem);
    // box-shadow: 0 0 15rem lighten(blue, 40%), 0 0 15rem lighten(blue, 40%);
  }
  &-music {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-img {
      position: absolute;
      height: 95vh;
      top: 4rem;
      min-height: 700px;
      right: -1rem;
      @include respond(tab-port) {
        display: none;
      }
    }
    // @include respond(tab-land) {
    //   position: absolute;
    //   left: 50%;
    //   top: 50%;
    //   transform: translate(-50%, -50%);
    //   width: 100%;
    // }
  }
}
.player {
  color: $greenblue;
  font-size: 2rem;
  // max-width: 45%;
  width: 35rem;
  height: 35rem;
  // height: 79%;
  position: relative;
  top: 6rem;
  @include respond(tab-land) {
    margin-bottom: -3rem;
  }
  &-img {
    // position: relative;
    object-fit: cover;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 2rem;
    border: solid 0.2rem white;
    box-shadow: 0 0 0.5rem white;
  }
  &__main {
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in-out;
    position: absolute;
    bottom: -1rem;
    &-flex {
      display: flex;
      justify-content: center;
    }
    &-progress {
      margin-top: 25rem;
      display: flex;
      width: 85%;
      height: 0.6rem;
      align-self: center;
      background: #00acb573;
      border-radius: 3rem;
      cursor: pointer;
      &-line {
        appearance: none;
        overflow: hidden;
        height: 0.5rem;
        background: $greenblue;
        border-radius: 3rem;
      }
    }
    &-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      font-size: 2.7rem;
      cursor: pointer;
      &-playpause {
        margin: 0 1.5rem;
        font-size: 4rem;
      }
    }
  }
}
// .play-circle {
//   filter: drop-shadow(0 0 0.75rem crimson);
// }

.feedback {
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  width: 60%;
  font-size: 1.7rem;
  margin-top: 6rem;
  @include respond(tab-port) {
    margin-top: 5rem;
    width: 100%;
  }
  &__text {
    text-align: center;
    margin-top: 2rem;
    @include respond(tab-land) {
      margin-top: 4.5rem;
    }
    @include respond(phone) {
    }
  }
  &__nameimg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &-img {
      margin-right: 2rem;
      width: 5%;
    }
  }
}

.notactive {
  display: none;
}

.active {
  display: block;
}
</style>
