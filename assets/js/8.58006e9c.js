(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(v,_,l){"use strict";l.r(_);var i=l(14),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"notes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[v._v("#")]),v._v(" NOTES")]),v._v(" "),_("h2",{attrs:{id:"d1-基本操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d1-基本操作"}},[v._v("#")]),v._v(" D1 基本操作")]),v._v(" "),_("ul",[_("li",[v._v("模式\n"),_("ul",[_("li",[v._v("normal模式 insert模式")])])]),v._v(" "),_("li",[v._v("基本移动 上下左右 HJKL")]),v._v(" "),_("li",[v._v("插入文字 i光标后方 a光标前方")]),v._v(" "),_("li",[v._v("出insert模式")]),v._v(" "),_("li",[v._v("在终端中如何退出\n"),_("ul",[_("li",[v._v(":wq 保存并退出  :q! 强制退出")])])]),v._v(" "),_("li",[v._v("ctrl和caps调换位置")]),v._v(" "),_("li",[v._v("系统键盘修改修饰键")]),v._v(" "),_("li",[v._v("快速移动\n"),_("ul",[_("li",[v._v("配置 以及 修改键盘设置")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("tips： 习惯insert完立即回到Norma模式")])]),v._v(" "),_("h2",{attrs:{id:"d2-行的操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d2-行的操作"}},[v._v("#")]),v._v(" D2 行的操作")]),v._v(" "),_("ul",[_("li",[v._v("行的移动 ( normal模式下)\n行首：^ 改键 H\n行尾：g_ 改键 L")])]),v._v(" "),_("blockquote",[_("p",[v._v("由于输入时经常想移动光标，于是就将insert模式下的光标移动改为了 ctrl + hjkl。")])]),v._v(" "),_("ul",[_("li",[v._v("行的插入\n行首插入 A\n行尾插入 I\n行前 O （换行）\n行后 o  （换行）")]),v._v(" "),_("li",[v._v("复制粘贴\n复制行 yy\n删除行 dd （可以粘贴）\n粘贴 p")])]),v._v(" "),_("h2",{attrs:{id:"d3-删除复制和基于单词的移动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d3-删除复制和基于单词的移动"}},[v._v("#")]),v._v(" D3 删除复制和基于单词的移动")]),v._v(" "),_("ul",[_("li",[v._v("vim的语法\n定义：操作符 + 动作 （区域范围、使用移动的一些动作）")]),v._v(" "),_("li",[v._v("操作\n· 删除 d (hjkl/ H/ L/ webge/ )\n· 删除后进入insert模式 c\n· 复制 y")]),v._v(" "),_("li",[v._v("基于单词和字串的移动\n单词的定义： 单词与符号都认定为单个单词\n字串的定义： 以空格分割的一串字符\n"),_("ul",[_("li",[v._v("基于单词的移动\ne 单词结尾 往后\nw 单词开头 往后\nb 单词开头 往前\nge 单词结尾 往前")]),v._v(" "),_("li",[v._v("基于字串的移动\nE 字串结尾 往后\nW 字串开头 往后\nB 字串开头 往前\nGE 字串结尾 往前")])])]),v._v(" "),_("li",[v._v("组合\n"),_("ul",[_("li",[v._v("cw 删除当前单词")]),v._v(" "),_("li",[v._v("ea 在当前单词结尾处添加")])])])]),v._v(" "),_("h2",{attrs:{id:"d4-快捷删除和替换、撤销"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d4-快捷删除和替换、撤销"}},[v._v("#")]),v._v(" D4 快捷删除和替换、撤销")]),v._v(" "),_("ul",[_("li",[v._v("x 删除当前光标字符")]),v._v(" "),_("li",[v._v("X 删除光标前的字符")]),v._v(" "),_("li",[v._v("s 删除光标字符后进入insert模式")]),v._v(" "),_("li",[v._v("S 删除当前行后进入insert模式")]),v._v(" "),_("li",[v._v("r+【输入】 替换字符")]),v._v(" "),_("li",[v._v("R+【输入多个字符】替换多个字符")]),v._v(" "),_("li",[v._v("undo 和 redo\n"),_("ul",[_("li",[v._v("u 撤销")]),v._v(" "),_("li",[v._v("C + r 撤回撤销")])])])]),v._v(" "),_("h2",{attrs:{id:"d5-可视化模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d5-可视化模式"}},[v._v("#")]),v._v(" D5 可视化模式")]),v._v(" "),_("p",[v._v("v 进入可视化模式;\nV 以行为单位;\nC + v 以块为单位;")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("退出可视化模式\nesc C+[ 退出\nv V 退出")])]),v._v(" "),_("li",[_("p",[v._v("选定范围\n配合动作\no 切换开始的光标位置\ngv 回到上一次选中区域")])]),v._v(" "),_("li",[_("p",[v._v("技巧\n跨多行同时操作 选中后A I d ...\n复制粘贴 利用")])])]),v._v(" "),_("h2",{attrs:{id:"d6-文本对象-范围"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d6-文本对象-范围"}},[v._v("#")]),v._v(" D6 文本对象 （范围）")]),v._v(" "),_("blockquote",[_("p",[v._v("释义：\n操作 + 内/外部 + 文本对象\n内部 i\n外部 a")])]),v._v(" "),_("p",[_("strong",[v._v("w 一个单词")]),v._v(" "),_("strong",[v._v("b  一对括号")]),v._v(" "),_("strong",[v._v("B  一对{}")]),v._v("\n() 一对括号\n{} 一对{}\n<> 一对<>\n其他符号类推\n"),_("strong",[v._v("t xml标签")]),v._v("\ns 一个句子\np 一个段落")]),v._v(" "),_("p",[v._v("vim-textobj-arguments function参数")]),v._v(" "),_("blockquote",[_("p",[v._v("ia 不包含分隔符\naa 包含分隔符\n删除一个参数 daa\n修改一个参数 cia")])]),v._v(" "),_("p",[v._v("vim-textobj-entire")]),v._v(" "),_("blockquote",[_("p",[v._v("aa 删除当前文本所有\nia 删除当前文本所有 不包含前面和后面空格")])]),v._v(" "),_("h2",{attrs:{id:"d7-滚动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d7-滚动"}},[v._v("#")]),v._v(" D7 滚动")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("C + f 向下滚动一屏")])]),v._v(" "),_("li",[_("p",[v._v("C + B 向上滚动一屏")])]),v._v(" "),_("li",[_("p",[v._v("C + d 向下滚动半屏")])]),v._v(" "),_("li",[_("p",[v._v("C + u 向上滚动半屏")])]),v._v(" "),_("li",[_("p",[v._v("C + e 向下滚动一行")])]),v._v(" "),_("li",[_("p",[v._v("C + y 向上滚动一行")])]),v._v(" "),_("li",[_("p",[v._v("基于配置（更容易记忆）")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("上五行 K")])]),v._v(" "),_("li",[_("strong",[v._v("下五行 J")])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("zz 将当前行置于屏幕中央")])])]),v._v(" "),_("li",[_("p",[v._v("zt 当前行置于屏幕顶部附近")])]),v._v(" "),_("li",[_("p",[v._v("zb 将当前行置于屏幕底部附近")])]),v._v(" "),_("li",[_("p",[v._v("gg 跳转到文件首")])]),v._v(" "),_("li",[_("p",[v._v("G 跳转到文件尾")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("行数 + gg / G 跳转到指定行")])])])]),v._v(" "),_("h2",{attrs:{id:"d8-搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d8-搜索"}},[v._v("#")]),v._v(" D8 搜索")]),v._v(" "),_("ul",[_("li",[v._v("f 正向移动到下一个（char）所在之处")]),v._v(" "),_("li",[v._v("F 反向向移动到下一个（char）所在之处")]),v._v(" "),_("li",[v._v("t 正向移动到下一个（char）字符之前")]),v._v(" "),_("li",[v._v("T 反向移动到下一个（char）字符之前")])]),v._v(" "),_("blockquote",[_("p",[v._v("; 下一个\n, 上一个\n移动用f，配合c d等操作用t")])]),v._v(" "),_("ul",[_("li",[v._v("/ 向下全局查找")]),v._v(" "),_("li",[v._v("? 向上全局查找")])]),v._v(" "),_("blockquote",[_("p",[v._v("n/N 下一个/上一个\n/ + 方向键 查看搜索历史\n"),_("strong",[v._v("和操作使用")])])]),v._v(" "),_("ul",[_("li",[v._v("# 向上查当前光标所在单词")]),v._v(" "),_("li",[v._v("* 向下查当前光标所在单词")])]),v._v(" "),_("h2",{attrs:{id:"d9-更高效的移动-通过两个已经集成的插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d9-更高效的移动-通过两个已经集成的插件"}},[v._v("#")]),v._v(" D9 更高效的移动 （通过两个已经集成的插件）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("esaymotion （使用后会高亮可移动的位置）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("\\<leader>\\<leader> w  当前光标往后的word首")])]),v._v(" "),_("li",[_("p",[v._v("\\<leader>\\<leader> e  当前光标往后的word尾")])]),v._v(" "),_("li",[_("p",[v._v("\\<leader>\\<leader> b  当前光标往前的word首")])]),v._v(" "),_("li",[_("p",[v._v("\\<leader>\\<leader> w  当前光标往后的word尾")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("\\<leader>\\<leader> h  当前光标往前的word首+尾")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("\\<leader>\\<leader> l  当前光标往后的word首+尾")])])]),v._v(" "),_("li",[_("p",[v._v("\\<leader>\\<leader> j  当前光标往后的行首")])]),v._v(" "),_("li",[_("p",[v._v("\\<leader>\\<leader> k  当前光标往前的行首")])])])]),v._v(" "),_("li",[_("p",[v._v("sneak （通过两个字符全局搜索）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("s + 2个字符 （改键后使用 f | F ）")])]),v._v(" "),_("li",[_("p",[v._v("改键")]),v._v(" "),_("ul",[_("li",[v._v("替换原生的f功能（比f更加强大、不用记这么多键）")]),v._v(" "),_("li",[v._v("利用映射实现原来的s/S/z/Z （与原来的s不冲突）")])])]),v._v(" "),_("li",[_("p",[v._v("在可视化visual模式下使用 v + f + 2个字符")])]),v._v(" "),_("li",[_("p",[v._v("在操作符下使用 v + f + 2字符")])])])])]),v._v(" "),_("h2",{attrs:{id:"d10-数字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d10-数字"}},[v._v("#")]),v._v(" D10 数字")]),v._v(" "),_("ul",[_("li",[v._v("语法\n"),_("ul",[_("li",[v._v("操作符 + 数字 + 范围")]),v._v(" "),_("li",[v._v("数字 + 操作符 + 范围")])])])]),v._v(" "),_("h3",{attrs:{id:"点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#点"}},[v._v("#")]),v._v(" 点")]),v._v(" "),_("ul",[_("li",[v._v("重复上一次的修改 （增加、删除、更新）\n"),_("ul",[_("li",[v._v("例子：diw 删除单词，可用点重复")])])]),v._v(" "),_("li",[_("strong",[v._v("核心：一键移动一键操作")]),v._v(" "),_("ul",[_("li",[v._v("场景案例1： 句尾加分号")]),v._v(" "),_("li",[v._v("场景案例2： 手动查找替换")])])])]),v._v(" "),_("h2",{attrs:{id:"d11-多文件之间的跳转"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d11-多文件之间的跳转"}},[v._v("#")]),v._v(" D11 多文件之间的跳转")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("标记")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("mm 单文件")])]),v._v(" "),_("li",[_("strong",[v._v("mM 多文件")])])])]),v._v(" "),_("li",[_("p",[v._v("跳转")]),v._v(" "),_("ul",[_("li",[v._v("' 跳转到标记的行")]),v._v(" "),_("li",[v._v("` "),_("strong",[v._v("跳转到标记的行和列")])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("gd 跳转到指定地方")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("查看函数定义、使用的位置 （类似于vscode的跳转）\n"),_("strong",[v._v("可以跨文件使用")])])]),v._v(" "),_("ul",[_("li",[v._v("跳转历史\n"),_("ul",[_("li",[v._v("C + i 向前跳")]),v._v(" "),_("li",[v._v("C + o 向后跳")])])])]),v._v(" "),_("blockquote",[_("p",[v._v(":jumps 跳转的历史列表")])]),v._v(" "),_("h2",{attrs:{id:"d12-处理包裹字符的符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d12-处理包裹字符的符号"}},[v._v("#")]),v._v(" D12 处理包裹字符的符号")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("cs+已经存在的符号+改变的符号  "),_("strong",[v._v("改变符号")])])]),v._v(" "),_("li",[_("p",[v._v("ys+范围+符号 "),_("strong",[v._v("用符号包裹字符")])])]),v._v(" "),_("li",[_("p",[v._v("ds+符号 "),_("strong",[v._v("删除符号")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("可视化模式下")]),v._v(" S + 符号 "),_("strong",[v._v("用符号包裹字符")])])])]),v._v(" "),_("h2",{attrs:{id:"d13-替换字符串"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d13-替换字符串"}},[v._v("#")]),v._v(" D13 替换字符串")]),v._v(" "),_("ul",[_("li",[v._v("替换\n"),_("ul",[_("li",[v._v("公式 "),_("strong",[v._v(":[range]s/{pattern}/string/{flags}")])])])])]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("range 可选范围\n"),_("ul",[_("li",[v._v("$  "),_("strong",[v._v("到尾部")])]),v._v(" "),_("li",[v._v("%  "),_("strong",[v._v("全文")])]),v._v(" "),_("li",[v._v("number,number 行到行之间")])])]),v._v(" "),_("li",[v._v("flags\n"),_("ul",[_("li",[v._v("g 替换在默认情况下未每行第一个，需要替换所有要加上/g")]),v._v(" "),_("li",[v._v("c 交互模式 （替换、跳过、等等操作）")])])])])]),v._v(" "),_("ul",[_("li",[v._v("多选操作\n"),_("ul",[_("li",[v._v("gb (类似vscode C + d)  区分大小写")])])])]),v._v(" "),_("h2",{attrs:{id:"d14-悬浮显示-大小写-注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d14-悬浮显示-大小写-注释"}},[v._v("#")]),v._v(" D14 悬浮显示 大小写 注释")]),v._v(" "),_("ul",[_("li",[v._v("gh 悬浮显示")]),v._v(" "),_("li",[v._v("大小写\n"),_("ul",[_("li",[v._v("g + u/U + 范围")]),v._v(" "),_("li",[v._v("可视化模式 + u/U")]),v._v(" "),_("li",[v._v("~ 单词字符转换大小写")])])]),v._v(" "),_("li",[v._v("注释\n"),_("ul",[_("li",[v._v("gc 单行注释")]),v._v(" "),_("li",[v._v("gC 多行注释")])])])]),v._v(" "),_("h2",{attrs:{id:"d15-窗口管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d15-窗口管理"}},[v._v("#")]),v._v(" D15 窗口管理")]),v._v(" "),_("blockquote"),v._v(" "),_("ul",[_("li",[_("p",[v._v("新建窗口")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("C + w + v 左右")])]),v._v(" "),_("li",[v._v("C + w + s 上下")])])]),v._v(" "),_("li",[_("p",[v._v("切换窗口 （切换窗口焦点）")]),v._v(" "),_("ul",[_("li",[v._v("C + w + h/j/k/l")]),v._v(" "),_("li",[v._v("C + w + w 互换")])])]),v._v(" "),_("li",[_("p",[v._v("关闭窗口")]),v._v(" "),_("ul",[_("li",[v._v("C + w + c  关闭")]),v._v(" "),_("li",[v._v("C + w + o 保留当前，关闭其他所有窗口")])])]),v._v(" "),_("li",[_("p",[v._v("扩展（基于vscode快捷键进行窗口管理）")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("shift + C + h/j/k/l 窗口切换 (改键)")])])])])]),v._v(" "),_("blockquote",[_("p",[v._v("keybindings.json\nPowerToys 将C + hjkl 映射成 上下左右")])]),v._v(" "),_("h2",{attrs:{id:"d16-删除函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d16-删除函数"}},[v._v("#")]),v._v(" D16 删除函数")]),v._v(" "),_("ul",[_("li",[v._v("% 匹配括号/ 括号（移动光标）")])]),v._v(" "),_("blockquote",[_("p",[v._v("可以和可视化模式搭配快速选中括号内（包括括号）、函数体内的内容")])]),v._v(" "),_("ul",[_("li",[v._v("vim-indent-object 基于缩进的对象\n"),_("ul",[_("li",[v._v("vii 函数内部的内容")]),v._v(" "),_("li",[v._v("vai 包括整个函数")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("vaI 解决最后一个花括号没有被选中的问题")])]),v._v(" "),_("ul",[_("li",[v._v("删除的几种方式")]),v._v(" "),_("li",[v._v("dap/dip 基于段落的方式 （函数内如果空行，则不会选中所有内容）")]),v._v(" "),_("li",[v._v("dal 基于 vim-indent-object")]),v._v(" "),_("li",[v._v("V$%d 打开可视化行模式移动到行尾部然后匹配括号\n"),_("ul",[_("li",[v._v("优化 使用配置 (<leader> d f)")]),v._v(" "),_("li",[v._v("参数格式化后换行  可以配置 ddf 等 自行组合配置")])])])]),v._v(" "),_("h2",{attrs:{id:"d17-掌握宏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d17-掌握宏"}},[v._v("#")]),v._v(" D17 掌握宏")]),v._v(" "),_("blockquote",[_("p",[v._v("可以录制一系列动作")])]),v._v(" "),_("ul",[_("li",[v._v("开始录制\n"),_("ul",[_("li",[v._v("qa(寄存器的名字) + 录制的内容")])])]),v._v(" "),_("li",[v._v("结束录制\n"),_("ul",[_("li",[v._v("q 停止")])])]),v._v(" "),_("li",[v._v("查看录制好的宏\n"),_("ul",[_("li",[v._v(":reg a(寄存器的名字)")])])]),v._v(" "),_("li",[v._v("使用\n"),_("ul",[_("li",[v._v("@ a(寄存器的名字)")])])]),v._v(" "),_("li",[v._v("调用最后一次执行的宏\n"),_("ul",[_("li",[v._v("@@")])])]),v._v(" "),_("li",[v._v("重复执行\n"),_("ul",[_("li",[v._v("数字 + @a")])])]),v._v(" "),_("li",[v._v("安全机制\n"),_("ul",[_("li",[v._v("报错就停")])])]),v._v(" "),_("li",[v._v("追加\n"),_("ul",[_("li",[v._v("q A（大写的寄存器名字）+ 操作")])])]),v._v(" "),_("li",[v._v("修改一个已知的宏\n"),_("ul",[_("li",[_("p",[v._v('" + a + p 复制出来')])]),v._v(" "),_("li",[_("p",[v._v(": put a  复制出来")])]),v._v(" "),_("li",[_("p",[v._v('" + a + yy （修改，但是在vscode中不生效）')])])])])]),v._v(" "),_("h2",{attrs:{id:"d18-调用vscode的命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d18-调用vscode的命令"}},[v._v("#")]),v._v(" D18 调用vscode的命令")]),v._v(" "),_("blockquote",[_("p",[v._v("通过commands字段配置成vim的指令")])]),v._v(" "),_("ul",[_("li",[v._v("格式化文档")]),v._v(" "),_("li",[v._v("重命名")]),v._v(" "),_("li",[v._v("折叠代码")])]),v._v(" "),_("h2",{attrs:{id:"关于vim的操作补充-来自网络搜集-待完善"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于vim的操作补充-来自网络搜集-待完善"}},[v._v("#")]),v._v(" 关于VIM的操作补充（来自网络搜集）待完善")]),v._v(" "),_("ul",[_("li",[v._v("折叠后的移动\n"),_("ul",[_("li",[v._v("gj / gk 移动物理行")])])]),v._v(" "),_("li",[v._v("百分比滚动\n"),_("ul",[_("li",[v._v("23% 滚动到文档23%的位置")])])]),v._v(" "),_("li",[v._v("数字 ＋ w/e  行内快速移动单词")]),v._v(" "),_("li",[v._v("用 / ? 查找代替 f 快速查找或划定范围")]),v._v(" "),_("li",[v._v("gi 快速回到上一次退出insert模式继续编辑")]),v._v(" "),_("li",[v._v("[ 或者 ] + 符号  移动到上下一个没配对的符号\n"),_("ul",[_("li",[v._v("[( 跳转到上一个没配对的 (")]),v._v(" "),_("li",[v._v("]) 跳转到下一个没配对的 )")]),v._v(" "),_("li",[v._v("[{ 跳转到上一个没配对的 {")]),v._v(" "),_("li",[v._v("]} 跳转到下一个没配对的 }")])])])]),v._v(" "),_("h2",{attrs:{id:"vscode01-操作文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode01-操作文件"}},[v._v("#")]),v._v(" Vscode01 操作文件")]),v._v(" "),_("ul",[_("li",[v._v("切换到files explorer 区域")]),v._v(" "),_("li",[v._v("vim shift + ctrl + h")]),v._v(" "),_("li",[v._v("vscode ctrl + ; (改键后)")]),v._v(" "),_("li",[v._v("切换到编辑区\n"),_("ul",[_("li",[v._v("vim shift + ctrl + l")]),v._v(" "),_("li",[v._v("vscode ctrl + ' (改键后)")])])]),v._v(" "),_("li",[v._v("移动光标\n"),_("ul",[_("li",[v._v("jk 上下移动")]),v._v(" "),_("li",[v._v("h 折叠文件夹 在文件上使用则光标移动到当前文件所在文件夹上")]),v._v(" "),_("li",[v._v("l 展开文件夹 在文件上使用则打开文件")])])]),v._v(" "),_("li",[v._v("创建文件\n"),_("ul",[_("li",[v._v("cmd + n  Vscode 原生")]),v._v(" "),_("li",[v._v("使用插件 file Utils")])])]),v._v(" "),_("li",[v._v("创建文件夹\n"),_("ul",[_("li",[v._v("A 在files explorer新建 改键")]),v._v(" "),_("li",[v._v("\\<leader> + n + d 在编辑区域直接新建 配置通过vim调用vscode命令")])])])]),v._v(" "),_("h2",{attrs:{id:"vscode02-操作多个vscode窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode02-操作多个vscode窗口"}},[v._v("#")]),v._v(" Vscode02 操作多个vscode窗口")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("打开新的vscode窗口")]),v._v(" "),_("ul",[_("li",[v._v("shift + ctrl + n")]),v._v(" "),_("li",[v._v("shift + command + n （mac）")])])]),v._v(" "),_("li",[_("p",[v._v("ctrl + r 选择工作区")])]),v._v(" "),_("li",[_("p",[v._v("多个窗口切换")]),v._v(" "),_("ul",[_("li",[v._v("command + ` (mac)")])])]),v._v(" "),_("li",[_("p",[v._v("关闭vscode窗口")]),v._v(" "),_("ul",[_("li",[v._v("shift + command + w")]),v._v(" "),_("li",[v._v("shift + ctrl + w")])])]),v._v(" "),_("li",[_("p",[v._v("全局搜索")]),v._v(" "),_("ul",[_("li",[v._v("shift + ctrl + f 打开搜索栏 (目前只在侧栏聚焦时生效)")]),v._v(" "),_("li",[v._v("ctrl + 上下 移动用f")])])]),v._v(" "),_("li",[_("p",[v._v("在工作区查找对象、函数")]),v._v(" "),_("ul",[_("li",[v._v("ctrl + t")])])]),v._v(" "),_("li",[_("p",[v._v("查看当前文件 大纲 ctrl + shift + o")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("全局搜索")])]),v._v(" "),_("ul",[_("li",[v._v("shift + ctrl + p")])])]),v._v(" "),_("li",[_("p",[v._v("搜索文件")]),v._v(" "),_("ul",[_("li",[v._v("ctrl + p")])])])]),v._v(" "),_("h2",{attrs:{id:"vscode04"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode04"}},[v._v("#")]),v._v(" Vscode04")]),v._v(" "),_("ul",[_("li",[v._v("提示\n"),_("ul",[_("li",[v._v("触发函数的参数提示 command + shift + 空格")]),v._v(" "),_("li",[v._v("代码提示 command + i")])])]),v._v(" "),_("li",[v._v("移动行")]),v._v(" "),_("li",[v._v("增加行")]),v._v(" "),_("li",[v._v("删除单词\n"),_("ul",[_("li",[v._v("window下只能用 ctrl + Del 删除后面的单词")]),v._v(" "),_("li",[v._v("mac下使用opt + del 删除前面的单词")])])]),v._v(" "),_("li",[v._v("跳转到错误处\n"),_("ul",[_("li",[v._v("F8")])])]),v._v(" "),_("li",[v._v("选择所有出现的当前单词 ctrl + F2")])]),v._v(" "),_("h2",{attrs:{id:"vscode05-快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode05-快捷键"}},[v._v("#")]),v._v(" Vscode05 快捷键")]),v._v(" "),_("blockquote",[_("p",[v._v("window系统下很多vscode都与改键或者其他快捷键冲突，待完善。")])]),v._v(" "),_("h2",{attrs:{id:"vscode06-git"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode06-git"}},[v._v("#")]),v._v(" Vscode06  GIT")]),v._v(" "),_("ul",[_("li",[v._v("打开面板\n"),_("ul",[_("li",[v._v("\\<leader> + g + g  （vim改键后）")])])]),v._v(" "),_("li",[v._v("stage Change\n"),_("ul",[_("li",[v._v("\\<leader> + g + s  （vim改键后）")])])]),v._v(" "),_("li",[v._v("commit\n"),_("ul",[_("li",[v._v("\\<leader> + g + c  （vim改键后）")])])]),v._v(" "),_("li",[v._v("diff\n"),_("ul",[_("li",[v._v("\\<leader> + g + d + f（vim改键后）")])])]),v._v(" "),_("li",[v._v("unstage Change\n"),_("ul",[_("li",[v._v("\\<leader> + g + u  （vim改键后）")])])]),v._v(" "),_("li",[v._v("diacard Change\n"),_("ul",[_("li",[v._v("\\<leader> + g + c + l  （vim改键后）")])])])]),v._v(" "),_("h2",{attrs:{id:"vscode07-snippets-代码片段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode07-snippets-代码片段"}},[v._v("#")]),v._v(" Vscode07 snippets (代码片段)")]),v._v(" "),_("blockquote",[_("p",[v._v("tab键可以切换位置\n提示消失重新展示 command + i")])]),v._v(" "),_("h2",{attrs:{id:"vscode08-重构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode08-重构"}},[v._v("#")]),v._v(" Vscode08 重构")]),v._v(" "),_("blockquote",[_("p",[v._v("重构提示\nctrl + shift + r\ncommand + .")])]),v._v(" "),_("ul",[_("li",[v._v("vscode\n"),_("ul",[_("li",[v._v("Extract Method 选中区域提炼函数")]),v._v(" "),_("li",[v._v("Extract Variable 字符串提炼成变量")])])]),v._v(" "),_("li",[v._v("abracadabra\n"),_("ul",[_("li",[v._v("内联变量 和提炼变量相反")]),v._v(" "),_("li",[v._v("字符串转换成模板字符串")])])]),v._v(" "),_("li",[v._v("hocus pocus\n"),_("ul",[_("li",[v._v("创建变量 为未创建的变量创建变量 （配置leader快捷键）")]),v._v(" "),_("li",[v._v("创建函数 为未创建的函数创建函数 （配置leader快捷键）")])])]),v._v(" "),_("li",[v._v("javascript booster\n"),_("ul",[_("li",[v._v("function 转化 箭头函数 （互转）")]),v._v(" "),_("li",[v._v("ifelse 转化 ? :")])])])]),v._v(" "),_("h2",{attrs:{id:"vscode09-vspacecode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode09-vspacecode"}},[v._v("#")]),v._v(" Vscode09 VSpaceCode")]),v._v(" "),_("blockquote",[_("p",[v._v("快捷键插件 （已经配置好很多快捷键，也可以直接使用vim，GitHub仓库有vim版本的配置）")])]),v._v(" "),_("ul",[_("li",[v._v("space + ; 在vim中打开 （改键 settingJson）")]),v._v(" "),_("li",[v._v("space 在管理器中打开 （改键 keybinding）")])]),v._v(" "),_("h2",{attrs:{id:"lazygit-终端git管理工具-暂时不用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lazygit-终端git管理工具-暂时不用"}},[v._v("#")]),v._v(" lazygit 终端git管理工具 （暂时不用）")]),v._v(" "),_("h2",{attrs:{id:"vscode10-终端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode10-终端"}},[v._v("#")]),v._v(" Vscode10 终端")]),v._v(" "),_("ul",[_("li",[v._v("打开\n"),_("ul",[_("li",[v._v("control + `  || cmd + j  （反引号太远，改为ctrl+ ,）")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("cmd 只会打开面板，不会跳转终端")])]),v._v(" "),_("ul",[_("li",[v._v("清空 cmd + k")]),v._v(" "),_("li",[v._v("分屏 cmd + \\")]),v._v(" "),_("li",[v._v("分屏切换 cmd + [ ]")]),v._v(" "),_("li",[v._v("关闭 shift + alt + q")]),v._v(" "),_("li",[v._v("新建 shift + alt + n")]),v._v(" "),_("li",[v._v("窗口切换 shift + cmd + [ ]")]),v._v(" "),_("li",[v._v("在vscode中打开终端  shift + cmd + c  （会直接打开当前项目的路径）")])]),v._v(" "),_("h2",{attrs:{id:"vscode11-debug"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode11-debug"}},[v._v("#")]),v._v(" Vscode11 debug")]),v._v(" "),_("blockquote",[_("p",[v._v("不常用 暂时不记录")])]),v._v(" "),_("h2",{attrs:{id:"chrome"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#chrome"}},[v._v("#")]),v._v(" Chrome")]),v._v(" "),_("h3",{attrs:{id:"移动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动"}},[v._v("#")]),v._v(" 移动")]),v._v(" "),_("ul",[_("li",[v._v("j k 上下移动")]),v._v(" "),_("li",[v._v("u d 较大范围的上下移动")]),v._v(" "),_("li",[v._v("gg 页面头部")]),v._v(" "),_("li",[v._v("G 页面底部")]),v._v(" "),_("li",[v._v("f 选择")]),v._v(" "),_("li",[v._v("F 新建窗口的f")]),v._v(" "),_("li",[v._v("J K 标签页切换 （一些页面不支持）")]),v._v(" "),_("li",[v._v("H L 页面的后退前进")])]),v._v(" "),_("h3",{attrs:{id:"操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[v._v("#")]),v._v(" 操作")]),v._v(" "),_("ul",[_("li",[v._v("gi 聚焦输入框")]),v._v(" "),_("li",[v._v("yy 复制当前标签页url")]),v._v(" "),_("li",[v._v("p 粘贴url到当前地址栏")]),v._v(" "),_("li",[v._v("P 新建标签页粘贴")]),v._v(" "),_("li",[v._v("w 关闭标签页")]),v._v(" "),_("li",[v._v("r 刷新")]),v._v(" "),_("li",[v._v("yv 进入可视化模式")])]),v._v(" "),_("h3",{attrs:{id:"搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[v._v("#")]),v._v(" 搜索")]),v._v(" "),_("ul",[_("li",[v._v("o 显示多功能搜索框")])]),v._v(" "),_("blockquote",[_("p",[v._v("历史记录、用搜索引擎搜索、网址跳转")])]),v._v(" "),_("ul",[_("li",[v._v("O 搜索后打开新标签")]),v._v(" "),_("li",[v._v("b 搜索收藏夹的内容")]),v._v(" "),_("li",[v._v("B 打开新标签")]),v._v(" "),_("li",[v._v("ge 显示搜索框、编辑当前网址")]),v._v(" "),_("li",[v._v("T 列出当前的标签页列表")]),v._v(" "),_("li",[v._v("/ 查找 （用n N 跳转）")])]),v._v(" "),_("h3",{attrs:{id:"标签页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标签页"}},[v._v("#")]),v._v(" 标签页")]),v._v(" "),_("ul",[_("li",[v._v("g0 g$ 跳转到第一个 最后一个标签页")]),v._v(" "),_("li",[v._v("t 打开新的空标签页")]),v._v(" "),_("li",[v._v("yt 复制当前标签页在新标签打开")]),v._v(" "),_("li",[v._v("X 恢复关闭的标签页")]),v._v(" "),_("li",[v._v("W 将当前标签页作为新窗口打开")]),v._v(" "),_("li",[v._v("^ 调转最近使用的标签页")]),v._v(" "),_("li",[v._v("<< >> 移动标签页")]),v._v(" "),_("li",[v._v("option + p 固定标签页")])]),v._v(" "),_("h3",{attrs:{id:"一些不常做操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一些不常做操作"}},[v._v("#")]),v._v(" 一些不常做操作")]),v._v(" "),_("ul",[_("li",[v._v("m 标记")]),v._v(" "),_("li",[v._v("` 跳转")]),v._v(" "),_("li",[v._v("gu 跳转当前页面上一层")]),v._v(" "),_("li",[v._v("gU 当前页面首页")]),v._v(" "),_("li",[v._v("i 暂停插件")]),v._v(" "),_("li",[v._v("<a-f> 连续点击网页中的链接和按钮")])])])}),[],!1,null,null,null);_.default=t.exports}}]);