<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Текстовые слайды с изображением -->
      <b-carousel-slide
        img-src="https://www.dropbox.com/s/fy85bfoh8hdl0ik/DJI_0517.jpg?dl=1"
      ></b-carousel-slide>

      <!-- Слайды с произвольным текстом -->
      <b-carousel-slide img-src="https://www.dropbox.com/s/auz0wit6pw33t5h/DJI_0979.jpg?dl=1">
        <!--h1>Привет мир!</h1-->
      </b-carousel-slide>

      <!-- Слайды только с изображением -->
      <b-carousel-slide img-src="https://www.dropbox.com/s/rijr7lts1toqimc/DJI_0017.jpg?dl=1"></b-carousel-slide>

      <!-- Слайды со слотом img -->
      <!-- Обратите внимание на классы .d-block и .img-fluid, чтобы предотвратить выравнивание изображений по умолчанию в браузере -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://www.dropbox.com/s/2fdergbq4kry5v5/DJI_0856.jpg?dl=1"
            alt="слот изображения"
          >
        </template>
      </b-carousel-slide>

      <!-- Слайд с пустым плавным изображением для сохранения пропорций слайда -->
      <!--b-carousel-slide caption="Пустое изображение" img-blank img-alt="Пустое изображение">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide-->
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>