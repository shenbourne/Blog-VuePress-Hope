---
title: TCP 和 UDP 的区别
icon: fab fa-markdown
order: 2
category:
  - 科普
tag:
  - Network
cover: https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409180129894.png
---


<SiteInfo
  name="理解TCP和UDP协议的核心原理和区别"
  desc="技术蛋老师"
  url="https://www.bilibili.com/video/av113127576376927/"
logo="https://i1.hdslb.com/bfs/face/80384b478798ada204ffd8058b3d156ff5e38bbb.jpg"
  preview="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409180129894.png"
/>

## 连接类型

```mermaid
block-beta
  columns 5
  block:group1:2
    columns 1
	A
	a1["应用层"]
	a2["传输层"]
	a3["网络层"]
	a4["网络接口层"]
  end
  space
  block:group2:2
    columns 1
	B
	b1["应用层"]
	b2["传输层"]
	b3["网络层"]
	b4["网络接口层"]
  end
  a2--"TCP/UDP"-->b2
  a4--"网络"-->b4
  classDef info fill:none;
  class a1,a2,a3,a4,b1,b2,b3,b4 info
```

传输层提供逻辑通信——提供端口，防止不同应用同时通信时出现问题

### TCP 和 UDP 传输逻辑

``` mermaid
sequenceDiagram
    box TCP 面向链接
	    participant A as A
	    participant B as B
    end
    box UDP 无连接
	    participant C as A
	    participant D as B
    end
	critical 握手过程
	    A-->>B: SYN
	    B-->>A: SYN+ACK
	    A-->>B: ACK
    end
    C->D: "数据"
    A->B: "数据"
```

TCP是一种面向连接的协议，先进行三次握手，确保一对一服务稳定可靠地传输数据。

UDP无连接，直接发送数据，速度快但不保证数据的完整性和顺序性。

## 首部

TCP和UDP首部构成

```mermaid
block-beta
  columns 9
  TCP["TCP文段首部"]:4 space UDP["UDP文段首部"]:4
  a1["源端口号"]:2 b1["目标端口号"]:2 space a2["源端口号"]:2 b2["目标端口号"]:2
  c1["序列号"]:4 space c2["长度"]:2 d2["效验和"]:2
  d1["确认答应号"]:4 space e2["数据"]:4
  e1["首部长度"]:1 f["保留"]:1 g["控制位"]:1 h["窗口大小"]:1 space:5
  i["效验和"]:2 j["紧急指针"]:2 space:5
  k["选项"]:3 l["填充"]:1 space:5
  m["数据"]:4
  classDef info fill:none;
  class a1,b1,c1,d1,e1,a2,b2,c2,d2,e2,f,g,h,i,j,k,l,m info
```

TCP与UDP的性能对比

| |TCP|UDP|
|---|---|---|
|首部长度|至少20字节|固定8字节|
|传输特点|开销相对较大|更加轻量化|
|传输速度|速度较慢|速度更快|

## 可靠性和连接方式

### TCP：序列号和确认号

#### 序列号

如果待传送的数据量比较大，TCP就会将其拆为多个数据段，每个数据段都用“序号”进行标注。

``` mermaid
block-beta
  columns 5
  block:ground1:2
    columns 1
    a["应用层"] c["大家好，我是体育王子龙老师"] space
    e["传输层"] g["大家好，我是"] i["体育王子龙老师"]
  end
  space
  block:ground2:2
    columns 1
    b["应用层"] d["大家好，我是体育王子龙老师"] space
    f["传输层"] h["大家好，我是"] j["体育王子龙老师"]
  end
  c-->e
  e--"TCP"-->f
  f-->d
  classDef info fill:none;
  class c,d,g,h,i,j info
```

TCP将应用层的数据视为“连续”的字节流，并根据实际情况进行分片。将连续的字节流完整的交给对方后对方再组合，应用层便能接收到完整的信息。

``` mermaid

flowchart LR
  A["主机"] --> B["主机"] --> E["主机"] --> G["主机"]
  B & C["主机"] --> D["主机"] --> E & F["主机"]
  A --> C --> F --> G
```

TCP将数据包交给网络层，而网络层中数据抵达的顺序往往也不同。此时接收方可以通过序列号丢弃重复数据段，并重组数据。

#### 确认号

如果接收方收到某份数据段，则可用序列号+数据长度的和作为确认号返回。

对于发送方，收到确认号则表明抵达；在指定时间内没收到确认号便代表丢包，TCP进行重传。

``` mermaid
sequenceDiagram
	participant A as A
	participant J as B
	A->>J: 序列号100，+200字节数据
	Note over A,J: 没收到确认答应号，代表丢包
	A->>J: 序列号100，+200字节数据
	J->>A: 确认答应号=300
	A->>J: 序列号300，+200字节数据
	J->>A: 确认答应号=500

```

因此，TCP的可靠性极大程度依赖于首部中的“序列号”和“确认答应号”。

### UDP：不进行分片

UDP将应用层的每个报文都视为独立的信息，直接封装到网络层

``` mermaid
block-beta
  columns 5
  block:ground1:2
    columns 1
    a["应用层"] c["大家好，我是体育王子龙老师"] space
    e["传输层"] g["大家好，我是体育王子龙老师"]
  end
  space
  block:ground2:2
    columns 1
    b["应用层"] d["大家好，我是体育王子龙老师"] space
    f["传输层"] h["大家好，我是体育王子龙老师"]
  end
  c-->e
  e--"UDP"-->f
  f-->d
  classDef info fill:none;
  class c,d,g,h info
```

这样不同数据段之间有明显的边界，也要逐个发送以防止乱序；也可以让应用层负责整理乱序数据

因此，UDP虽然不能保证数据的可靠性，但速度极快于TDP

## 流量和拥塞控制

**流量控制**：针对发送双方。在接收方处理速度不足/冗余时，让发送方放慢/加快发送速率。

**拥塞控制**：针对双方中间的网络。TCP能更有效利用网络带宽

由于UDP没有上述控制，其流量需要在不同层面进行管控（如运营商）

## 应用场景

UDP优点：无连接，首部开销小。在数据量小，对速度有较高要求的场景占据优势，如DNS、实时语音、视频通话。

TCP：建立连接，保证数据可靠性。较适合文件传输、网页等需要数据完整性和可靠性的场景。

<Vssue title="Vssue Demo" />