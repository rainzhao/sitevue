<template>
    <div>
      <div class="article-wrapper" v-for="item in items" :key="item.id">
        <article>
          <h4>{{item.title}}</h4>
          <p class="article-des" v-html="item.content">123123</p>
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
  import marked from "marked";
  export default{
    data () {
      return {
        msg: 'hello vue',
        items: []
      }
    },
    created () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });
      fetch('http://127.0.0.1:3000/essay', {
        method: 'GET'
      }).then(res => {
        return res.json();
      }).then(res => {
        this.items = res;
        for(let a in res){
          res[a].content = marked(res[a].content);
          console.log(res[a])
        }

        console.log(res)
      })
    },
    components: {

    }
  }
</script>
