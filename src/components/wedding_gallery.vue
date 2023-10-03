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
import img1 from '../assets/images/gallery/img1-min.jpg';
import img2 from '../assets/images/gallery/img2-min.jpg';
import img3 from '../assets/images/gallery/img3-min.jpg';
import img4 from '../assets/images/gallery/img4-min.jpg';
import img5 from '../assets/images/gallery/img5-min.jpg';
import img6 from '../assets/images/gallery/img6-min.jpg';
import img7 from '../assets/images/gallery/img7-min.jpg';
import img8 from '../assets/images/gallery/img8-min.jpg';
import img9 from '../assets/images/gallery/img9-min.jpg';
import img10 from '../assets/images/gallery/img10-min.jpg';
import img11 from '../assets/images/gallery/img11-min.jpg';
import img12 from '../assets/images/gallery/img12-min.jpg';
import img13 from '../assets/images/gallery/img13-min.jpg';
import img14 from '../assets/images/gallery/img14-min.jpg';
import img15 from '../assets/images/gallery/img15-min.jpg';
import img16 from '../assets/images/gallery/img16-min.jpg';
import img17 from '../assets/images/gallery/img17-min.jpg';
import img18 from '../assets/images/gallery/img18-min.jpg';
import img19 from '../assets/images/gallery/img19-min.jpg';


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