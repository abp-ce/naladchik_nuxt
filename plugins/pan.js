export default {
  head: {
    script: [
      { src: 'https://hammerjs.github.io/dist/hammer.min.js'}
    ]
  },
  data() {
    return {
      currentIndex: 0,
      pages: ['/', 'offer', 'contracts', 'partner_card', 'registration']
    }
  },
  methods: {
    initHammer: function(ref) {
      var mc = new Hammer.Manager(ref)
      mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 20, /*pointers: Hammer.POINTER_TOUCH*/}))
      mc.on('panleft', this.panLeft)
      mc.on('panright', this.panRight)
    },
    panLeft: function(ev) {
      let len = this.pages.length 
      this.currentIndex += 1
      if (this.currentIndex == len) this.currentIndex = 0
      this.$router.push({ path: this.pages[this.currentIndex], replace: true })
    },
    panRight: function(ev) {
      let len = this.pages.length 
      this.currentIndex -= 1
      if (this.currentIndex == -1) this.currentIndex = len - 1
      this.$router.push({ path: this.pages[this.currentIndex], replace: true })
    }
  }
}
  