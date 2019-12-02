new Vue({
    el: '#nav',
    data: function() {
      return {
        isOpen: false
      }
    },
    methods: {
      open() {
        this.isOpen = true
        this.$nextTick(() => {
          this.$refs.closeButton.focus()
        })
      },
      close() {
        this.isOpen = false
        this.$nextTick(() => {
          this.$refs.openButton.focus()
        })
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  })