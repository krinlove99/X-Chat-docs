# 端点调用

## X-Chat V2

### 基本参数

| 参数  | 值  |
|---|---|
|BaseUrl   | https://proxy.rntec.top  |
|api_key   | 前往[V2-API授权中心](https://proxy.rntec.top)申请  |

*出于与 OpenAI 兼容考虑，您也可以根据您的客户端，将 base_url 设置为 https://proxy.rntec.top/v1 来使用。

### 调用对话 API
在创建 API key 之后，你可以使用以下样例脚本的来访问 X-Chat V2 API。样例为非流式输出，您可以将 stream 设置为 true 来使用流式输出。

```bash
curl https://proxy.rntec.top/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $api_key" \
  -d '{
        "model": "gpt-3.5-turbo",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }'
```

```python
# Please install OpenAI SDK first：`pip3 install openai`
from openai import OpenAI

client = OpenAI(api_key="<api key>", base_url="https://proxy.rntec.top")

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)

```
### Token & Token 用量计算
token 是模型用来表示自然语言文本的基本单位，也是我们的计费单元，可以直观的理解为“字”或“词”；通常 1 个中文词语、1 个英文单词、1 个数字或 1 个符号计为 1 个 token。

一般情况下模型中 token 和字数的换算比例大致如下：

- 1 个英文字符 ≈ 0.3 个 token。
- 1 个中文字符 ≈ 0.6 个 token。

但因为不同模型的分词不同，所以换算比例也存在差异，每一次实际处理 token 数量以模型返回为准，您可以从返回结果的 usage 中查看。

### 错误码
您在调用 X-Chat V2/V3 API 时，可能会遇到以下错误。这里列出了相关错误的原因及其解决方法。

|错误码  | 描述  |
|---|---|
|400 - 格式错误|原因：请求体格式错误<br/>解决方法：请根据错误信息提示修改请求体|
|401 - 认证失败|原因：API key 错误，认证失败<br>解决方法：请检查您的 API key 是否正确，如没有 API key，请先创建API key|
|422 - 参数错误|原因：请求体参数错误<br/>解决方法：请根据错误信息提示修改相关参数|
|429 - 请求速率达到上限|原因：请求速率（TPM 或 RPM）达到上限<br/>解决方法：请合理规划您的请求速率，建议您临时切换到其它模型使用|
|500 - 服务器故障|原因：服务器内部故障<br/>解决方法：请先查看[Arcnix服务状态](https://monitor.arcnix.com/status/1)是否正常，并稍后重试。若问题一直存在，请联系我们解决|
|503 - 服务器繁忙|原因：服务器负载过高<br/>解决方法：请稍后重试您的请求|