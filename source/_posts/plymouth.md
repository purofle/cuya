---
title: 给你的Archlinux增加一个好看的启动界面
date: 2021-05-21 17:23:18
tags:
- tools
categories:
- linux
readmore: true
---

## 前言

Archlinux正常开机时只有一个光秃秃的启动信息，很不好看，所以这次来教大家给Archlinux整上类似于Ubuntu那样的开机动画。

<!--more-->

## 检查环境

首先在终端里执行`uname -a`查看自己现在所用的内核

```bash
$ uname -a
Linux archlinux 5.10.36-1-lts #1 SMP Tue, 11 May 2021 15:06:48 +0000 x86_64 GNU/Linux
```

很明显，我现在使用的是`linux-lts`内核。知道了内核后，就该安装headers了。

首先执行`sudo pacman -Q 内核名-headers`来查看自己是否已经装好headers，如果你的输出类似是这样的：

```bash
linux-lts-headers 5.10.36-1
```

那么你就可以直接进行下一步了。如果输出的结果是这样的话：

```
错误：软件包 'linux-lts-headers' 未找到
```

那么你可以执行`内核名-headers`来安装headers。

## 安装

使用`yay -S plymouth`即可从 [aur](aur.archlinux.org/packages/plymouth) 安装`plymouth`，如果你正在使用 [archlinuxcn 源](https://mirrors.bfsu.edu.cn/archlinuxcn)，你也可以使用`pacman -S plymouth`来安装。

## 配置

首先修改`/etc/mkinitcpio.conf`，把`plymouth`放在`mkinitcpio.conf`的 HOOKS 行，且**必须**在"base udev"**之后**：

```bash
HOOKS=(base udev plymouth [...])
```

接下来你需要向[内核传递下面的参数](https://wiki.archlinux.org/title/Kernel_parameters)：

```
quiet splash loglevel=3 rd.udev.log_priority=3 vt.global_cursor_default=0
```

最后，重建 initrd 镜像：

```bash
# mkinitcpio -p 内核名
```

假如你跟我一样也在使用 `linux-lts`，就可以这样：

```bash
# mkinitcpio -p linux-lts
```

### 平滑过渡

要启用平滑过渡，需要：

​    1.禁用 Display manager，例如 `systemctl disable gdm.service`

​    2.启用对应的 plymouth 服务(支持 GDM, LXDM, SLiM, LightDM, SDDM), 例如`systemctl enable gdm-plymouth.service`

### 主题

Plymouth自带了一些主题：

​    **1.fade-in**: "简单的有淡出淡入的星星的主题"
​    **2.glow**: "伴随着新兴标志的饼状引导进度条的企业主题"
​    **3.script**: "脚本案例插件" (漂亮的Arch Logo主题)
​    **4.solar**: "带有燃烧的蓝色星球的空间主题"
​    **5.spinner**: "带有加载框的简单主题"
​    **6.spinfinity**: "显示旋转的无穷大标志的主题"
​    **7.text**: "三种颜色的进度条(Fedora默认的白、浅蓝、蓝启动进度条)")
​    **8.details**: "详细的启动信息滚动输出"

使用`plymouth-set-default-theme -l`可以查看目前安装的所有主题。换主题也非常简单，只需要修改`/etc/plymouth/plymouthd.conf`即可：

```bash
[Daemon]
Theme=script
ShowDelay=0
DeviceTimeout=8
```

这里我改成了`script`这个主题。

## 参考

- [ArchWiki - Plymouth (简体中文)](https://wiki.archlinux.org/title/Plymouth_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E8%AF%B7%E5%8F%82%E9%98%85)
