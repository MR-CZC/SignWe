<template>
  <view class="modal-container">
    <view class="modal-content">
      <!-- 内容 -->
      <view class="modal-title">用户尚未登录，请先注册</view>
       <!-- 输入框1 -->
		<input class="modal-input" v-model="inputValue1" placeholder="姓名,如张三" @input="isEmpty1"/>
		<view class="warning" v-show="warning1">
			姓名不能为空
		</view>
		<!-- 输入框2 -->
		<input class="modal-input" v-model="inputValue2" placeholder="班级,如计科1231" @input="isEmpty2"/>
		<view class="warning" v-show="warning2">
			班级不能为空
		</view>
      <!-- 按钮 -->
      <view class="modal-buttons">
		<view @click="cancel" class="cancel">取消</view>
        <view @click="confirm" class="confirm">确认</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
	data(){
		return {
			inputValue1: "",
			inputValue2: "",
			warning1: false,
			warning2: false,
		}
	},
	methods: {
		confirm() {
			// 获取输入框的值
			const name = this.inputValue1;
			const className = this.inputValue2;
			
			if(name == "" || className == ""){
				uni.showToast({
					title:"格式不能为空",
					icon:"error",
					mask:true,
					duration:1000,
				})
				if(name == ""){
					this.warning1 = true;
				}else{
					this.warning1 = false;
				}
				if(className == ""){
					this.warning2 = true;
				}else{
					this.warning2 = false;
				}
				return;
			}

			// 触发确认事件并传递输入框的值
			this.$emit('confirm', { name, className });

			// 关闭模态对话框
			this.$emit('close');
		},
		cancel() {
			// 触发取消事件
			this.$emit('cancel');
	  
			// 关闭模态对话框
			this.$emit('close');
		},
		isEmpty1(){
			if(this.inputValue1 === ""){
				this.warning1 = true;
			}else{
				this.warning1 = false;
			}
		},
		isEmpty2(){
			if(this.inputValue2 === ""){
				this.warning2 = true;
			}else{
				this.warning2 = false;
			}
		},
	},
	onShow() {
		this.warning1 = false;
		this.warning2 = false;
	}
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  width: 500rpx;
  height: 450rpx;
  display: flex;
  flex-direction: column;
}

.modal-title {
	flex: 1;
	font-size: 18px;
	font-weight: bold;
	margin: 20px auto 10px;
}

.modal-input {
	flex: 1;
	width: 81%;
	padding: 10px;
	margin:5px auto 5px;
	border: 1px solid #000;
	border-radius: 5px;
}

.modal-buttons {
	flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.cancel{
	flex: 1;
	color: #000000;
	text-align: center;
	font-size: 16px;
}

.confirm{
	flex: 1;
	color: #576b95;
	text-align: center;
	font-size: 16px;
}

.warning{
	margin-left: 50rpx;
	color: red;
	font-size: 12px;
}
</style>
