"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[9626],{89626:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>O});var o=n(51995),r=n(76200),l=n(77427),u=n(16889),s=n(22753),a=n(11873),i=n(71353),c=n(67077),f=n(64995),d=n(53942),m=n(79694),p=n(50565),v=n(27474),x=n(25158),g=n(32035),y=n(19093),T=n(48734);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,u=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=n?n.count:t.count;let c=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*u,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*a;for(let d=0;d<i;++d){for(let e=0;e<9;++e)l[c+e]=s[f+e];c+=u,f+=a}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,u=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=n?n.count:t.count;let c=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*u,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*a;for(let d=0;d<i;++d){for(let e=0;e<16;++e)l[c+e]=s[f+e];c+=u,f+=a}}},Symbol.toStringTag,{value:"Module"}));n(53801);var b=n(19131),w=n(92770),h=n(69618);function B(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,T.n1)(e.ElementType)))}var C=n(57898),A=n(27053),S=n(57516),E=n(32315),M=n(57661),_=n(68845),R=n(8548);async function O(e,t,n){var l;const s={...n,useTransform:null===(l=null===n||void 0===n?void 0:n.useTransform)||void 0===l||l},a=new A.C(function(e){const t=null===e||void 0===e?void 0:e.resolveFile,n=null===e||void 0===e?void 0:e.requestFile;return t||n?{busy:!1,request:async(e,o,l)=>{var u;const s=null!==(u=null===t||void 0===t?void 0:t(e))&&void 0!==u?u:e;if(n){const e=await n(s,o,null===l||void 0===l?void 0:l.signal);if(void 0!==e)return e}const a="image"===o?"image":"binary"===o?"array-buffer":"json";return(await(0,r.Z)(s,{responseType:a,signal:null!=l?l.signal:null})).data}}:null}(s)),f=(await(0,S.Q)(a,t,s,!0)).model,x=f.lods.shift(),g=new Map,y=new Map;f.textures.forEach(((e,t)=>g.set(t,function(e){return new m.Z({data:((0,M.$A)(e.data),e.data),wrap:j(e.parameters.wrap)})}(e)))),f.materials.forEach(((e,t)=>y.set(t,function(e,t){const n=new o.Z(function(e,t){return(0,c.f)(L(e[0]),L(e[1]),L(e[2]),t)}(e.color,e.opacity)),r=e.emissiveFactor?new o.Z(function(e){return(0,i.f)(L(e[0]),L(e[1]),L(e[2]))}(e.emissiveFactor)):null,l=e=>{var t;return e?new p.Z({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,u.BV)(null!==(t=e.rotation)&&void 0!==t?t:0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null};return new d.Z({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:r,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Z(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:l(e.colorTextureTransform),normalTextureTransform:l(e.normalTextureTransform),occlusionTextureTransform:l(e.occlusionTextureTransform),emissiveTextureTransform:l(e.emissiveTextureTransform),metallicRoughnessTextureTransform:l(e.metallicRoughnessTextureTransform)})}(e,g))));const T=F(x);for(const o of T.parts)P(T,o,y);const{position:b,normal:w,tangent:h,color:B,texCoord0:E}=T.vertexAttributes,_={position:b.typedBuffer,normal:null!=w?w.typedBuffer:null,tangent:null!=h?h.typedBuffer:null,uv:null!=E?E.typedBuffer:null,color:null!=B?B.typedBuffer:null},R=(0,C.w1)(_,e,s);return{transform:R.transform,vertexSpace:R.vertexSpace,components:T.components,spatialReference:e.spatialReference,vertexAttributes:new v.Q({position:R.vertexAttributes.position,normal:R.vertexAttributes.normal,tangent:R.vertexAttributes.tangent,color:_.color,uv:_.uv})}}function I(e,t){if(null==e)return"-";const n=e.typedBuffer;return"".concat((0,l.s1)(t,n.buffer,(()=>t.size)),"/").concat(n.byteOffset,"/").concat(n.byteLength)}function k(e){return null!=e?e.toString():"-"}function F(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,r=new Map,u=[];for(const s of e.parts){const{attributes:{position:e,normal:a,color:i,tangent:c,texCoord0:f}}=s,d="\n      ".concat(I(e,o),"/\n      ").concat(I(a,o),"/\n      ").concat(I(i,o),"/\n      ").concat(I(c,o),"/\n      ").concat(I(f,o),"/\n      ").concat(k(s.transform),"\n    ");let m=!1;const p=(0,l.s1)(r,d,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),a&&(n.normal=!0),i&&(n.color=!0),c&&(n.tangent=!0),f&&(n.texCoord0=!0),u.push({gltf:s,writeVertices:m,region:p})}return{vertexAttributes:{position:B(x.fP,t),normal:n.normal?B(x.ct,t):null,tangent:n.tangent?B(x.ek,t):null,color:n.color?B(x.mc,t):null,texCoord0:n.texCoord0?B(x.Eu,t):null},parts:u,components:[]}}function P(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:o,tangent:r,color:l,texCoord0:i}=e.vertexAttributes,c=t.region.start,{attributes:f,transform:d}=t.gltf,m=f.position.count;if((0,g.c)(n.slice(c,m),f.position,d),null!=f.normal&&null!=o){const e=(0,s.n)((0,a.a)(),d),t=o.slice(c,m);(0,g.b)(t,f.normal,e),(0,u.oc)(e)&&(0,g.d)(t,t)}else null!=o&&(0,w.f)(o,0,0,1,{dstIndex:c,count:m});if(null!=f.tangent&&null!=r){const e=(0,s.n)((0,a.a)(),d),t=r.slice(c,m);(0,y.a)(t,f.tangent,e),(0,u.oc)(e)&&(0,y.n)(t,t)}else null!=r&&(0,h.f)(r,0,0,1,1,{dstIndex:c,count:m});if(null!=f.texCoord0&&null!=i?(0,b.a)(i.slice(c,m),f.texCoord0):null!=i&&(0,b.f)(i,0,0,{dstIndex:c,count:m}),null!=f.color&&null!=l){const e=f.color,t=l.slice(c,m);if(4===e.elementCount)e instanceof x.ek?(0,y.b)(t,e,255):e instanceof x.mc?(0,h.a)(t,e):e instanceof x.v6&&(0,y.b)(t,e,1/256);else{(0,h.f)(t,255,255,255,255);const n=x.ne.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof x.ct?(0,g.e)(n,e,255):e instanceof x.ne?(0,w.a)(n,e):e instanceof x.mw&&(0,g.e)(n,e,1/256)}}else null!=l&&(0,h.f)(l.slice(c,m),255,255,255,255)}(e,t);const{indices:o,attributes:r,primitiveType:l,material:i}=t.gltf;let c=(0,E.p)(o||r.position.count,l);const d=t.region.start;if(d){const e=new Uint32Array(c);for(let t=0;t<c.length;t++)e[t]+=d;c=e}e.components.push(new f.Z({name:t.gltf.name,faces:c,material:n.get(i),shading:r.normal?"source":"flat",trustSourceNormals:!0}))}function Z(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function j(e){return{horizontal:z(e.s),vertical:z(e.t)}}function z(e){switch(e){case R.e8.CLAMP_TO_EDGE:return"clamp";case R.e8.MIRRORED_REPEAT:return"mirror";case R.e8.REPEAT:return"repeat"}}function L(e){return e**(1/_.j)*255}}}]);
//# sourceMappingURL=9626.f0c619dc.chunk.js.map