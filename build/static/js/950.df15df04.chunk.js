/*! For license information please see 950.df15df04.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpartimetracker=self.webpackChunkpartimetracker||[]).push([[950],{781:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(3351).A)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},5379:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(3351).A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},614:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(3351).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},5179:(e,t,o)=>{o.d(t,{G$:()=>J,Hs:()=>C,UC:()=>Q,VY:()=>te,ZL:()=>Y,bL:()=>S,bm:()=>oe,hE:()=>ee,hJ:()=>$,l9:()=>V});var n=o(8168),r=o(5043),l=o(858),a=o(2814),c=o(1862),s=o(4490),i=o(3642),u=o(1184),d=o(276),p=o(3321),f=o(2894),g=o(7920),m=o(6590),D=o(1717),v=o(5754),E=o(6851);const _="Dialog",[A,C]=(0,c.A)(_),[h,y]=A(_),R=e=>{const{__scopeDialog:t,children:o,open:n,defaultOpen:l,onOpenChange:a,modal:c=!0}=e,u=(0,r.useRef)(null),d=(0,r.useRef)(null),[p=!1,f]=(0,i.i)({prop:n,defaultProp:l,onChange:a});return(0,r.createElement)(h,{scope:t,triggerRef:u,contentRef:d,contentId:(0,s.B)(),titleId:(0,s.B)(),descriptionId:(0,s.B)(),open:p,onOpenChange:f,onOpenToggle:(0,r.useCallback)((()=>f((e=>!e))),[f]),modal:c},o)},k="DialogTrigger",b=(0,r.forwardRef)(((e,t)=>{const{__scopeDialog:o,...c}=e,s=y(k,o),i=(0,a.s)(t,s.triggerRef);return(0,r.createElement)(g.sG.button,(0,n.A)({type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":z(s.open)},c,{ref:i,onClick:(0,l.m)(e.onClick,s.onOpenToggle)}))})),w="DialogPortal",[O,F]=A(w,{forceMount:void 0}),I=e=>{const{__scopeDialog:t,forceMount:o,children:n,container:l}=e,a=y(w,t);return(0,r.createElement)(O,{scope:t,forceMount:o},r.Children.map(n,(e=>(0,r.createElement)(f.C,{present:o||a.open},(0,r.createElement)(p.Z,{asChild:!0,container:l},e)))))},M="DialogOverlay",P=(0,r.forwardRef)(((e,t)=>{const o=F(M,e.__scopeDialog),{forceMount:l=o.forceMount,...a}=e,c=y(M,e.__scopeDialog);return c.modal?(0,r.createElement)(f.C,{present:l||c.open},(0,r.createElement)(G,(0,n.A)({},a,{ref:t}))):null})),G=(0,r.forwardRef)(((e,t)=>{const{__scopeDialog:o,...l}=e,a=y(M,o);return(0,r.createElement)(D.A,{as:E.DX,allowPinchZoom:!0,shards:[a.contentRef]},(0,r.createElement)(g.sG.div,(0,n.A)({"data-state":z(a.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))})),x="DialogContent",T=(0,r.forwardRef)(((e,t)=>{const o=F(x,e.__scopeDialog),{forceMount:l=o.forceMount,...a}=e,c=y(x,e.__scopeDialog);return(0,r.createElement)(f.C,{present:l||c.open},c.modal?(0,r.createElement)(q,(0,n.A)({},a,{ref:t})):(0,r.createElement)(B,(0,n.A)({},a,{ref:t})))})),q=(0,r.forwardRef)(((e,t)=>{const o=y(x,e.__scopeDialog),c=(0,r.useRef)(null),s=(0,a.s)(t,o.contentRef,c);return(0,r.useEffect)((()=>{const e=c.current;if(e)return(0,v.Eq)(e)}),[]),(0,r.createElement)(Z,(0,n.A)({},e,{ref:s,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.m)(e.onCloseAutoFocus,(e=>{var t;e.preventDefault(),null===(t=o.triggerRef.current)||void 0===t||t.focus()})),onPointerDownOutside:(0,l.m)(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,o=0===t.button&&!0===t.ctrlKey;(2===t.button||o)&&e.preventDefault()})),onFocusOutside:(0,l.m)(e.onFocusOutside,(e=>e.preventDefault()))}))})),B=(0,r.forwardRef)(((e,t)=>{const o=y(x,e.__scopeDialog),l=(0,r.useRef)(!1),a=(0,r.useRef)(!1);return(0,r.createElement)(Z,(0,n.A)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var n,r;(null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,t),t.defaultPrevented)||(l.current||null===(r=o.triggerRef.current)||void 0===r||r.focus(),t.preventDefault());l.current=!1,a.current=!1},onInteractOutside:t=>{var n,r;null===(n=e.onInteractOutside)||void 0===n||n.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"===t.detail.originalEvent.type&&(a.current=!0));const c=t.target;(null===(r=o.triggerRef.current)||void 0===r?void 0:r.contains(c))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))})),Z=(0,r.forwardRef)(((e,t)=>{const{__scopeDialog:o,trapFocus:l,onOpenAutoFocus:c,onCloseAutoFocus:s,...i}=e,p=y(x,o),f=(0,r.useRef)(null),g=(0,a.s)(t,f);return(0,m.Oh)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(d.n,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:c,onUnmountAutoFocus:s},(0,r.createElement)(u.qW,(0,n.A)({role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":z(p.open)},i,{ref:g,onDismiss:()=>p.onOpenChange(!1)}))),!1)})),L="DialogTitle",N=(0,r.forwardRef)(((e,t)=>{const{__scopeDialog:o,...l}=e,a=y(L,o);return(0,r.createElement)(g.sG.h2,(0,n.A)({id:a.titleId},l,{ref:t}))})),U="DialogDescription",W=(0,r.forwardRef)(((e,t)=>{const{__scopeDialog:o,...l}=e,a=y(U,o);return(0,r.createElement)(g.sG.p,(0,n.A)({id:a.descriptionId},l,{ref:t}))})),X="DialogClose",j=(0,r.forwardRef)(((e,t)=>{const{__scopeDialog:o,...a}=e,c=y(X,o);return(0,r.createElement)(g.sG.button,(0,n.A)({type:"button"},a,{ref:t,onClick:(0,l.m)(e.onClick,(()=>c.onOpenChange(!1)))}))}));function z(e){return e?"open":"closed"}const H="DialogTitleWarning",[J,K]=(0,c.q)(H,{contentName:x,titleName:L,docsSlug:"dialog"}),S=R,V=b,Y=I,$=P,Q=T,ee=N,te=W,oe=j}}]);
//# sourceMappingURL=950.df15df04.chunk.js.map