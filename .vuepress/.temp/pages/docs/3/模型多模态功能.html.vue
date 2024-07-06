<template><div><h2 id="x-chat-v2-模型多模态功能" tabindex="-1"><a class="header-anchor" href="#x-chat-v2-模型多模态功能"><span>X-Chat V2 模型多模态功能</span></a></h2>
<ul>
<li>支持视觉处理，包括图像识别和解析</li>
<li>支持根据关键词绘图</li>
<li>支持语音输入输出 (详见 <RouteLink to="/docs/4/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.html">语音合成</RouteLink>)</li>
<li>支持文档生成 <Badge type="tip" text="gpt-4 特色功能" vertical="top" /></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">文档生成 支持的文档格式</p>
<p>pdf、docx、xlsx、html、latex、markdown、csv</p>
<p>注意：需要配合关键词使用。如 <code v-pre>xxx(上下文提示词)，并生成一个xlsx文档</code></p>
</div>
<ul>
<li>支持文档文件上传解析</li>
<li>支持网页链接内容解析</li>
<li>支持代码解释器，支持代码运行及调试、纠错、编写等功能</li>
<li>支持联网搜索</li>
</ul>
<h3 id="联网搜索" tabindex="-1"><a class="header-anchor" href="#联网搜索"><span>联网搜索</span></a></h3>
<h4 id="部分大模型支持快速搜索" tabindex="-1"><a class="header-anchor" href="#部分大模型支持快速搜索"><span>部分大模型支持快速搜索</span></a></h4>
<p>Moonshot Kimi、通义千问、秘塔搜索、智谱清言、阶跃星辰等均支持提问式搜索，如 <code v-pre>搜索“xxxxxx”</code> 。</p>
</div></template>


