<template>
    <div >
      <div class="article-wrapper">
        <article>
          <h4>1323123</h4>
          <p class="article-des">123</p>
        </article>
      </div>
    </div>
</template>
<style>
  .article-wrapper{
    border-bottom: solid 1px rgba(178, 179, 153, 0.125);
    padding: 30px 30px 30px 20px;
    display: flex;
    box-shadow: 0 0 4px #ddd;
    border-radius: 10px;
    text-align: left;
    background: #f5f5d5;
  }
  .article-wrapper .article-des{
    margin-bottom: 50px;
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
    created () {
      fetch('http://127.0.0.1:3000/essay', {
        method: 'GET'
      }).then(res => {
        return res.json();
      }).then(res => {
        console.log(res)
      })
    },
    components: {
      
    }
  }
</script>
