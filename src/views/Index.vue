<template>
<div class="content">
    <div class="up_box">
    <div class="head">
      <div class="logo_box">
      <div class="logo_box_img">
        <img src="../assets/images/logo.png" height="100" width="370">
      </div>
        <div class="logo_font">
           <p>欢迎2017届新生</p>
        </div>
      </div>
    </div>
    <div class="input">
      <div class="list">
         <p>试试简拼搜索:如：小明(xm)</p>
      </div>
      <div class="input_box">
         <input type="text"  placeholder="请输入你的姓名..." v-model="t1">
         <button type="btn" class="enter" @click="a=true">确认</button>
      </div>
     </div>
    <div class="search">
       <ul>
         <li @click="showIdCardInput(value)" v-for="(value, index) in myDate">
           {{value}}
         </li>
       </ul>
    </div>
    </div>
    <transition name="fade">
      <div class="mask_one" v-show="a">
        <div class="password">
          <div class="cancer">
            <button @click="a=false">X</button>
            <p>请输入身份证后四位</p>
          </div>
          <div class="button_box">
             <input v-for="n in 4" :value="idCard[n - 1]" type="text">
          </div>
          <div class="click_box">
            <ul>
              <li @click="addIdCard(n)" v-for="n in 9" class="click">{{n}}</li>
              <li class="id_X click" @click="addIdCard('x')">X</li>
              <li @click="addIdCard(0)" class="click">0</li>
              <li @click="removeIdCard" class="id_cancer click glyphicon glyphicon-remove-circle"></li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
</div>
</template>
<script>
    export default{
        data: function () {
          return {
            myDate:[],
            t1:'',
            a: false,
            idCard: []
          }
        },
        mounted () {
        },
        watch: {
          t1: function(){
            if (this.t1 !== '') {
              this.$http.get('/api/students/' + this.t1 + '/search').then((response)=>{
                this.myDate = response.data
              })
            } else {
              this.myDate = []
            }
          }
        },
        methods:{
          showIdCardInput (val) {
            this.t1 = val
            this.a = true
          },
          removeIdCard () {
            this.idCard.pop()
          },
          addIdCard (n) {
            this.idCard.push(n)
            if(this.idCard.length === 4){
              this.$http.post( '/api/auth/login',{
                student_name: this.t1,
                password: this.idCard.join("")
              }).then(res => {
                this.$router.push({name: 'reporter'})
                this.idCard = []
              })
            }
          }
        }
      }
</script>
<style scoped>
.grey{
  background-color:#333;
}
.search li{
  background-color: #fff;
}
.search li:active{
  background-color: #e1e1e1;
}

</style>
