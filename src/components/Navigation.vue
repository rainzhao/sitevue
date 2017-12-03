<template>
    <div>
      <ul>
        <li>首頁</li>
      </ul>
    </div>
</template>
<style scoped>
  ul{
    list-style: none;
    display: flex;
  }
  ul li{
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {

    }
  }
</script>
