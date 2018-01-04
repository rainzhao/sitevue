<template>
  <div class="detail">
    <p v-html="essay.content"></p>
  </div>
</template>

<style>
    p{
        margin-left: .5rem;
        text-indent: 1rem;
    }
    ul, ol {
        margin-left: 2rem;
    }
    ol, ul, dl {
        margin: 0 0 .6rem 0;
        padding: 0;
    }
    ul li {
        padding-left: 1.25rem;
        margin-bottom: .5rem;
        padding-bottom: .5rem;
    }
    ul{
        display: block;
        list-style-type: disc;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 40px;
    }
    pre{
        padding: 1rem;
        vertical-align: top;
        background: #f2f2f2;
        margin: 1rem;
        overflow-x: auto;
    }
    .detail{
        margin-top: 80px;
    }
    .detail pre,
    .detail code {
        font-family: "PT Mono", Consolas, Monaco, Menlo, monospace;
        color: #040404;
        background-color: #f2f2f2;
        border-radius: 6px;
        padding-left: 1em;
        text-indent: 0 !important;
    }
    .detail code {
        background: #eee;
        text-shadow: 0 1px #fff;
        margin: 0 0.3em;
        padding: 0 0.3em;
        line-height: 1.4rem;
    }
    .detail pre code {
        background: none;
        text-shadow: none;
        padding: 0;
        
    }
    .post pre{
        background: #f7f7f7;
        margin: 20px 0;
        padding: 15px;
        overflow: auto;
        font-size: 13px;
        color: #4d4d4c;
        line-height: 1.6;
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
      fetch('http://103.202.140.211:3000/essay/get', {
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
