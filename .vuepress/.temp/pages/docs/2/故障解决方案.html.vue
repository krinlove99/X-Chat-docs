<template><div><h2 id="错误故障汇总" tabindex="-1"><a class="header-anchor" href="#错误故障汇总"><span>错误故障汇总</span></a></h2>
<ol>
<li>打开 <code v-pre>X-Chat 聊天客户端(basetec.top/xchat)</code> 时出现以下页面或内容：</li>
</ol>
<p><img src="/source/bug1.jpg" alt="应用程序错误"></p>
<div class="custom-container danger"><p class="custom-container-title">错误提示具体内容</p>
<p>Application error: a client-side exception has occurred (see the browser console for more information).</p>
</div>
<p><strong>出错原因：</strong></p>
<ul>
<li>该浏览器的 <code v-pre>X-Chat 聊天客户端</code> 已开启 <code v-pre>数据同步</code> 功能</li>
<li>聊天数据有新更新时未等同步完成就关闭浏览器导致同步出错</li>
<li>同时在多台开启了 <code v-pre>数据同步</code> 功能的浏览器使用时，未等数据同步完成后就关闭了出错的那台浏览器</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">数据同步功能原理</p>
<p>X-Chat聊天客户端 的数据同步采用 <code v-pre>WebDev</code> 协议。该协议出于保密级别要求，需要同步的设备同时在线。</p>
<p>假设你目前在使用A设备，需要将A设备的会话记录同步到B、C等设备上。当同步进行时，A设备同步的会话将先把会话ID传到B、C等其他设备上，此时B、C等接收设备的会话记录中将先出现同步的会话记录标题，其次同步会话记录的详细内容。当然这一过程往往在几秒钟之内就全部结束，因此用户基本上感知不到同步过程。</p>
<p>同时如果A设备在同步时正在显示某个会话页面，那么同步后B、C等设备也将默认显示该页面。</p>
<p>所以如果在同步还未结束时A设备意外关闭，那么已经传输过去的会话ID和标题已经存在B、C等设备上，但详细内容并没有传输。此时当B、C设备打开后，由于系统找不到具体内容，因此报错。</p>
</div>
<p><strong>解决办法：</strong></p>
<ol>
<li>尝试在Windows系统浏览器上使用 <code v-pre>Ctrl+F5</code> / MacOS系统浏览器上使用 <code v-pre>Cmd+Shift+R</code> 刷新浏览器</li>
<li>清除浏览器缓存。在浏览器设置中选择 <code v-pre>清除浏览数据</code> ，勾选 <code v-pre>Cookie数据</code> 并清除</li>
</ol>
<p>清除浏览数据后一般即可正常使用，如有需要可再次配置同步参数并恢复聊天数据</p>
</div></template>


