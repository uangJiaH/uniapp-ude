<template>
	<view>
		<view class="coupon">
			<view class="piece" v-for="(item,index) in navData" :key="index">
				<img class="image"
					:src="item.src">
				<span style="color:#666">{{item.name}}</span>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"i-nav",
		props:{
			navData:{
				type:Array,
				default:()=>[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.coupon {
		width: 720rpx;
		height: 300rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;

	}

	.piece {
		/* background-color: aquamarine; */
		width: 24%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	span {
		margin-top: 15rpx;
		font-size: 23rpx;
	}
</style>