<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="./assets/logo.png" alt="logo">
        <h1>发现你需要的互联网资源</h1>
      </router-link>
    </header>
    <ul class="nav">
      <li v-for="link in links" @click="changeCategory">
        <router-link :to="link.link">{{ link.name }}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      links: [
        {
          name: '公开课',
          link: 'openCourse'
        },
        {
          name: 'IT技术',
          link: 'technology'
        },
        {
          name: '大学生',
          link: 'college'
        },
        {
          name: '更多资源',
          link: 'more'
        },
      ]
    }
  },
  methods: {
    changeCategory (e) {
      e.preventDefault()
      console.log(e.target)
      let categorys = document.querySelectorAll('.nav li');
      categorys.forEach(category => {
        category.classList.remove('active')
      })

      e.target.classList.add('active')
    }
  }
};
</script>

<style lang="scss">
@import './assets/style/style'
</style>
