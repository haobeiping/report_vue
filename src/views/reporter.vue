<template>
<div>
	<div class="new_head">
		<router-link :to="{name: 'index'}">
		     <p  class="back"><</p>
		</router-link>
 			<h1 class="title">确认报到</h1>
	 </div>
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
               <p>联系电话</p>
    		</div>
    		<div class="weui-cell__ft">{{10086}}</div>
  		</div>
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>身份证</p>
    		</div>
    		<div class="weui-cell__ft">{{studentInfo.id_card_with_mosaic}}</div>
  		</div>
  		<div class="weui-cell">
 		 	<div class="weui-cell__bd">
               <p>毕业中学</p>
    		</div>
    		<div class="weui-cell__ft">{{'家里蹲高中'}}</div>
  		</div>
	</div>
	<a href="javascript:;" class="weui-btn weui-btn_primary btn-sm" @click="a=true">确认</a>
	<!--BEGIN dialog1-->
        <div class="js_dialog" id="iosDialog1" v-show="a">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">确认报到</strong></div>
                <div class="weui-dialog__bd">请确认信息是否正确</div>
                <div class="weui-dialog__ft">
                 <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default"><router-link :to="{name: 'tijiao'}">确定 	</router-link></a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="a=false">取消</a>
                </div>
            </div>
        </div>
        <!--END dialog1-->
</div>
</template>
<script>
export default {
	data () {
		return {
			a:false,
			studentInfo: {}
		}
	},
	mounted () {
		this.$http.get('/api/me').then(res => {
			this.studentInfo = res.data.data
		})
	}
}
</script>
<style scoped>
a{
	direction: none;
}
</style>