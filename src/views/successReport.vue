<template>
	<div class="head_box">
		<div class="title_center">
		<button @click="$router.back()" class="back"><</button>
				<p>报道完成</p>
		</div>
			<div class="success_content">
				 <div class="weui-cells">
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>学号</p>
    		</div>
    		<div class="weui-cell__ft">{{studentInfo.student_num}}</div>
  		</div>
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>姓名</p>
    		</div>
    		<div class="weui-cell__ft">{{studentInfo.student_name}}</div>
  		</div>
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>性别</p>
    		</div>
    		<div class="weui-cell__ft">{{studentInfo.gender_str}}</div>
  		</div>
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>班级</p>
    		</div>
    		<div class="weui-cell__ft">{{studentInfo.department_class}}</div>
  		</div>
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>身份证</p>
    		</div>
    		<div class="weui-cell__ft">{{studentInfo.id_card_with_mosaic}}</div>
  		</div>
			</div>
		</div>
		<dormstudents style="margin-top: 10px" v-if="studentInfo.dormitory" :id="studentInfo.dormitory.data.id">
		</dormstudents>
  		<div class="button_box">
			<a href="javascript:;" class="weui-btn weui-btn_primary"  @click='reback' >重新选择宿舍</a>
			<a href="javascript:;" class="weui-btn weui-btn_warn return" @click="quit">退出</a>
		</div>
	</div>
</template>
<script>
	import dormstudents from '../components/dormStudents.vue'
	export default{
		components: {
			dormstudents
		},
		data () {
			return {
				studentInfo:{},
				dormstudent: {},
			}
		},
		methods: {
			reback () {
				this.$http.post('/api/cancel_dorm').then(res => {
					this.$router.push({name: 'selete'});
				})
			},
			quit () {
				this.$http.post('/api/auth/logout').then(res => {
					this.$router.push({name: 'index'});
				})
			}
		},
		mounted () {
			this.$http.get('/api/me?include=dormitory').then(res => {
				this.studentInfo = res.data.data
			})
		}
	}

</script>
<style scoped>
body,html{
	background-color: #f5f5f5;
}
.head_box{
	height: 40px;
	background-color: #fff;
}
.title_center{
	padding: 5px;
	text-align: center;
}
.success_content{
	margin-top:10px; 
}
.title_center p{
	font-size: 16px;
	font-family: "Microsoft Yahei";
}
.title{
	background-color: #fff;
}
</style>