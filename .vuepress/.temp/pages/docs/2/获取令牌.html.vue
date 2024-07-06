<template><div><h1 id="x-chat-v2-聊天助手" tabindex="-1"><a class="header-anchor" href="#x-chat-v2-聊天助手"><span>X-Chat V2 聊天助手</span></a></h1>
<h2 id="适用群体" tabindex="-1"><a class="header-anchor" href="#适用群体"><span>适用群体</span></a></h2>
<ul>
<li>
<p>X-Chat V2 聊天助手是BASETEC为有二次分发需求的用户/组织提供的X-Chat聊天版本，采用令牌发卡制，同时也对普通用户提供服务。</p>
</li>
<li>
<p>X-Chat V2 支持中小型企业、组织及用户对外提供商用服务，通过为用户售卖卡密来使用AI聊天服务，同时企业及组织也可以通过API后台进行审计及管理。</p>
</li>
<li>
<p>X-Chat V2 提供弱品牌标识版本，即不含明显的BASETEC品牌标识。同时也提供自定义更换你的品牌标识的服务，详情请咨询 <code v-pre>business@basetec.top</code> 。</p>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>截止于2024年6月20日， <code v-pre>X-Chat V2 聊天助手</code> 已不再为 <strong>个人用户</strong> 提供更新和维护支持，目前主要服务于使用发卡模式的组织用户。普通用户如需更轻量且强大的聊天客户端，建议前往<RouteLink to="/docs/2/xchatv3.html">X-Chat V3 聊天助手</RouteLink>。</p>
</div>
<h2 id="获取令牌" tabindex="-1"><a class="header-anchor" href="#获取令牌"><span>获取令牌</span></a></h2>
<p>购买额度：<a href="https://shop.basetec.top" target="_blank" rel="noopener noreferrer">点此前往<ExternalLinkIcon/></a>。</p>
<p>以下提供两种创建令牌的方式：</p>
<h3 id="_1、快捷令牌操作" tabindex="-1"><a class="header-anchor" href="#_1、快捷令牌操作"><span>1、快捷令牌操作</span></a></h3>
<ul>
<li>BASETEC官网中进入导航栏的 <code v-pre>X-Chat</code> 页面，点击菜单栏的 <code v-pre>我的令牌</code> 来创建一个新令牌。这里将直接为你创建一个永不过期、无限额度的令牌（具体可用额度上限根据账户实际额度决定）。
创建后，可能需要等待1-3分钟左右生效，请刷新页面查看。</li>
<li>再次点击菜单栏的 <code v-pre>我的令牌</code> ，如果令牌已生效，点击下拉列表将出现你刚刚创建的令牌。选择一个令牌，会在下方出现该令牌的详细信息。点击 <code v-pre>复制令牌</code> ，具体配置请参考下方介绍。</li>
</ul>
<h3 id="_2、详细令牌操作" tabindex="-1"><a class="header-anchor" href="#_2、详细令牌操作"><span>2、详细令牌操作</span></a></h3>
<p>你也可以前往导航栏的 <a href="https://proxy.rntec.top/" target="_blank" rel="noopener noreferrer">API-API授权中心<ExternalLinkIcon/></a> 进行创建，用户名及密码与您之前注册的一致。</p>
<div class="custom-container tip"><p class="custom-container-title">API授权中心 是什么</p>
<p><code v-pre>X-Chat用户API授权中心</code> 是用户令牌及额度的管理平台。这里提供了功能丰富的令牌管理操作。</p>
</div>
<p>在API授权中心的导航栏中，选择 <code v-pre>令牌</code> ，并点击 <code v-pre>新建令牌</code> 即可创建一个可自定义的令牌。</p>
<p><code v-pre>令牌名称</code> 可以随意填写， <code v-pre>模型范围</code> 可不填， <code v-pre>IP限制</code> 可不填，建议勾选 <code v-pre>永不过期</code> 和 <code v-pre>无限额度</code> ，点击提交。</p>
<p><img src="/source/3.png" alt="获取令牌"></p>
<div class="custom-container tip"><p class="custom-container-title">令牌进阶使用</p>
<p>令牌是用户调用X-Chat AI模型的密钥。</p>
<p>创建令牌时，用户可设置每个令牌的 <code v-pre>额度</code> 和 <code v-pre>过期时间</code> 。这一功能便于您为不同的亲朋好友分发使用权限，也可以用于令牌的二次售卖。令牌被使用后，用户可以在 <code v-pre>X-Chat用户API授权中心</code> 中查看该令牌的使用情况。</p>
</div>
<p>成功新建令牌后，在令牌页先点击<code v-pre>复制</code>，再点击<code v-pre>聊天</code><em>（或手动前往<a href="https://basetec.top/xchat" target="_blank" rel="noopener noreferrer">https://basetec.top/xchat<ExternalLinkIcon/></a>）</em> 并输入令牌。</p>
<h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<ol>
<li>
<p>进入 <code v-pre>X-Chat页面</code> <a href="https://basetec.top/xchat" target="_blank" rel="noopener noreferrer">https://basetec.top/xchat<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>新用户可以随意发送一句话，系统将自动弹出提示，提醒登录。请点击 <code v-pre>用户 X-Chat API</code> ，并将上一节复制的 <code v-pre>令牌</code> 填写在输入框中。<em>（请不要修改其他位置内容）</em>
<img src="/source/2.png" alt="输入令牌"></p>
</li>
<li>
<p>如何修改令牌？</p>
</li>
</ol>
<p>电脑端用户点击左下角 <code v-pre>设置</code> ，选择 <code v-pre>语言模型</code> ，在右侧 <code v-pre>X-Chat API</code> 输入栏中输入 <code v-pre>令牌</code> 。
移动端用户点击页面底部 <code v-pre>设置</code> 进行修改，操作与电脑端用户类似。（请不要修改其他位置内容）
<img src="/source/1.png" alt="修改令牌"></p>
<h2 id="其他内容" tabindex="-1"><a class="header-anchor" href="#其他内容"><span>其他内容</span></a></h2>
<p>请前往 <code v-pre>X-Chat V2 二次分发系统</code> 中查看</p>
</div></template>


