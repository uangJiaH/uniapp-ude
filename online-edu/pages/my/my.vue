<template>
	<view class="container-box position-relative">
		<view class="top ">
			<view class="first flex justify-between ">
				<span>我的</span>
				<span>
					<uni-icons type="more-filled" size="30" color="#fff"></uni-icons>
				</span>
			</view>
			<view class="second flex mt-3 pl-2">
				<view class="photo">
					<image
						src="https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1660842000&t=052cafa521b6b771459c7c45e2db9168"
						mode=""></image>
				</view>
				<view class="flex flex-column m-2 info">
					<span @click="handleLogin">立即登录</span>
					<span>登录解锁更多功能</span>
				</view>
			</view>
		</view>
		<view class="bottom p-3 pl-3">
			<view class="data flex justify-between align-center" v-for="(item,index) in dataList" :key="index">
				<view class="icons flex pl-2 pr-2">
					<uni-icons style="font-size: 50rpx;" :type="item.icons" size="30" color="#368fe1"></uni-icons>
					<span>{{item.title}}</span>
				</view>
				<span>
					<uni-icons style="font-size: 50rpx;" type="forward" size="30" color="#b3b3b3"></uni-icons>
				</span>

			</view>

		</view>
		<view class="nav position-absolute shadow flex align-center text-center">
			<view class="flex flex-column " v-for="(item,index) in iconsList" :key="index">
				<span>
					<uni-icons style="font-size: 50rpx;" :type="item.icons" size="30" color="#fbba00"></uni-icons>
				</span>
				<text>{{item.title}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	// import {to} from '@/utils/navigate.js'
	export default {
		data() {
			return {
				iconsList: [{
						id: 1,
						icons: "wallet-filled",
						title: '订单'
					},
					{
						id: 2,
						icons: "chatboxes",
						title: '消息'
					},
					{
						id: 3,
						icons: "star",
						title: '收藏'
					},
					{
						id: 4,
						icons: "color-filled",
						title: '在学'
					},
				],
				// 优惠券
				dataList: [{
						id: 1,
						icons: "fire",
						title: '我的优惠券'
					},
					{
						id: 2,
						icons: "help",
						title: '常见问题'
					},
					{
						id: 3,
						icons: "gear",
						title: '设置'
					},
				],
			}
		},
		methods: {
			handleLogin() {
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style>
	.top {
		height: 400rpx;
		background-color: #5ccc84;
		border-bottom-left-radius: 70rpx;
		border-bottom-right-radius: 70rpx;
		padding: 10rpx;
	}

	.bottom {
		/* background-color: #564545; */
		padding-top: 70rpx;
		/* height: calc(100vh-490px); */
	}

	.nav {
		width: 690rpx;
		height: 140rpx;
		background-color: #fff;
		border-radius: 10rpx;
		top: 320rpx;
		left: 30rpx;
	}

	.nav view {
		width: 25%;
	}

	.nav view text {
		font-size: 27rpx;
	}

	.first {
		color: #fff;
		height: 20%;
		/* background-color: aliceblue;	 */
		margin-top: 20rpx;
	}

	.first span {
		font-size: 35rpx;

	}

	.first span:first-child {
		font-weight: 500;
		text-align: center;
		/* background-color: aqua; */
		width: 95%;
	}

	.second {
		height: 80%;
		color: #fff;

	}

	.photo>image {
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
	}

	.info span:first-child {
		font-size: 35rpx;
	}

	.info span:last-child {
		font-size: 30rpx;
		margin-top: 20rpx;
	}

	.icons>span {
		align-items: center;
		margin-left: 10rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
	}

	.data {
		width: 690rpx;
		height: 100rpx;
		border-bottom: 1rpx solid #f4f4f4;

	}
</style>
