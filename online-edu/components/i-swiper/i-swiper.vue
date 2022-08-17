<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item class="flex justify-center" v-for="(item,index) in dataList" :key="index">
				<image :src="item.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"i-swiper",
		props:{
			dataList:{
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

</style>