(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[10],{57:function(t,n,e){"use strict";e.r(n),e.d(n,"bds_accordion_body",(function(){return c}));var o=e(7),r=function(t,n,e,o){function r(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,i){function c(t){try{s(o.next(t))}catch(n){i(n)}}function a(t){try{s(o.throw(t))}catch(n){i(n)}}function s(t){t.done?e(t.value):r(t.value).then(c,a)}s((o=o.apply(t,n||[])).next())}))},i=function(t,n){var e,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(n){return s([t,n])}}function s(i){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(a){i=[6,a],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},c=function(){function t(t){var n=this;Object(o.r)(this,t),this.container=null,this.isOpen=!1,this.numberElement=null,this.refContainer=function(t){n.container=t}}return t.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.isOpen=!this.isOpen,[2]}))}))},t.prototype.close=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.isOpen=!1,[2]}))}))},t.prototype.isOpenChanged=function(){this.heightContainer=this.isOpen?this.container.offsetHeight:0},t.prototype.render=function(){var t=this;return Object(o.h)("div",{class:"accordion_body",style:{height:"".concat(this.heightContainer,"px")}},Object(o.h)("div",{class:"container",ref:function(n){return t.refContainer(n)}},Object(o.h)("slot",null)))},Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:!1,configurable:!0}),t}();c.style='.accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:#202c44;cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:#f3f6fa;mix-blend-mode:multiply}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:#c226fb}.accordion_header .accButton:hover{background-color:#f2f2f2}.accordion_header .accButton:active{background-color:#e6e6e6}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid #b9cbd3;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:8px 24px 48px;position:relative;color:#202c44}'}}]);
//# sourceMappingURL=10.cbca78fd.chunk.js.map