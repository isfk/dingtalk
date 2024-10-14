import { getInput, info, getBooleanInput } from "@actions/core";

import { ActionCardMessage, FeedCardMessage, LinkMessage, MarkdownMessage, TextMessage, btnParam, linkParam } from "./dt_interface";

const parseBtns = (btns: string): btnParam[] => {
    if (btns.length == 0) return
    let result: btnParam[] = JSON.parse(btns)
    return result
}

const parseLinks = (links: string): linkParam[] => {
    if (links.length == 0) return
    let result: linkParam[] = JSON.parse(links)
    return result
}

const getBodyString = (): string => {
    const msgtype = getInput('msgType')
    let res = ""

    switch (msgtype) {
        case 'text':
            let textBody: TextMessage = {
                msgtype: 'text',
                text: {
                    content: getInput('content'),
                },
                at: {
                    atMobiles: getInput('atMobiles').split(","),
                    atUserIds: getInput('atUserIds').split(","),
                    isAtAll: getBooleanInput('isAtAll'),
                }
            }
            res = JSON.stringify(textBody).toString()
            break;

        case 'link':
            let linkBody: LinkMessage = {
                msgtype: 'link',
                link: {
                    title: getInput('title'),
                    text: getInput('text'),
                    picUrl: getInput('picUrl'),
                    messageUrl: getInput('messageUrl'),
                }
            }
            res = JSON.stringify(linkBody).toString()
            break;

        case 'markdown':
            let markdownBody: MarkdownMessage = {
                msgtype: 'markdown',
                markdown: {
                    title: getInput('title'),
                    text: getInput('text'),
                },
                at: {
                    atMobiles: getInput('atMobiles').split(","),
                    atUserIds: getInput('atUserIds').split(","),
                    isAtAll: getBooleanInput('isAtAll'),
                }
            }
            res = JSON.stringify(markdownBody).toString()
            break;

        case 'actionCard':
            let actionCardBody: ActionCardMessage = {
                msgtype: 'actionCard',
                actionCard: {
                    title: getInput('title'),
                    text: getInput('text'),
                    btnOrientation: getInput('btnOrientation'),
                    singleTitle: getInput('singleTitle'),
                    singleURL: getInput('singleURL'),
                    btns: parseBtns(getInput('btns')),
                },
                at: {
                    atMobiles: getInput('atMobiles').split(","),
                    atUserIds: getInput('atUserIds').split(","),
                    isAtAll: getBooleanInput('isAtAll'),
                }
            }
            res = JSON.stringify(actionCardBody).toString()
            break;

        case 'feedCard':
            let feedCardBody: FeedCardMessage = {
                msgtype: 'feedCard',
                feedCard: {
                    links: parseLinks(getInput('links')),
                }
            }
            res = JSON.stringify(feedCardBody).toString()
            break;

        default:
            break;
    }
    info(`res ${res}`)
    return res
}

export { getBodyString }