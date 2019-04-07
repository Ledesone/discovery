<template>
<div>
    <div class="row">
        <div class="col-sm-12"><h2>傾向と総評</h2><hr/></div>
    </div>
    <div class="row">
        <div class="col-sm-12">{{ diary.diary }}</div>
    </div>
    
    <div class="row">
        <div class="col-sm-12">{{ sample[0] }}</div>
    </div>
    
    <div class="row">
        <div class="col-sm-12">{{ report }}</div>
    <table>
        <tr><td>ichiro</td> 
            <td>mariners</td>
        </tr>
    <tr><td>matsui</td>
    <td>yankees</td></tr>
    <tr><td>shinjo</td>
    <td>mets</td></tr>
    </table>
            
    </div>
    <div class="row">
        <div class="col-sm-12">{{ ip }}</div>
    </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      ip: '',
      sample: '',
      report: '',
      diary: ''
    }
  },
  created() {
    // 外部のapiを叩く
    this.$axios.get('https://httpbin.org/get')
    .then((response) => {
      this.ip = response.data.origin;
    })
    .catch((reason) => {
      this.ip = 'IPの取得に失敗しました';
    })
    // railsに対してapiを叩く
    this.$axios.get('http://localhost:3000/v1/samples/sample')
    .then((response) => {
      this.sample = response.data;
    })

    this.$axios.get('http://localhost:3000/v1/analytics/mock_report')
    .then((response) => {
      this.report = response.data[0];
    })

    this.$axios.get('http://localhost:3000/v1/diary/mock_diary')
    .then((response) => {
      this.diary = response.data[0];
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.sample {
  background-color: #ddd;
}
.diary {color:red;}
</style>