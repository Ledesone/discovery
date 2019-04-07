<template>
<div>
    <div class="row">
        <div class="col-sm-12"><h2>傾向と総評</h2><hr/></div>
    </div>
    <div class="row">
        <div class="col-sm-12">{{ diary.diary }}</div>
    </div>

    <!--
    <div class="row">
        <div class="col-sm-12">{{ sample[0] }}</div>
    </div>
    -->
    
    <div class="row">
        <div class="col-sm-12">
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 30px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 50px"/></div>	
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 30px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 40px"/></div>	
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 30px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 40px"/></div>	
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 40px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 40px"/></div>	
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 50px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 30px"/></div>	
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 40px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 50px"/></div>	

	     <!--	     {{ report }}	  -->
	</div>
    <table>
        <tr><td><div class="tsuyomi">アレンジ</div></td>
            <td><div style="background-color:gray;width:10em;">&nbsp;</div></td>
        </tr>
        <tr><td><div class="tsuyomi">回復志向</div></td>
	    <td><div style="background-color:gray;width:6em;">&nbsp;</div></td>
	</tr>
        <tr><td><div class="tsuyomi">規律性</div></td>
	    <td><div style="background-color:gray;width:7em;">&nbsp;</div></td>			
        </tr>
        <tr><td><div class="tsuyomi">公平性</div></td>
            <td><div style="background-color:gray;width:9em;">&nbsp;</div></td>
        </tr>
        <tr><td><div class="tsuyomi">慎重さ</div></td>
	    <td><div style="background-color:gray;width:4em;">&nbsp;</div></td>
	</tr>
        <tr><td><div class="tsuyomi">信念</div></td>
	    <td><div style="background-color:gray;width:6em;">&nbsp;</div></td>			
        </tr>
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
.kao {text-align:center; width:15%; display:inline-block;}
.tsuyomi {text-align:right; width:100%; display:inline-block;}
</style>