<template>
  <div id="app">
    <h1>Vue-Flatpickr</h1>
    <h4>V 2.2.0</h4>
    <p>The date you picked is</p>
    <p>{{dateStr}}</p>
    <Flatpickr v-model="dateStr" />
    <p>Date range example</p>
    <div>
      <Flatpickr placeholder="From" v-model="dateFrom" :options="optionsFrom" />
      <Flatpickr placeholder="To" v-model="dateTo" :options="optionsTo" />
    </div>
    <p>
      Read more in <a href="https://chmln.github.io/flatpickr/" target="_blank">Officail Document</a>
    </p>
</template>

<script>
import VueFlatpickr from 'components/index'

export default {
  data () {
    return {
      dateStr: 'YYYY-MM-DD',
      dateFrom: undefined,
      dateTo: undefined
    }
  },
  computed: {
    optionsFrom () {
      return {
        maxDate: this.dateTo
      }
    },
    optionsTo () {
      return {
        minDate: this.dateFrom
      }
    }
  },
  components: {
    'Flatpickr': VueFlatpickr
  }
}
</script>

<style lang="less">
  @import url('./theme/airbnb.css');
  html,
  body {
    height: 100%;
    overflow: hidden;
    background: #4fc08d;
    color: #fff;
  }
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1,
    h4 {
      margin-bottom: 0;
    }
    h1 {
      font-size: 48px;
    }
    p {
      margin-bottom: 0;
    }
    input {
      padding: 10px;
      margin-top: 20px;
      width: 200px;
      outline: none;
      background: none;
      border: 2px solid #fff;
      color: #fff;
    }
    a {
      color: #fff;
      margin-top: 20px;
      outline: none;
    }
  }
</style>