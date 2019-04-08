<template>
<div>
    <div class="row">
        <div class="col-sm-12">
	     <h2>傾向と総評</h2>
	     <hr style="margin-top:0;margin-bottom:0;border-bottom:solid 1px;"/>
	</div>
    </div>
    <div class="row">
        <div class="col-sm-12">{{ diary }}</div>
    </div>

    <!--
    <div class="row">
        <div class="col-sm-12">{{ sample[0] }}</div>
    </div>
    -->
    <div class="row">
        <div class="col-sm-12">
	     <div class="kao"><font-awesome-icon icon="smile-beam" style="font-size: 30px"/></div>
	     <div class="kao"><font-awesome-icon icon="smile-wink" style="font-size: 50px"/></div>	
	     <div class="kao"><font-awesome-icon icon="grin-beam-sweat" style="font-size: 30px"/></div>
	     <div class="kao"><font-awesome-icon icon="grin-squint" style="font-size: 40px"/></div>	
	     <div class="kao"><font-awesome-icon icon="grin-hearts" style="font-size: 30px"/></div>
	     <div class="kao"><font-awesome-icon icon="sad-tear" style="font-size: 40px"/></div>	
	     <div class="kao"><font-awesome-icon icon="surprise" style="font-size: 40px"/></div>
	     <div class="kao"><font-awesome-icon icon="sad-cry" style="font-size: 40px"/></div>	
	     <div class="kao"><font-awesome-icon icon="meh-blank" style="font-size: 50px"/></div>
	     <div class="kao"><font-awesome-icon icon="meh" style="font-size: 30px"/></div>	
	     <div class="kao"><font-awesome-icon icon="meh-rolling-eyes" style="font-size: 40px"/></div>
	     <div class="kao"><font-awesome-icon icon="flushed" style="font-size: 50px"/></div>	

	     <!--	     {{ report }}	  -->
	</div>
    </div>
    
    <div class="row">
    	 <div class="col-sm-12">
	     <table cellspacing="2" style="border-collapse:separate;">
        <tr v-b-modal.modal-1>
	    <td><div class="tsuyomi">アレンジ</div></td>
            <td><div style="background-color:gray;width:10em;">&nbsp;</div></td>
        </tr>
        <tr v-b-modal.modal-2>
	    <td><div class="tsuyomi">回復志向</div></td>
	    <td><div style="background-color:gray;width:6em;">&nbsp;</div></td>
	</tr>
        <tr v-b-modal.modal-3>
	    <td><div class="tsuyomi">規律性</div></td>
	    <td><div style="background-color:gray;width:7em;">&nbsp;</div></td>			
        </tr>
        <tr v-b-modal.modal-4>
	    <td><div class="tsuyomi">公平性</div></td>
            <td><div style="background-color:gray;width:9em;">&nbsp;</div></td>
        </tr>
        <tr v-b-modal.modal-5>
	    <td><div class="tsuyomi">慎重さ</div></td>
	    <td><div style="background-color:gray;width:4em;">&nbsp;</div></td>
	</tr>
        <tr v-b-modal.modal-6>
	    <td><div class="tsuyomi">信念</div></td>
	    <td><div style="background-color:gray;width:6em;">&nbsp;</div></td>			
        </tr>
	    </table>
        </div>        
    </div>

<div>
  <!-- Modal Component -->
  <b-modal id="modal-1" scrollable title="アレンジ">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
  
  <b-modal id="modal-2" title="回復志向">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
  
  <b-modal id="modal-3" title="規律性">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
  
  <b-modal id="modal-4" title="公平性">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
  
  <b-modal id="modal-5" title="慎重さ">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
  
  <b-modal id="modal-6" title="信念">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div>


    <div class="row">
        <div class="col-sm-12">
		<div style="height:8em;"></div>
		<!-- {{ ip }} -->
	</div>
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
      diary: '',
      diaryhtml: ''
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
      this.diary = response.data[0].diary;

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
.kao {text-align:center; width:15%; display:inline-block;}
.tsuyomi {text-align:right; width:8em; display:inline-block;}
.row {margin-top:1em;}
.tsuyomi-title {font-size:1.8em;font-weight:bold;}
</style>

