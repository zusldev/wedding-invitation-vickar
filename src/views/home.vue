<template>
  <div>
    <main-info></main-info>
    <audio-player></audio-player>
    <calendar></calendar>
    <wedding-details></wedding-details>
    <gifts></gifts>
    <wedding-assistance-confirm></wedding-assistance-confirm>
    <wedding-gallery></wedding-gallery>
  </div>
</template>

<script>
import MainInfo from "../components/main_info.vue";
import AudioPlayer from "../components/audio_player.vue";
import Calendar from '../components/calendar.vue';
import WeddingDetails from "../components/wedding_details.vue";
import Gifts from "../components/gifts.vue";
import weddingAssistanceConfirm from "../components/wedding_assistance_confirm.vue";
import WeddingGallery from "../components/wedding_gallery.vue";

export default {
  components: {
    MainInfo,
    Calendar,
    WeddingDetails,
    weddingAssistanceConfirm,
    Gifts,
    AudioPlayer,
    WeddingGallery,
  },
};
</script>

<style scoped></style>
