<template>
  <div class="row">
    <div class="col-sm-12 logo-parent">
      <img src="~/assets/logo-small-1.png" class="img-fluid logo-child" alt="Responsive image">
    </div>
    <div class="col-sm-12">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" name="username" placeholder="ユーザー名">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="パスワード">
        </div>
        <div class="text-center">
          <button type="button" class="login-btn btn btn-default" @click="linkToTop">ログイン</button>
        </div>
        <div class="text-center">
          <a class="">新規アカウントの作成</a>
        </div>
        <div class="sns-login">
          <div>
            <button type="button" class="text-left login-facebook btn btn-default">facebookでログイン</button>
          </div>
          <div>
            <button type="button" class="text-left login-twitter btn btn-default">Twitterでログイン</button>
          </div>
          <div>
            <button type="button" class="text-left login-line btn btn-default">LINEでログイン</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
export default {
  methods: {
    linkToTop (e) {
      this.$router.push('menu')
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
.logo-parent {
  position: relative;
  height: 320px;
}
.logo-child {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  width: 100px;
  text-align: center;
}
.login-btn {
  width: 100%;
  border: solid 1px;
}
.sns-login {
  margin-top: 90px;
  .login-facebook {
    width: 100%;
    border: solid 1px;
    margin-bottom: 10px;
  }
  .login-twitter {
    width: 100%;
    border: solid 1px;
    margin-bottom: 10px;
  }
  .login-line {
    width: 100%;
    border: solid 1px;
    margin-bottom: 10px;
  }
}

a {
  font-size: 14px;
}
</style>
