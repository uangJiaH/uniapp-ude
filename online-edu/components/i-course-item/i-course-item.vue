<template>
	
		<view :class="[dynamicClass]" >
			<view class="position-relative">
				<image :src="item.cover" class="pricture"></image>
				<view class="type position-absolute font-sm">{{item.type|fliterGroupType}}</view>
			</view>
			<view class="flex flex-column flex-1 box1">
				<text class="text-ellipsis font-md font-box">{{item.title}}</text>
				<!-- <text v-if="item.count" class="font-sm text-light-muted my-1">{{item.count}}人已抢</text> -->
				<view class="flex  align-end box">
					<text class="font-md text-danger">¥{{item.price}}</text>
					<text class="font-sm text-light-muted text-through">¥{{item.t_price}}</text>
				</view>
			</view>
		</view>

	
</template>

<script>
	import {
		courseType
	} from "@/enum/course-type.js"
	export default {
		name: "i-course-item",
		props: {
			item: {
				type: Object,
				default: () => {}
			},
			type: {
				type: String,
				default: "column"
			}
		},
		data() {
			return {

			};
		},
		computed: {
			dynamicClass() {
				return this.type === 'column' ? 'column inline-flex flex-column' : 'row flex mb-2'
			}
		},
		filters: {
			fliterGroupType(type) {
				return courseType[type]
			}
		}
	}
</script>

<style>
	.column{
		width: 50%;
		height: 350rpx;
		display: flex;
	}
	.box1{
		margin-right: 20rpx;
		width: 50%;
	}
	.box{
		margin: 0rpx;
		/* background-color: aquamarine; */
		/* height: 30rpx; */
	}
	.pricture{
		width: 300rpx;
		height: 190rpx;
	}
	.column>view:first-child {
		width: 340rpx;
		height: 190rpx;
	}

	.column>view:first-child .type {
		right: 10rpx;
		bottom: 10rpx;
		background-color: rgba(0, 0, 0, 0.6);
		color: #fff;
		padding: 13rpx 11rpx;
	}

	.row>view:first-child {
		width: 300rpx;
		height: 170rpx;
	}

	.row>view:first-child .type {
		right: 10rpx;
		bottom: 10rpx;
		background-color: rgba(0, 0, 0, 0.6);
		color: #fff;
		padding: 13rpx 11rpx;
	}

	.row>view:last-child {
		margin-left: 20rpx;
		justify-content: space-between;
	}
</style>
