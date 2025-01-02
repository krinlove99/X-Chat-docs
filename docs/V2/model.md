---
lastUpdated: true
---
# ArcnixAI Cloud 模型介绍

:::tip 更新时间
2025年1月1日00:00:00
:::

`API开放平台（AI聊天大模型）` 采用token数量制，即用户预先购买一定数量的token额度，每次调用将消耗账户中的token额度。


## 模型介绍
::: tip 价格说明
该页面所展示的模型价格仅供使用API服务的开发者、企业或组织以及具有一定调用规模的个人用户参考。使用 `Arcnix AI实验室` 的注册用户请查看[Arcnix AI实验室模型价格](../V3/V3%20模型介绍.md)。
:::

<table border="0" cellspacing="0" cellpadding="10">
  <tr>
    <th>分类</th>
    <th>模型名称</th>
    <th>输入价格（美元/百万token）</th>
    <th>输出价格（美元/百万token）</th>
    <th>备注</th>
  </tr>
  
  <tr>
  <td rowspan="5">OpenAI</td>
    <td>gpt-4o-mini</td>
    <td>0.1</td>
    <td>0.3</td>
    <td>官方5折价格<br/>(OpenAI官方输入/输出价格：0.15/0.6)</td>
  </tr>
  <tr>
    <td>gpt-4o-mini-stable</td>
    <td colspan="2">$0.001/次</td>
    <td><strong style="color: #007BFF; font-size:9px;font-weight: bold; background-color: #f0f8ff; border: 1px solid #add8e6; padding: 2px 5px; border-radius: 3px;"> ArcnixAI Cloud <sup style="font-size: 0.8em;">&copy;</sup></strong><br/>更稳定、上下文更长的版本，按次付费</td>
  </tr>
  <tr>
    <td>gpt-4o</td>
    <td>2</td>
    <td>5</td>
    <td>官方5折价格<br/>(OpenAI官方输入/输出价格：2.5/10)</td>
  </tr>
  <tr>
    <td>gpt-4o-stable</td>
    <td colspan="2">$0.01/次</td>
    <td><strong style="color: #007BFF; font-size:9px;font-weight: bold; background-color: #f0f8ff; border: 1px solid #add8e6; padding: 2px 5px; border-radius: 3px;"> ArcnixAI Cloud <sup style="font-size: 0.8em;">&copy;</sup></strong><br/>更稳定、上下文更长的版本，按次付费</td>
  </tr>
  <tr>
    <td>o1</td>
    <td>12</td>
    <td>50</td>
    <td>暂未上线</td>
  </tr>

  <tr>
    <td rowspan="3">Anthropic</td>
    <td>claude-3-haiku</td>
    <td>1</td>
    <td>3</td>
    <td>极低的价格<br/>(官方输入/输出价格：1/5)</td>
  </tr>
  <tr>
    <td>claude-3.5-sonnet</td>
    <td>3</td>
    <td>10</td>
    <td></td>
  </tr>
  <tr>
    <td>claude-3-opus</td>
    <td>5</td>
    <td>10</td>
    <td>暂未上线</td>
  </tr>

  <tr>
    <td rowspan="4">Google Gemini</td>
    <td>gemini-1.5-flash</td>
    <td>0.1</td>
    <td>0.2</td>
    <td>推荐</td>
  </tr>
  <tr>
    <td>gemini-1.5-pro</td>
    <td>1.25</td>
    <td>3</td>
    <td></td>
  </tr>
  <tr>
    <td>gemini-2.0-flash-exp</td>
    <td>2</td>
    <td>5</td>
    <td>推荐：能力全面对标OpenAI/gpt-4o</td>
  </tr>
  <tr>
    <td>gemini-2.0-flash-thinking-exp</td>
    <td>15</td>
    <td>30</td>
    <td>推荐：深度思考模型，对标OpenAI/o1</td>
  </tr>
  <tr>
  <td rowspan="5">DeepSeek</td>
    <td>deepseek-flash</td>
    <td>0.1</td>
    <td>0.1</td>
    <td>极低的价格</td>
  </tr>
   <tr>
    <td>deepseek-lite</td>
    <td>0.2</td>
    <td>0.5</td>
    <td>V3版本，性价比最高，媲美gpt-4o</td>
  </tr>
 <tr>
    <td>deepseek-Pro</td>
    <td>0.27</td>
    <td>1.10</td>
    <td>V3版本，高并发、高稳定性，媲美gpt-4o</td>
  </tr>
  <tr>
    <td>deepseek-search</td>
    <td>0.2</td>
    <td>0.5</td>
    <td>深度求索旗下的AI搜索模型，可用于在线互联网搜索</td>
  </tr>
