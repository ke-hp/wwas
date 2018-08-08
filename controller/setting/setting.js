'use strict'

import GatewayIdModel	from '../../models/setting/gatewayid'
import ChannelPathModel from '../../models/setting/channelpath'

class Setting {
	constructor() {
	}
    
    /*
     * configure router's login and portal by gwid
     */
    async wfcSetting(req, res, next){
        try {
            var channelPath = req.body.user_account;
            var gwidSetting = {
                'channelPath': channelPath,
                'wificoin.toAddress':  req.body.wificoin.toAddress,
                'wificoin.toAmount':   req.body.wificoin.toAmount,
                'portalUrl':  req.body.portalUrl,
                'duration':   req.body.duration
            };
            const result = await ChannelPathModel.findOneAndUpdate({'channelPath': channelPath}, gwidSetting, {new:true});
            if(!result){
		res.send({ret_code: 1002, ret_msg: 'FAILED', extra:'WFC设置失败'});
            }
        }catch(err){
            console.log(err);
            res.send({ret_code: 1002, ret_msg: 'FAILED', extra:'WFC设置失败'});
        }
        res.send({ret_code: 0, ret_msg: 'SUCCESS', extra: 'WFC设置更新成功'});
    }
    
     /*
     * configure router's login and portal by channelPath
     */
    async weiXinSetting(req, res, next){
        try {
            var channelPath = req.body.user_account;
            var channelPathSetting = {
                'channelPath': channelPath,
                'weixin.appId': req.body.weixin.appId,
                'weixin.shopId': req.body.weixin.shopId,
                'weixin.secretKey': req.body.weixin.secretKey,
                'weixin.ssid':   req.body.weixin.ssid,
                'portalUrl':  req.body.portalUrl,
                'duration':   req.body.duration
            };
            const result = await ChannelPathModel.findOneAndUpdate({'channelPath': channelPath}, channelPathSetting, {new:true});
            if(!result){
		res.send({ret_code: 1002, ret_msg: 'FAILED', extra:'微信设置失败'});
            }
        }catch(err){
            console.log(err);
            res.send({ret_code: 1002, ret_msg: 'FAILED', extra:'微信设置失败'});
        }
        res.send({ret_code: 0, ret_msg: 'SUCCESS', extra:'微信设置成功'});
    }
}

export default new Setting()
