# javascript

javascript 深入学习

#### 正则表达式

> Regular Expression: RegExp
> 用来处理字符串的规则
>
> - 只能处理字符串
> - 它是一个规则： 可以验证字符串是否符合某个规则(test), 也可以把字符串中符合规则的内容捕获到(exec / match)

```
let str = 'good good study, day day up!';
let reg = /\d+/; // 是否包含数字
reg.test(str)
```
