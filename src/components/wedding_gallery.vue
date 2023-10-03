<template>
  <div class="title">
    <p>Gallery</p>
  </div>
  <div class="container">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '75px', height: '75px' }"></div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import img1 from '../assets/gallery/img1.webp';
import img2 from '../assets/gallery/img2.webp';
import img3 from '../assets/gallery/img3.webp';
import img4 from '../assets/gallery/img4.webp';
import img5 from '../assets/gallery/img5.webp';
import img6 from '../assets/gallery/img6.webp';
import img7 from '../assets/gallery/img7.webp';
import img8 from '../assets/gallery/img8.webp';
import img9 from '../assets/gallery/img9.webp';
import img10 from '../assets/gallery/img10.webp';
import img11 from '../assets/gallery/img11.webp';
import img12 from '../assets/gallery/img12.webp';
import img13 from '../assets/gallery/img13.webp';
import img14 from '../assets/gallery/img14.webp';
import img15 from '../assets/gallery/img15.webp';
import img16 from '../assets/gallery/img16.webp';
import img17 from '../assets/gallery/img17.webp';
import img18 from '../assets/gallery/img18.webp';
import img19 from '../assets/gallery/img19.webp';


export default {
  data: function () {
    return {
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
      ],
      index: null
    };
  },

  components: {
    'gallery': VueGallery
  },
}
</script> 

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
  cursor: pointer;

}

.title p {
  font-size: 2.5rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-bottom: 3rem;
  letter-spacing: 0.7rem;
  font-family: 'Alex Brush', cursive;
}
</style>