---

layout: title
title: 快速查看你的archlinux安装日期
date: 2022-01-14 16:02:26
tags:

- tools

categories:

- linux

---

## 方法

方法来源于`arch linux/archlinux交流群`的 Star_caorui，终端执行`cat /var/log/pacman.log | head -n 1`即可。

## 原理

`cat /var/log/pacman.log`读取 pacman 的 log 文件，使用管道传输到`head -n 1`内，`head -n 1`取第一行。一般来说，在系统内执行的第一条 pacman 指令是由 pacstrap 在安装过程中执行的。