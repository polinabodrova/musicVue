<template>
  <section id="work">
    <logo-section />
    <div class="work-page__main">
      <div class="work-page__main-animation">
        <img
          class="work-page__main-animation-img"
          src="../assets/img/sasha.png"
          alt=""
          height="500rem"
        />
        <div class="work-page__main-animation-block"></div>
        <div class="work-page__main-animation-block2"></div>
      </div>
      <div class="work-page__main-music">
        <!-- PLAYER -->
        <div class="player">
          <div class="player__main">
            <audio
              v-on:ended="ended"
              ref="audio"
              src="../assets/tracks/na_zare.mp3"
              class="player__main-audio"
            ></audio>
            <div class="player__main-flex">
              <div class="player__main-progress">
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
                  :icon="['fas', 'pause']"
                />
                <!-- <i class="fas fa-play-circle"></i>
                <i class="fas fa-pause notactive"></i> -->
              </div>
              <div v-on:click="nextSong" class="player__main-controls-next">
                <font-awesome-icon :icon="['fas', 'forward']" />
              </div>
            </div>
          </div>
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
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

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
  methods: {
    playSong() {
      this.playButton = !this.playButton;
      if (!this.context) {
        this.getContext();
      }
      this.$refs.audio.play();
      this.animationLoop();
    },
    pauseSong() {
      this.playButton = !this.playButton;
      this.$refs.audio.pause();
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
      const roundAnimation = document.querySelector(
        ".work-page__main-animation-block"
      );
      const roundAnimation2 = document.querySelector(
        ".work-page__main-animation-block2"
      );
      roundAnimation2.style.minHeight = array[450] / 3 + "rem";
      roundAnimation2.style.width = array[450] / 3 + "rem";
      roundAnimation.style.minHeight = array[100] / 3 + "rem";
      roundAnimation.style.width = array[100] / 3 + "rem";
    },
    loadSong(song) {
      this.$refs.audio.src = require(`../assets/tracks/${song}.mp3`);
      const player = document.querySelector(".player");
      player.style.backgroundImage = `url(../assets/img/${song}.svg)`;
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
      console.log(this.songs[this.currentSongIndex]);
      this.loadSong(this.songs[this.currentSongIndex]);
      this.loadFeedback(this.feedbacks[this.currentFeedbackIndex]);
      this.playSong();
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
    },
    ended() {
      this.nextSong();
    },
  },
};
</script>
<style scoped lang="scss">
$main: #393e46;
$greenblue: #00adb5;
.work-page__main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -4rem 5rem 0 5rem;
  &-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 7rem;
  }
  &-animation-img {
    position: relative;
    z-index: 1;
    align-self: flex-end;
    opacity: 0;
  }
  &-animation-block {
    width: 45rem;
    min-height: 45rem;
    border-radius: 50%;
    background: transparent;
    opacity: 2;
    position: absolute;
    filter: blur(2rem);
    box-shadow: 0 0 15rem lighten($greenblue, 40%),
      0 0 15rem lighten($greenblue, 40%);
  }
  &-animation-block2 {
    width: 30rem;
    min-height: 30rem;
    border-radius: 50%;
    background: transparent;
    opacity: 2;
    position: absolute;
    filter: blur(2rem);
    box-shadow: 0 0 15rem lighten(white, 40%), 0 0 15rem lighten(white, 40%);
  }
  &-music {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.player {
  color: $greenblue;
  font-size: 2rem;
  width: 27rem;
  height: 35rem;
  background-image: url(../assets/img/na_zare.svg);
  background-size: cover;
  border-radius: 2rem;
  border: solid 0.3rem white;
  box-shadow: 0 0 0.5rem white;
  &__main {
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in-out;
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
        font-size: 3.9rem;
      }
    }
  }
}

.feedback {
  color: white;
  width: 50rem;
  font-size: 1.8rem;
  &__text {
    text-align: center;
    margin-top: 2rem;
  }
  &__nameimg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    &-img {
      margin-right: 2rem;
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
