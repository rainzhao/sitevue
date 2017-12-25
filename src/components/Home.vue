<template>
    <div class="content">
      <list-item />
    </div>
</template>

<style>
    .content{
        flex: 1;
        padding: 10px;
        margin-top: 80px;
    }
</style>

<script>
  import ListItem from '@/components/ListItem.vue'
  export default{
    name: 'Home',
    components: {
      'list-item': ListItem
    }
  }
</script>
