<template>
  <input type="text" :placeholder="placeholder" :value="value" @input="onInput">
</template>

<script>
import Flatpickr from 'flatpickr'

export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fp: null
    }
  },
  watch: {
    options (opt, oldOpt) {
      for (let o in opt) {
        if (opt[o] !== oldOpt[o]) {
          this.fp.set(o, opt[o])
        }
      }
    }
  },
  mounted () {
    this.fp = new Flatpickr(this.$el, this.options)
    this.$emit('FlatpickrRef', this.fp)
  },
  destroyed () {
    this.fp = null
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>