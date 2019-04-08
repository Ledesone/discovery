<template>
  <div class="main">

    <div class="row" v-for="diary in diaries" v-bind:key="diary">
      <div class="container-fluid">
        <div class="diary-head">
          2019/4/{{ diary }} niko
        </div>
        <div class="diary-body">
          <div class="diary-message">
            親譲りの無鉄砲やで親譲りの無鉄砲やで親譲りの無鉄砲やで親譲りの無鉄砲やで親譲りの無鉄砲やで親譲りの無鉄砲やで親譲りの無鉄砲やで親譲りの無鉄砲やで
            続きを読む
          </div>
          <div class="diary-photo">
              <img src="https://www.motex.co.jp/nomore/wp-content/uploads/2015/10/a11b4bb3ba448d1fa402ac3dc62cc91f.jpg" class="img-fluid" alt="Responsive image">
              <img src="https://www.motex.co.jp/nomore/wp-content/uploads/2015/10/a11b4bb3ba448d1fa402ac3dc62cc91f.jpg" class="img-fluid" alt="Responsive image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diaries: [
        10,9,8,7,6,5,4,3,2,1
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.diary-head {
  background-color: gray;
  color: white;
}
.diary-body {
  .diary-photo{
    img {
      width: 49%;
      height: 50%;
    }
  }
}
.row {
  margin-bottom: 10px;
  border: solid 1px;
}
.main {
  margin-bottom: 100px;
}
</style>
