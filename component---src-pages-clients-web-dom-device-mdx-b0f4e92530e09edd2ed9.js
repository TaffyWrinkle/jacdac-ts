(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wEQO:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return i}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp"),s=t("9Dj+"),c=t("raEh");var b={},p={_frontmatter:b},o=s.a;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(o,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"JDDevice"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A ",Object(n.b)("strong",{parentName:"p"},"device")," is a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom"}),"DOM")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/node"}),"node"),"\nthat hosts ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/service"}),"services"),". A device is hosted in a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/bus"}),"bus"),".")),Object(n.b)(c.a,{mdxType:"DeviceList"}),Object(n.b)("p",null,"This object inherits methods and properties from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/node"}),"node"),"."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," bus ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"createUSBBus"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," devices ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"devices"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",null,"Methods"),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"name")),Object(n.b)("p",null,"Retreives the short hash name or the name given to this device in the bus."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"hello "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"device",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"name",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"announced")),Object(n.b)("p",null,"This flag indicates with annoucement data has been received for the device.\nIt is possible to receive a packet from an unknown device before an announcement packet has been received."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!"),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"annonced",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// let's wait"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"services")),Object(n.b)("p",null,"Gets the list of ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/service"}),"services")," hosted in the device."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"for"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," service ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"services"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"service",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"service")),Object(n.b)("p",null,"Retreives the service by ",Object(n.b)("strong",{parentName:"p"},"service number")," in the device. Undefined if not found."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," service ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"service"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"pkt",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"service_number",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h2",null,"Events"),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECT")),Object(n.b)("p",null,"Raised when the device is detected on the bus. The service information might not have been populated yet."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECT"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"})," connect"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"DISCONNECT")),Object(n.b)("p",null,'Raised when the device has not been "seen" on the bus for a few seconds; at which point it is considered disconnected.'),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DISCONNECT"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"})," disconnect"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"ANNOUNCE")),Object(n.b)("p",null,"Raised when an control packet with service information has been received. At this point, it is possible to query\nthe services in the device."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"ANNOUNCE"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"services"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"forEach"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"service")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"service",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"RESTART")),Object(n.b)("p",null,"Raised when a device just restarted and we are seeing the first advertisement packet."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"RESTART"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"})," restart"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CHANGE")),Object(n.b)("p",null,"Raised when any change occurs in the device state or announcement data."),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"PACKET_RECEIVE")),Object(n.b)("p",null,"Raised when a packet is received for this device."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"PACKET_RECEIVE"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"pkt")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"})," received "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"pkt",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"PACKET_REPORT")),Object(n.b)("p",null,"Raised when a report packet is received for this device."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"PACKET_REPORT"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"pkt")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"})," report "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"pkt",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"PACKET_EVENT")),Object(n.b)("p",null,"Raised when an event packet is received for this device."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"PACKET_EVENT"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"pkt")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"})," event "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"pkt",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h2",null,"See Also"),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/service"}),"Service"),", ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/register"}),"Register"),", ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/bus"}),"Bus")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clients-web-dom-device-mdx-b0f4e92530e09edd2ed9.js.map