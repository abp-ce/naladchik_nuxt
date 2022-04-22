<template>
  <div ref="index">
    <About/>
    <Carousel/>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Кто мы',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Пуско-наладочные работы в области энергетики и автоматизации энергообъектов.'
      }
    ],
  },
  name: 'IndexPage',
  mounted: function() {
    this.initHammer(this.$refs.index)
  }
}
</script>
