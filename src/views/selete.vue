<template>
	<div class="new_head">
	<div class="head">
		<h1 class="head_success">选择宿舍</h1>
		</div>
		<div class="weui-panel weui-panel_access head_title">
  		<div class="weui-panel__hd">选择宿舍<span>&nbsp;></span></div>
		<div class="new" v-for="item in avaliableDrom">
			<p class="title">{{item.title}}</p>
			<ul>
				<router-link :key="dorm.id" tag="li" :to="{name: 'suredorm', params: {id: dorm.id}}" v-for="dorm in item.dorms">
					<p class="dorm_total">{{dorm.galleryful}}人间</p>
				    <h4> {{dorm.dorm_num}}</h4>
				    <span>剩余:{{dorm.galleryful_in_this_class - dorm.already_selected_num_in_this_class}}/{{dorm.galleryful_in_this_class}}</span>
				</router-link>		
			</ul>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		data () {
			return {
				avaliableDrom: {}
			}
		},
		mounted () {
			this.$http.get('/api/dormitories/available').then(res => {
				res.data.data.forEach((item, index, arr) => {
					let key = item.dorm_unit + item.dorm_ridgepole;
					if(this.avaliableDrom[key] == undefined){
						this.avaliableDrom[key] = {
							title: item.dorm_unit + "单元" + item.dorm_ridgepole + "栋",
							dorms: []
						}
					}
					this.avaliableDrom[key].dorms.push(item)
					this.$forceUpdate()
				})
				console.log(this.avaliableDrom)
			})
		}
	}

</script>

<style scoped>
.head{
	height: 40px;
	background-color: #F5F5F5;
 }
.head_success{
	margin-bottom: 0px;
	margin:0px;
	height: 40px;
	text-align: center;
	font-size: 20px;
	line-height: 40px;
	}
.head_title{
	margin-top: 0px;
}
.title{
	margin-left: 15px;
	margin-top: 5px;
}
.new ul{
	margin-top: 10px;
	overflow: hidden;
}
.dorm_total{
	position: absolute;
	top: 5px !important;
	left: 10px;
}
.new ul li{
	height: 80px;
	border: 1px solid #F5F5F5;
	padding-bottom: 20px;
	list-style:none;
	text-decoration: none;
	float: left;
	width: 50%;
	position: relative;
}
.new ul li p{
	background-color: #FFECEC;
	color: #FF496D;
	position: absolute;
	top: 0px;
	left: 10px;
}
.new ul li span{
	font-size: 12px;
	color: #999;
	position: absolute;
	right: 0px;
	top: 60px;
}
.new ul li h4{
	font-size: 16px;
	position: absolute;
	top: 25px;
	left: 60px;
}
</style>

