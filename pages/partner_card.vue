<template>
  <div>
    <b-embed src="partner_card.pdf"></b-embed>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Карта партнёра',
    meta: [
      {
        hid: 'card_description',
        name: 'description',
        content: 'Контакты и реквизиты для успешного сотрудничества.'
      }
    ],
  },
  name: 'PartnerCardPage'
}
</script>
