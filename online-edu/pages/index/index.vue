<template>
	<view class="container">
		<!-- 搜索框 -->
		<i-search-bar></i-search-bar>
		<!-- 轮播图 -->
		<i-swiper :dataList="swiper"></i-swiper>
		<!-- nav -->
		<i-nav :navData="navlist"></i-nav>
		<!-- 优惠券组件 -->
		<i-coupon :couponData="couponList"></i-coupon>
		<!-- 分割线 -->
		<view class="divider"></view>
		<!-- 拼团 -->
		<view class="px-2">
			<i-list-title><template v-slot:title>拼团</template></i-list-title>
			<i-course-list :data='groupList' type="column"></i-course-list>

		</view>

		<!-- 分割线 -->
		<view class="divider"></view>

		<!-- 最新列表 -->
		<view class="px-2">
			<i-list-title>
				<template v-slot:title>最新列表</template>
				<template v-slot:sub-title>查看全部</template>
			</i-list-title>
			<i-course-list :data="groupList" type="row"></i-course-list>
		</view>
		<!-- 热门推荐 -->
		<!-- 分割线 -->
		<view class="divider"></view>

		<view class="advert">
			<image src="../../static/demo/cover/1.png" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	import {
		getIndexData
	} from '@/api/index.js'
	export default {
		data() {
			return {
				swiper: [{
						course_id: 538,
						course_title: "VueCli 实战商城后台管理系统",
						src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/dishaweb/08C9150BC2B163AEC012D6E544C75DD2.png",
						type: "webview",
						url: "http://www.dishaxy.com"
					},
					{
						course_id: 538,
						course_title: "VueCli 实战商城后台管理系统",
						src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/dishaweb/96bd39ce1d334b8493bac12bb1aa4223.png",
						type: "course",
						url: ""
					}
				],
				// 导航
				navlist: [{
						name: "活动",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/e8a7876274d45405e704.png"
					},
					{
						name: "考试",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/267d76844eefe2e7ce81.png"
					},
					{
						name: "秒杀",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/ea3f0d7724e2119058b8.png"
					},
					{
						name: "拼团",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/e5e8ae6780f437983ec3.png"
					},
					{
						name: "直播",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/1ffe181c57d0b7919824.png"
					},
					{
						name: "专栏",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10b103f786cffae72dba.png"
					},

					{
						name: "电子书",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/ffc5d0c974d0b1b74abc.png"
					},
					{
						name: "社区",
						src: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f6db135632407f0ff282.png"
					}

				],
				// 优惠券
				couponList: [{
						c_num: 300000,
						end_time: "2025-08-22T16:00:00.000Z",
						goods_id: 1636,
						id: 83,
						isgetcoupon: true,
						price: "4.00",
						received_num: 19,
						start_time: "2022-07-14T16:00:00.000Z",
						type: "course",
						value: {
							id: 1636,
							title: "中级经济法-知识点精讲课"
						}
					},
					{
						c_num: 10000,
						end_time: "2034-10-16T16:00:00.000Z",
						goods_id: 184,
						id: 39,
						isgetcoupon: false,
						price: "8.90",
						received_num: 141,
						start_time: "2021-09-09T16:00:00.000Z",
						type: "column",
						value: {
							id: 184,
							title: "VueCli 实战商城后台管理系统"
						}
					},
					{
						c_num: 100000,
						end_time: "2035-07-28T16:00:00.000Z",
						goods_id: 6,
						id: 33,
						isgetcoupon: false,
						price: "5.00",
						received_num: 121,
						start_time: "2021-06-28T17:58:01.000Z",
						type: "course",
						value: {
							id: 6,
							title: "VueCli 实战在线教育后台系统"
						}
					},
					{
						c_num: 100000,
						end_time: "2032-06-29T16:00:00.000Z",
						goods_id: 11,
						id: 19,
						isgetcoupon: false,
						price: "50.00",
						received_num: 88,
						start_time: "2021-05-15T17:03:00.000Z",
						type: "course",
						value: {
							id: 11,
							title: "uni-app实战直播app全栈开发"
						}
					},
					{
						c_num: 10000,
						end_time: "2032-06-29T16:00:00.000Z",
						goods_id: 12,
						id: 18,
						isgetcoupon: false,
						price: "5.00",
						received_num: 82,
						start_time: "2021-05-15T17:02:00.000Z",
						type: "course",
						value: {
							id: 12,
							title: "unicloud商城全栈开发"
						}
					}
				],
				// 拼团
				groupList: [{
						"group_id": 184,
						"id": 269,
						"title": "33213",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/6dccd3181a1b973480ec.jpg",
						"price": "0.10",
						"t_price": "0.10",
						"type": "column",
						"start_time": "2022-07-20T16:00:00.000Z",
						"end_time": "2022-08-28T16:00:00.000Z"
					},
					{
						"group_id": 182,
						"id": 1604,
						"title": "123",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f64e4441378d85f5df7a.png",
						"price": "0.10",
						"t_price": "2.00",
						"type": "media",
						"start_time": "2022-07-13T16:00:00.000Z",
						"end_time": "2022-08-21T16:00:00.000Z"
					},
					{
						"group_id": 123,
						"id": 1432,
						"title": "231",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/d1c2fbe07e31d1e78b5a.png",
						"price": "43442.00",
						"t_price": "0.00",
						"type": "media",
						"start_time": "2022-05-31T13:26:31.000Z",
						"end_time": "2024-06-01T13:26:31.000Z"
					},
					{
						"group_id": 31,
						"id": 25,
						"title": "uni-app实战在线教育类app开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png",
						"price": "0.10",
						"t_price": "10.00",
						"type": "audio",
						"start_time": "2021-05-16T08:31:00.000Z",
						"end_time": "2024-06-29T16:00:00.000Z"
					},
				]
			}
		},
		onLoad() {
			this.getdata()
		},
		methods: {
			async getdata() {
				const res = await getIndexData()
				console.log(res)
			}
		}
	}
</script>

<style>
	.container {
		/* padding-bottom: 100rpx; */
	}
	.divider{
		margin-left: -20rpx;
	}


	.box {
		scroll-behavior: auto;
		word-break: keep-all;
		overflow: scroll;
		height: 350rpx;
		width: 100%;
		background-color: beige;
		display: flex;


	}

	/* 最新列表 */
	.list {
		height: 910rpx;
		width: 720rpx;
		background-color: skyblue;
		margin-top: 20rpx;
		/* padding: 30rpx; */
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.bottom {
		background-color: #dc3545;
		height: 165rpx;
	}

	.img {
		width: 300rpx;
		height: 165rpx;
	}

	/* 图片 */
	.advert{
		height: 375rpx;
		width: 750rpx;
		margin-left: -20rpx;
	}
		
	.advert>image{
		width: 750rpx;
		height: 100%;
	}
</style>
