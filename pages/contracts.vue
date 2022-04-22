<template>
  <div ref="contracts">
    <b-card-group columns>
      <b-card v-for="item in items" :key="item.key"
        :img-src="item.photo"
        img-alt="Image"
        img-top
      >
        <b-card-title>{{ item.name }}</b-card-title>
        <b-card-text>{{ item.descr }}</b-card-text>
        <footer class="blockquote-footer">{{ item.dates }}</footer>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
var items = [
  {name: 'ООО "ЭнергоСервис"',
  photo: 'https://www.dropbox.com/s/sszm5uhrxi8gbzo/usk13.jpg?dl=1',
  descr: 'Монтажные работы на объекте КСПГ "Портовая", трансформаторные подстанции',
  dates: '16.11.2020 - 08.02.2021',
  key: 1},
  {name: 'ООО "ЭнергоСервис"',
    photo: 'https://www.dropbox.com/s/ayreru6bhe2pirb/DJI_0885.jpg?dl=1',
    descr: 'Профилактическое восстановление устройств РЗА на присоединениях' 
          + 'РП №6 и ТП-4 на территории филиала ООО "ХайдельбергЦемент Рус" в г. Стерлитамак',
    dates: '15.03.2021 - 20.07.2021',
    key: 2},
  {name: 'ООО "ЭнергоСервис"',
    photo: 'https://www.dropbox.com/s/b5ot6ifqu8hywtn/IMG_5452.JPG?dl=1',
    descr: 'Пусконаладочные работы вторичных цепей защит, управления и сигнализации на ' 
          + 'объекте ООО НТЦ "Энергоавтоматизация',
    dates: '10.04.2021 - 30.04.2021',
    key: 3},
  {name: 'ООО "Империя"',
    photo: 'https://www.dropbox.com/s/rv0aalddwk7jl05/2.jpg?dl=1',
    descr: 'Электромонтажные рабты на объекте ТСК "Звездный"', 
    dates: '30.04.2021 - 28.05.2021',
    key: 4},
  {name: 'Федеральное бюджетное учреждение науки Институт '
          + 'проблем сверхпластичностит металлов российской академии наук',
    photo: 'https://www.dropbox.com/s/eqxqj6hqk2dxp3a/DJI_0484.jpg?dl=1',
    descr: 'Поиск повреждения кабеля', 
    dates: '02.07.2021 - 30.07.2021',
    key: 5},
  {name: 'ООО "Энергонефтегазсервис"',
    photo: 'https://www.dropbox.com/s/r2h78jv6f78novj/DJI_0523.jpg?dl=1',
    descr: 'Услуги по пуско-наладке электротехнического оборудования', 
    dates: '24.08.2021 - ',
    key: 6},
  {name: 'ООО "Проекто-строительное предприятие "Автодорстрой"',
    photo: 'https://www.dropbox.com/s/43tsiwoelia5wux/DJI_0943.jpg?dl=1',
    descr: 'Услуги по пуско-наладке электротехнического оборудования', 
    dates: '03.09.2021 - ',
    key: 7},
  {name: 'ООО "Спецэнергогаз"',
    photo: 'https://www.dropbox.com/s/b5m4c22tgizictm/DJI_0464.jpg?dl=1',
    descr: 'Комплекс электромонтажных работ газоперекачивающих агрегатов на объекте строительства '
          + '"КС "Новонюксеницкая" в составе стройки "Система магистральных газопроводов Ухта-Торжок"', 
    dates: '01.05.2021 - ',
    key: 8},
  {name: 'ООО "Чишминский МЭЗ"',
    photo: 'https://www.dropbox.com/s/w9d7xaozortleb0/DJI_0976.jpg?dl=1',
    descr: 'Выполнение работ по электрическим испытаниям и измерениям электроустановок и проверке РЗА',
    dates: '30.09.2021 - ',
    key: 9},
]

export default {
  head: {
    title: 'Наши объекты',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Объекты, на которых мы работали.'
      }
    ],
  },
  name: 'ContractsPage',
  
  data: function() {
    return {
      items: items
    }
  },
  mounted: function() {
    this.initHammer(this.$refs.contracts)
  }
}
</script>
