<template>
 <div>
   	<!-- 顶部固定定位组件 -->
	<div class="fixed-header">
		<!-- 页面说明 -->
		<div class="explain"><a href="javascript:;" class="goback" id="goback" v-on:click="goback();"></a>{{explainName}}</div>
	</div>
    
	<!-- 登录组件 -->
	<div class="account-container">
        <div class="account-check">
          <div active-class="this-account-model" class="account-check-btn"  v-bind:class="{ 'class-a' : !isA}" @click="toggle0"><span>登录</span></div>
          <div active-class="this-account-model" class="account-check-btn"   v-bind:class="{ 'class-a' : isA }" @click="toggle"><span>注册</span></div>
       </div>
		<form class="account-container-form" v-on:submit.prevent="login" v-show="isB">
			<p>
				<span class="phone-ico"></span>
				<input type="text" placeholder="请输入手机号" maxlength="11" class="phone" v-model.lazy.trim="phone" />
			</p>
			<p>
				<span class="pwd-ico"></span>
				<input type="password" placeholder="请输入密码" class="pwd" v-model.lazy.trim="pwd" />
			</p>
			<p>
				<input type="submit" value="登	录" class="account-btn" />
			</p>
		</form>
        <form v-on:submit.prevent="regist" class="account-container-form" v-show="isA">
			<p>
				<span class="phone-ico"></span>
				<input type="text" placeholder="请输入手机号" maxlength="11" class="phone" v-model.lazy.trim="phone1" />
			</p>
			<p>
				<span class="pwd-ico"></span>
				<input type="password" placeholder="请输入至少6位数的密码" class="pwd" v-model.lazy.trim="pwd1" />
			</p>
			<p>
				<span class="pwd-ico"></span>
				<input type="password" placeholder="确认密码" class="pwd" v-model.lazy.trim="confirmPwd1" />
			</p>
			<p>
				<input type="submit" value="注	册" class="account-btn" />
			</p>
		</form>
	</div>
 </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data () {
			return {
				phone: '',
                pwd: '',
                explainName:"欢迎来到云新闻",
                isA: false,
                isB:true,
                phone1: '',
				pwd1: '',
				confirmPwd1: ''

			}
		},
		methods: {
			login () {
				if (!(/^((13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8})$/).test(this.phone)) {
					alert('手机号码格式不正确，请重新输入！');
					return false;
				}

				if (!(/\w{6,}/).test(this.pwd)) {
					alert('密码需要至少6位数，请重新输入！');
					return false;
				}

				this.axios.post('/login/loginForm', {phone: this.phone, pwd: this.pwd}, {emulateJSON: true}).then((result) => {
                    // console.log(result.data.backInfo);
                    
                    const userMsg = result.data;
                    console.log(userMsg);
					switch (result.data.backInfo) {
						case '0':
							alert('账号或密码有误，请重新输入！');
							break;
						case '1':
						     this.$store.commit('changeName', userMsg.name);
                             localStorage.name = userMsg.name;
                             console.log("name:"+localStorage.name);
							this.$router.push({name: 'NewsList'});
							break;
						default:
							alert('登录失败，请重新操作！');
					}
				});
            },
            regist () {
				if (!(/^((13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8})$/).test(this.phone1)) {
					alert('手机号码格式不正确，请重新输入！');
					return false;
				}

				if (!(/\w{6,}/).test(this.pwd1)) {
					alert('密码需要至少6位数，请重新输入！');
					return false;
				}

				if (this.pwd1 !== this.confirmPwd1) {
					alert('两次输入的密码不一致，请重新输入！');
					return false;
				}

				this.axios.post('/regist/registForm', {phone: this.phone1, pwd: this.pwd1}, {emulateJSON: true}).then((result) => {
                    
                    
					switch (result.data.backInfo) {
						case "0":
							alert('该手机号已经被注册，请重新操作！');
							break;
						case "1":
							alert('注册成功！');
							window.location.href = '/';
							break;
						default:
							alert('注册失败，请重新操作！');
					}
				});
			},
            goback () {
				this.$router.back();
            },
            toggle0(){
               this.isA = false;
               this.isB =true;            
            },
             toggle(){
               this.isA = true;
               this.isB =false;            
            }

		},
		mounted () {
			let $sessionStorage = window.sessionStorage;
			if (!$sessionStorage) {
				alert('为保证您可以正常使用我们的产品，请关闭浏览器的无痕浏览模式！');
				return;
			}
			if ($sessionStorage.userMsg && JSON.parse($sessionStorage.userMsg).id) {
				this.$router.push({name: 'GlobalCouponIndex'});
			}
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
    @import "./tour-app-account.less";
    .account-check {
		display: flex;
        flex-flow: row nowrap;
        margin-bottom: 20px;
		.account-check-btn {
			flex: 1;
			position: relative;
			height: 50px;
			cursor: pointer;
			span {
				display: block;
				position: absolute;
				width: 100px;
				height: 32px;
				left: 50%;
				top: 8px;
				margin-left: -50px;
				line-height: 32px;
				text-align: center;
				font-size: 15px;
				color: #b4b4b4;
			}
			&.this-account-model span {
				border-bottom: 2px solid #ffb000;
				color: #4c4c4c;
            }
            &.class-a{
                display: block;
                border-bottom: #ffb000 1px solid;
            }
            &.class-b{
                // display: none;
                //  border-bottom: #ffb000 1px solid;
            }
		}
	}
    .fixed-header {
	  position: fixed;
	  top: 0;
	  z-index: 10001;
	  width: 100%;
	  min-width: 320px;
	  max-width: 640px;
	  background-color: #fff;
	  .explain {
		position: relative;
		height: 45px;
		text-align: center;
		line-height: 45px;
		font-size: 18px;
		color: #383838;
		.goback {
			position: absolute;
			top: 7px;
			left: 10px;
			display: block;
			width: 21px;
			height: 31px;
			background: url("./images/goback.png") no-repeat left center;
			background-size: 12px 18px;
		}
	  }
	}
</style>