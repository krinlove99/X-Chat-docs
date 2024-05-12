<template><div><h2 id="搭建你的ai聊天" tabindex="-1"><a class="header-anchor" href="#搭建你的ai聊天"><span>搭建你的AI聊天</span></a></h2>
<h3 id="在线体验" tabindex="-1"><a class="header-anchor" href="#在线体验"><span>在线体验</span></a></h3>
<p><a href="https://xchat.rntec.top" target="_blank" rel="noopener noreferrer">xchat.rntec.top<ExternalLinkIcon/></a></p>
<h3 id="docker-compose部署" tabindex="-1"><a class="header-anchor" href="#docker-compose部署"><span>Docker-compose部署</span></a></h3>
<p>请准备一台具有公网 IP 的服务器并将 3210 端口开放。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.8'</span>
 
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">x-chat</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> krinlove/xchat2<span class="token punctuation">:</span>betav1.1
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> xchat2<span class="token punctuation">-</span>betav1.1
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">OPENAI_API_KEY</span><span class="token punctuation">:</span> <span class="token comment">#你的API</span>
      <span class="token key atrule">OPENAI_PROXY_URL</span><span class="token punctuation">:</span> <span class="token comment">#你的网关地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前支持与 <code v-pre>openai</code> 兼容的 <code v-pre>/v1/chat/completions</code> 接口，网关地址可按该接口标准进行对齐并在地址后添加 <code v-pre>/v1</code> 。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>建议使用与 <code v-pre>X-Chat</code> 配套的网关地址。</p>
</div>
<h3 id="定制化支持" tabindex="-1"><a class="header-anchor" href="#定制化支持"><span>定制化支持</span></a></h3>
<p>X-Chat 提供以下定制服务：</p>
<ul>
<li>UI界面专属品牌、LOGO等标识定制</li>
<li>代部署、长期代维护</li>
<li>模型支持</li>
</ul>
<p>如有定制需求，请联系 <code v-pre>krinchao@gmail.com</code></p>
</div></template>


