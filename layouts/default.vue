<template>
  <b-container>
    <Nav/>
    <Nuxt/>
    <Footer/>
  </b-container>
</template>

<script>
import Vue from 'vue'
import pan from '~/plugins/pan.js'

Vue.mixin(pan)

export default {
  name: 'DefaultLayout',
}
</script>
