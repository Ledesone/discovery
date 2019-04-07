<template>
  <section class="container">
    <div> 
      <form class="login">
        <label><input type="text" name="username" placeholder="ユーザー名"></label>
        <label><input type="password" name="password" placeholder="パスワード"></label>
        <input type="submit" value="ログイン"><br>
        <a href="">新規アカウントの作成</a><br>
        <div class="SNSlogin">
          <input type="submit" value="facebookでログイン">
          <input type="submit" value="Twitterでログイン">
          <input type="submit" value="LINEでログイン">
        </div>
      </form>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  div {
    margin: 0 auto;
    display:block;
  }
  
  form {
    margin-top: 10px;
    width: 320px;
  }

  input {
    color: black;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: white;
  }

  ::placeholder{
    color: #CCCCCC;
  }

  a {
    color: black;
    margin:0 auto;
    display:block;
    font-size: 14px;
  }

  input {
    width: 300px;
    margin-bottom: 10px;
  }
</style>
