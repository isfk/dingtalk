// text type
interface TextMessage {
    msgtype?: string,
    at?: atParam,
    text?: textParam,
}

// link type
interface LinkMessage {
    msgtype?: string,
    link?: linkParam,
}

// markdown type
interface MarkdownMessage {
    msgtype?: string,
    markdown?: markdownParam,
    at?: atParam,
}

// ActionCard type
interface ActionCardMessage {
    msgtype?: string,
    actionCard?: actionCardParam,
    at?: atParam,
}

// FeedCard type
interface FeedCardMessage {
    msgtype?: string,
    feedCard?: feedCardParam,
}

// textParam
interface textParam {
    content?: string
}

// atParam
interface atParam {
    atMobiles?: string[],
    atUserIds?: string[],
    isAtAll?: boolean,
}

// linkParam
interface linkParam {
    title?: string,
    text?: string,
    picUrl?: string,
    messageUrl?: string
}

// markdownParam
interface markdownParam {
    title?: string,
    text?: string,
}

// actionCardParam
interface actionCardParam {
    title?: string,
    text?: string,
    btnOrientation?: string,
    singleTitle?: string,
    singleURL?: string,
    btns?: btnParam[],
}

// btnParam
interface btnParam {
    title?: string,
    actionURL?: string,
}

// feedCardParam
interface feedCardParam {
    links?: linkParam[],
}

export {
    TextMessage,
    LinkMessage,
    MarkdownMessage,
    ActionCardMessage,
    FeedCardMessage,
    btnParam,
    linkParam,
}