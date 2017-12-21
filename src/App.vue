<template>
  <div id="app">
    <header-component />
    <!-- <div class="content">
      <list-item />
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import Navigation from './components/Navigation.vue'
  import ListItem from '@/components/ListItem.vue'
  export default {
    name: 'app',
    components: {
      'header-component': HeaderComponent,
      'navigation': Navigation,
      'list-item': ListItem
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
      background: #eee;
  }
  .content{
      flex: 1;
      padding: 10px;
      margin-top: 80px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
