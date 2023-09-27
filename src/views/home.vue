<template>
  <div>
    <main-info></main-info>
    <calendar></calendar>
    <wedding-details></wedding-details>
    <gifts></gifts>
    <wedding-assistance-confirm></wedding-assistance-confirm>
    <!-- <wedding-gallery></wedding-gallery>
    <the-footer></the-footer> -->
  </div>
</template>

<script>
import MainInfo from "../components/main_info.vue";
// import WeddingGallery from "../components/wedding_gallery.vue";
// import TheFooter from '../components/TheFooter.vue';
import Calendar from '../components/calendar.vue';
import WeddingDetails from "../components/wedding_details.vue";
import Gifts from "../components/gifts.vue";
import weddingAssistanceConfirm from "../components/wedding_assistance_confirm.vue";

export default {
  components: {
    MainInfo,
    Calendar,
    WeddingDetails,
    weddingAssistanceConfirm,
    Gifts,
    // WeddingGallery,
    // TheFooter
  },
};
</script>

<style scoped></style>
