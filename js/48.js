(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[48],{3048:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var o={d:(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},i={};function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}o.d(i,{Z:()=>b});const n=(t,e)=>{t.replaceWith(e)},a={default:n,innerHTML:(t,e)=>{t.innerHTML=e.innerHTML},textContent:(t,e)=>{t.textContent=e.textContent},innerText:(t,e)=>{t.innerText=e.innerText},attributes:(t,e)=>{let r=t.getAttributeNames();e.getAttributeNames().forEach((o=>{t.setAttribute(o,e.getAttribute(o)||""),r=r.filter((t=>t!==o))})),r.forEach((e=>{t.removeAttribute(e)}))},replaceWith:n},c=t=>{if(t===window.name)return window;switch(t.toLowerCase()){case"":case"_self":return window;case"_parent":return window.parent;case"_top":return window.top;default:return}};class l{constructor(t){this.pjax=t}onLinkOpen(t){if(t.defaultPrevented)return;const{target:e}=t;if(!(e instanceof Element))return;const r=e.closest("a[href], area[href]");r&&((t instanceof MouseEvent||t instanceof KeyboardEvent)&&(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)||c(r.target)===window&&r.origin===window.location.origin&&(t.preventDefault(),this.pjax.load(r.href).catch((()=>{}))))}onFormSubmit(t){if(t.defaultPrevented)return;const{target:e,submitter:r}=t;if(!(e instanceof HTMLFormElement))return;const o=new class{constructor(t,e){this.form=t,this.submitterButton=e===t?null:e}getAttribute(t){const{submitterButton:e,form:r}=this;if(e&&e.hasAttribute(`form${t}`)){const r=e["form"+(o=t,`${o.charAt(0).toUpperCase()}${o.slice(1)}`)];if(r)return r}var o;return r[t]}getNameValuePairs(){return Array.from(new FormData(this.form),(([t,e])=>[t,e instanceof File?e.name:e]))}getURLSearchParams(){return new URLSearchParams(this.getNameValuePairs())}getTextPlain(){return this.getNameValuePairs().reduce(((t,[e,r])=>`${t}${e}=${r}\r\n`),"")}getRequestInfo(){const t=this.getAttribute("action"),e=new URL(t,document.URL);if(!/^https?:$/.test(e.protocol))return null;switch(this.getAttribute("method")){case"get":return e.search=this.getURLSearchParams().toString(),e.href;case"post":{let e;switch(this.getAttribute("enctype")){case"application/x-www-form-urlencoded":e=this.getURLSearchParams();break;case"multipart/form-data":e=new FormData(this.form);break;case"text/plain":e=this.getTextPlain();break;default:return null}return new Request(t,{method:"POST",body:e})}default:return null}}}(e,r);if(c(o.getAttribute("target"))!==window)return;const i=o.getRequestInfo();i&&new URL("string"==typeof i?i:i.url).origin===window.location.origin&&(t.preventDefault(),this.pjax.load(i).catch((()=>{})))}register(){document.addEventListener("click",(t=>{this.onLinkOpen(t)})),document.addEventListener("keyup",(t=>{"Enter"===t.key&&this.onLinkOpen(t)})),"SubmitEvent"in window&&document.addEventListener("submit",(t=>{this.onFormSubmit(t)}))}}async function h(t,e={}){var r;const{selectors:o,switches:i,cache:s,timeout:n}={...this.options,...e},c={},l=(null===(r=this.abortController)||void 0===r?void 0:r.signal)||null;c.signal=l;const h=new Request(t,{cache:s,signal:l});let u;h.headers.set("X-Requested-With","Fetch"),h.headers.set("X-Pjax","true"),h.headers.set("X-Pjax-Selectors",JSON.stringify(o)),c.request=h,c.timeout=n,n>0&&(u=window.setTimeout((()=>{var t;null===(t=this.abortController)||void 0===t||t.abort()}),n),c.timeoutID=u),this.fire("send",c);try{const t=await fetch(h).finally((()=>{window.clearTimeout(u)}));c.response=t;const r=new URL(t.url);r.hash=new URL(h.url).hash,window.location.href!==r.href&&window.history.pushState(null,"",r.href);const s=(new DOMParser).parseFromString(await t.text(),"text/html");c.switches=i;const n=await async function(t,{selectors:e,switches:r,signal:o=null}){if(null!=o&&o.aborted)throw new DOMException("Aborted switches","AbortError");let i=!1;const s=[];return e.forEach((e=>{const o=t.querySelectorAll(e),n=document.querySelectorAll(e);if(o.length!==n.length)throw new DOMException(`Selector '${e}' does not select the same amount of nodes`,"IndexSizeError");const{activeElement:c}=document;n.forEach(((t,n)=>{!i&&c&&t.contains(c)&&((c instanceof HTMLElement||c instanceof SVGElement)&&c.blur(),i=!0);const l=(null==r?void 0:r[e])||a.default,h=Promise.resolve().then((()=>l(t,o[n]))).catch((()=>{}));s.push(h)}))})),await Promise.race([Promise.all(s),new Promise(((t,e)=>{null==o||o.addEventListener("abort",(()=>{e(new DOMException("Aborted switches","AbortError"))}))}))]),{focusCleared:i}}(s,{selectors:o,switches:i,signal:l});c.switchesResult=n,await this.preparePage(n,e)}catch(t){throw c.error=t,this.fire("error",c),t}finally{this.fire("complete",c)}this.fire("success",c)}const u=["application/ecmascript","application/javascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"];class d{constructor(t){if(s(this,"external",!1),s(this,"blocking",!1),s(this,"evaluable",!1),this.target=t,!t.hasAttribute("src")&&!t.text)return;const e=t.type?t.type.trim():"text/javascript";if(u.includes(e))this.type="classic";else{if("module"!==e)return;this.type="module"}if(!t.noModule||"classic"!==this.type){if(t.hasAttribute("src")){const e=t.getAttribute("src");if(!e)return;this.external=!0;try{new URL(e,document.URL)}catch{return}}this.blocking=!0,("classic"!==this.type||this.external&&(t.hasAttribute("async")||t.hasAttribute("defer")))&&(this.blocking=!1),this.evaluable=!0}}eval(){return new Promise(((t,e)=>{const r=this.target,o=document.createElement("script");o.addEventListener("error",e),r.getAttributeNames().forEach((t=>{o.setAttribute(t,r.getAttribute(t)||"")})),o.text=r.text,this.external&&(o.hasAttribute("async")||(o.async=!1),o.defer=!1),document.contains(r)?r.replaceWith(o):(document.head.append(o),this.external?o.addEventListener("load",(()=>o.remove())):o.remove()),this.external?o.addEventListener("load",(()=>t())):t()}))}}class w{constructor(t){this.signal=t}async exec(t){var e;if(null!==(e=this.signal)&&void 0!==e&&e.aborted)throw new DOMException("Execution aborted","AbortError");const r=t.eval().catch((()=>{}));t.blocking&&await r}}async function p(t,e={}){const r={...this.options,...e};if(t){var o;if(t.focusCleared){const t=document.querySelectorAll("[autofocus]")[0];(t instanceof HTMLElement||t instanceof SVGElement)&&t.focus()}const e=[];r.scripts&&document.querySelectorAll(r.scripts).forEach((t=>{t instanceof HTMLScriptElement&&e.push(t)})),r.selectors.forEach((t=>{document.querySelectorAll(t).forEach((t=>{t instanceof HTMLScriptElement?e.push(t):t.querySelectorAll("script").forEach((t=>{e.includes(t)||e.push(t)}))}))})),e.sort(((t,e)=>t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING||-1)),await async function(t,{signal:e=null}={}){if(null!=e&&e.aborted)throw new DOMException("Aborted execution","AbortError");const r=Array.from(t,(t=>new d(t))).filter((t=>t.evaluable)),o=new w(e),i=r.reduce(((t,e)=>e.external?Promise.all([t,o.exec(e)]):t.then((()=>o.exec(e)))),Promise.resolve());await Promise.race([i,new Promise(((t,r)=>{null==e||e.addEventListener("abort",(()=>{r(new DOMException("Aborted execution","AbortError"))}))}))])}(e,{signal:null===(o=this.abortController)||void 0===o?void 0:o.signal})}const{scrollTo:i}=r;if(!1!==i){let e=!!t&&[0,0];if(Array.isArray(i))e=i;else if("number"==typeof i)e=[window.scrollX,i];else{const t=decodeURIComponent(window.location.hash.slice(1));if(t){const r=document.getElementById(t)||document.getElementsByName(t)[0];r&&(r.scrollIntoView(),e=!1)}}e&&window.scrollTo(e[0],e[1])}}async function f(t,e={}){var r;this.storeHistory();const o=new AbortController;null===(r=this.abortController)||void 0===r||r.abort(),this.abortController=o;let i=!0;if("string"==typeof t){const r=new URL(t);r.pathname+r.search===this.location.pathname+this.location.search&&(window.location.hash!==r.hash&&window.history.pushState(null,"",r.href),await this.preparePage(null,e),i=!1)}i&&await this.switchDOM(t,e),this.history.pull(),this.location.href=window.location.href,this.abortController=null}class m{static reload(){window.location.reload()}constructor(t={}){s(this,"options",{defaultTrigger:!0,selectors:["title",".pjax"],switches:{abc:a.default},scripts:"script[data-pjax]",scrollTo:!0,scrollRestoration:!0,cache:"default",timeout:0}),s(this,"history",new class{constructor(t){this.key=t,this.pull()}pull(){const t=window.history.state,e=null==t?void 0:t[this.key];if(void 0!==e&&this.index===e)return;const r=window.sessionStorage.getItem(this.key),o=r?JSON.parse(r):[];o[this.index]=this.state,window.sessionStorage.setItem(this.key,JSON.stringify(o)),void 0===e?(this.index=o.length,this.state=null,window.history.replaceState({...t,[this.key]:this.index},document.title)):(this.index=e,this.state=r?o[e]:null)}}("pjax")),s(this,"location",new URL(window.location.href)),s(this,"abortController",null),s(this,"switchDOM",h),s(this,"preparePage",p),s(this,"weakLoad",f),Object.assign(this.options,t),this.options.scrollRestoration&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(()=>{window.history.scrollRestoration="auto"}))),this.options.defaultTrigger&&new l(this).register(),window.addEventListener("popstate",(t=>{if(this.storeHistory(),this.history.pull(),null===t.state)return;const e={};this.options.scrollRestoration&&this.history.state&&(e.scrollTo=this.history.state.scrollPos),this.load(window.location.href,e).catch((()=>{}))}))}storeHistory(){this.history.state={scrollPos:[window.scrollX,window.scrollY]}}fire(t,e){const r=new CustomEvent(`pjax:${t}`,{bubbles:!0,cancelable:!1,detail:{abortController:this.abortController,...e}});document.dispatchEvent(r)}async load(t,e={}){try{await this.weakLoad(t,e)}catch(e){if(e instanceof DOMException&&"AbortError"===e.name)throw e;window.location.assign("string"==typeof t?t:t.url)}}}s(m,"switches",a);const b=m;var g=i.Z}}]);
//# sourceMappingURL=48.js.map