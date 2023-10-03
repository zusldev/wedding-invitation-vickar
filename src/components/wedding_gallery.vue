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

export default {
  data: function () {
    return {
      images: [
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img17-min.jpg?updatedAt=1696294561832',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img1-min.jpg?updatedAt=1696294560444',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img19-min.jpg?updatedAt=1696294559068',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img18-min.jpg?updatedAt=1696294558293',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img16-min.jpg?updatedAt=1696294558220',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img14-min.jpg?updatedAt=1696294558168',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img15-min.jpg?updatedAt=1696294557527',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img13-min.jpg?updatedAt=1696294557316',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img4-min.jpg?updatedAt=1696294557787',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img8-min.jpg?updatedAt=1696294557805',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img11-min.jpg?updatedAt=1696294557770',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img12-min.jpg?updatedAt=1696294556421',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img5-min.jpg?updatedAt=1696294555658',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img2-min.jpg?updatedAt=1696294555536',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img6-min.jpg?updatedAt=1696294554697',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img9-min.jpg?updatedAt=1696294554457',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img7-min.jpg?updatedAt=1696294554503',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img3-min.jpg?updatedAt=1696294554497',
        'https://ik.imagekit.io/uvhv6hndt/GALLERY/img10-min.jpg?updatedAt=1696294554154'
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