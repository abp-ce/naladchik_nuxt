let pages = ['/', '/offer', '/contracts', '/partner_card', '/registration']

export default {
  head: {
    script: [
      { src: 'https://hammerjs.github.io/dist/hammer.min.js'}
    ]
  },
  methods: {
    initHammer: function(ref) {
      var mc = new Hammer.Manager(ref)
      this.$store.commit('set', pages.indexOf(this.$route.path))
      mc.options.domEvents=true;
      mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }))
      mc.on('swipeleft', this.swipeLeft)
      mc.on('swiperight', this.swipeRight)
    },
    swipeRight: function(ev) {
      ev.srcEvent.stopPropagation()
      let len = pages.length 
      let currentIndex = this.$store.state.currentPage
      currentIndex++
      if (currentIndex == len) currentIndex = 0
      this.$store.commit('set', currentIndex)
      this.$router.push({ path: pages[currentIndex], replace: true })
    },
    swipeLeft: function(ev) {
      ev.srcEvent.stopPropagation()
      let len = pages.length 
      let currentIndex = this.$store.state.currentPage
      currentIndex--
      if (currentIndex == -1) currentIndex = len - 1
      this.$store.commit('set', currentIndex)
      this.$router.push({ path: pages[currentIndex], replace: true })
    }
  }
}
  