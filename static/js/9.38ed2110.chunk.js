(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[9,73],{107:function(t,e,i){"use strict";i.r(e),i.d(e,"bds_select_chips",(function(){return a}));var s=i(7),n=i(53),r=function(t,e,i,s){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{a(s.next(t))}catch(e){r(e)}}function c(t){try{a(s.throw(t))}catch(e){r(e)}}function a(t){t.done?i(t.value):n(t.value).then(o,c)}a((s=s.apply(t,e||[])).next())}))},o=function(t,e){var i,s,n,r,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return a([t,e])}}function a(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,s&&(n=2&r[0]?s.return:r[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,r[1])).done)return n;switch(s=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,s=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){o.label=r[1];break}if(6===r[0]&&o.label<n[1]){o.label=n[1],n=r;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(r);break}n[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(c){r=[6,c],s=0}finally{i=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},c=function(t,e,i){if(i||2===arguments.length)for(var s,n=0,r=e.length;n<r;n++)!s&&n in e||(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))},a=function(){function t(t){var e=this;Object(s.r)(this,t),this.bdsChange=Object(s.c)(this,"bdsChange",7),this.bdsCancel=Object(s.c)(this,"bdsCancel",7),this.bdsFocus=Object(s.c)(this,"bdsFocus",7),this.bdsBlur=Object(s.c)(this,"bdsBlur",7),this.bdsChangeChips=Object(s.c)(this,"bdsChangeChips",7),this.bdsSelectChipsInput=Object(s.c)(this,"bdsSelectChipsInput",7),this.bdsSubmit=Object(s.c)(this,"bdsSubmit",7),this.isOpen=!1,this.validationDanger=!1,this.isPressed=!1,this.validationMesage="",this.internalChips=[],this.options=[],this.chips=[],this.newPrefix="",this.value="",this.danger=!1,this.errorMessage="",this.disabled=!1,this.label="",this.icon="",this.duplicated=!1,this.canAddNew=!0,this.notFoundMessage="No results found",this.type="text",this.delimiters=/,|;/,this.disableSubmit=!1,this.helperMessage="",this.inputName="",this.placeholder="",this.dataTest=null,this.handleChangeChipsValue=function(){return r(e,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.resetFilterOptions()];case 1:return t.sent(),[2]}}))}))},this.toggle=function(){e.disabled||(e.isOpen=!e.isOpen)},this.handler=function(t){return r(e,void 0,void 0,(function(){var e,i;return o(this,(function(s){switch(s.label){case 0:return e=t.detail.value,i=this.getText(e),[4,this.addChip(i)];case 1:return s.sent(),this.toggle(),[2]}}))}))},this.handlerNewOption=function(t){return r(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.addChip(t)];case 1:return e.sent(),this.toggle(),[2]}}))}))},this.getText=function(t){var i=e.childOptions.find((function(e){return e.value===t}));return e.getTextFromOption(i)},this.getTextFromOption=function(t){var i,s;if((null===t||void 0===t?void 0:t.status)||(null===t||void 0===t?void 0:t.bulkOption)){if(e.internalOptions){var n=e.internalOptions.find((function(e){return e.value==t.value}));if(n)return n.label}return t.querySelector("#bds-typo-label-".concat(t.value)).textContent}return(null===t||void 0===t?void 0:t.titleText)?t.titleText:null!==(s=null===(i=null===t||void 0===t?void 0:t.textContent)||void 0===i?void 0:i.trim())&&void 0!==s?s:""},this.setFocusWrapper=function(){e.nativeInput&&e.nativeInput.focus()},this.removeFocusWrapper=function(){e.nativeInput.blur()},this.onClickWrapper=function(){e.onFocus(),e.nativeInput&&e.nativeInput.focus()},this.onFocus=function(){e.bdsFocus.emit(),e.isPressed=!0},this.onInput=function(t){var i=t.target;i&&(e.value=i.value||""),e.bdsSelectChipsInput.emit(t)},this.keyPressWrapper=function(t){switch(t.key){case"Enter":e.setChip(e.value),e.value="";break;case"Backspace":(null===e.value||e.value.length<=0)&&e.internalChips.length&&(e.removeLastChip(),e.bdsChangeChips.emit({data:e.internalChips}))}},this.changedInputValue=function(){return r(e,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return this.value=this.nativeInput.value,this.nativeInput.value?[4,this.filterOptions(this.nativeInput.value)]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.resetFilterOptions()];case 3:t.sent(),t.label=4;case 4:return this.value&&!1===this.isOpen&&(this.isOpen=!0),[2]}}))}))}}return t.prototype.handleWindow=function(t){this.el.contains(t.target)||(this.isOpen=!1)},t.prototype.valueChanged=function(){if(this.chips)if("string"===typeof this.chips)try{this.internalChips=JSON.parse(this.chips)}catch(t){this.internalChips=[]}else this.internalChips=this.chips;else this.internalChips=[]},t.prototype.internalValueChanged=function(){this.handleChangeChipsValue(),this.bdsChangeChips.emit({data:this.internalChips,value:this.getLastChip()})},t.prototype.isValid=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.validateChips()]}))}))},t.prototype.getChips=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.internalChips]}))}))},t.prototype.clear=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.internalChips=[],this.value="",[2]}))}))},t.prototype.add=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){return this.setChip(t),[2]}))}))},t.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.nativeInput.focus(),[2]}))}))},t.prototype.removeFocus=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.nativeInput.blur(),[2]}))}))},t.prototype.componentWillLoad=function(){this.valueChanged()},t.prototype.componentDidLoad=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.resetFilterOptions()];case 1:return t.sent(),[2]}}))}))},t.prototype.connectedCallback=function(){return r(this,void 0,void 0,(function(){var t,e;return o(this,(function(i){for(t=0,e=this.childOptions;t<e.length;t++)e[t].addEventListener("optionSelected",this.handler);return[2]}))}))},Object.defineProperty(t.prototype,"childOptionsEnabled",{get:function(){return Array.from(this.el.querySelectorAll("bds-select-option:not([invisible]):not(#option-add):not(#no-option)"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childOptions",{get:function(){return Array.from(this.el.querySelectorAll("bds-select-option:not(#option-add):not(#no-option)"))},enumerable:!1,configurable:!0}),t.prototype.filterOptions=function(t){return r(this,void 0,void 0,(function(){var e,i,s,n,r,c,a,l;return o(this,(function(o){switch(o.label){case 0:return t?[3,2]:[4,this.resetFilterOptions()];case 1:return o.sent(),[2];case 2:e=0,i=this.childOptions,o.label=3;case 3:return e<i.length?(s=i[e],r=this.existsChip,c=[s.textContent],[4,this.getChips()]):[3,6];case 4:n=r.apply(this,c.concat([o.sent()])),a=s.textContent.toLowerCase(),l=t.toLowerCase(),n&&s.setAttribute("invisible","invisible"),t&&a.includes(l)&&!n&&s.removeAttribute("invisible"),!t||a.includes(l)||n||s.setAttribute("invisible","invisible"),o.label=5;case 5:return e++,[3,3];case 6:return[2]}}))}))},t.prototype.resetFilterOptions=function(){return r(this,void 0,void 0,(function(){var t,e,i,s,n,r,c;return o(this,(function(o){switch(o.label){case 0:e=0,i=this.childOptions,o.label=1;case 1:return e<i.length?(s=i[e],n=null===(t=s.querySelector("bds-typo"))||void 0===t?void 0:t.textContent,r=this.existsChip,c=[n],[4,this.getChips()]):[3,4];case 2:r.apply(this,c.concat([o.sent()]))?s.setAttribute("invisible","invisible"):s.removeAttribute("invisible"),o.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},t.prototype.existsChip=function(t,e){return e.some((function(e){return t===e}))},t.prototype.enableCreateOption=function(){return!(0!==this.childOptionsEnabled.length||!this.nativeInput||!this.nativeInput.value)},t.prototype.addChip=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.setChip(t)];case 1:return e.sent(),this.nativeInput.value="",[2]}}))}))},t.prototype.validateChips=function(){var t=this;return"email"!==this.type||!this.internalChips.some((function(e){return!t.validateChip(e)}))},t.prototype.handleOnBlur=function(){this.bdsBlur.emit(),this.isPressed=!1},t.prototype.getLastChip=function(){return this.internalChips[this.internalChips.length-1]},t.prototype.verifyAndSubstituteDelimiters=function(t){if(1===t.length&&t[0].match(this.delimiters))return"";var e=t.replace(/;/g,",").replace(/\,+|;+/g,",");return e[0].match(this.delimiters)&&(e=e.substring(1)),e},t.prototype.handleChange=function(t){return r(this,void 0,void 0,(function(){var e,i,s=this;return o(this,(function(n){return e=t.detail.value,this.value=e?e.trim():"",0===e.length?[2]:e.match(this.delimiters)?(i=this.verifyAndSubstituteDelimiters(e))?(i.split(this.delimiters).forEach((function(t){s.setChip(t)})),this.clearInputValues(),[2]):(this.clearInputValues(),[2]):[2]}))}))},t.prototype.clearInputValues=function(t){void 0===t&&(t=""),this.nativeInput.value=t,this.value=t},t.prototype.setChip=function(t){if(!this.duplicated&&this.internalChips.some((function(e){return e.toLowerCase()===t.toLowerCase()})))return;Object(n.w)(t)&&(this.internalChips=c(c([],this.internalChips,!0),[t],!1))},t.prototype.validateChip=function(t){var e=t.trim();return"email"!==this.type||!Object(n.e)(e)},t.prototype.removeLastChip=function(){this.internalChips=this.internalChips.slice(0,this.internalChips.length-1)},t.prototype.removeChip=function(t){var e=t.detail.id;this.internalChips=this.internalChips.filter((function(t,i){return i.toString()!==e}))},t.prototype.renderChips=function(){var t=this;return this.internalChips.length?this.internalChips.map((function(e,i){var n=i.toString();return Object(s.h)("bds-chip-clickable",{id:n,key:n,color:"default",close:!t.disabled,onChipClickableClose:function(e){return t.removeChip(e)}},e)})):[]},t.prototype.renderIcon=function(){return this.icon&&Object(s.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},Object(s.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},t.prototype.renderLabel=function(){return this.label&&Object(s.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},Object(s.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},t.prototype.renderMessage=function(){var t=this.danger?"error":"info",e=this.danger?this.errorMessage:this.helperMessage;!e&&this.validationDanger&&(e=this.validationMesage);var i=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(e)return Object(s.h)("div",{class:i,part:"input__message"},Object(s.h)("div",{class:"input__message__icon"},Object(s.h)("bds-icon",{size:"x-small",name:t,theme:"solid",color:"inherit"})),Object(s.h)("bds-typo",{variant:"fs-12"},e))},t.prototype.generateKey=function(t){return t.toLowerCase().replace(/ /g,"-")},t.prototype.render=function(){var t=this,e=this.isOpen?"arrow-up":"arrow-down",i=this.isPressed&&!this.disabled,n=[];if(this.options)if("string"===typeof this.options)try{n=JSON.parse(this.options)}catch(r){}else n=this.options;return Object(s.h)("div",{class:"select",tabindex:"0",onFocus:this.setFocusWrapper,onBlur:this.removeFocusWrapper,onKeyPress:this.keyPressWrapper},Object(s.h)("div",{class:{element_input:!0},"aria-disabled":this.disabled?"true":null,onClick:this.toggle},Object(s.h)("div",{class:{input:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":i},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper},this.renderIcon(),Object(s.h)("div",{class:"input__container"},this.renderLabel(),Object(s.h)("div",{class:{input__container__wrapper:!0}},this.internalChips.length>0&&Object(s.h)("span",{class:"inside-input-left"},this.renderChips()),Object(s.h)("input",{ref:function(e){return t.nativeInput=e},class:{input__container__text:!0},name:this.inputName,maxlength:this.maxlength,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:function(){return t.handleOnBlur()},onChange:function(){return t.handleChange},value:this.value,disabled:this.disabled,"data-test":this.dataTest}))),Object(s.h)("div",{class:"select__icon"},Object(s.h)("bds-icon",{size:"small",name:e,color:"inherit"}))),this.renderMessage()),Object(s.h)("div",{class:{select__options:!0,"select__options--open":this.isOpen}},n.map((function(e){return Object(s.h)("bds-select-option",{key:t.generateKey(e.value),onOptionSelected:t.handler,value:e.value,status:e.status},e.label)})),Object(s.h)("slot",null),this.canAddNew&&this.enableCreateOption()&&Object(s.h)("bds-select-option",{id:"option-add",value:"add",onClick:function(){return t.handlerNewOption(t.nativeInput.value)}},this.newPrefix,this.nativeInput.value),!this.canAddNew&&this.enableCreateOption()&&Object(s.h)("bds-select-option",{id:"no-option",value:"add"},this.notFoundMessage)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(s.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{chips:["valueChanged"],internalChips:["internalValueChanged"]}},enumerable:!1,configurable:!0}),t}();a.style='.sc-bds-select-chips-h{display:block}.element_input.sc-bds-select-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-select-chips input.sc-bds-select-chips{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-select-chips input.sc-bds-select-chips::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-select-chips input.sc-bds-select-chips::-moz-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-select-chips input.sc-bds-select-chips:-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-select-chips input.sc-bds-select-chips::-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-select-chips input.sc-bds-select-chips::placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-select-chips input.sc-bds-select-chips::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.input.sc-bds-select-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary.sc-bds-select-chips{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-select-chips:hover{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-select-chips{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4);box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4)}.input--state-primary.sc-bds-select-chips .input__icon.sc-bds-select-chips{color:#3f7de8;background-color:#e8f2ff}.input--state-primary.sc-bds-select-chips .input__container__label.sc-bds-select-chips{color:#8ca0b3}.input--state-primary.sc-bds-select-chips .input__container__label--pressed.sc-bds-select-chips{color:#3f7de8}.input--state-primary.sc-bds-select-chips .input__container__text.sc-bds-select-chips{caret-color:#3f7de8;color:#202c44}.input--state-danger.sc-bds-select-chips{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-select-chips:hover{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-select-chips{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ffa5a5;box-shadow:0 0 0 2px #ffa5a5}.input--state-danger.sc-bds-select-chips .input__icon.sc-bds-select-chips{color:#ff4c4c;background-color:#ffa5a5}.input--state-danger.sc-bds-select-chips .input__container__label.sc-bds-select-chips{color:#8ca0b3}.input--state-danger.sc-bds-select-chips .input__container__label--pressed.sc-bds-select-chips{color:#ff4c4c}.input--state-danger.sc-bds-select-chips .input__container__text.sc-bds-select-chips{caret-color:#ff4c4c;color:#202c44}.input--state-disabled.sc-bds-select-chips{cursor:not-allowed;border:1px solid #e7edf4;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f3f6fa}.input--state-disabled.sc-bds-select-chips:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #e7edf4;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed.sc-bds-select-chips{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #e7edf4;box-shadow:0 0 0 2px #e7edf4}.input--state-disabled.sc-bds-select-chips .input__icon.sc-bds-select-chips{color:#b9cbd3;background-color:#f8fbfb}.input--state-disabled.sc-bds-select-chips .input__container__label.sc-bds-select-chips{color:#b9cbd3}.input--state-disabled.sc-bds-select-chips .input__container__label--pressed.sc-bds-select-chips{color:#b9cbd3}.input--state-disabled.sc-bds-select-chips .input__container__text.sc-bds-select-chips{caret-color:#b9cbd3;color:#b9cbd3}.input--label.sc-bds-select-chips{padding:7px 4px 8px 12px}.input__icon.sc-bds-select-chips{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-select-chips{padding:4px}.input__container.sc-bds-select-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-select-chips{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-select-chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-select-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-select-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-select-chips{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-select-chips{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-select-chips:focus{outline:0}.input__container__text.sc-bds-select-chips::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-select-chips:focus{outline:0}.input__container__text[type=checkbox].sc-bds-select-chips,.input__container__text[type=radio].sc-bds-select-chips{width:13px;height:13px}.input__container__text[type=search].sc-bds-select-chips{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-select-chips::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-select-chips,.input__container__text[type=button].sc-bds-select-chips,.input__container__text[type=submit].sc-bds-select-chips{overflow:visible}.input__container__text.sc-bds-select-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-select-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-select-chips{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3;word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-select-chips bds-typo.sc-bds-select-chips{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-select-chips{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-select-chips{color:#ff4c4c}.select.sc-bds-select-chips{position:relative;outline:none}.select__icon.sc-bds-select-chips{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__options.sc-bds-select-chips{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options.sc-bds-select-chips::-webkit-scrollbar{width:16px;background-color:transparent}.select__options.sc-bds-select-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open.sc-bds-select-chips{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.select__options--position-top.sc-bds-select-chips{top:auto;bottom:100%;-webkit-transform-origin:bottom left;transform-origin:bottom left}.inside-input-left.sc-bds-select-chips{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip.sc-bds-select-chips{margin:2px 4px 2px 0px}.input-chips__chips.sc-bds-select-chips{-ms-flex:1;flex:1}'},53:function(t,e,i){"use strict";i.r(e),i.d(e,"d",(function(){return p})),i.d(e,"e",(function(){return c})),i.d(e,"m",(function(){return d})),i.d(e,"n",(function(){return a})),i.d(e,"w",(function(){return l}));var s=/^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/,n=/\S/,r=/^[0-9]*$/,o=/^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/,c=function(t){if(t&&!s.test(t))return!0},a=function(t){if(t&&!r.test(t))return!0},l=function(t){return n.test(t)},p=function(t){return o.test(t)},d=function(t){var e=t;return e=(e=(e=e.replace(/\D+/g,"")).replace(/^(\d{2})(\d)/,"$1/$2")).replace(/^(\d{2}\/\d{2})(\d)/,"$1/$2")}}}]);
//# sourceMappingURL=9.38ed2110.chunk.js.map