# AI实验室-摇光智媒
::: tip AI实验室
<strong style="color: #007BFF; font-size:12px;font-weight: bold; background-color: #f0f8ff; border: 1px solid #add8e6; padding: 2px 5px; border-radius: 3px;"> Arcnix AI实验室-摇光智媒 <sup style="font-size: 0.8em;">&copy;</sup></strong> 于2025年5月04日正式推出，目前摇光智媒处于beta阶段，供Arcnix注册用户免费使用。

:::

AI实验室-摇光智媒调用云端数据接口，可以在线检索热门新闻、根据新闻创作文章、并自由扩写修改文章文段。

## 大模型底座技术
AI实验室-摇光智媒由[ArcnixAI Cloud](../V2/enterprise.md)提供支持，底座采用的大模型如下所示，并将持续更新。
<div>
<table>
  <tr>
    <th>类别</th>
    <th>名称</th>
    <th>说明</th>
  </tr>
  <tr>
    <td rowspan="1">网络搜索</td>
    <td>Qwen-Max</td>
    <!-- <td><Badge type="tip" text="推荐" vertical="top" /> Flux.1</td> -->
    <td>通义千问最强的消费级综合大模型，支持推理模式</td>
  </tr>
  <tr>
  <td rowspan="2">文章编写</td>
    <td>DeepSeek-R1</td>
    <td>无</td>
  </tr>
  <tr>
    <td>Qwen3</td>
    <td><Badge type="tip" text="即将支持" vertical="top" /> 通义千问2025-4-29发布的新一代大模型</td>
  </tr>
   <tr>
   <td rowspan="1">文章扩写</td>
    <td>DeepSeek-R1</td>
    <td>无</td>
  </tr>
</table>
</div>

## 使用方法

![AI实验室](/source/yaoguang/1.png)

- 左侧为历史记录区域，可保存用户的操作历史，点击后将恢复显示
- 右侧为工作区

进入主页面，点击右上角齿轮图标输入Key并点击 `验证并保存`。

保存后可随时再次点击并查看Key是否过期或是否被封禁。

![AI实验室](/source/yaoguang/2.png)

### 获取新闻列表

![AI实验室](/source/yaoguang/3.png)

在工作区选择一个新闻类别，并点击 `获取新闻列表` ，成功后将会在下方显示。

::: tip AI实验室
如果用户的任务被分配到支持推理的模型，则会展示推理链，用户可以打开或折叠推理过程。
:::

### 创作文章

![AI实验室](/source/yaoguang/4.png)

在新闻列表显示区域下方，选择一个序号（对应新闻列表的顺序），并点击 `根据选择生成文章` ，将会在下方显示文章内容。

### 扩写文段

![AI实验室](/source/yaoguang/5.png)

在文章显示区域中，用户可以使用鼠标框选需要扩写的部分，并点击随之出现的右侧圆形按钮，将会在下方显示扩写内容（可多次使用）。

![AI实验室](/source/yaoguang/6.png)

### 管理员分发Key

点击右上角齿轮设置按钮，如果用户输入的Key具有管理员权限，则会显示管理员入口，并可以分发新的Key。

![AI实验室](/source/yaoguang/7.png)

也可以查看自己分发的所有Key的状态。

::: warning AI实验室
每位管理员Key可以分发的有效Key的数量是有上限的，只支持分发，不支持修改时间或禁用，只有触发系统风控才会被禁用，请酌情添加。
:::



::: warning AI实验室
请遵守地区政策法律，禁止生成违法违规内容。

:::




