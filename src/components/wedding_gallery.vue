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
        'https://ik.imagekit.io/uvhv6hndt/img12.jpg?updatedAt=1696226705801',
        'https://ik.imagekit.io/uvhv6hndt/img5.jpg?updatedAt=1696226739091',
        'https://ik.imagekit.io/uvhv6hndt/img1.jpg?updatedAt=1696226737823',
        'https://ik.imagekit.io/uvhv6hndt/img4.jpg?updatedAt=1696226737009',
        'https://ik.imagekit.io/uvhv6hndt/img2.jpg?updatedAt=1696226736853',
        'https://ik.imagekit.io/uvhv6hndt/img3.jpg?updatedAt=1696226734798',
        'https://ik.imagekit.io/uvhv6hndt/img18.jpg?updatedAt=1696226729651',
        'https://ik.imagekit.io/uvhv6hndt/img19.jpg?updatedAt=1696226729414',
        'https://ik.imagekit.io/uvhv6hndt/img8.jpg?updatedAt=1696226729591',
        'https://ik.imagekit.io/uvhv6hndt/img13.jpg?updatedAt=1696226721524',
        'https://ik.imagekit.io/uvhv6hndt/img16.jpg?updatedAt=1696226721464',
        'https://ik.imagekit.io/uvhv6hndt/img15.jpg?updatedAt=1696226715988',
        'https://ik.imagekit.io/uvhv6hndt/img7.jpg?updatedAt=1696226715454',
        'https://ik.imagekit.io/uvhv6hndt/img14.jpg?updatedAt=1696226715392',
        'https://ik.imagekit.io/uvhv6hndt/img6.jpg?updatedAt=1696226714737',
        'https://ik.imagekit.io/uvhv6hndt/img9.jpg?updatedAt=1696226711991',
        'https://ik.imagekit.io/uvhv6hndt/img12.jpg?updatedAt=1696226705801',
        'https://ik.imagekit.io/uvhv6hndt/img10.jpg?updatedAt=1696226705482',
        'https://ik.imagekit.io/uvhv6hndt/img11.jpg?updatedAt=1696226697121'
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
.container{
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