// 保留当前页面，跳转到其他的某个页面
const to = (url, options = {}) => {
	uni.navigateTo({
		url: url,
		...options
	})
}
// 跳转到tabBar页面，并关闭其他所有非TabBar页面
const tab = (url, options = {}) => {
	uni.switchTab({
		url: url,
		...options
	})
}

export default{
	to,tab
}