<tr>
    <td>deepseek-r1</td>
    <td>0.5</td>
    <td>2</td>
    <td>深度思考模型，媲美 o1-preview 的推理效果，可展现完整思考过程</td>
  </tr>
  <tr>
    <td rowspan="3">通义千问</td>
    <td>qwen2.5-AllTools</td>
    <td>1</td>
    <td>1</td>
    <td>全功能版本，同系列综合素质最高</td>
  </tr>
  <tr>
    <td>Qwen2-7B-Instruct</td>
    <td>0.05</td>
    <td>0.05</td>
    <td>32K、多语言支持</td>
  </tr>
  <tr>
    <td>Qwen2.5-7B-Instruct</td>
    <td>0.08</td>
    <td>0.08</td>
    <td>支持Function calling、32K、多语言支持</td>
  </tr>

  <tr>
    <td rowspan="4">GLM</td>
    <td>GLM-4-AllTools</td>
    <td>1</td>
    <td>1</td>
    <td>全功能版本，综合素质最高的智谱清言模型</td>
  </tr>
  <tr>
    <td>GLM-4-Flash</td>
    <td>0.1</td>
    <td>0.1</td>
    <td>响应速度更快速的智谱清言模型</td>
  </tr>
  <tr>
    <td>GLM-4v-Flash</td>
    <td>0.1</td>
    <td>0.1</td>
    <td>智谱清言多模态模型，可用于快速响应的图像识别</td>
  </tr>
  <tr>
    <td>glm-4-9b-chat</td>
    <td>0.05</td>
    <td>0.05</td>
    <td></td>
  </tr>
<tr>
    <td rowspan="1">豆包</td>
    <td>doubao(豆包)-Alltools</td>
    <td>1</td>
    <td>1</td>
    <td>全功能版本，同系列综合素质最高</td>
  </tr>
  <tr>
    <td rowspan="1">月之暗面</td>
    <td>moonshot-Alltools</td>
    <td>1</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
   <td rowspan="1">跃问</td>
    <td>step-Alltools</td>
    <td>1</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
   <td rowspan="1">零一万物</td>
    <td>Yi-1.5-9B-Chat-16K</td>
    <td>0.05</td>
    <td>0.05</td>
    <td></td>
  </tr>
 <tr>
   <td rowspan="1">MiniMax</td>
    <td>abab6.5s</td>
    <td>1</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="1">InternLM</td>
    <td>internlm2_5-7b-chat</td>
    <td>0.05</td>
    <td>0.05</td>
    <td></td>
  </tr>


  <tr>
    <td rowspan="4">Meta/LLaMA</td>
    <td>llama3-8b-8192</td>
    <td>0.1</td>
    <td>0.1</td>
    <td>对英文语境支持更好</td>
  </tr>
    <tr>
    <td>llama3-70b-8192</td>
    <td>0.8</td>
    <td>0.8</td>
    <td></td>
  </tr>
    <tr>
    <td>llama-3.1-8b-instant</td>
    <td>0.1</td>
    <td>0.1</td>
    <td></td>
  </tr>
  <tr>
    <td>llama-3.1-70b</td>
    <td>1</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Mixtral</td>
    <td>mixtral-8x7b</td>
    <td>0.05</td>
    <td>0.05</td>
    <td></td>
  </tr>
  <tr>
    <td>mixtral-8x7b-32768</td>
    <td>0.1</td>
    <td>0.1</td>
    <td></td>
  </tr>
  <tr>
  <td rowspan="1">Google Gemma</td>
    <td>gemma2-9b-it</td>
    <td>0.1</td>
    <td>0.1</td>
    <td></td>
  </tr>

  <tr>
    <td rowspan="3">语音生成与识别</td>
    <td>tts-1</td>
    <td></td>
    <td></td>
    <td>未上架</td>
  </tr>
  <tr>
    <td>tts-1</td>
    <td></td>
    <td></td>
    <td>未上架</td>
  </tr>
  <tr>
    <td>whisper-1</td>
    <td></td>
    <td></td>
    <td>未上架</td>
  </tr>
  <tr>
    <td rowspan="2">实用工具</td>
    <td>flux-arcnixai</td>
    <td colspan="2">$0.005/次</td>
    <td><strong style="color: #007BFF; font-size:9px;font-weight: bold; background-color: #f0f8ff; border: 1px solid #add8e6; padding: 2px 5px; border-radius: 3px;"> ArcnixAI Cloud <sup style="font-size: 0.8em;">&copy;</sup></strong><br/>绘画类功能定价逻辑与聊天不同，按次使用付费</td>
  </tr>
  <tr>
    <td>sd-3-5-large-arcnixai</td>
    <td colspan="2">$0.005/次</td>
    <td><strong style="color: #007BFF; font-size:9px;font-weight: bold; background-color: #f0f8ff; border: 1px solid #add8e6; padding: 2px 5px; border-radius: 3px;"> ArcnixAI Cloud <sup style="font-size: 0.8em;">&copy;</sup></strong><br/>绘画类功能定价逻辑与聊天不同，按次使用付费</td>
  </tr>

