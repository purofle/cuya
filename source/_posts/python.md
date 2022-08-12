---
title: python基础巩固
date: 2021-04-05 21:38:37
tags:
 - python
categories:
 - python
readmore: true
---

## property装饰器

在在一个类中，让成员使用property装饰器，可以将变量名作为变量读取.
[官方文档](https://docs.python.org/zh-cn/3/library/functions.html?highlight=property#property)

> 如果给出，doc 将成为该 property 属性的文档字符串。 否则该 property 将拷贝 fget 的文档字符串（如果存在）。 这令使用 property() 作为 decorator 来创建只读的特征属性可以很容易地实现.
> 以上 @property 装饰器会将 voltage() 方法转化为一个具有相同名称的只读属性的 "getter"，并将 voltage 的文档字符串设置为 "Get the current voltage."
> 特征属性对象具有 getter, setter 以及 deleter 方法，它们可用作装饰器来创建该特征属性的副本，并将相应的访问函数设为所装饰的函数.

<!--more-->

例子：

```python
In [1]: class A:
   ...:     a:str
   ...:     @property
   ...:     def a(self):
   ...:         return "test"
   ...:
```

当运行`A().a`时，返回`test`.

## 魔法函数

一个简单且容易理解的例子：

```python
In [12]: class A:
    ...:     def __init__(self,a):
    ...:         self.a = a
    ...:     def __len__(self):
    ...:         return len(self.a)
    ...:
```

在这个例子中，我们定义了`__len__`,他可以让这个类可以被`len`,就像这样：

```python
ln [13]: len(A("测试"))
```

这时会返回2,也就是"测试"这个字符串被len后的结果.

## 海象运算符

新增的语法 := 可在表达式内部为变量赋值。 它被称为“海象运算符”因为它很像是 海象的眼睛和长牙。

在这个示例中，赋值表达式可以避免调用`len()`两次:

```python
if (n := len(a)) > 10:
    print(f"List is too long ({n} elements, expected <= 10)")
```

## 快速返回 tuple

一个很好理解的例子：

```python
def test():
    return 1,2
print(type(test()))
```

此时返回的结果为`tuple`。

## 快速获取一个网页内的内容

`urllib.request`提供了一个叫做`urlopen`的上下文函数，它可以快速进行一次网络请求。

使用例：

```python
from urllib.request import urlopen
with urlopen(要请求的地址) as resp:
    print(resp.read())
```

此时就会打印出html内容。

如果请求的地址是个json的话，还可以这么写：

```python
from urllib.request import urlopen
from pprint import pprint
import json
with urlopen(要请求的地址) as resp:
    pprint(json.load(resp))
```

其中，`pprint`会自动将`dict`格式化。
