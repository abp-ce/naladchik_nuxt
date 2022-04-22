<template>
  <div ref="registration">
    <b-embed src="registration.pdf"></b-embed>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Свидетельство о регистрации',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Нормативный документ о регистрации предприятия.'
      }
    ],
  },
  name: 'RegistrationPage',
  mounted: function() {
    this.initHammer(this.$refs.registration)
  }

}
</script>
