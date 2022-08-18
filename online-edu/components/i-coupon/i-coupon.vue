<template>
	<view>
		<view class="count">
			<view class="item" v-for="(item,index) in data" :key="index">
				<view class="left">
					<span class="two">￥{{item.price}}</span>
					<span class="one">{{item.value.title}}</span>
				</view>
				<view class="right">
					领取
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "i-coupon",
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
/* 优惠券 */
	.count {
		height: 160rpx;
		margin-top: 20rpx;
		display: flex;
		scroll-behavior: auto;
		word-break: keep-all;
		overflow: scroll;
	}

	.item {
		display: flex;
		justify-content: space-around;
		width: 620rpx;
		margin-right: 30rpx;
		height: 140rpx;
		/* background-color: azure; */
		box-sizing: border-box;
	}

	.left {
		background-color: #d39E00;
		color: #fff;
		display: flex;
		width: 400rpx;
		flex-direction: column;
		align-items: center;
		padding: 25rpx;
		border-right: 4rpx dashed #fff;
	}

	.right {
		flex: 2;
		width: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		background-color: #ffc107;

	}

	.one {
		font-size: 15rpx;
		height: 10rpx;

		height: 100%;
		/* text-align: center; */
	}

	.two {
		font-size: 40rpx;
	}

</style>
