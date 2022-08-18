import Http from "@/utils/http.js"
class IndexModel extends Http {
	/**
	 * 获取首页数据接口
	 */
	static getMobileIndex() {
		return Http.request({
			url: '/mobile/index',
		})
	}
	/**
	 * 获取优惠券数据的接口
	 */
	static getMobileICoupon() {
	
		return Http.request({
			url: "/mobile/coupon",
			method: 'GET',
			

		})
	}
	/**
	 * 获取拼团列表/秒杀接口
	 */
	static getMobileActivity(type,data){
		return Http.request({
			url:"/mobile/"+type,
			method:"GET",
			data
		})
	}

}
export default IndexModel
