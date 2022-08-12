---
title: 关于在Linux下给commit进行gpg签名时出现的问题总结
date: 2021-5-16 21-46-50
tags:
  - problem
categories:
  - linux
readmore: true
---
## 第一次能签名，第二次不行
如果出现了这样的报错：
```
error: gpg failed to sign the data
fatal: failed to write commit object
```
<!--more-->
~~说明你的gpg炸了~~，先给git指令带上`GIT_TRACE=1`进入诊断模式来看看到底发生了什么：
```bash
$ GIT_TRACE=1 git commit -a -m "medsage"
21:01:50.774874 git.c:447               trace: built-in: git commit -a -m 'add sstv'
21:01:50.777920 run-command.c:671       trace: run_command: gpg2 --status-fd=2 -bsau  <key id>
error: gpg failed to sign the data
fatal: failed to write commit object
```
不难看出，是在执行`gpg2 --status-fd=2 -bsau  <key id>`中出现了问题。
接下来你可以手动执行
```bash
gpg2 -bsau <key id>
```
如果你执行后没有任何报错而是直接卡住，那么**很大几率**是你缺少了`GPG_TTY`这个环境变量。只需要直接把执行`tty`时输出的结果写入`GPG_TTY`这个变量即可。在我使用的`fish`下，我是这么操作的：
```bash
echo "set -x GPG_TTY (tty)" >> ~/.config/fish/config.fish
```
然后重启`fish`后，重新commit，问题解决。
