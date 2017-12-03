<template>
  <div class="header">
    <div class="header-logo"></div>
  </div>
</template>
<style scoped>
  .header{
    width: 100%;
    height: 60px;
    background: #1380dc;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .header-logo{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #fff;
    margin-left: 10px;
  }
</style>
<script>
  export default{
    name: 'HeaderComponent',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {

    }

  }
</script>
