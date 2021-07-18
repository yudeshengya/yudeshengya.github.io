(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{572:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[t._v("#")]),t._v(" XSS 攻击")]),t._v(" "),a("p",[t._v("XSS 的全程是 Cross Site Scripting，即跨站脚本。通常指的是，"),a("strong",[t._v("网站未对用户输入的数据进行有效过滤，攻击者可以将恶意脚本注入到网站页面中，以达到执行恶意代码的目的")]),t._v("。攻击者只需诱导受害者打开特定的网站，就可以在受害者的浏览器中执行被注入的恶意代码。")]),t._v(" "),a("p",[t._v("攻击者一般能够做以下这些事情：")]),t._v(" "),a("ol",[a("li",[t._v("窃取 cookie")]),t._v(" "),a("li",[t._v("修改 DOM 伪造登录表单")]),t._v(" "),a("li",[t._v("监听用户行为，比如输入账号密码后发送给攻击者服务器")])]),t._v(" "),a("p",[t._v("XSS 攻击分为三种："),a("strong",[t._v("存储型 XSS 攻击")]),t._v("、"),a("strong",[t._v("反射型 XSS 攻击")]),t._v("和"),a("strong",[t._v("基于 DOM 的 XSS 攻击")])]),t._v(" "),a("h3",{attrs:{id:"_1-存储型-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-存储型-xss-攻击"}},[t._v("#")]),t._v(" 1. 存储型 XSS 攻击")]),t._v(" "),a("p",[t._v("存储型 XSS 攻击大致经过这些步骤："),a("strong",[t._v("攻击者将恶意代码存储到存在漏洞的服务器上，当用户访问到含有该恶意代码的网站时即可触发")]),t._v("。常见于一些能够发表评论的地方，比如论坛，博客。")]),t._v(" "),a("h3",{attrs:{id:"_2-反射型-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-反射型-xss-攻击"}},[t._v("#")]),t._v(" 2. 反射型 XSS 攻击")]),t._v(" "),a("p",[t._v("反射型 XSS 指的是恶意代码放在 URL 参数中，而不是存储在服务器上，因此需要诱导用户打开才能触发攻击。")]),t._v(" "),a("p",[t._v("比如用户打开：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://xxx.com?xss=<script>alert('你被XSS攻击了')<\/script>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样服务器获取到 URL 中的 xss 参数，然后将内容返回给浏览器，浏览器将此内容作为 HTML 解析的一部分，这样该脚本就被执行了。")]),t._v(" "),a("p",[t._v("和存储型不同的是，反射型是通过 URL 的参数，经过服务器，然后再反射到 HTML 上，过程中并没有存储到服务器上。")]),t._v(" "),a("h3",{attrs:{id:"_3-基于-dom-的-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-基于-dom-的-xss-攻击"}},[t._v("#")]),t._v(" 3. 基于 DOM 的 XSS 攻击")]),t._v(" "),a("p",[t._v("基于 DOM 的 XSS 攻击是利用了 JS 能够访问以及修改浏览器 DOM 的特性，因此 JS 能够确定如何处理当前页面的 URL，比如获取 URL 中的相关数据进行处理，并动态更新到页面上。")]),t._v(" "),a("p",[t._v("它与前两种攻击方式最大的不同就是它不经过服务器，可以绕过服务端的检测功能。")]),t._v(" "),a("h2",{attrs:{id:"防范措施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防范措施"}},[t._v("#")]),t._v(" 防范措施")]),t._v(" "),a("h3",{attrs:{id:"_1-利用-cookie-的-httponly-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-利用-cookie-的-httponly-属性"}},[t._v("#")]),t._v(" 1. 利用 Cookie 的 HttpOnly 属性")]),t._v(" "),a("p",[t._v("很多 XSS 攻击的目的都是为了窃取用户的 cookie，而 cookie 的读取可以通过 document.cookie 来实现。")]),t._v(" "),a("p",[t._v("所以我们可以利用 cookie 的 "),a("strong",[t._v("HttpOnly 属性")]),t._v("来禁止 JS 引擎使用 document.cookie 来访问。")]),t._v(" "),a("h3",{attrs:{id:"_2-利用-csp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-利用-csp"}},[t._v("#")]),t._v(" 2. 利用 CSP")]),t._v(" "),a("p",[t._v("CSP 内容安全策略，也叫白名单机制，告诉浏览器可以加载和执行哪些外部资源，这样能够防止被一些第三方的恶意脚本注入。")]),t._v(" "),a("p",[t._v("可以通过两种方式来开启 CSP：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设置 HTTP 头信息中的 Content-Security-Policy 字段")])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("<meta>")]),t._v(" 标签来配置")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default-src "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("; img-src https://*;"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("p",[t._v("具体的配置可以查看"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSPhttps://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-输入检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-输入检查"}},[t._v("#")]),t._v(" 3. 输入检查")]),t._v(" "),a("p",[t._v("永远不信任用户的输入，即对输入的内容进行检查过滤")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("进行转义过滤后就变成")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("alert(1)"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),a("span",{pre:!0,attrs:{class:"token entity",title:"&#x2F;"}},[t._v("&#x2F;")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);