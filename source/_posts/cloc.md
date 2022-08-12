---
title: 超好用的代码行数统计工具 cloc
date: 2021-01-29 22:29:37
tags:
 - tools
categories:
 - linux
readmore: true
---
## 介绍

从它的[README.md](https://github.com/AlDanial/cloc/blob/master/README.md)中可以看出，这玩意是用来统计代码行数的(~~废话~~)

<!--more-->

这玩意用起来就是这样的：
![](https://i.loli.net/2021/01/30/4hm3Hp6A2RFZeWu.jpg)
直接就是一个表格的形式，非常直观（

安装也很简单，只需要对号入座就行了，下面是座位表：
```
npm install -g cloc              # https://www.npmjs.com/package/cloc
sudo apt install cloc            # Debian, Ubuntu
sudo yum install cloc            # Red Hat, Fedora
sudo dnf install cloc            # Fedora 22 or later
sudo pacman -S cloc              # Arch
sudo emerge -av dev-util/cloc    # Gentoo https://packages.gentoo.org/packages/dev-util/cloc
sudo apk add cloc                # Alpine Linux
doas pkg_add cloc                # OpenBSD
sudo pkg install cloc            # FreeBSD
sudo port install cloc           # Mac OS X with MacPorts
brew install cloc                # Mac OS X with Homebrew
choco install cloc               # Windows with Chocolatey
scoop install cloc               # Windows with Scoop
```
## 使用
使用也特别简单，`cloc`的用法有很多，这里举几个简单的例子：
```
cloc test.py #统计test.py里的行数
cloc tests/ #统计tests目录中的行数
cloc test.zip #统计test.zip中的oc --diff 07219af8 6453cd41 #统计commit 07219af8跟commit 6453cd41中不同的行数
```
剩下的`cloc --help`中做了很详细的介绍，我就不说了（
*最后，附上`cloc`的Github地址：[AlDanial/cloc](https://github.com/AlDanial/cloc)*
