/*! For license information please see 9992.66650c89.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[9992],{89992:(e,t,o)=>{o.r(t),o.d(t,{CalciteDropdownGroup:()=>a,defineCustomElement:()=>c});var n=o(51554),i=o(72021),r=o(60611);const s=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDropdownItemChange=(0,n.yM)(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e=>e.selectionMode=this.selectionMode))},this.mutationObserver=(0,i.c)("mutation",(()=>this.updateItems())),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){var e;this.updateItems(),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){const e=this.groupTitle?(0,n.h)("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,t=this.groupPosition>0?(0,n.h)("div",{class:"dropdown-separator",role:"separator"}):null;return(0,n.h)(n.AA,{"aria-label":this.groupTitle,role:"group"},(0,n.h)("div",{class:{[r.C.container]:!0,["".concat(r.C.container,"--").concat(this.scale)]:!0}},t,e,(0,n.h)("slot",null)))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{selectionMode:["handlePropsChange"]}}static get style(){return":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-dropdown-group",{groupTitle:[513,"group-title"],scale:[1],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalDropdownItemSelect","updateActiveItemOnChange"]]]);function l(){if("undefined"===typeof customElements)return;["calcite-dropdown-group"].forEach((e=>{if("calcite-dropdown-group"===e)customElements.get(e)||customElements.define(e,s)}))}l();const a=s,c=l},60611:(e,t,o)=>{o.d(t,{C:()=>n});const n={container:"container",containerLink:"container--link",containerMulti:"container--multi-selection",containerSingle:"container--single-selection",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon-end",iconStart:"dropdown-item-icon-start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);
//# sourceMappingURL=9992.66650c89.chunk.js.map