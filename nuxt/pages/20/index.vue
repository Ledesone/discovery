<template>
<div>
    <div class="row">
        <div class="col-sm-12">
	     <h2>Diary Checker For Doctor</h2>
	     <hr style="margin-top:0;margin-bottom:0;border-bottom:solid 1px;"/>
	</div>
    </div>
    
    <div class="row">
        <!--        <div class="col-sm-12">{{ diary }}</div> -->
	<div class="col-sm-12" v-html="diaryhtml"></div>
    </div>

    <!--
    <div class="row">
        <div class="col-sm-12">{{ sample[0] }}</div>
    </div>
    -->
    
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
      var abc = "日記2 \
      女性25歳 OL \
      最近仕事で本当に忙しい! \
      新規事業のプロジェクトリーダーに \
      抜擢された! \
      長年、責任のある仕事につきたい \
      と上司には言い続けていたのだ。 \
      すごく複雑な仕事ではあるが \
      何が最適で何がベストかを探して \
      いく過程が最も楽しい!  \
      先日クライアントから  \
      クレームが入った時も \
      即時に対応した。今自分が抱えている \
      仕事を部下へ任せ段取りをつけた! \
      これは部下の成長にもつながる。 \
      そしてお客様のところに \
      上司の許可なく直行したのだ! \
      上司には怒られたが全く気にしない! \
      これが功をそうしてお客様の \
      信頼を回復! \
      さらに会社に戻ったあど、上司から \
      頼まれていた、仕事も快く引き受けた! \
      もっともっと結果を出したい! \
      この際、クレーム対応に上司に頼まれていた \
      仕事にせよ全部引き受けてやる!もっともっと成長したい! \
      周りからはよく楽天的と言われる。 \
      よく見切り発車をして怒られるが結果オーライ!"

      // ["責任", "何がベスト", "部下の成長", "もっともっと成長", "楽天的","結果オーライ"].forEach(function(v){
      //   abc = abc.split(v).join("<span style='background-color:yellow;'>"+ v + "</span>");
      // });
      // this.diaryhtml = abc;
    });
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

