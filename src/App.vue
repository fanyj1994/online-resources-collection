<template>
  <div id="app">
    <header>
      <router-link to="/" @click="addBeginActiveMenu">
        <!-- <img src="./assets/logo.png" alt="logo"> -->
        <h1>发现你需要的互联网资源</h1>
      </router-link>
    </header>
    <ul class="nav">
      <li v-for="link in links" :key="link.id" @click="changeCategory">
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
  mounted () {
    this.addBeginActiveMenu()
  },
  watch: {
    '$route' () {
      this.addBeginActiveMenu()
    }
  },
  methods: {
    addBeginActiveMenu () {
      let path = this.$route.path
      if (path === '/' || path === '/openCourse') {
        let openCourseMenu = document.querySelectorAll('.nav li a')[0]
      console.log(openCourseMenu)
        openCourseMenu.classList.add('router-link-active')
      }
    },
    changeCategory (e) {
      e.preventDefault()
      let categorys = document.querySelectorAll('.nav li a');

      categorys.forEach(category => {
        category.classList.remove('router-link-active')
      })

      e.target.classList.add('router-link-active')
    }
  }
};
</script>

<style lang="scss">
@import './assets/style/style'
</style>
