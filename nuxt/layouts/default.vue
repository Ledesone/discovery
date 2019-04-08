<template>
  <div class="main-content">
    <div class="container">
      <nuxt />
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
      <div class="col-md-12 nav-icons">
        <span class="col-auto">
          <font-awesome-icon icon="home" class="font-icon" @click="linkToTop"/>
        </span>
        <span class="col-auto">
          <font-awesome-icon icon="camera-retro" class="font-icon" @click="linkToPost"/>
        </span>
        <span class="col-auto">
          <font-awesome-icon icon="list" class="font-icon" @click="linkToPost"/>
        </span>
        <span class="col-auto">
          <font-awesome-icon icon="calendar-alt" class="font-icon" @click="linkToPost"/>
        </span>
        <span class="col-auto">
          <font-awesome-icon icon="search" class="font-icon" @click="linkToPost"/>
        </span>
        <div>© 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> discovery</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    linkToTop (e) {
      this.$router.push('menu')
    },
    linkToPost (e) {
      this.$router.push('post')
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.font-icon {
  font-size: 20px
}
.nav-icons {
  text-align: center;
}
.footer-copyright.py-3 {
  width: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
