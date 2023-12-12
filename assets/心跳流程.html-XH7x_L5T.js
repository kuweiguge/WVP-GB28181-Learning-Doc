import{_ as i,r as c,o as p,c as o,a as n,b as s,d as e,w as t,e as l}from"./app-NmqmjXM3.js";const d="/WVP-GB28181-Learning-Doc/assets/sngrep_keepalive_1-DL9vG2Ek.png",u="/WVP-GB28181-Learning-Doc/assets/sngrep_keepalive_2-2OeR7KQV.png",r="/WVP-GB28181-Learning-Doc/assets/heartbeat_show-6MdS6hH6.png",v="/WVP-GB28181-Learning-Doc/assets/heartbeat_show2-m4FAjDU0.png",m={},g=n("h1",{id:"注册流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注册流程","aria-hidden":"true"},"#"),s(" 注册流程")],-1),b={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"提示",-1),h=n("p",null,[n("code",null,"192.168.1.64:5060"),s("是摄像头，"),n("code",null,"192.168.1.15:6102"),s("是Java的SIP服务器")],-1),_=l('<p><strong>命令流程描述如下:</strong></p><ol><li>源设备向SIP服务器发送<strong>设备状态信息报送命令</strong>。设备状态信息报送命令采用 Message方法携带;</li><li>SIP服务器收到命令后返回200OK。</li></ol><h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h2><p>设备向SIP服务器发送设备状态信息报送命令 <img src="'+d+'" alt=""> SIP服务器收到命令后返回200OK <img src="'+u+`" alt=""></p><h2 id="国标-9-6-1-状态消息报送基本要求" tabindex="-1"><a class="header-anchor" href="#国标-9-6-1-状态消息报送基本要求" aria-hidden="true">#</a> 国标 9.6.1 状态消息报送基本要求</h2><ul><li>当源设备(包括网关、SIP设备、SIP客户端或联网系统)发现工作异常时,应立即向本 SIP监控域的SIP服务器发送状态信息;</li><li>无异常时,应定时向本SIP监控域的SIP服务器发送状态信息。</li><li>SIP设备宜在状态信息中携带故障子设备描述信息。状态信息报送采用IETFRFC 3428中定义的方法 Message实现。</li><li>通过周期性的状态信息报送,实现注册服务器与源设备之间的状态检测即心跳机制。</li><li>心跳发送方、接收方需<strong>统一配置“心跳间隔”参数</strong>,按照“心跳间隔”定时发送心跳消息,<strong>默认心跳间隔60s</strong>。</li><li>心跳发送方、接收方需<strong>统一配置“心跳超时次数”参数</strong>,心跳消息连续超时达到“心跳超时次数” 则认为对方下线,**默认心跳超时次数3次 **。</li><li>心跳接收方在心跳发送方上线状态下<strong>检测到心跳消息连续超时达到商定次数</strong>则认为心跳发送方<strong>离线</strong>;</li><li>心跳发送方在心跳接收方上线状态下检测到心跳消息响应消息连续超时达到商定次数则认为心跳接收方离线。</li></ul><h2 id="代码测试" tabindex="-1"><a class="header-anchor" href="#代码测试" aria-hidden="true">#</a> 代码测试</h2><ol><li>切换到心跳分支</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>git ckeckout feature/feat_4_keepalive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),S={start:"2"},q=n("code",null,"component-sip-server/src/main/resources/sipp",-1),I=l(`<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_register.xml -m 1 -ap 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注册后服务器在3次心跳间隔(默认1分钟)内收不到设备的心跳消息，则触发设备下线操作。</p><p><img src="`+r+'" alt=""></p><h2 id="并发测试" tabindex="-1"><a class="header-anchor" href="#并发测试" aria-hidden="true">#</a> 并发测试</h2>',4),f=n("code",null,"sipp_register_batch.xml",-1),x=l(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;ISO-8859-1&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">scenario</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;sipp.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scenario</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SIP Registration batch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- REGISTER request --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span> <span class="token attr-name">retrans</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:[field0]@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: &lt;sip:[field0]@1506030008&gt;;tag=[call_number]
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: [cseq] REGISTER
      Max-Forwards: 70
      Contact: &lt;sip:[field0]@[local_ip]:[local_port]&gt;
      Expires: 3600
      User-Agent: IP Camera
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 401 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>401<span class="token punctuation">&quot;</span></span> <span class="token attr-name">auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">next</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Register, now with Authorization --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span> <span class="token attr-name">retrans</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:[field0]@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: &lt;sip:[field0]@1506030008&gt;;tag=[pid]9901
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: [cseq] REGISTER
      Max-Forwards: 70
      [field1]
      Contact: &lt;sip:[field0]@[local_ip]:[local_port]&gt;
      User-Agent: IP Camera
      Expires: 3600
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 200 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Keepalive Message --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span> <span class="token attr-name">retrans</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      MESSAGE sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[call_number]
      To: &lt;sip:15060300082000000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: [cseq] MESSAGE
      Content-Type: Application/MANSCDP+xml
      Max-Forwards: 70
      User-Agent: IP Camera
      Content-Length: [len]

      &lt;?xml version=&quot;1.0&quot; encoding=&quot;GB2312&quot;?&gt;
      &lt;Notify&gt;
      &lt;CmdType&gt;Keepalive&lt;/CmdType&gt;
      &lt;SN&gt;[cseq]&lt;/SN&gt;
      &lt;DeviceID&gt;15060300081320000001&lt;/DeviceID&gt;
      &lt;Status&gt;OK&lt;/Status&gt;
      &lt;Info&gt;
      &lt;/Info&gt;
      &lt;/Notify&gt;
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 200 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scenario</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成csv文件的脚本:</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>#!/bin/bash
echo &quot;SEQUENTIAL&quot; &gt; reg_batch.csv
i=1000
while [ $i != 2000 ]
do
i=$(($i+1))
echo &quot;$i;[authentication username=$i password=123456]&quot; &gt;&gt; reg_batch.csv
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),P=n("code",null,"-l",-1),C=l(`<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_register_batch.xml  -inf reg_batch.csv -l 200 -trace_msg -trace_screen -trace_err -aa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>按<code>+</code>键可以增加速率，这里加到了100每秒。没有出现重传和失败的呼叫。</li><li>压测脚本停止后，心跳任务也逐渐正常超时停止。</li><li>Idea启动的服务有些卡顿感。 <img src="`+v+'" alt=""></li></ul>',2);function E(D,R){const a=c("RouterLink");return p(),o("div",null,[g,n("div",b,[k,h,n("p",null,[s("图片中的SIP消息查看工具是"),e(a,{to:"/data/sngrep.html"},{default:t(()=>[s("sngrep")]),_:1})])]),_,n("ol",S,[n("li",null,[s("进入"),q,s("目录,使用"),e(a,{to:"/data/sipp.html"},{default:t(()=>[s("sipp")]),_:1}),s("进行模拟注册")])]),I,n("p",null,[e(a,{to:"/data/sipp.html"},{default:t(()=>[s("sipp")]),_:1}),s("模拟注册加一次心跳的脚本"),f]),x,n("p",null,[e(a,{to:"/data/sipp.html"},{default:t(()=>[s("sipp")]),_:1}),s("命令,"),P,s("指定并发量")]),C])}const A=i(m,[["render",E],["__file","心跳流程.html.vue"]]);export{A as default};
