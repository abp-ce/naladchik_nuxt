<template>
  <div @touchmove="touchMove">
    <b-navbar variant="faded" type="light" toggleable="lg">
      <b-navbar-brand to="/" tag="h1" class="mb-0">
        <img src="EI_icon.png" width="5%" alt="Энергоинжиниринг">
        <span>Энергоинжиниринг</span>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="offer">Услуги</b-nav-item>
          <b-nav-item to="contracts">Объекты</b-nav-item>
          <b-nav-item-dropdown text="Документы" right>
            <b-dropdown-item to="registration">Свидетельство о регистрации</b-dropdown-item>
            <b-dropdown-item to="partner_card">Карта партнёра</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    touchMove: function() {
      let pages = ['/', 'offer', 'contracts', 'partner_card', 'registration']
      let len = pages.length 
      this.currentIndex += 1
      if (this.currentIndex == len) this.currentIndex = 0
      this.$router.push({ path: pages[this.currentIndex], replace: true })
    }
  }
}
</script>
