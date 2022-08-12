---
layout: title
title: 删除包的同时删除这个包的配置文件
date: 2022-04-21 14:22:02
tags:
  - problem
  - Archlinux
categories:
  - linux
readmore: true
---

这里以 mariaDB 举例子。

首先在数据库中删除掉包：

```bash
sudo pacman -R --dbonly mariadb
```

然后重新安装，安装时覆盖所有文件：

```bash
sudo pacman -S --overwrite "*" mariadb
```

问题解决。
