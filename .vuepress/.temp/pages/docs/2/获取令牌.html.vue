<template><div><h2 id="获取令牌" tabindex="-1"><a class="header-anchor" href="#获取令牌"><span>获取令牌</span></a></h2>
<p>以下提供两种创建令牌的方式：</p>
<h3 id="快捷令牌操作" tabindex="-1"><a class="header-anchor" href="#快捷令牌操作"><span>快捷令牌操作</span></a></h3>
<ul>
<li>BASETEC官网中进入导航栏的 <code v-pre>X-Chat</code> 页面，点击菜单栏的 <code v-pre>我的令牌</code> 来创建一个新令牌。这里将直接为你创建一个永不过期、无限额度的令牌（具体可用额度上限根据账户实际额度决定）。
创建后，可能需要等待1-3分钟左右生效，请刷新页面查看。</li>
<li>再次点击菜单栏的 <code v-pre>我的令牌</code> ，如果令牌已生效，点击下拉列表将出现你刚刚创建的令牌。选择一个令牌，会在下方出现该令牌的详细信息。点击 <code v-pre>复制令牌</code> ，具体配置请参考下一节。</li>
</ul>
<h3 id="详细令牌操作" tabindex="-1"><a class="header-anchor" href="#详细令牌操作"><span>详细令牌操作</span></a></h3>
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
<p>成功新建令牌后，在令牌页先点击<code v-pre>复制</code>，再点击<code v-pre>聊天</code><em>（或手动前往<a href="https://basetec.top/xchat" target="_blank" rel="noopener noreferrer">https://basetec.top/xchat<ExternalLinkIcon/></a>）</em> 并输入令牌（见下一节）。</p>
</div></template>


