<template>
 <b-card ref="footer">
   <b-link href="mailto:info@naladchik02.ru">
     <b-icon icon="envelope-fill"></b-icon>
     Напишите нам
    </b-link>
   <p class="float-right">&copy; 2022 naladchik02.ru</p>
  </b-card>
</template>

<script>
  export default {
    name: 'Footer',
    mounted: function() {
      this.initHammer(this.$refs.footer)
    }
  }
</script>