<template>
  <div class="audio-player" :class="{ playing: isPlaying }" v-if="showPlayer">
    <!-- Controles de reproducción de audio -->
    <button class="audio-button" @click="togglePlayback">
      <span class="icon" v-if="isPlaying">
        <img class="icon-pause" src="@/assets/images/pause.svg" alt="Pausar">
      </span>
      <span class="icon" v-else>
        <img class="icon-play" src="@/assets/images/play.svg" alt="Reproducir">
      </span>
    </button>
    <!-- Elemento de audio -->
    <audio ref="audioElement" :src="audioSrc" @canplay="audioLoaded" @ended="audioEnded"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      showPlayer: false,
      audioSrc: ('src/audio/dragonballgt-piano-weddingsong.mp3'),
      isAudioLoaded: false,
    };
  },
  methods: {
    togglePlayback() {
      if (this.isAudioLoaded) {
        const audio = this.$refs.audioElement;
        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.isPlaying = !this.isPlaying;
      }
    },
    handleScroll() {
      // Mostrar siempre el reproductor
      this.showPlayer = true;
    },
    audioLoaded() {
      this.isAudioLoaded = true; // Marcar como cargado cuando el audio esté listo
    },
    audioEnded() {
      // Se llama cuando la canción termina; reinicia la reproducción
      this.playAudio();
    },
    playAudio() {
      if (this.isAudioLoaded) {
        const audio = this.$refs.audioElement;
        audio.play();
        this.isPlaying = true;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Reproduce la canción automáticamente al cargar el componente
    this.playAudio();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
/* Estilos CSS para el reproductor de audio */
.audio-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: background-color 0.3s, width 0.3s, height 0.3s;
}

.audio-player.playing {
  background-color: #B4D2ACFF;
  width: 70px;
  height: 70px;
  box-shadow: 0 0 10px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.5);
  animation: rotate 2s linear infinite;
}

.audio-button {
  background: none;
  border: none;
  color: rgb(172, 0, 0);
  font-size: 44px;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
}

.icon-play,
.icon-pause {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.icon-pause {
  width: 30px;
  height: 30px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
