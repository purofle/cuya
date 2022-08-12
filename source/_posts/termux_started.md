---
title: Termux 入门
date: 2021-06-19 17:52:49
tags:
- termux
categories:
- linux
readmore: true
---
## 系统要求
- Android 7.0 - 11.0
- CPU: AArch64, ARM, i686, x86_64
- 至少剩余 200 MB 的储存空间（不包括 SD 卡）
> 注意：
Termux 不支持不带有 NEON SIMD 支持的 ARM CPU。
## 安装
目前，最好的方法是去[F-droid](https://f-droid.org/)安装，对于 F-droid 的使用，这里不多做介绍。
<!--more-->
## 输入法
本人推荐使用讯飞输入法的搜狗模式，或使用下面的搜狗输入法小米版配置：

| 名称 | 位置 | 状态 |
|:----:|:----:|:----:|
|     中文联想      |输入习惯|关|
|     英文预测      |输入习惯|关|
|  自动句首大写   |输入习惯|关|
|  自动锁定大写   |输入习惯|开|
|成对符号自动匹配|输入习惯|关|
## 第一次启动
### 换源
换源是非常重要的一步，它关系到你以后的使用体验。在新版的 Termux 中，直接执行`termux-change-repo`，使用<kbd>↑</kbd>和<kbd>↓</kbd>进行移动光标，使用<kbd>Space</kbd>来进行选择。
选中`Main repository`，`Game repository`，`Science repository`后，使用<kbd>Enter</kbd>进行确定。跳到第二个界面（选镜像）后，选中`Mirrors by BFSU`按下<kbd>Enter</kbd>即可。
### 更换主题
> 默认的 Termux 主题，黑底白字，很难看，其实换掉它非常简单。

在终端内，在任意处长按，点击`more...`，选择`Style`，如果出现`Termux:Styling`未安装之类的提示，选择`INSTALL`，点击用 F-droid 打开，安装即可。安装后再次找到`Style`就能直接进行字体跟颜色的配置。
### 更换 sh
> 默认的 bash 补全很不舒服，这里我推荐使用 zsh。
zsh 安装可以直接使用 pkg
```
pkg install zsh -y
```
安装 OhMyZsh：
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
### 申请访问内部储存空间的权限
```
termux-setup-storage
```
执行后，会自动生成`storage`文件夹，可以直接通过`storage`访问内部储存空间。
## 编辑器的选择
目前，主要有四种编辑器可供选择：
- Vim
神级编辑器 vim，termux 的源里自带的 8.2 版本的 vim，安装和使用都很方便：
```bash
pkg install vim -y
```
- Nvim
vim 的衍生品，做了一些十分有用的修改：
```bash
pkg install nvim -y
```
- Emacs
一个非常牛逼的~~操作系统~~编辑器，自带包管理器以及各种各样的东西，编写插件的语言基于 lisp，扩展性极高：
```bash
pkg install emacs -y
```
- Nano
简单，易用的编辑器，快捷键都有提示，适合新手过渡：
```bash
pkg install nano -y
```
## 部分语言运行环境的配置
> 这篇只针对运行环境，对于开发环境的配置，之后我会写一篇新文章细说。

### Python
Termux 官方源里自带的版本是 3.9.5，可以直接使用 pkg 安装：
```bash
pkg install python -y
```
> 不要尝试手动编译 Python3.10！浪费时间且浪费生命。

### C/C++/OC
C/C++/OC 都可以统一使用 termux 官方编译好的 clang，安装也很简单：
```bash
pkg install clang -y
```
安装好后，可以使用`clang --version`查看下版本：
```bash
$ clang --version
clang version 12.0.0
Target: aarch64-unknown-linux-android24
Thread model: posix
InstalledDir: /data/data/com.termux/files/usr/bin
```
### Swift
Swift 本是苹果专用的开发语言，开源后已经成功移植到 Termux 上。它的安装也非常简单：
```bash
pkg install swift -y
```
安装后建议进行一次编译测试，首先需要把下面的内容写入到任意一个`.swift`后缀的文件里：
```swift
print("Hello, World")
```
然后就可以通过`swiftc path/to/file`进行编译，一般来说，无报错即为通过。
### Java
Java 不在官方源内，所以安装较为麻烦。这里我推荐使用[termux-ndk](https://hub.fastgit.org/Lzhiyong/termux-ndk)编译好的 openjdk11。
安装方法：
```bash
mkdir -p $PREFIX/share/openjdk11.0.1
curl https://hub.fastgit.org/Lzhiyong/termux-ndk/releases/download/openjdk/openjdk-11.0.1.tar.xz -L -o $PREFIX/share/openjdk11.0.1/openjdk-11.0.1.tar.xz # 下载
cd $PREFIX/share/openjdk11.0.1
tar -xvf openjdk-11.0.1.tar.xz
cp -r openjdk-11.0.1/* $PREFIX/share/openjdk11.0.1/
rm -rf openjdk-11.0.1*
```
这样以后，只需要将$PREFIX/share/openjdk11.0.1 加入 PARH 即可。
