<template>
    <div>
      <div class="article-wrapper" v-for="item in items" :key="item.id">
        <a @click="essayDetail(item)">
          <article>
            <h4>{{item.title}}</h4>
          </article>
        </a>
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
  import marked from 'marked'
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
      })
      fetch('http://103.202.140.211:3000/essay', {
        method: 'GET'
      }).then(res => {
        return res.json()
      }).then(res => {
        this.items = res
        for (let a in res) {
          res[a].content = marked(res[a].content)
        }
      })
    },
    components: {

    },
    methods: {
      essayDetail (item) {
        this.$router.push({path: `/essay/${item._id}`})
      }
    }
  }
</script>
