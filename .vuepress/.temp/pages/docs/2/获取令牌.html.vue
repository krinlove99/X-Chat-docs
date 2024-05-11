<template><div><h2 id="获取令牌" tabindex="-1"><a class="header-anchor" href="#获取令牌"><span>获取令牌</span></a></h2>
<ol>
<li>
<p>注册并验证成功后前往导航栏的 <a href="https://proxy.rntec.top/" target="_blank" rel="noopener noreferrer">Token后台<ExternalLinkIcon/></a> 并登陆，用户名及密码与您之前注册的一致。</p>
</li>
<li>
<p>进入 <code v-pre>Token后台（X-Chat用户API授权中心）</code> ，在导航栏中的 <code v-pre>令牌</code> 中点击 <code v-pre>新建令牌</code> 。</p>
<p><code v-pre>令牌名称</code> 随意填写， <code v-pre>模型范围</code> 可不填， <code v-pre>IP限制</code> 可不填，建议勾选 <code v-pre>永不过期</code> 和 <code v-pre>无限额度</code> ，点击提交。</p>
</li>
</ol>
<p><img src="/source/3.png" alt="获取令牌"></p>
<div class="custom-container tip"><p class="custom-container-title">令牌进阶使用</p>
<p>令牌是用户调用X-Chat AI模型的密钥。</p>
<p>创建令牌时，用户可设置每个令牌的 <code v-pre>额度</code> 和 <code v-pre>过期时间</code> 。这一功能便于您为不同的亲朋好友分发使用权限，也可以用于令牌的二次售卖。令牌被使用后，用户可以在 <code v-pre>X-Chat用户API授权中心</code> 中查看该令牌的使用情况。</p>
</div>
<ol start="3">
<li>成功新建令牌后，在令牌页先点击<code v-pre>复制</code>，再点击<code v-pre>聊天</code><em>（或手动前往<a href="https://xchat.rntec.top" target="_blank" rel="noopener noreferrer">https://xchat.rntec.top<ExternalLinkIcon/></a>）</em> 并输入令牌（见下一节）。</li>
</ol>
</div></template>


