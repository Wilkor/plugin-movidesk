(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[30],{77:function(e,i,t){"use strict";t.r(i),t.d(i,"bds_chip",(function(){return c}));var s=t(7),c=function(){function e(e){Object(s.r)(this,e),this.bdsDelete=Object(s.c)(this,"bdsDelete",7),this.size="standard",this.variant="default",this.danger=!1,this.filter=!1,this.clickable=!1,this.deletable=!1,this.disabled=!1}return e.prototype.handleClickDelete=function(e){this.deletable&&!this.disabled&&(e.preventDefault(),this.bdsDelete.emit({id:this.element.id}))},e.prototype.getClickClass=function(){return this.clickable?{"chip--click":!0}:{}},e.prototype.getSizeClass=function(){return"standard"===this.size?{"chip--standard":!0}:{"chip--tall":!0}},e.prototype.getStateClass=function(){return this.disabled?{"chip--default":!0}:this.danger?{"chip--danger":!0}:this.filter?{"chip--filter":!0}:"primary"===this.variant?{"chip--primary":!0}:"watermelon"===this.variant?{"chip--watermelon":!0}:{"chip--default":!0}},e.prototype.render=function(){return Object(s.h)(s.H,{class:Object.assign(Object.assign(Object.assign({chip:!0},this.getClickClass()),this.getStateClass()),this.getSizeClass())},this.icon&&Object(s.h)("div",{class:"chip__icon"},Object(s.h)("bds-icon",{size:"x-small",name:this.icon})),Object(s.h)("slot",null),this.deletable&&Object(s.h)("div",{class:"chip__delete",onClick:this.handleClickDelete.bind(this)},Object(s.h)("bds-icon",{size:"x-small",theme:"solid",name:"error"})))},Object.defineProperty(e.prototype,"element",{get:function(){return Object(s.g)(this)},enumerable:!1,configurable:!0}),e}();c.style=':host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:pointer;white-space:nowrap;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-weight:600}:host(.chip){border-radius:8px;padding:3px 8px}:host(.chip--primary){background:#e8f2ff;color:#3f7de8}:host(.chip--click.chip--primary:hover){background:#d1e3fa;color:#125ad5}:host(.chip--watermelon){background:#fb5a8b;color:#ffffff}:host(.chip--default){background:#f8fbfb;color:#8ca0b3}:host(.chip--danger){background:#ffa5a5;color:#ff4c4c}:host(.chip--click.chip--danger:hover){background:#fccccc;color:#6a2026}:host(.chip--filter){background:#125ad5;color:#ffffff}:host(.chip--click.chip--filter:hover){background:#0747a6;color:#ffffff}:host(.chip--standard){height:24px;font-size:0.75rem}:host(.chip--tall){height:32px;font-size:0.875rem}.chip__delete{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:6px;cursor:pointer}.chip__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-right:4px}'}}]);
//# sourceMappingURL=30.5faf1e0c.chunk.js.map