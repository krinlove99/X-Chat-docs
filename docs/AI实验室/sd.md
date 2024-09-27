# AI实验室-图像创作服务
::: tip AI实验室
BASETEC-AI实验室于2024年6月26日正式推出，目前AI实验室处于测试阶段，供BASETEC注册用户免费使用。

:::

AI实验室-图像创作服务调用云端数据接口，可以在线创作专业图像及永久化云端存储。

## 模型支持

<div>
<table>
  <tr>
    <th>类别</th>
    <th>功能</th>
    <th>名称</th>
    <th>规划</th>
  </tr>
  <tr>
    <td rowspan="21">图片生成</td>
    <td>文生图</td>
    <td><Badge type="tip" text="推荐" vertical="top" /> Flux.1</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td><Badge type="tip" text="推荐" vertical="top" /> stabilityai/stable-diffusion-3-medium</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td><Badge type="tip" text="推荐" vertical="top" />  stabilityai/realvisxlV40</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td><Badge type="tip" text="推荐" vertical="top" /> stabilityai/realismEngine_v10</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/juggernautXL_v45</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td><Badge type="tip" text="推荐" vertical="top" /> stabilityai/dreamshaperXL10_alpha2</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/animagineXLV3_v30</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/devlishphotorealism_sdxl15</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/sd_xl_base_1.0</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/sd_xl_base_1.0_inpainting_0.1</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/turbovisionXL_v431</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <!-- <tr>
    <td>文生图</td>
    <td>stabilityai/stable-diffusion-xl-base-1.0</td>
    <td>即将公测</td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/stable-diffusion-2-1</td>
    <td>即将公测</td>
  </tr>
    <tr>
    <td>文生图</td>
    <td>stabilityai/sdxl-turbo</td>
    <td>即将公测</td>
  </tr>
  <tr>
    <td>文生图</td>
    <td>stabilityai/sd-turbo</td>
    <td>即将公测</td>
  </tr> -->
  <tr>
    <td>图生图</td>
    <td>stabilityai/sd-2.1</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>图生图</td>
    <td>stabilityai/sd-XL Lighting</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <tr>
    <td>图生图</td>
    <td>stabilityai/sd-XL</td>
    <td>已上线，<a href="https://basetec.top/ailab/ai-sd" target="_blank">前往使用</a> </td>
  </tr>
  <!-- <tr>
    <td>图生图</td>
    <td>腾讯TencentARC/PhotoMaker</td>
    <td>即将公测</td>
  </tr>
  <tr>
    <td>图生图</td>
    <td>InstantX/InstantID</td>
    <td>即将公测</td>
  </tr>
  <tr>
    <td>图生图</td>
    <td>字节跳动ByteDance/SDXL-Lightning</td>
    <td>即将公测</td>
  </tr> -->
</table>
</div>

## 使用方法

导航栏中选择-AI服务-AI实验室，如未登陆需要先登陆。

![AI实验室](/images/ailab1.jpeg)

选择图片创作服务并进入。

### 图片创作控制台

![AI实验室](/images/sd1.jpeg)

图片创作控制台的整体UI分为三个部分：

- 左边的参数区域：可以配置图片参数（参数介绍见下方）

- 右边顶部提示词及模型选择区域：点击左边按钮可以切换模型，点击右边按钮即开始创作图片

- 右边底部个人历史生成图片画廊

### 部分参数解释
<table>
  <tr>
    <th>参数名</th>
    <th>解释</th>
  </tr>
  <tr>
    <td>提示词</td>
    <td>输入的文本描述，告诉模型你想要生成的图片内容（必须使用英文）。</td>
  </tr>
   <tr>
    <td>负面提示词</td>
    <td>指不想在生成的图片中出现的内容。通过指定负面提示词，你可以告诉模型避免生成包含这些元素的图片（必须使用英文）。</td>
  </tr>
   <tr>
    <td>种子</td>
    <td>种子是一个随机数，用于初始化生成过程。理论上相同的种子会生成相同的图片，这对于复现结果非常有用。</td>
  </tr>
   <tr>
    <td>指导尺度</td>
    <td>模型对提示词的遵循程度。较高的值会使生成的图片更接近提示词的描述，但可能会牺牲一些创造性；较低的值则允许模型更多地自由发挥，这个值一般为7，表示适中。</td>
  </tr>
   <tr>
    <td>推理步骤数</td>
    <td>模型迭代生成图片的次数。更多的步数通常会得到更精细和高质量的图片，但也会增加生成时间和失败率。</td>
  </tr>
   <tr>
    <td>参考图</td>
    <td>在图生图中可见，指导模型根据该图片作为参考进行创作。</td>
  </tr>
   <tr>
    <td>算法（采样器）</td>
    <td>决定模型如何从潜在空间中采样生成图片。不同的采样器有不同的效果和速度。</td>
  </tr>
   <tr>
    <td>宽度和高度</td>
    <td>决定了生成图片的分辨率。较大的宽度和高度会生成更高分辨率的图片，但也会增加生成时间和失败率。</td>
  </tr>
  <tr>
    <td>Batch Size</td>
    <td>决定每次迭代生成图片的数量。较大的批量大小可以加快生成速度，但也会增加性能需求和失败率。</td>
  </tr>
  </table>


::: warning AI实验室
请遵守地区政策法律，禁止生成违法违规内容。

:::




