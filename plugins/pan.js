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
      mc.options.domEvents=true;
      mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL, /*threshold: 50, pointers: Hammer.POINTER_TOUCH*/}))
      mc.on('swipeleft', this.swipeLeft)
      mc.on('swiperight', this.swipeRight)
    },
    swipeRight: function(ev) {
      ev.srcEvent.stopPropagation()
      // console.log(ev)
      let len = this.pages.length 
      this.currentIndex += 1
      if (this.currentIndex == len) this.currentIndex = 0
      // console.log(this.currentIndex)
      this.$router.push({ path: this.pages[this.currentIndex], replace: true })
    },
    swipeLeft: function(ev) {
      ev.srcEvent.stopPropagation()
      // console.log(ev)
      let len = this.pages.length 
      this.currentIndex -= 1
      if (this.currentIndex == -1) this.currentIndex = len - 1
      // console.log(this.currentIndex)
      this.$router.push({ path: this.pages[this.currentIndex], replace: true })
    }
  }
}
  