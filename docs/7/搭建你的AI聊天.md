## 搭建你的AI聊天

### 在线体验
[xchat.rntec.top](https://xchat.rntec.top)

### Docker-compose部署


请准备一台具有公网 IP 的服务器并将 3210 端口开放。

``` yaml
version: '3.8'
 
services:
  x-chat:
    image: krinlove/xchat2:betav1.1
    container_name: xchat2-betav1.1
    restart: always
    environment:
      OPENAI_API_KEY: #你的API
      OPENAI_PROXY_URL: #你的网关地址
```

目前支持与 `openai` 兼容的 `/v1/chat/completions` 接口，网关地址可按该接口标准进行对齐并在地址后添加 `/v1` 。

::: tip 注意
建议使用与 `X-Chat` 配套的网关地址。
:::

### 定制化支持

X-Chat 提供以下定制服务：

- UI界面专属品牌、LOGO等标识定制
- 代部署、长期代维护
- 模型支持

如有定制需求，请联系 `krinchao@gmail.com` 