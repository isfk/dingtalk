import { getInput, setFailed, info } from "@actions/core";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from 'crypto-js/enc-base64';

import { getBodyString } from "./helper";

const run = async (): Promise<string> => {
    const accessToken = getInput('accessToken')
    const secret = getInput('secret')
    info(`accessToken: ${accessToken}`)
    info(`secret: ${secret}`)

    const timestamp = Date.now()
    let url = `https://oapi.dingtalk.com/robot/send?access_token=${accessToken}`
    // 签名
    if (secret.length > 0) {
        const waitSignString = timestamp + "\n" + secret
        const sign = Base64.stringify(hmacSHA256(waitSignString, secret))
        info(`waitSignString ${waitSignString}`)
        info(`sign ${sign}`)
        url = `${url}&timestamp=${timestamp}&sign=${sign}`
    }

    const resp = await (await fetch(url, {
        method: 'POST',
        // body: '{"msgtype": "text", "text": {"content":"我就是我, 是不一样的烟火"}}',
        body: getBodyString(),
        headers: {
            'Content-Type': 'application/json'
        }
    })).json()

    let result = "OK"
    if (resp.errcode > 0) {
        result = resp.errmsg
    }

    return result
}

run().then((data) => {
    if (data == "OK") {
        info(`✅ [DONE] ${data}`)
    } else {
        setFailed(`❌ [ERROR] ${data}`)
    }
},).catch((error) => {
    error(`error ${error.message}`)
    info(`✅ [DONE], but robot send failed.`)
})
