# GitHub Action for DingTalk.

## How to use

### text

```yml
name: test
on:
  push:

jobs:
  test:
    runs-on: node-latest
    steps:
      - name: dingtalk
        uses: https://github.com/isfk/dingtalk@v2.2
        with:
          accessToken: ${{ secrets.DINGTALK_ACCESS_TOKEN }}
          secret: ${{ secrets.DINGTALK_SECRET }}
          msgType: text
          title: 这个即将发布的新版本，创始人xx称它为红树林。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是红树林
          content: 时代的火车向前开
          atMobiles: 13800138001,13800138000
          atUserIds: 13800138001,13800138000
          isAtAll: false
      - name: Result
        run: echo "🍏 This job's status is ${{ job.status }}."
```

### link

```yml
name: test
on:
  push:

jobs:
  test:
    runs-on: node-latest
    steps:
      - name: dingtalk
        uses: https://github.com/isfk/dingtalk@v2.2
        with:
          accessToken: ${{ secrets.DINGTALK_ACCESS_TOKEN }}
          secret: ${{ secrets.DINGTALK_SECRET }}
          msgType: link
          title: 这个即将发布的新版本，创始人xx称它为红树林。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是红树林
          text: 时代的火车向前开
          picUrl: https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png
          messageUrl: https://www.dingtalk.com/
      - name: Result
        run: echo "🍏 This job's status is ${{ job.status }}."
```

### markdown

```yml
name: test
on:
  push:

jobs:
  test:
    runs-on: node-latest
    steps:
      - name: dingtalk
        uses: https://github.com/isfk/dingtalk@v2.2
        with:
          accessToken: ${{ secrets.DINGTALK_ACCESS_TOKEN }}
          secret: ${{ secrets.DINGTALK_SECRET }}
          msgType: "markdown"
          title: "this is title"
          text: "## this is content \n ### content.... ${{ github.sha }}"
          atMobiles: 13800138001,13800138000
          atUserIds: 13800138001,13800138000
          isAtAll: false
      - name: Result
        run: echo "🍏 This job's status is ${{ job.status }}."
```

### actionCard

1. `single` 与 `btns` 只能出现一个
2. `btns` 为一个 `json` 字符串

```yml
name: test
on:
  push:

jobs:
  test:
    runs-on: node-latest
    steps:
      - name: dingtalk
        uses: https://github.com/isfk/dingtalk@v2.2
        with:
          accessToken: ${{ secrets.DINGTALK_ACCESS_TOKEN }}
          secret: ${{ secrets.DINGTALK_SECRET }}
          msgType: actionCard
          title: action card title...
          text: action card text...
          singleTitle: singleTitle
          singleURL: https://github.com
          # btns: '[{ "title": "isfk", "actionURL": "https://isfk.cn" }, { "title": "github", "actionURL": "https://github.com" }]'
          atMobiles: 13800138001,13800138000
          atUserIds: 13800138001,13800138000
          isAtAll: false
      - name: Result
        run: echo "🍏 This job's status is ${{ job.status }}."
```

### feedCard

1. 与 `actionCard` 类似, `links` 需要是一个 `json` 字符串

```yml
name: test
on:
  push:

jobs:
  test:
    runs-on: node-latest
    steps:
      - name: dingtalk
        uses: https://github.com/isfk/dingtalk@v2.2
        with:
          accessToken: ${{ secrets.DINGTALK_ACCESS_TOKEN }}
          secret: ${{ secrets.DINGTALK_SECRET }}
          msgType: feedCard
          links: '[{"title":"时代的火车向前开1","messageURL":"https://www.dingtalk.com/","picURL":"https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png"},{"title":"时代的火车向前开2","messageURL":"https://www.dingtalk.com/","picURL":"https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png"}]'
      - name: Result
        run: echo "🍏 This job's status is ${{ job.status }}."
```

## Links

[custom-robot-access](https://open.dingtalk.com/document/robots/custom-robot-access)
