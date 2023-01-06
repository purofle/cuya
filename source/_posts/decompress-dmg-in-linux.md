---
title: 在 Linux 下解包一个 macOS App 的安装包--以纯纯写作为例
date: 2023-01-06 08:02:14
tags:
 - tools
categories:
 - linux
readmore: true
---

首先通过 file 查看文件属性：

```bash
> file PureWriter-1.7.2-macOS.dmg
PureWriter-1.7.2-macOS.dmg: zlib compressed data
```

发现是 `zlib compressed data`, 于是直接使用 7z 进行解压：

```bash
> 7z x PureWriter-1.7.2-macOS.dmg

7-Zip [64] 17.04 : Copyright (c) 1999-2021 Igor Pavlov : 2017-08-28
p7zip Version 17.04 (locale=zh_CN.UTF-8,Utf16=on,HugeFiles=on,64 bits,12 CPUs x64)

Scanning the drive for archives:
1 file, 28737147 bytes (28 MiB)

Extracting archive: PureWriter-1.7.2-macOS.dmg
...
```

打开解压出来的 PureWriter 文件夹，发现 dmg 内文件：

```bash
> ls
右键点击pkg打开.jpg  'Pure Writer-1.7.2.pkg'  'right click the pkg.jpg'
```
继续对 pkg 文件进行分析

```bash
> file Pure\ Writer-1.7.2.pkg
Pure Writer-1.7.2.pkg: xar archive compressed TOC: 1146, SHA-1 checksum, contains  zlib compressed data
```

发现依旧是 `zlib compressed data` 继续使用 `7z x` 进行解压。解压后出现 `Payload~` 文件，文件属性是这样的：

```bash
> file Payload\~
Payload~: ASCII cpio archive (pre-SVR4 or odc)
```

于是使用 cpio工具 对文件进行解包：

```bash
> cpio -idmv < Payload\~
...
```

解包到此完毕，出来的 `Pure Writer.app` 文件夹即为 .app 文件内的内容。