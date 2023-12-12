import{_ as c,r as i,o,c as u,a as n,b as s,d as a,w as e,e as p}from"./app-NmqmjXM3.js";const d={},r=n("h1",{id:"sipp介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sipp介绍","aria-hidden":"true"},"#"),s(" SIPp介绍")],-1),v={href:"https://sipp.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://sipp.sourceforge.net/doc/cn-reference.pdf",target:"_blank",rel:"noopener noreferrer"},k={class:"table-of-contents"},g=p(`<h2 id="mac安装" tabindex="-1"><a class="header-anchor" href="#mac安装" aria-hidden="true">#</a> Mac安装</h2><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>brew install sipp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>`,3),b={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"提示",-1),q=n("code",null,"sipp",-1),_={href:"https://sipp.sourceforge.net/doc/cn-reference.pdf",target:"_blank",rel:"noopener noreferrer"},S={href:"https://sipp.sourceforge.net/doc/cn-reference.pdf",target:"_blank",rel:"noopener noreferrer"},x=p(`<h3 id="模拟消息缺少expires头" tabindex="-1"><a class="header-anchor" href="#模拟消息缺少expires头" aria-hidden="true">#</a> 模拟消息缺少<code>Expires</code>头</h3><p>模拟消息缺少<code>Expires</code>头，测试SIP服务器是否能正确返回<code>400 BadRequest</code>响应。</p><p>sipp命令:</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_400.xml -m 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件<code>sipp_400.xml</code>的内容：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;ISO-8859-1&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">scenario</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;sipp.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scenario</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Sip Register miss Expires<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Register --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];rport;branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[pid]9901
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      User-Agent: IP Camera
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>recv</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scenario</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟注册" tabindex="-1"><a class="header-anchor" href="#模拟注册" aria-hidden="true">#</a> 模拟注册</h3><p><code>sipp_register.xml</code>文件的内容：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;ISO-8859-1&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">scenario</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;sipp.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scenario</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SIP Registration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- REGISTER request --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span> <span class="token attr-name">retrans</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[call_number]
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      Expires: 3600
      User-Agent: IP Camera
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 401 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>401<span class="token punctuation">&quot;</span></span> <span class="token attr-name">auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pause</span> <span class="token attr-name">milliseconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Register, now with Authorization --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[pid]9901
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 2 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      User-Agent: IP Camera
      Expires: 3600
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 200 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scenario</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成功" tabindex="-1"><a class="header-anchor" href="#成功" aria-hidden="true">#</a> 成功</h4><p>sipp命令，<code>-ap</code>参数指定正确的密码：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_register.xml  -m 1 -ap 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="失败" tabindex="-1"><a class="header-anchor" href="#失败" aria-hidden="true">#</a> 失败</h4><p>sipp命令，随便传一个错误的密码：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_register.xml  -m 1 -ap 111111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="模拟注销" tabindex="-1"><a class="header-anchor" href="#模拟注销" aria-hidden="true">#</a> 模拟注销</h3><p>sipp命令，<code>-ap</code>参数指定正确的密码：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_unregister.xml  -m 1 -ap 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>sipp_unregister.xml</code>文件的内容：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;ISO-8859-1&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">scenario</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;sipp.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scenario</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SIP UnRegister<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- UnRegister request --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span> <span class="token attr-name">retrans</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[call_number]
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      Expires: 0
      User-Agent: IP Camera
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 401 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>401<span class="token punctuation">&quot;</span></span> <span class="token attr-name">auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pause</span> <span class="token attr-name">milliseconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Register, now with Authorization --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[pid]9901
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 2 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      User-Agent: IP Camera
      Expires: 3600
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 200 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scenario</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟注册续订" tabindex="-1"><a class="header-anchor" href="#模拟注册续订" aria-hidden="true">#</a> 模拟注册续订</h3><p>sipp命令，<code>-l</code>参数指定最大的并发呼叫量：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_renewal.xml  -l 1 -ap 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>sipp_renewal.xml</code>文件的内容：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;ISO-8859-1&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">scenario</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;sipp.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scenario</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SIP Registration and renewal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- REGISTER request --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[call_number]
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      Expires: 60
      User-Agent: IP Camera
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 401 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>401<span class="token punctuation">&quot;</span></span> <span class="token attr-name">auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pause</span> <span class="token attr-name">milliseconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Register, now with Authorization --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[pid]9901
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 2 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      User-Agent: IP Camera
      Expires: 60
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 200 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Pause for 5 seconds --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pause</span> <span class="token attr-name">milliseconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- Re-Register --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>send</span>  <span class="token attr-name">retrans</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token cdata">&lt;![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: &lt;sip:15060300081320000001@1506030008&gt;;tag=[pid]9901
      To: &lt;sip:15060300081320000001@1506030008&gt;
      Call-ID: [call_id]
      CSeq: 3 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: &lt;sip:15060300081320000001@[local_ip]:[local_port]&gt;
      User-Agent: IP Camera
      Expires: 60
      Content-Length: 0
    ]]&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>send</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Receive 200 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recv</span> <span class="token attr-name">response</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scenario</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟心跳" tabindex="-1"><a class="header-anchor" href="#模拟心跳" aria-hidden="true">#</a> 模拟心跳</h3><p>sipp命令：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sipp 192.168.1.15:6102 -sf sipp_keepalive.xml -l 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>sipp_keepalive.xml</code>文件的内容：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;ISO-8859-1&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">scenario</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;sipp.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scenario</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SIP Keepalive<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

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

    <span class="token comment">&lt;!-- 暂停11秒，测试是否能正确修改设备心跳时间 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pause</span> <span class="token attr-name">milliseconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scenario</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function I(C,E){const l=i("ExternalLinkIcon"),t=i("router-link");return o(),u("div",null,[r,n("ul",null,[n("li",null,[n("a",v,[s("官方网址"),a(l)])]),n("li",null,[n("a",m,[s("SIPp中文文档"),a(l)])])]),n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#mac安装"},{default:e(()=>[s("Mac安装")]),_:1})]),n("li",null,[a(t,{to:"#基本使用"},{default:e(()=>[s("基本使用")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#模拟消息缺少expires头"},{default:e(()=>[s("模拟消息缺少Expires头")]),_:1})]),n("li",null,[a(t,{to:"#模拟注册"},{default:e(()=>[s("模拟注册")]),_:1})]),n("li",null,[a(t,{to:"#模拟注销"},{default:e(()=>[s("模拟注销")]),_:1})]),n("li",null,[a(t,{to:"#模拟注册续订"},{default:e(()=>[s("模拟注册续订")]),_:1})]),n("li",null,[a(t,{to:"#模拟心跳"},{default:e(()=>[s("模拟心跳")]),_:1})])])])])]),g,n("div",b,[h,n("p",null,[s("使用时，"),q,s("命令中的ip端口替换为实际地址，命令中的参数和xml的含义在"),n("a",_,[s("SIPp中文文档"),a(l)]),s("中都有解释，不懂的概念直接到"),n("a",S,[s("SIPp中文文档"),a(l)]),s("中搜索。")])]),x])}const f=c(d,[["render",I],["__file","sipp.html.vue"]]);export{f as default};
