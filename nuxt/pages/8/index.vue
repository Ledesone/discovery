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
	    <td><div class="tsuyomi">責任</div></td>
	    <td><div style="background-color:gray;width:6em;">&nbsp;</div></td>
	</tr>
        <tr v-b-modal.modal-3>
	    <td><div class="tsuyomi">最上思考</div></td>
	    <td><div style="background-color:gray;width:7em;">&nbsp;</div></td>			
        </tr>
        <tr v-b-modal.modal-4>
	    <td><div class="tsuyomi">成長促進</div></td>
            <td><div style="background-color:gray;width:9em;">&nbsp;</div></td>
        </tr>
        <tr v-b-modal.modal-5>
	    <td><div class="tsuyomi">ポジティブ</div></td>
	    <td><div style="background-color:gray;width:4em;">&nbsp;</div></td>
	</tr>
<!--        <tr v-b-modal.modal-6>
	    <td><div class="tsuyomi">信念</div></td>
	    <td><div style="background-color:gray;width:6em;">&nbsp;</div></td>			
        </tr> -->
	    </table>
        </div>        
    </div>

<div>
  <!-- Modal Component -->
  <b-modal id="modal-1" scrollable title="アレンジ">
    <p class="my-4" v-for="i in 1" :key="i">
    
    アレンジの資質を持っている方は一言で言うと、器用さと柔軟さを持ち合わせた方。なので目の前で起きている事に対して、臨機応変に対応することができます。

そして、もっと良い方法があるかもしれないと思っているので、最も生産性の高い組み合わせに調整したと確信するまで何度も修正を繰り返します。しかも変化の激しい状況でこそベストを発揮するというたくましい資質。

例えば、アレンジの資質が少ない方にとっては目の前の選択肢が30ほどに見え、多すぎて大変だと思ってしまうところを、アレンジ資質に長けている方には3つに絞られた選択肢に見えるなんてこともあります。

それは人間関係においても同じです。

違ったタイプの人たちがどのようにして一緒に働くことができるか、直感的にわかります。なので新しいプロジェクトの成功のために、人材と資源の適切な組み合わせを探し出す。

いわば人の配置、物事についても、素早くもっとも有効的に組み立てられるプロと言えるでしょう。
    </p>
  </b-modal>
  
  <b-modal id="modal-2" title="責任">
    <p class="my-4" v-for="i in 1" :key="i">
    自分がやると言ったことに対して、なんとしてもやり遂げるという強い意志を持つ。
物事の大小に関係なく、「やり遂げること」それ一点に集中する。
【責任感】という資質によりあなたは「絶対的に信頼できる」という高い評判を周囲から受けることになる。
達成できなかった物事に対して言い訳や正当化はせず、なんらかの形で埋め合わせる方法を探す傾向にある。
周囲が新しい責任を誰かに求める場合に、真っ先に候補に挙がる。
人々から助けを求められやすい。あらゆることを引き受けてしまう傾向があるため、自己の負担にもつながりやすい。取捨選択の判断力を高めると、より良い結果が得られるようになる。
    </p>
  </b-modal>
  
  <b-modal id="modal-3" title="最上思考">
    <p class="my-4" v-for="i in 1" :key="i">
    自身の”強み”を活用した場合の成長や利益の大きさを本能的に理解している。
あなたの才能を評価してくれる人々を常に探している。
身体的、精神的なエネルギーを「自分がより上手くやるための方法を知ること」に使うことが多い。
正しい取捨選択が成功の鍵となることが多い。
明確な労働観をもつことが、目的達成の鍵となる。
他人があなたの強みを認めてくれた場合に、最大の力を発揮する。
生まれながらの才能や獲得したスキル・知識を人に賞賛されたいと感じる。
自身の才能をパーソナリティや専門性の更なる向上に使う傾向がある。
すでに高いレベルに達した事柄を更に向上させることを好む。
繰り返し「より上手くできないか？これが自身のマックスか？」と自問する傾向がある。
過去の成果や生まれながらの才能に満足してしまうことを「平凡に流れること」だと感じ、危機感を覚え、そうならないために一生懸命になる。
モチベーションの在処を見つけることに長ける。また、その特性を活用して他者を鼓舞できる。
個人個人のユニークさを認め、賞賛する。
    </p>
  </b-modal>
  
  <b-modal id="modal-4" title="成長促進">
    <p class="my-4" v-for="i in 1" :key="i">
    他人の潜在的な可能性を見抜く力に長けている。
誰もが進歩の途上にあり、可能性に溢れているという考えを持っていることが多い。
他の人に成功を経験させることに無上の喜びを感じる。
挑発や激励などの様々な手段を用いて人を成長させようと試みる。
他の人の進歩を見ることによって（それがどんなに小さなものであっても）、あなたは元気づけられ満足感を得る。
あなたの援助が誠実さに溢れていることを感じ取った人は、あなたを強く信頼し、援助と激励を盛んに求めるようになる。
    </p>
  </b-modal>
  
  <b-modal id="modal-5" title="ポジティブ">
    <p class="my-4" v-for="i in 1" :key="i">
    どんな状況においても、人や物事のポジティブな面を探そうとする。
周囲の人からは「陽気」や「楽天的」という印象をもたれやすい。
人々から「あなたの周りにいたい」と思われる人柄を持っていることが多い。
【ポジティブ】の強みを持つ人の熱意は伝染するため、周囲の人にまで「世界をより良いものに見せる能力」を伝播させることができる。
どんなプロジェクトにも情熱を吹き込み、どんな進歩も祝福し、どんなことでもエキサイティングでより活き活きとしたものへと変貌させる能力を持っている。
一部の懐疑的な人たちから活発さを否定的に受け止められることもあるが、【ポジティブ】を強みに有する人たちは持ち前の積極性からそれを気にすることはほとんど無い。
人生は素晴らしいという概念が心の中心に存在し、常にユーモアを周囲に振りまける。
    </p>
  </b-modal>
  
<!--  <b-modal id="modal-6" title="信念">
    <p class="my-4" v-for="i in 1" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>  
  </b-modal> -->
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
      this.diary = "同僚や友人が持っている「目標」を知るように努力し、 彼らの目標をあなたが理解していることを知らせ、彼らを成功に導くよう手助けしましょう。それまでの経験から引き受けても問題ないと思う以上の責任を積極的に引き受けましょう。あなたは、普通の人ではプレッシャーやストレスになってしまうような「責任」をプラスに受け止め、非常にうまく対処することができる人です。一度、自身の才能を特定したらそれに焦点を当てて集中しましょう。技術を洗練し、新しい知識を身につけ、練習するなど、狭い範囲の強みに注力しましょう。周囲の人の成功を認め、そのことを本人に伝えましょう。どのように成長したのかを具体的に説明するとなお良いです。";
      
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
.kao {text-align:center; width:15%; display:inline-block; color:gray;}
.tsuyomi {text-align:right; width:8em; display:inline-block;}
.row {margin-top:1em;}
.tsuyomi-title {font-size:1.8em;font-weight:bold;}
</style>

