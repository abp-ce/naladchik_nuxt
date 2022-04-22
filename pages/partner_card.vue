<template>
  <div ref="partner_card">
    <b-embed src="partner_card.pdf"></b-embed>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Карта партнёра',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Контакты и реквизиты для успешного сотрудничества.'
      }
    ],
  },
  name: 'PartnerCardPage',
    mounted: function() {
    this.initHammer(this.$refs.partner_card)
  }

}
</script>
