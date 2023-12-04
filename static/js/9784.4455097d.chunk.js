/*! For license information please see 9784.4455097d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[9784],{19784:(e,n,t)=>{t.r(n),t.d(n,{CalciteDropdownItem:()=>m,defineCustomElement:()=>p});var i=t(51554),o=t(92358),r=t(60611),c=t(47242),a=t(64044),l=t(57601);const s=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownItemSelect=(0,i.yM)(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=(0,i.yM)(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=(0,i.yM)(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=(0,i.yM)(this,"calciteInternalDropdownCloseRequest",6),this.selected=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.href=void 0,this.label=void 0,this.rel=void 0,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){var e;await(0,c.c)(this),null===(e=this.el)||void 0===e||e.focus()}componentWillLoad(){(0,c.a)(this),this.initialize()}componentDidLoad(){(0,c.s)(this)}connectedCallback(){this.initialize()}render(){const{href:e,selectionMode:n,label:t,iconFlipRtl:c,scale:l}=this,s=(0,i.h)("calcite-icon",{class:r.C.iconStart,flipRtl:"start"===c||"both"===c,icon:this.iconStart,scale:(0,a.g)(this.scale)}),d=(0,i.h)("span",{class:r.C.itemContent},(0,i.h)("slot",null)),m=(0,i.h)("calcite-icon",{class:r.C.iconEnd,flipRtl:"end"===c||"both"===c,icon:this.iconEnd,scale:(0,a.g)(this.scale)}),p=this.iconStart&&this.iconEnd?[s,d,m]:this.iconStart?[s,d]:this.iconEnd?[d,m]:d,h=e?(0,i.h)("a",{"aria-label":t,class:r.C.link,href:e,rel:this.rel,tabIndex:-1,target:this.target,ref:e=>this.childLink=e},p):p,u=e?null:"single"===n?"menuitemradio":"multiple"===n?"menuitemcheckbox":"menuitem",g="none"!==n?(0,o.t)(this.selected):null;return(0,i.h)(i.AA,{"aria-checked":g,"aria-label":e?"":t,role:u,tabindex:"0"},(0,i.h)("div",{class:{[r.C.container]:!0,[r.C.containerLink]:!!e,["".concat(r.C.container,"--").concat(l)]:!0,[r.C.containerMulti]:"multiple"===n,[r.C.containerSingle]:"single"===n,[r.C.containerNone]:"none"===n}},"none"!==n?(0,i.h)("calcite-icon",{class:r.C.icon,icon:"multiple"===n?"check":"bullet-point",scale:(0,a.g)(this.scale)}):null,h))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e})}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return this}static get style(){return".container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .container:not(.container--none-selection):before,:host([selected]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-dropdown-item",{selected:[1540],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],href:[513],label:[1],rel:[513],target:[513],selectionMode:[1,"selection-mode"],scale:[1],setFocus:[64]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"],[16,"calciteInternalDropdownItemChange","updateActiveItemOnChange"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-dropdown-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-dropdown-item":customElements.get(e)||customElements.define(e,s);break;case"calcite-icon":customElements.get(e)||(0,l.d)()}}))}d();const m=s,p=d},60611:(e,n,t)=>{t.d(n,{C:()=>i});const i={container:"container",containerLink:"container--link",containerMulti:"container--multi-selection",containerSingle:"container--single-selection",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon-end",iconStart:"dropdown-item-icon-start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);
//# sourceMappingURL=9784.4455097d.chunk.js.map