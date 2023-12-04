/*! For license information please see 3159.c98105d0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[3159],{3159:(e,t,i)=>{i.r(t),i.d(t,{CalciteStepper:()=>P,defineCustomElement:()=>x});var s=i(51554),n=i(92358),a=i(72021),r=i(14387),l=i(46895),c=i(52655),o=i(65138),p=i(57601),h=i(91438);const d="step-bar",m="step-bar--active",u="step-bar--complete",g="step-bar--disabled",b="step-bar--error",v="step-bar--inactive",f=e=>{let{disabled:t,active:i,complete:n,error:a,key:r}=e;return(0,s.h)("svg",{class:{[d]:!0},key:r},(0,s.h)("rect",{class:{[m]:i,[u]:n,[g]:t,[b]:a,[v]:!0},width:"100%",x:"0",y:"0"}))},S={s:120,m:180,l:200},y="action-icon",I="action-container",C="step-bar-container",A="single-view",w=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteStepperItemChange=(0,s.yM)(this,"calciteStepperItemChange",6),this.calciteInternalStepperItemChange=(0,s.yM)(this,"calciteInternalStepperItemChange",6),this.enabledItems=[],this.itemMap=new Map,this.items=[],this.mutationObserver=(0,a.c)("mutation",(()=>this.updateItems())),this.multipleViewMode=!1,this.guid="calcite-stepper-action-".concat((0,r.g)()),this.resizeObserver=(0,a.c)("resize",(e=>this.elWidth=e[0].contentRect.width)),this.handleActionClick=e=>{const t=this.currentActivePosition;"start"===e.target.getAttribute("data-position")?this.prevStep():this.nextStep(),this.currentActivePosition&&t!==this.currentActivePosition&&!this.items[this.currentActivePosition].disabled&&this.calciteStepperItemChange.emit()},this.setContainerEl=e=>{this.containerEl=e},this.handleDefaultSlotChange=e=>{const t=(0,n.s)(e).filter((e=>"CALCITE-STEPPER-ITEM"===(null===e||void 0===e?void 0:e.tagName)));this.items=t,this.setGridTemplateColumns(t),this.setStepperItemNumberingSystem()},this.icon=!1,this.layout="horizontal",this.numbered=!1,this.scale="m",this.messages=void 0,this.numberingSystem=void 0,this.selectedItem=null,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.currentActivePosition=void 0,this.elWidth=void 0}handleItemPropChange(){this.updateItems()}numberingSystemChange(){this.setStepperItemNumberingSystem()}onMessagesChange(){}connectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.updateItems(),(0,c.c)(this),(0,l.c)(this)}async componentWillLoad(){await(0,c.s)(this)}componentDidLoad(){var e;if(null===(e=this.resizeObserver)||void 0===e||e.observe(this.containerEl),"number"!==typeof this.currentActivePosition){const e=this.getFirstEnabledStepperPosition();0===e&&(this.currentActivePosition=e),this.calciteInternalStepperItemChange.emit({position:e})}}disconnectedCallback(){var e,t;null===(e=this.resizeObserver)||void 0===e||e.disconnect(),(0,c.d)(this),(0,l.d)(this),null===(t=this.mutationObserver)||void 0===t||t.disconnect()}render(){return(0,s.h)(s.AA,{"aria-label":this.messages.label,role:"region"},(0,s.h)("div",{class:{container:!0,[A]:!this.multipleViewMode},ref:this.setContainerEl},!this.multipleViewMode&&"horizontal"===this.layout&&(0,s.h)("div",{class:{[C]:!0}},this.items.map(((e,t)=>(0,s.h)(f,{active:t===this.currentActivePosition,complete:e.complete&&t!==this.currentActivePosition&&!e.error,disabled:e.disabled&&t!==this.currentActivePosition,error:e.error&&t!==this.currentActivePosition,key:t})))),(0,s.h)("div",{class:{[I]:!0}},this.renderAction("start"),this.renderAction("end")),(0,s.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}calciteInternalStepperItemKeyEvent(e){const t=e.detail.item,i=e.target;switch(t.key){case"ArrowDown":case"ArrowRight":(0,n.i)(this.enabledItems,i,"next");break;case"ArrowUp":case"ArrowLeft":(0,n.i)(this.enabledItems,i,"previous");break;case"Home":(0,n.i)(this.enabledItems,i,"first");break;case"End":(0,n.i)(this.enabledItems,i,"last")}e.stopPropagation()}registerItem(e){const t=e.target,{content:i,position:s}=e.detail;this.itemMap.set(t,{position:s,content:i}),this.enabledItems=this.filterItems(),e.stopPropagation()}updateItem(e){const{position:t}=e.detail;"number"===typeof t&&(this.currentActivePosition=t,this.selectedItem=e.target),this.calciteInternalStepperItemChange.emit({position:t})}handleUserRequestedStepperItemSelect(){this.calciteStepperItemChange.emit()}async nextStep(){const e=this.getEnabledStepIndex(this.currentActivePosition+1,"next");"number"===typeof e&&this.updateStep(e)}async prevStep(){const e=this.getEnabledStepIndex(this.currentActivePosition-1,"previous");"number"===typeof e&&this.updateStep(e)}async goToStep(e){const t=e-1;this.currentActivePosition!==t&&this.updateStep(t)}async startStep(){const e=this.getEnabledStepIndex(0,"next");"number"===typeof e&&this.updateStep(e)}async endStep(){const e=this.getEnabledStepIndex(this.items.length-1,"previous");"number"===typeof e&&this.updateStep(e)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}handlePositionChange(){(0,s.wj)((()=>{this.determineActiveStepper(!0)}))}handleElWidthChange(){(0,s.wj)((()=>{this.determineActiveStepper()}))}updateItems(){this.el.querySelectorAll("calcite-stepper-item").forEach((e=>{e.icon=this.icon,e.numbered=this.numbered,e.layout=this.layout,e.scale=this.scale}))}determineActiveStepper(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.items.length;if(!this.elWidth||!t||"horizontal"!==this.layout||1===t)return;const i=this.currentActivePosition||0,s=t*this.getMinWidthOfStepperItem(),n=(t-1)*(parseInt(window.getComputedStyle(this.containerEl).rowGap)||0);if(this.elWidth<=s+n)this.multipleViewMode=!1,this.items.forEach(((e,t)=>{t!==i?e.hidden=!0:(e.hidden=!1,e.multipleViewMode=!1)}));else if(this.elWidth>s+n){if(this.multipleViewMode&&!e)return;this.multipleViewMode=!0,this.setGridTemplateColumns(this.items),this.items.forEach((e=>{e.hidden=!1,e.multipleViewMode=!0}))}}getEnabledStepIndex(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"next";const{items:i,currentActivePosition:s}=this;let n=e;for(;null!==(a=i[n])&&void 0!==a&&a.disabled&&this.multipleViewMode;){var a;n+="previous"===t?-1:1}return n!==s&&n<i.length&&n>=0?n:null}updateStep(e){this.currentActivePosition=e,this.calciteInternalStepperItemChange.emit({position:e})}filterItems(){return this.items.filter((e=>!e.disabled))}setStepperItemNumberingSystem(){this.items.forEach((e=>{e.numberingSystem=this.numberingSystem}))}renderAction(e){const t="start"===e,i=t?"chevron-left":"chevron-right",{currentActivePosition:n,multipleViewMode:a,layout:r}=this,l=this.items.length,c="".concat(this.guid,"-").concat(t?"start":"end");return"horizontal"!==r||a?null:(0,s.h)("calcite-action",{alignment:"center",appearance:"transparent",class:{[y]:!0},compact:!0,"data-position":e,disabled:0===n&&t||n===l-1&&!t,icon:i,iconFlipRtl:!0,id:c,onClick:this.handleActionClick,scale:this.scale,text:t?this.messages.previousStep:this.messages.nextStep})}getFirstEnabledStepperPosition(){const e=this.items.findIndex((e=>!e.disabled));return e>-1?e:0}setGridTemplateColumns(e){const t=this.getMinWidthOfStepperItem(),i=Array(e.length).fill("minmax(".concat(t,"px, 1fr)")).join(" ");this.containerEl.style.gridTemplateAreas=i,this.containerEl.style.gridTemplateColumns=i}getMinWidthOfStepperItem(){return S[this.scale]}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["handleItemPropChange"],layout:["handleItemPropChange"],numbered:["handleItemPropChange"],scale:["handleItemPropChange"],numberingSystem:["numberingSystemChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],currentActivePosition:["handlePositionChange"],elWidth:["handleElWidthChange"]}}static get style(){return':host([scale=s]){--calcite-internal-stepper-item-spacing-unit-s:0.25rem;--calcite-internal-stepper-action-block-size:2.75rem;--calcite-internal-stepper-action-inline-size:2rem;--calcite-internal-step-bar-gap:0.25rem}:host([scale=m]){--calcite-internal-stepper-item-spacing-unit-s:0.5rem;--calcite-internal-stepper-action-block-size:3.25rem;--calcite-internal-stepper-action-inline-size:2.5rem}:host([scale=l]){--calcite-internal-stepper-item-spacing-unit-s:0.75rem;--calcite-internal-stepper-action-block-size:4rem;--calcite-internal-stepper-action-inline-size:3rem;--calcite-internal-step-bar-gap:0.75rem}:host{display:flex}.container{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]) .container{flex:1 1 auto;flex-direction:column}:host([layout=horizontal]) .container{display:grid;grid-template-areas:"items" "content";gap:0.5rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=s]) .container{gap:0.25rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=l]) .container{gap:0.75rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal]) .container.single-view{display:flex;grid-template-columns:none}.action-icon{position:relative;display:flex;flex-grow:0;block-size:var(--calcite-internal-stepper-action-block-size);inline-size:var(--calcite-internal-stepper-action-inline-size)}.action-container{position:absolute;display:flex;justify-content:space-between;padding-block:0.25rem;inline-size:100%}.step-bar{display:flex;block-size:100%;inline-size:100%}.step-bar-container{position:absolute;display:flex;align-items:flex-start;justify-content:space-between;block-size:0.125rem;inline-size:100%;gap:var(--calcite-internal-step-bar-gap, 0.5rem)}.step-bar--inactive{fill:var(--light-ui-border-3, #dfdfdf);fill-opacity:1;block-size:100%}.step-bar--active{fill:var(--calcite-ui-brand)}.step-bar--complete{fill:var(--calcite-ui-brand);fill-opacity:0.5}.step-bar--error{fill:var(--calcite-ui-danger)}.step-bar--disabled{opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-stepper",{icon:[516],layout:[513],numbered:[516],scale:[513],messages:[1040],numberingSystem:[513,"numbering-system"],selectedItem:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],currentActivePosition:[32],elWidth:[32],nextStep:[64],prevStep:[64],goToStep:[64],startStep:[64],endStep:[64]},[[0,"calciteInternalStepperItemKeyEvent","calciteInternalStepperItemKeyEvent"],[0,"calciteInternalStepperItemRegister","registerItem"],[0,"calciteInternalStepperItemSelect","updateItem"],[0,"calciteInternalUserRequestedStepperItemSelect","handleUserRequestedStepperItemSelect"]]]);function E(){if("undefined"===typeof customElements)return;["calcite-stepper","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-stepper":customElements.get(e)||customElements.define(e,w);break;case"calcite-action":customElements.get(e)||(0,o.d)();break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,h.d)()}}))}E();const P=w,x=E}}]);
//# sourceMappingURL=3159.c98105d0.chunk.js.map