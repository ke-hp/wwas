'use strict';

module.exports = {
	port: 8001,
	url: 'mongodb://localhost:27017/wfc',
	insightApi: 'https://insight.wificoin.club/insight-api',
	authUrl: 'http://wifidog.kunteng.org.cn',
	wfcPayUrl: 'https://wfc.wificoin.club/#/wifiPortal/payment?authServer=',
	wfcAuth: '/wifidog/auth/wfc',
	toAddress: 'weiKbu9DYg26gH2zucSHJHgH5KsuuZd3wW',
	toAmount: 2,
	wxAppId: 'wxfb684aa755dffceb',
	wxShopId: '641418',
	wxSecretKey: 'ca0ddbac646160edfeaf343937f73404',
	wxAuth: '/wifidog/auth/weixin',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}