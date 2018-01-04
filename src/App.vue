<template>
  <div id="app">
    <header-component />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  export default {
    name: 'app',
    components: {
      'header-component': HeaderComponent
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  body{
      min-height: 100%;
      display: flex;
      flex-direction: column;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
