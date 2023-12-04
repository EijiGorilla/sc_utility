"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[319],{50319:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var s=n(27366),o=n(66978),i=(n(32718),n(25243),n(63780),n(93169),n(10064),n(69912)),d=n(11186),c=n(71353),r=n(85981),a=n(23470),u=n(78329),h=n(79762);function g(t,e,n){const s=(0,a.c)(),o=(0,a.g)(s);return(0,d.q)(o,o,t,.5),(0,d.q)(o,o,e,.5),s[3]=(0,d.o)(o,t),(0,d.g)(o,o,n),s}let p=class{constructor(){this._idToComponent=new Map,this._components=new u.Z((t=>t.bounds)),this._edges=new u.Z((t=>t.bounds)),this._tmpLineSegment=(0,r.Ue)(),this._tmpP1=(0,c.c)(),this._tmpP2=(0,c.c)(),this._tmpP3=(0,c.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,o.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:s}=t;n.push({id:e,uid:s})}return!0}),t.bounds),!n.length)return;const s={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",s,null!==e&&void 0!==e?e:{});for(const i of o.components)this._setFetchEdgeLocations(i)}async add(t){const e=new l(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=h.n_.createView(t.locations),s=new Array(n.count),o=(0,c.c)(),i=(0,c.c)();for(let c=0;c<n.count;c++){n.position0.getVec(c,o),n.position1.getVec(c,i);const d=g(o,i,t.origin),r=new m(e,c,d);s[c]=r}this._edges.add(s);const{objectIds:d,origin:r}=t;e.info={locations:n,objectIds:d,origin:r}}_addCandidates(t,e,n){const{info:s}=e.component,{origin:o,objectIds:i}=s,c=s.locations,r=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,d.g)(r,r,o),(0,d.g)(a,a,o);const u=i[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,u,r,a,n),this._addVertexCandidate(t,u,r,n),this._addVertexCandidate(t,u,a,n)}_addEdgeCandidate(t,e,n,s,o){if(!t.returnEdge)return;const i=(0,a.g)(t.bounds),u=(0,r.zk)(n,s,this._tmpLineSegment),h=(0,r.nF)(u,i,this._tmpP3);(0,a.n)(t.bounds,h)&&o.push({type:"edge",objectId:e,target:(0,c.g)(h),distance:(0,d.o)(i,h),start:(0,c.g)(n),end:(0,c.g)(s)})}_addVertexCandidate(t,e,n,s){if(!t.returnVertex)return;const o=(0,a.g)(t.bounds);(0,a.n)(t.bounds,n)&&s.push({type:"vertex",objectId:e,target:(0,c.g)(n),distance:(0,d.o)(o,n)})}};p=(0,s._)([(0,i.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],p);const _=p;class l{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++l.uid}}l.uid=0;class m{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=319.7d5fda2a.chunk.js.map