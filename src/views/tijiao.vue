<template>
	<div class="new_head">
		<router-link :to="{name: 'reporter'}">
		     <p  class="back"><</p>
		</router-link>
 			<h1 class="title">报到成功</h1>
		<div class="weui-msg">
		  <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
		  <div class="weui-msg__text-area">
		    <h2 class="weui-msg__title">操作成功</h2>
		    <p class="weui-msg__desc">恭喜你，报到成功。现在你可以选择宿舍</p>
		  </div>
		  <div class="weui-msg__opr-area">
		  <router-link  :to="{name:'selete'}">
		    <p class="weui-btn-area">
		      <a href="javascript:;" class="weui-btn weui-btn_primary">选择宿舍</a>
		    </p>
		    </router-link>
		  </div>
	 </div>
	</div>
</template>
<script>
	
</script>
<style scoped>
</style>