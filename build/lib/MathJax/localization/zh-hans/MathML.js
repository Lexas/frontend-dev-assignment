/*
 *  /MathJax/localization/zh-hans/MathML.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Localization.addTranslation("zh-hans","MathML",{version:"2.5.0",isLoaded:!0
,strings:{BadMglyph:"错误的移动字形：%1",BadMglyphFont:"错误字体：%1",MathPlayer:"MathJax无法启用MathPlayer。\n\n如果还没有安装MathPlayer，您必须先安装MathPlayer。\n如果您的安全设置有可能会阻止ActiveX的运行，请在\n工具菜单下的Internet 选项中选择安全标签然后点击\n自定义级别，检查\n“二进制文件和脚本行为”和“运行 ActiveX 控件”\n是否已启用。\n\n目前您看到的只能是错误信息而非排版数式。"
,CantCreateXMLParser:"MathJax无法为MathML创建XML解析器。请检查安全设置\n“对标记为可安全执行脚本的 Active 控件执行脚本”\n是否已开启（在工具中开启Internet 选项然后选择安全\n面板，点自定义级别按钮找到这个选项并开启）。\n\nMathJax将无法处理MathML等式"
,UnknownNodeType:"未知的节点类型：%1",UnexpectedTextNode:"意外的文本节点：%1",ErrorParsingMathML:"解析MathML时出错"
,ParsingError:"解析MathML时出错：%1",MathMLSingleElement:"MathML必须用单个元素建立",MathMLRootElement
:"MathML必须用<math>元素建立，而不是%1"}}),MathJax.Ajax.loadComplete("[MathJax]/localization/zh-hans/MathML.js"
);