!function(){var e=document.createElement("style");e.innerHTML=".zfile-office-viewer[data-v-acdcdb0a],#office-body[data-v-acdcdb0a]{height:100%;width:100%}\n",document.head.appendChild(e),System.register(["./useFileUpload-legacy.af6fc5ae.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./request-legacy.e2497089.js","./index-legacy.2de5676a.js","./common-legacy.af649da4.js","./index-legacy.c7b26f61.js","./base-legacy.f53a0713.js","./index-legacy.bb28c642.js","./event-legacy.39ad8904.js","./index-legacy.b9e82fd1.js","./scroll-legacy.20579f08.js","./event-legacy.0bfbd831.js","./focus-trap-legacy.e6bab6c4.js","./validator-legacy.21431d38.js","./index-legacy.66af6ab6.js","./index-legacy.5e99e13c.js","./directive-legacy.1ac5dcca.js"],(function(e){"use strict";var n,t,a,c,i,d,o,f,l;return{setters:[function(e){n=e.a},function(e){t=e._},function(e){a=e.E},function(e){c=e.o,i=e.a,d=e.f,o=e.U,f=e.V,l=e.p},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const s={class:"zfile-office-viewer"},r=[(e=>(o("data-v-acdcdb0a"),e=e(),f(),e))((()=>l("div",{id:"office-body"},null,-1)))];e("default",t({__name:"OfficeViewer",props:{fileUrl:String,fileName:String},setup(e){const t=e;let o=n();return c((()=>{!function(e,n){let t=document.createElement("script"),c=document.getElementsByTagName("head")[0];t.type="text/javascript",t.charset="UTF-8",t.src=e,t.addEventListener?(t.addEventListener("load",(function(){n()}),!1),t.addEventListener("error",(function(){a.warning("调用在线文档服务失败，请检查在线文档服务是否正常")}),!1)):t.attachEvent&&t.attachEvent("onreadystatechange",(function(){"loaded"===window.event.srcElement.readyState&&n()}));c.appendChild(t)}(`${o.globalConfig.onlyOfficeUrl}/web-apps/apps/api/documents/api.js`,(()=>{const e=t.fileName.lastIndexOf("."),n={document:{fileType:t.fileName.substr(e+1),title:t.fileName,url:t.fileUrl,lang:"zh-CN"},width:"100%",editorConfig:{mode:"view",lang:"zh-CN"}};new DocsAPI.DocEditor("office-body",n)}))})),(e,n)=>(i(),d("div",s,r))}},[["__scopeId","data-v-acdcdb0a"]]))}}}))}();