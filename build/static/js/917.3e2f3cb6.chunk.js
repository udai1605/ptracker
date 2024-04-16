/*! For license information please see 917.3e2f3cb6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpartimetracker=self.webpackChunkpartimetracker||[]).push([[917],{2382:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(3351).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},5711:(e,t,n)=>{n.d(t,{A:()=>o});const o=(0,n(3351).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},6088:(e,t,n)=>{n.d(t,{UC:()=>Me,YJ:()=>Oe,In:()=>De,q7:()=>He,VF:()=>We,p4:()=>Ve,JU:()=>Be,ZL:()=>Le,bL:()=>Re,wn:()=>Fe,PP:()=>Ke,wv:()=>Ge,l9:()=>Ie,WT:()=>Te,LM:()=>Ne});var o=n(8168),r=n(5043),l=n(7950);function a(e,t){let[n,o]=t;return Math.min(o,Math.max(n,e))}var i=n(858),c=n(5463),s=n(2814),d=n(1862),u=n(4204),p=n(1184),v=n(6590),f=n(276),m=n(4490),h=n(2593),g=n(3321),w=n(7920),y=n(6851),S=n(7490),b=n(3642),E=n(503),C=n(3168);const x=(0,r.forwardRef)(((e,t)=>(0,r.createElement)(w.sG.span,(0,o.A)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))));var k=n(5754),_=n(1717);const A=[" ","Enter","ArrowUp","ArrowDown"],P=[" ","Enter"],R="Select",[I,T,D]=(0,c.N)(R),[L,M]=(0,d.A)(R,[D,h.Bk]),N=(0,h.Bk)(),[O,B]=L(R),[H,V]=L(R),W=e=>{const{__scopeSelect:t,children:n,open:o,defaultOpen:l,onOpenChange:a,value:i,defaultValue:c,onValueChange:s,dir:d,name:p,autoComplete:v,disabled:f,required:g}=e,w=N(t),[y,S]=(0,r.useState)(null),[E,C]=(0,r.useState)(null),[x,k]=(0,r.useState)(!1),_=(0,u.jH)(d),[A=!1,P]=(0,b.i)({prop:o,defaultProp:l,onChange:a}),[R,T]=(0,b.i)({prop:i,defaultProp:c,onChange:s}),D=(0,r.useRef)(null),L=!y||Boolean(y.closest("form")),[M,B]=(0,r.useState)(new Set),V=Array.from(M).map((e=>e.props.value)).join(";");return(0,r.createElement)(h.bL,w,(0,r.createElement)(O,{required:g,scope:t,trigger:y,onTriggerChange:S,valueNode:E,onValueNodeChange:C,valueNodeHasChildren:x,onValueNodeHasChildrenChange:k,contentId:(0,m.B)(),value:R,onValueChange:T,open:A,onOpenChange:P,dir:_,triggerPointerDownPosRef:D,disabled:f},(0,r.createElement)(I.Provider,{scope:t},(0,r.createElement)(H,{scope:e.__scopeSelect,onNativeOptionAdd:(0,r.useCallback)((e=>{B((t=>new Set(t).add(e)))}),[]),onNativeOptionRemove:(0,r.useCallback)((e=>{B((t=>{const n=new Set(t);return n.delete(e),n}))}),[])},n)),L?(0,r.createElement)(_e,{key:V,"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:v,value:R,onChange:e=>T(e.target.value),disabled:f},void 0===R?(0,r.createElement)("option",{value:""}):null,Array.from(M)):null))},K="SelectTrigger",F=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,disabled:l=!1,...a}=e,c=N(n),d=B(K,n),u=d.disabled||l,p=(0,s.s)(t,d.onTriggerChange),v=T(n),[f,m,g]=Ae((e=>{const t=v().filter((e=>!e.disabled)),n=t.find((e=>e.value===d.value)),o=Pe(t,e,n);void 0!==o&&d.onValueChange(o.value)})),y=()=>{u||(d.onOpenChange(!0),g())};return(0,r.createElement)(h.Mz,(0,o.A)({asChild:!0},c),(0,r.createElement)(w.sG.button,(0,o.A)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,"data-placeholder":ke(d.value)?"":void 0},a,{ref:p,onClick:(0,i.m)(a.onClick,(e=>{e.currentTarget.focus()})),onPointerDown:(0,i.m)(a.onPointerDown,(e=>{const t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(y(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())})),onKeyDown:(0,i.m)(a.onKeyDown,(e=>{const t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),t&&" "===e.key||A.includes(e.key)&&(y(),e.preventDefault())}))})))})),G="SelectValue",U=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,className:l,style:a,children:i,placeholder:c="",...d}=e,u=B(G,n),{onValueNodeHasChildrenChange:p}=u,v=void 0!==i,f=(0,s.s)(t,u.onValueNodeChange);return(0,E.N)((()=>{p(v)}),[p,v]),(0,r.createElement)(w.sG.span,(0,o.A)({},d,{ref:f,style:{pointerEvents:"none"}}),ke(u.value)?(0,r.createElement)(r.Fragment,null,c):i)})),q=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,children:l,...a}=e;return(0,r.createElement)(w.sG.span,(0,o.A)({"aria-hidden":!0},a,{ref:t}),l||"\u25bc")})),z=e=>(0,r.createElement)(g.Z,(0,o.A)({asChild:!0},e)),Z="SelectContent",j=(0,r.forwardRef)(((e,t)=>{const n=B(Z,e.__scopeSelect),[a,i]=(0,r.useState)();if((0,E.N)((()=>{i(new DocumentFragment)}),[]),!n.open){const t=a;return t?(0,l.createPortal)((0,r.createElement)(Y,{scope:e.__scopeSelect},(0,r.createElement)(I.Slot,{scope:e.__scopeSelect},(0,r.createElement)("div",null,e.children))),t):null}return(0,r.createElement)(Q,(0,o.A)({},e,{ref:t}))})),X=10,[Y,J]=L(Z),Q=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,position:l="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:c,onPointerDownOutside:d,side:u,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:S,collisionPadding:b,sticky:E,hideWhenDetached:C,avoidCollisions:x,...A}=e,P=B(Z,n),[R,I]=(0,r.useState)(null),[D,L]=(0,r.useState)(null),M=(0,s.s)(t,(e=>I(e))),[N,O]=(0,r.useState)(null),[H,V]=(0,r.useState)(null),W=T(n),[K,F]=(0,r.useState)(!1),G=(0,r.useRef)(!1);(0,r.useEffect)((()=>{if(R)return(0,k.Eq)(R)}),[R]),(0,v.Oh)();const U=(0,r.useCallback)((e=>{const[t,...n]=W().map((e=>e.ref.current)),[o]=n.slice(-1),r=document.activeElement;for(const l of e){if(l===r)return;if(null===l||void 0===l||l.scrollIntoView({block:"nearest"}),l===t&&D&&(D.scrollTop=0),l===o&&D&&(D.scrollTop=D.scrollHeight),null===l||void 0===l||l.focus(),document.activeElement!==r)return}}),[W,D]),q=(0,r.useCallback)((()=>U([N,R])),[U,N,R]);(0,r.useEffect)((()=>{K&&q()}),[K,q]);const{onOpenChange:z,triggerPointerDownPosRef:j}=P;(0,r.useEffect)((()=>{if(R){let e={x:0,y:0};const t=t=>{var n,o,r,l;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(o=j.current)||void 0===o?void 0:o.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(r=null===(l=j.current)||void 0===l?void 0:l.y)&&void 0!==r?r:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():R.contains(n.target)||z(!1),document.removeEventListener("pointermove",t),j.current=null};return null!==j.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}}),[R,z,j]),(0,r.useEffect)((()=>{const e=()=>z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}}),[z]);const[X,J]=Ae((e=>{const t=W().filter((e=>!e.disabled)),n=t.find((e=>e.ref.current===document.activeElement)),o=Pe(t,e,n);o&&setTimeout((()=>o.ref.current.focus()))})),Q=(0,r.useCallback)(((e,t,n)=>{const o=!G.current&&!n;(void 0!==P.value&&P.value===t||o)&&(O(e),o&&(G.current=!0))}),[P.value]),te=(0,r.useCallback)((()=>null===R||void 0===R?void 0:R.focus()),[R]),ne=(0,r.useCallback)(((e,t,n)=>{const o=!G.current&&!n;(void 0!==P.value&&P.value===t||o)&&V(e)}),[P.value]),oe="popper"===l?ee:$,re=oe===ee?{side:u,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:S,collisionPadding:b,sticky:E,hideWhenDetached:C,avoidCollisions:x}:{};return(0,r.createElement)(Y,{scope:n,content:R,viewport:D,onViewportChange:L,itemRefCallback:Q,selectedItem:N,onItemLeave:te,itemTextRefCallback:ne,focusSelectedItem:q,selectedItemText:H,position:l,isPositioned:K,searchRef:X},(0,r.createElement)(_.A,{as:y.DX,allowPinchZoom:!0},(0,r.createElement)(f.n,{asChild:!0,trapped:P.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.m)(a,(e=>{var t;null===(t=P.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}))},(0,r.createElement)(p.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>P.onOpenChange(!1)},(0,r.createElement)(oe,(0,o.A)({role:"listbox",id:P.contentId,"data-state":P.open?"open":"closed",dir:P.dir,onContextMenu:e=>e.preventDefault()},A,re,{onPlaced:()=>F(!0),ref:M,style:{display:"flex",flexDirection:"column",outline:"none",...A.style},onKeyDown:(0,i.m)(A.onKeyDown,(e=>{const t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=W().filter((e=>!e.disabled)).map((e=>e.ref.current));if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){const n=e.target,o=t.indexOf(n);t=t.slice(o+1)}setTimeout((()=>U(t))),e.preventDefault()}}))}))))))})),$=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,onPlaced:l,...i}=e,c=B(Z,n),d=J(Z,n),[u,p]=(0,r.useState)(null),[v,f]=(0,r.useState)(null),m=(0,s.s)(t,(e=>f(e))),h=T(n),g=(0,r.useRef)(!1),y=(0,r.useRef)(!0),{viewport:S,selectedItem:b,selectedItemText:C,focusSelectedItem:x}=d,k=(0,r.useCallback)((()=>{if(c.trigger&&c.valueNode&&u&&v&&S&&b&&C){const e=c.trigger.getBoundingClientRect(),t=v.getBoundingClientRect(),n=c.valueNode.getBoundingClientRect(),o=C.getBoundingClientRect();if("rtl"!==c.dir){const r=o.left-t.left,l=n.left-r,i=e.left-l,c=e.width+i,s=Math.max(c,t.width),d=window.innerWidth-X,p=a(l,[X,d-s]);u.style.minWidth=c+"px",u.style.left=p+"px"}else{const r=t.right-o.right,l=window.innerWidth-n.right-r,i=window.innerWidth-e.right-l,c=e.width+i,s=Math.max(c,t.width),d=window.innerWidth-X,p=a(l,[X,d-s]);u.style.minWidth=c+"px",u.style.right=p+"px"}const r=h(),i=window.innerHeight-2*X,s=S.scrollHeight,d=window.getComputedStyle(v),p=parseInt(d.borderTopWidth,10),f=parseInt(d.paddingTop,10),m=parseInt(d.borderBottomWidth,10),w=p+f+s+parseInt(d.paddingBottom,10)+m,y=Math.min(5*b.offsetHeight,w),E=window.getComputedStyle(S),x=parseInt(E.paddingTop,10),k=parseInt(E.paddingBottom,10),_=e.top+e.height/2-X,A=i-_,P=b.offsetHeight/2,R=p+f+(b.offsetTop+P),I=w-R;if(R<=_){const e=b===r[r.length-1].ref.current;u.style.bottom="0px";const t=v.clientHeight-S.offsetTop-S.offsetHeight,n=R+Math.max(A,P+(e?k:0)+t+m);u.style.height=n+"px"}else{const e=b===r[0].ref.current;u.style.top="0px";const t=Math.max(_,p+S.offsetTop+(e?x:0)+P)+I;u.style.height=t+"px",S.scrollTop=R-_+S.offsetTop}u.style.margin="".concat(X,"px 0"),u.style.minHeight=y+"px",u.style.maxHeight=i+"px",null===l||void 0===l||l(),requestAnimationFrame((()=>g.current=!0))}}),[h,c.trigger,c.valueNode,u,v,S,b,C,c.dir,l]);(0,E.N)((()=>k()),[k]);const[_,A]=(0,r.useState)();(0,E.N)((()=>{v&&A(window.getComputedStyle(v).zIndex)}),[v]);const P=(0,r.useCallback)((e=>{e&&!0===y.current&&(k(),null===x||void 0===x||x(),y.current=!1)}),[k,x]);return(0,r.createElement)(te,{scope:n,contentWrapper:u,shouldExpandOnScrollRef:g,onScrollButtonChange:P},(0,r.createElement)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:_}},(0,r.createElement)(w.sG.div,(0,o.A)({},i,{ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))})),ee=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,align:l="start",collisionPadding:a=X,...i}=e,c=N(n);return(0,r.createElement)(h.UC,(0,o.A)({},c,i,{ref:t,align:l,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))})),[te,ne]=L(Z,{}),oe="SelectViewport",re=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,...l}=e,a=J(oe,n),c=ne(oe,n),d=(0,s.s)(t,a.onViewportChange),u=(0,r.useRef)(0);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,r.createElement)(I.Slot,{scope:n},(0,r.createElement)(w.sG.div,(0,o.A)({"data-radix-select-viewport":"",role:"presentation"},l,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...l.style},onScroll:(0,i.m)(l.onScroll,(e=>{const t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:o}=c;if(null!==o&&void 0!==o&&o.current&&n){const e=Math.abs(u.current-t.scrollTop);if(e>0){const o=window.innerHeight-2*X,r=parseFloat(n.style.minHeight),l=parseFloat(n.style.height),a=Math.max(r,l);if(a<o){const r=a+e,l=Math.min(o,r),i=r-l;n.style.height=l+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}u.current=t.scrollTop}))}))))})),le="SelectGroup",[ae,ie]=L(le),ce=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,...l}=e,a=(0,m.B)();return(0,r.createElement)(ae,{scope:n,id:a},(0,r.createElement)(w.sG.div,(0,o.A)({role:"group","aria-labelledby":a},l,{ref:t})))})),se="SelectLabel",de=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,...l}=e,a=ie(se,n);return(0,r.createElement)(w.sG.div,(0,o.A)({id:a.id},l,{ref:t}))})),ue="SelectItem",[pe,ve]=L(ue),fe=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,value:l,disabled:a=!1,textValue:c,...d}=e,u=B(ue,n),p=J(ue,n),v=u.value===l,[f,h]=(0,r.useState)(null!==c&&void 0!==c?c:""),[g,y]=(0,r.useState)(!1),S=(0,s.s)(t,(e=>{var t;return null===(t=p.itemRefCallback)||void 0===t?void 0:t.call(p,e,l,a)})),b=(0,m.B)(),E=()=>{a||(u.onValueChange(l),u.onOpenChange(!1))};if(""===l)throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,r.createElement)(pe,{scope:n,value:l,disabled:a,textId:b,isSelected:v,onItemTextChange:(0,r.useCallback)((e=>{h((t=>{var n;return t||(null!==(n=null===e||void 0===e?void 0:e.textContent)&&void 0!==n?n:"").trim()}))}),[])},(0,r.createElement)(I.ItemSlot,{scope:n,value:l,disabled:a,textValue:f},(0,r.createElement)(w.sG.div,(0,o.A)({role:"option","aria-labelledby":b,"data-highlighted":g?"":void 0,"aria-selected":v&&g,"data-state":v?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},d,{ref:S,onFocus:(0,i.m)(d.onFocus,(()=>y(!0))),onBlur:(0,i.m)(d.onBlur,(()=>y(!1))),onPointerUp:(0,i.m)(d.onPointerUp,E),onPointerMove:(0,i.m)(d.onPointerMove,(e=>{var t;a?null===(t=p.onItemLeave)||void 0===t||t.call(p):e.currentTarget.focus({preventScroll:!0})})),onPointerLeave:(0,i.m)(d.onPointerLeave,(e=>{var t;e.currentTarget===document.activeElement&&(null===(t=p.onItemLeave)||void 0===t||t.call(p))})),onKeyDown:(0,i.m)(d.onKeyDown,(e=>{var t;""!==(null===(t=p.searchRef)||void 0===t?void 0:t.current)&&" "===e.key||(P.includes(e.key)&&E()," "===e.key&&e.preventDefault())}))}))))})),me="SelectItemText",he=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,className:a,style:i,...c}=e,d=B(me,n),u=J(me,n),p=ve(me,n),v=V(me,n),[f,m]=(0,r.useState)(null),h=(0,s.s)(t,(e=>m(e)),p.onItemTextChange,(e=>{var t;return null===(t=u.itemTextRefCallback)||void 0===t?void 0:t.call(u,e,p.value,p.disabled)})),g=null===f||void 0===f?void 0:f.textContent,y=(0,r.useMemo)((()=>(0,r.createElement)("option",{key:p.value,value:p.value,disabled:p.disabled},g)),[p.disabled,p.value,g]),{onNativeOptionAdd:S,onNativeOptionRemove:b}=v;return(0,E.N)((()=>(S(y),()=>b(y))),[S,b,y]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(w.sG.span,(0,o.A)({id:p.textId},c,{ref:h})),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,l.createPortal)(c.children,d.valueNode):null)})),ge="SelectItemIndicator",we=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,...l}=e;return ve(ge,n).isSelected?(0,r.createElement)(w.sG.span,(0,o.A)({"aria-hidden":!0},l,{ref:t})):null})),ye="SelectScrollUpButton",Se=(0,r.forwardRef)(((e,t)=>{const n=J(ye,e.__scopeSelect),l=ne(ye,e.__scopeSelect),[a,i]=(0,r.useState)(!1),c=(0,s.s)(t,l.onScrollButtonChange);return(0,E.N)((()=>{if(n.viewport&&n.isPositioned){const e=n.viewport;function t(){const t=e.scrollTop>0;i(t)}return t(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}}),[n.viewport,n.isPositioned]),a?(0,r.createElement)(Ce,(0,o.A)({},e,{ref:c,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}})):null})),be="SelectScrollDownButton",Ee=(0,r.forwardRef)(((e,t)=>{const n=J(be,e.__scopeSelect),l=ne(be,e.__scopeSelect),[a,i]=(0,r.useState)(!1),c=(0,s.s)(t,l.onScrollButtonChange);return(0,E.N)((()=>{if(n.viewport&&n.isPositioned){const e=n.viewport;function t(){const t=e.scrollHeight-e.clientHeight,n=Math.ceil(e.scrollTop)<t;i(n)}return t(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}}),[n.viewport,n.isPositioned]),a?(0,r.createElement)(Ce,(0,o.A)({},e,{ref:c,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}})):null})),Ce=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,onAutoScroll:l,...a}=e,c=J("SelectScrollButton",n),s=(0,r.useRef)(null),d=T(n),u=(0,r.useCallback)((()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)}),[]);return(0,r.useEffect)((()=>()=>u()),[u]),(0,E.N)((()=>{var e;const t=d().find((e=>e.ref.current===document.activeElement));null===t||void 0===t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})}),[d]),(0,r.createElement)(w.sG.div,(0,o.A)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.m)(a.onPointerDown,(()=>{null===s.current&&(s.current=window.setInterval(l,50))})),onPointerMove:(0,i.m)(a.onPointerMove,(()=>{var e;null===(e=c.onItemLeave)||void 0===e||e.call(c),null===s.current&&(s.current=window.setInterval(l,50))})),onPointerLeave:(0,i.m)(a.onPointerLeave,(()=>{u()}))}))})),xe=(0,r.forwardRef)(((e,t)=>{const{__scopeSelect:n,...l}=e;return(0,r.createElement)(w.sG.div,(0,o.A)({"aria-hidden":!0},l,{ref:t}))}));function ke(e){return""===e||void 0===e}const _e=(0,r.forwardRef)(((e,t)=>{const{value:n,...l}=e,a=(0,r.useRef)(null),i=(0,s.s)(t,a),c=(0,C.Z)(n);return(0,r.useEffect)((()=>{const e=a.current,t=window.HTMLSelectElement.prototype,o=Object.getOwnPropertyDescriptor(t,"value").set;if(c!==n&&o){const t=new Event("change",{bubbles:!0});o.call(e,n),e.dispatchEvent(t)}}),[c,n]),(0,r.createElement)(x,{asChild:!0},(0,r.createElement)("select",(0,o.A)({},l,{ref:i,defaultValue:n})))}));function Ae(e){const t=(0,S.c)(e),n=(0,r.useRef)(""),o=(0,r.useRef)(0),l=(0,r.useCallback)((e=>{const r=n.current+e;t(r),function e(t){n.current=t,window.clearTimeout(o.current),""!==t&&(o.current=window.setTimeout((()=>e("")),1e3))}(r)}),[t]),a=(0,r.useCallback)((()=>{n.current="",window.clearTimeout(o.current)}),[]);return(0,r.useEffect)((()=>()=>window.clearTimeout(o.current)),[]),[n,l,a]}function Pe(e,t,n){const o=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,r=n?e.indexOf(n):-1;let l=(a=e,i=Math.max(r,0),a.map(((e,t)=>a[(i+t)%a.length])));var a,i;1===o.length&&(l=l.filter((e=>e!==n)));const c=l.find((e=>e.textValue.toLowerCase().startsWith(o.toLowerCase())));return c!==n?c:void 0}_e.displayName="BubbleSelect";const Re=W,Ie=F,Te=U,De=q,Le=z,Me=j,Ne=re,Oe=ce,Be=de,He=fe,Ve=he,We=we,Ke=Se,Fe=Ee,Ge=xe},3168:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(5043);function r(e){const t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);
//# sourceMappingURL=917.3e2f3cb6.chunk.js.map