<template>
  <div class="header">
    <div class="header-logo">
      <h3>blog</h3>
    </div>
  </div>
</template>
<style scoped>
  .header{
    width: 100%;
    height: 80px;
    background: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
  }
  .header-logo{
    font-size: 16px;
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
