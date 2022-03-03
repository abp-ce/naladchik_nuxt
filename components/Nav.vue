<template>
  <div>
    <b-navbar variant="faded" type="light" toggleable="lg">
      <b-navbar-brand to="/" tag="h1" class="mb-0">
        <img src="EI_icon.png" width="5%" alt="Энергоинжиниринг">
        <span>Энергоинжиниринг</span>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="offer">Услуги</b-nav-item>
          <b-nav-item to="registration">Свидетельство о регистрации</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
