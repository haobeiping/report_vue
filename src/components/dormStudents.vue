<template>
<div>
	<div class="content_title">
		<p class="already">已经入住{{dormNum}}的同学</p>
	</div>
	<div class="dorm">
		<ul>
			<li v-for="item in dormstudents">
				<p>{{item.student_name}}</p>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default{
	props: {
		id: String
	},
	data () {
		return {
			dormstudents: [],
			dormNum: ''
		}
	},
	mounted () {
		this.$http.get(`/api/dormitories/${this.id}/students`).then(res => {
			this.dormstudents = res.data.data
			this.dormNum = res.data.meta.dorm_num
		})
	}
}
</script>

<style scoped>
.content_title{
	line-height: 30px;
	background-color: #fff;
}
.dorm{
	overflow: hidden;
	background-color: #fff;
}
.dorm ul li{
	margin: 10px;
	border:1px solid #fff;
	text-align: center;
	background-color: #F9F9F9;
	float: left;
	width: 30%;
	height: 40px;
	box-sizing: border-box;
}
.dorm ul li:active{
	background-color: #fff;
}
.dorm ul li p{
	line-height: 40px;
}
</style>