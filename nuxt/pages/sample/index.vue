<template>
  <section class="container">
    <div class="sample">
      <p>{{ sample }}</p>
      <p>sampleページ</p>
      <p>{{ ip }}</p>
      <p>report_json: {{ report }}</p>
      <p>report_arrange: {{ report.arrange }}</p>
      <p>diary_json: {{ diary }}</p>
    </div>
  </section>
</template>

<script>
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
</style>