# SIPp介绍
- [官方网址](https://sipp.sourceforge.net/)
- [SIPp中文文档](https://sipp.sourceforge.net/doc/cn-reference.pdf)

[[toc]]
## Mac安装
```Shell
brew install sipp
```
## 基本使用
:::tip
使用时，`sipp`命令中的ip端口替换为实际地址，命令中的参数和xml的含义在[SIPp中文文档](https://sipp.sourceforge.net/doc/cn-reference.pdf)中都有解释，不懂的概念直接到[SIPp中文文档](https://sipp.sourceforge.net/doc/cn-reference.pdf)中搜索。
:::
### 模拟消息缺少`Expires`头
模拟消息缺少`Expires`头，测试SIP服务器是否能正确返回`400 BadRequest`响应。

sipp命令:
```Shell
sipp 192.168.1.15:6102 -sf sipp_400.xml -m 1
```

文件`sipp_400.xml`的内容：
```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE scenario SYSTEM "sipp.dtd">

<scenario name="Sip Register miss Expires">
    <!-- Register -->
    <send>
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];rport;branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[pid]9901
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      User-Agent: IP Camera
      Content-Length: 0
    ]]>
    </send>

    <recv response="400">
    </recv>

</scenario>
```

### 模拟注册

`sipp_register.xml`文件的内容：
```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE scenario SYSTEM "sipp.dtd">

<scenario name="SIP Registration">

    <!-- REGISTER request -->
    <send retrans="500">
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[call_number]
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      Expires: 3600
      User-Agent: IP Camera
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 401 -->
    <recv response="401" auth="true"/>


    <pause milliseconds="1000"/>

    <!-- Register, now with Authorization -->
    <send>
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[pid]9901
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 2 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      User-Agent: IP Camera
      Expires: 3600
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 200 -->
    <recv response="200"/>

</scenario>
```
#### 成功
sipp命令，`-ap`参数指定正确的密码：
```Shell 
sipp 192.168.1.15:6102 -sf sipp_register.xml  -m 1 -ap 123456
```

#### 失败
sipp命令，随便传一个错误的密码：
```Shell 
sipp 192.168.1.15:6102 -sf sipp_register.xml  -m 1 -ap 111111
```

### 模拟注销

sipp命令，`-ap`参数指定正确的密码：
```Shell 
sipp 192.168.1.15:6102 -sf sipp_unregister.xml  -m 1 -ap 123456
```

`sipp_unregister.xml`文件的内容：
```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE scenario SYSTEM "sipp.dtd">

<scenario name="SIP UnRegister">

    <!-- UnRegister request -->
    <send retrans="500">
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[call_number]
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      Expires: 0
      User-Agent: IP Camera
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 401 -->
    <recv response="401" auth="true"/>


    <pause milliseconds="1000"/>

    <!-- Register, now with Authorization -->
    <send>
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[pid]9901
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 2 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      User-Agent: IP Camera
      Expires: 3600
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 200 -->
    <recv response="200"/>

</scenario>
```

### 模拟注册续订

sipp命令，`-l`参数指定最大的并发呼叫量：
```Shell 
sipp 192.168.1.15:6102 -sf sipp_renewal.xml  -l 1 -ap 123456
```

`sipp_renewal.xml`文件的内容：
```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE scenario SYSTEM "sipp.dtd">

<scenario name="SIP Registration and renewal">

    <!-- REGISTER request -->
    <send>
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[call_number]
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 1 REGISTER
      Max-Forwards: 70
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      Expires: 60
      User-Agent: IP Camera
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 401 -->
    <recv response="401" auth="true"/>


    <pause milliseconds="1000"/>

    <!-- Register, now with Authorization -->
    <send>
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[pid]9901
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 2 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      User-Agent: IP Camera
      Expires: 60
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 200 -->
    <recv response="200"/>

    <!-- Pause for 5 seconds -->
    <pause milliseconds="5000"/>

    <!-- Re-Register -->
    <send  retrans="5000">
        <![CDATA[
      REGISTER sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/UDP [local_ip]:[local_port];branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[pid]9901
      To: <sip:15060300081320000001@1506030008>
      Call-ID: [call_id]
      CSeq: 3 REGISTER
      Max-Forwards: 70
      [authentication username=15060300081320000001]
      Contact: <sip:15060300081320000001@[local_ip]:[local_port]>
      User-Agent: IP Camera
      Expires: 60
      Content-Length: 0
    ]]>
    </send>

    <!-- Receive 200 -->
    <recv response="200"/>

</scenario>
```

### 模拟心跳
sipp命令：
```Shell 
sipp 192.168.1.15:6102 -sf sipp_keepalive.xml -l 1
```

`sipp_keepalive.xml`文件的内容：
```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE scenario SYSTEM "sipp.dtd">

<scenario name="SIP Keepalive">

    <!-- Keepalive Message -->
    <send retrans="500">
        <![CDATA[
      MESSAGE sip:15060300082000000001@1506030008 SIP/2.0
      Via: SIP/2.0/[transport] [local_ip]:[local_port];rport;branch=[branch]
      From: <sip:15060300081320000001@1506030008>;tag=[call_number]
      To: <sip:15060300082000000001@1506030008>
      Call-ID: [call_id]
      CSeq: [cseq] MESSAGE
      Content-Type: Application/MANSCDP+xml
      Max-Forwards: 70
      User-Agent: IP Camera
      Content-Length: [len]

      <?xml version="1.0" encoding="GB2312"?>
      <Notify>
      <CmdType>Keepalive</CmdType>
      <SN>[cseq]</SN>
      <DeviceID>15060300081320000001</DeviceID>
      <Status>OK</Status>
      <Info>
      </Info>
      </Notify>
    ]]>
    </send>

    <!-- Receive 200 -->
    <recv response="200"/>

    <!-- 暂停11秒，测试是否能正确修改设备心跳时间 -->
    <pause milliseconds="11000"/>

</scenario>
```