</table>


## 计算公式
- 基准价格： 1$ = 50w tokens，即 0.002$/1k tokens
- 模型倍率 = 输入价格/基准价格
- 补全倍率 = 输出价格/输入价格
- 分组倍率 = 固定值

::: code-group

``` [新版计费规则]
在新版API平台计费规则中（2024年12月31日版本），可直接进行计算：
总价 = （输入价格 * 输入token数 + 输出价格 * 输出token数）* 分组倍率，如：
提示：$0.14 / 1M tokens
补全：$0.28 / 1M tokens
总价 = 提示 39 tokens / 1M tokens * $0.14 + 补全 33 tokens / 1M tokens * $0.28 * 分组 0.95 = $0.000014// [!code highlight]
上述计算过程可在 API开放平台（AI聊天大模型） 日志中查看。
```

```tip [旧版计费规则]
 总tokens = 模型倍率 * （提示token数 + 补全token数 * 补全倍率） * 分组倍率 
 = 模型倍率 * 分组倍率 * 提示token数 + 模型倍率 * 补全倍率 * 分组倍率 * 补全token数 
 = 分组倍率 * （输入价格/基准价格） * 输入token数 + 分组倍率 * （输出价格/基准价格）* 输出token数 
 = （输入价格 * 输入token数 + 输出价格 * 输出token数）/ 基准价格 * 分组倍率 // [!code highlight]
```

:::


:::tip 说明
以上两种计算方式均可使用，作为用户只需关注输入价格与输出价格即可。

新版计费规则与 `官方API` 一致，但每百万Token价格相对于官方来说可能会更低。您使用本站提供的服务，在轻松获得高可靠无用量限制的API服务，以及解决支付、网络和账号风控风险的同时，您将节省可观的费用。
:::


## 分组倍率
| 等级 | 倍率 | 介绍 |
| --- | --- | --- |
| default | 1 | 新注册用户默认等级，只可使用 `公益` 服务 |
| VIP | 1 | 实际充值任意金额的用户。该等级可以使用所有API调用服务及支持的大模型 |
| VIP+ | 1 | 在Arcnix官方庆祝活动/服务内测/社区卓越贡献获得的资格，可永久免费使用API调用服务（非卖品） |
| VIP2 | 0.9 | 累计消费超过￥300.00的用户（不包含赠金） |
| VIP3 | 0.85 | 累计消费超过￥1000.00的用户（不包含赠金） |

### 说明


::: warning 注意
 `公益` 模型的稳定性不做保证，ArcnixAI Cloud 不会获取您的隐私数据，但不保证您的隐私数据不被其他服务提供商获取。
:::


