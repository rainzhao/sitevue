<template>
  <div class="detail">
    <p v-html="essay.content"></p>
  </div>
</template>

<style>
    .detail{
        margin-top: 80px;
    }
</style>

<script>
  import marked from 'marked'
  export default {
    name: 'EssayDetail',
    data () {
      return {
        essay: {}
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
      fetch('http://127.0.0.1:3000/essay/get', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: `${this.$route.params.id}`
        })
      }).then(res => {
        return res.json()
      }).then(res => {
        this.essay = {
          ...res[0],
          content: marked(res[0].content)
        }
      })
    },
    components: {

    }
  }
</script>
