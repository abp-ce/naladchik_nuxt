<template>
  <div>
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
        hid: 'home_description',
        name: 'description',
        content: 'Пуско-наладочные работы в области энергетики и автоматизации энергообъектов.'
      }
    ],
  },
  name: 'IndexPage'
}
</script>
