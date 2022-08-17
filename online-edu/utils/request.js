export function request(options){
	options.url = 'http://demonuxtapi.dishait.cn/mobile'+options.url 
	options.header = {
		appid:'bd9d01ecc75dbbaaefce'
	}
	return new Promise((res,rej)=>{
		options.success = res
		options.fail = rej
		return uni.request(options)
	})
	
}