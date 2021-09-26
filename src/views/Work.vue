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
              src="../assets/tracks/na_zare.mp3"
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
          <!-- <div class="feedback">
            <p class="feedback__text">
              This guy makes bangers! He took the things I gave him and he made
              a track that came out better than I'd imagine.
            </p>
            <div class="feedback__nameimg">
              <div class="feedback__nameimg-img">
                <img
                  class="feedback__nameimg-img-src"
                  src="../assets/img/circle-cropped-1.png"
                  width="50"
                  alt=""
                />
              </div>
              <p class="feedback__nameimg-name">Brascomb</p>
            </div>
          </div> -->
        </div>
        <div class="feedback">
          <p class="feedback__text">
            This guy makes bangers! He took the things I gave him and he made a
            track that came out better than I'd imagine.
          </p>
          <div class="feedback__nameimg">
            <div class="feedback__nameimg-img">
              <img
                class="feedback__nameimg-img-src"
                src="../assets/img/circle-cropped-1.png"
                width="50"
                alt=""
              />
            </div>
            <p class="feedback__nameimg-name">Brascomb</p>
          </div>
        </div>
      </div>
      <div class="work-page__main-music">
        <div>
          <img class="main" src="../assets/img/IMG_2083.png" alt="" />
        </div>
        <!-- <div class="feedback">
          <p class="feedback__text">
            This guy makes bangers! He took the things I gave him and he made a
            track that came out better than I'd imagine.
          </p>
          <div class="feedback__nameimg">
            <div class="feedback__nameimg-img">
              <img
                class="feedback__nameimg-img-src"
                src="../assets/img/circle-cropped-1.png"
                width="50"
                alt=""
              />
            </div>
            <p class="feedback__nameimg-name">Brascomb</p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script>
import ColorThief from "colorthief";
export default {
  name: "Work",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      feedbacks: [
        {
          text: "This guy makes bangers! He took the things I gave him and he made a track that came out better than I'd imagine.",
          picture: "circle-cropped-1.png",
          name: "Brascomb",
        },
        {
          text: "He is doing an incredible thing. If you’re looking to take your music to the next level, with a real pro sound, this is the guy!",
          picture: "circle-cropped-2.png",
          name: "Jack",
        },
        {
          text: "I loved the communication and the final result. Very happy working with him. I would totally recommend.",
          picture: "circle-cropped-3.png",
          name: "Anna",
        },
      ],
      songs: ["na_zare", "melody", "waiting"],
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
      const colorThief = new ColorThief();
      // colorThief.getColor(img);
      const palette = colorThief.getPalette(img);
      const div = document.getElementsByClassName("round");
      div.forEach(
        (el, i) => (el.style["boxShadow"] = `0 0 15rem rgb(${palette[i]})`)
      );
    });
  },
  methods: {
    src() {
      if (this.songs[this.currentSongIndex] === "na_zare") {
        return "na_zare.svg";
      } else if (this.songs[this.currentSongIndex] === "melody") {
        return "melody.svg";
      } else if (this.songs[this.currentSongIndex] === "waiting") {
        return "waiting.svg";
      }
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
      img.src = require(`../assets/img/${el.picture}`);
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
    @media (max-width: 37.5em) {
      @content;
    } // 600px
  }
  @if $breakpoint == tab-port {
    @media (max-width: 56.25em) {
      @content;
    } // 900px
  }
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
.main {
  position: absolute;
  max-width: 47%;
  bottom: 0;
  right: -7rem;
}
.work-page__main {
  // display: flex;
  // justify-content: flex-start;
  width: 60%;
  @include respond(tab-land) {
    margin-top: 10rem;
  }
  @include respond(tab-port) {
  }
  // margin: -4rem 5rem 0 5rem;
  &-animation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // position: relative;
    // margin-left: 7rem;
    @include respond(tab-port) {
      position: absolute;
      margin-left: 0;
      left: 50%;
      top: 47%;
      transform: translate(-50%, -50%);
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
    // margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    // img {
    //   width: 20%;
    // }
    @include respond(tab-port) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
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
  @include respond(tab-port) {
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
    width: 90%;
  }
  &__text {
    text-align: center;
    margin-top: 2rem;
    @include respond(tab-port) {
      // min-width: 60%;
      // padding: 2.5rem;
    }
  }
  &__nameimg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    &-img {
      margin-right: 2rem;
      height: 10%;
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
