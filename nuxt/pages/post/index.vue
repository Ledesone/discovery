<template>
  <div class="row">
    <div class="container-fluid">
      <div>
        <div class="text-center">
          <img src="https://www.motex.co.jp/nomore/wp-content/uploads/2015/10/a11b4bb3ba448d1fa402ac3dc62cc91f.jpg" class="img-fluid" alt="Responsive image">
        </div>
      </div>
    </div>
    <div class="container-fluid">
        <div class="text-center">
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'smile-beam']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'smile-wink']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'smile']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'grin-hearts']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'grin-squint']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'grin-beam-sweat']" class="font-icon" />
          </span>
        </div>
        <div class="text-center">
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'tired']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'surprise']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'frown']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'angry']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'sad-tear']" class="font-icon" />
          </span>
          <span class="col-auto">
            <font-awesome-icon :icon="['far', 'sad-cry']" class="font-icon" />
          </span>
        </div>
        <input type="textarea" class="form-control" placeholder="コメント欄">
        <div>
          <div class="text-left">次の場所にも投稿する</div>
          <div>
            <font-awesome-icon :icon="['fab', 'twitter']" />
            <span >Twitter</span>
            <input type="checkbox" class="switch">
          </div>
          <div class="text-left">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <span>facebook</span>
            <input type="checkbox" class="switch">
          </div>
          <div class="text-left">
            <font-awesome-icon :icon="['fab', 'line']" />
            <span>LINE</span>
            <input type="checkbox" class="switch">
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-default" @click="linkToMenu">確認する</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkToMenu (e) {
      this.$router.push('menu')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  border: solid 1px;
}
input.form-control {
  height: 100px;
}
.switch {
  float: right;
}

</style>
