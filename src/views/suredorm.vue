<template>

  <div class="new_head_two">
	<div class="head_biaoti">
		<router-link  :to="{name: 'selete'}">
			<button class="back"><</button>
		</router-link>
			<h4 class="head_success">{{title}}</h4>
  	</div>
	<div class="title_box">
	 	<p class="title_font">选择宿舍 &nbsp;><span>&nbsp;{{title}} &nbsp;></span></p>
	</div>
	<div class="content">
		<p class="text text-info" v-if="dormstudent.length==0">还未有同学入住本宿舍!</p>
		<dormstudents v-else :id="$route.params.id"></dormstudents>
		<div class="button_box">
			<a href="javascript:;" class="weui-btn weui-btn_primary" @click="a=true">选择该宿舍</a>
		   <router-link :to ="{name:'selete'}">
			<a href="javascript:;" class="weui-btn weui-btn_plain-default return">返回</a>
			</router-link>
		</div>
	</div>
  <div class="mask" v-show="a">
   <div class="weui-dialog">	
	    <div class="weui-dialog__hd"><strong class="weui-dialog__title">确认报到</strong></div>
	    <div class="weui-dialog__bd">请确认信息是否正确</div>
	    <div class="weui-dialog__ft">
	    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="confirm">确定</a>

	        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="a=false">取消</a>
	    </div>
	</div>
  </div>
</div>

</template>

<script>
import dormstudents from '../components/dormStudents.vue'
export default {
	components: {
		dormstudents
	},
	data () {
		return {
			dormstudent: {},
			title: '',
			a:false
		}
	},
	methods: {
    	confirm () {
    		this.$http.post(`/api/select_dorm/${this.$route.params.id}`).then(res => {
    			this.$router.push({name: 'successReport'})
    		}).catch(err => {
    			alert(err.data.message)
    			this.$router.push({name: 'successReport'})
    		})
    	}
	},
	mounted () {
		this.$http.get('/api/dormitories/' + this.$route.params.id + '/students').then(res => {
			this.dormstudent = res.data.data
			this.title = res.data.meta.dorm_num
		})
	}
}
</script> 

<style scoped>

ul li{
	list-style:none;
}

.head{
	height: 100%;
	background-color: #F5F5F5;
	margin-top: 0px;
	text-align: center;
}
.head_biaoti{
    text-align: center;
    padding: 10px;
}
.title_box{
	background-color: #fff;
	overflow: hidden;
}
.title_font{
	line-height: 40px;
}
.head_biaoti .back{
	line-height: 20px;
	border: none;
	width: 20px;
	height: 20px;
	float: left;
	margin-top: 10px;
}
.head_biaoti h4{
	font-size: 16px;
	line-height: 30px;
}
.head_title{
    padding: 14px 2px 10px;
}
 .title_box .title{
	float: left;
}
.already{
	border-bottom: 1px solid #f5f5f5;
}
.content{
	margin-top: 20px;
	background-color: #fff;
}
.text{
	line-height: 40px;
	text-align:center;
}


.button_box{
	background-color: #f5f5f5;
}
.return{
	margin-top: 10px;
}
.mask{
	z-index: 999;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: #333;
	opacity:0.9;
}
</style>