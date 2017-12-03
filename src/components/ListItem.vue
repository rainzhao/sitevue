<template>
    <div>
      <ul class="listitem">
        <li v-for="item in items">
          {{item.name}}
        </li>
      </ul>
    </div>
</template>
<style>
  .listitem li{
    display: flex;
    align-items: flex-start;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        items: [
          {name: 1},
          {name: 2},
          {name: 3}
        ]
      }
    },
    components: {

    }
  }
</script>
