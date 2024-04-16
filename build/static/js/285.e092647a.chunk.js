/*! For license information please see 285.e092647a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpartimetracker=self.webpackChunkpartimetracker||[]).push([[285],{4395:(e,a,t)=>{t.d(a,{Y:()=>r});const r=e=>{const a=["January","February","March","April","May","June","July","August","September","October","November","December"];let t=new Date(e),r=""+t.getMonth(),s=""+t.getDate(),n=t.getFullYear();const l={January:"01",February:"02",March:"03",April:"04",May:"05",June:"06",July:"07",August:"08",September:"09",October:"10",November:"11",December:"12"}[a[r]];return s.length<2&&(s="0"+s),[s,a[r],n,l]}},585:(e,a,t)=>{t.d(a,{o:()=>d});var r=t(5043),s=t(921),n=t(579);const l=r.forwardRef(((e,a)=>{let{className:t,type:r,...l}=e;return(0,n.jsx)("input",{type:r,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:a,...l})}));l.displayName="Input";const d=e=>{let{form:a,field:t,...r}=e;const{name:s,value:d=""}=t,{handleChange:i,handleBlur:o}=a,{label:c,required:u,multiline:m,placeholder:p,type:f,size:y="small",fullWidth:h=!0,helperText:x,error:g,className:b,disabled:v,inputProps:N}=r;return(0,n.jsx)(l,{id:s,name:s,value:d,label:c,error:!!g,className:b,helperText:g||x,required:u,multiline:m,rows:m&&3,placeholder:p,type:f,fullWidth:h,disabled:v,variant:"outlined",onChange:i,onBlur:o,InputProps:N})}},3210:(e,a,t)=>{t.d(a,{A:()=>m});var r=t(5043),s=t(4259),n=t(8646),l=t(4395),d=t(921),i=t(5650),o=t(2184),c=t(7067),u=t(579);function m(e){let{form:a,field:t,setFormikFieldvalue:m,currvalue:p,views:f=["year","month","day"]}=e;const[y,h]=(0,r.useState)(p?new Date(p):null),[x,g]=(0,r.useState)(!1),{name:b,value:v=""}=t;return(0,u.jsxs)(c.AM,{open:x,onOpenChange:g,children:[(0,u.jsx)(c.Wv,{asChild:!0,children:(0,u.jsxs)(i.$,{variant:"outline",onClick:()=>g(!0),className:(0,d.cn)("justify-start text-left font-normal",!y&&"text-muted-foreground"),children:[(0,u.jsx)(n.A,{className:"mr-2 h-4 w-4"}),y?(0,s.A)(y,"PPP"):(0,u.jsx)("span",{children:"Pick the shift date"})]})}),(0,u.jsx)(c.hl,{className:"w-auto p-0",children:(0,u.jsx)(o.V,{mode:"single",selected:y,onSelect:e=>{const a=(0,l.Y)(e);let t="".concat(a[3],"-01-").concat(a[2]);f.includes("day")&&(t="".concat(a[3],"-").concat(a[0],"-").concat(a[2])),h(e),m(b,t),g(!1)},disabled:e=>e>new Date||e<new Date("2020-01-01"),initialFocus:!0})})]})}},2184:(e,a,t)=>{t.d(a,{V:()=>o});t(5043);var r=t(9463),s=t(8326),n=t(7928),l=t(921),d=t(5650),i=t(579);function o(e){let{className:a,classNames:t,showOutsideDays:o=!0,...c}=e;return(0,i.jsx)(n.hv,{showOutsideDays:o,className:(0,l.cn)("p-3",a),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,l.cn)((0,d.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,l.cn)((0,d.r)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...t},components:{IconLeft:e=>{let{...a}=e;return(0,i.jsx)(r.A,{className:"h-4 w-4"})},IconRight:e=>{let{...a}=e;return(0,i.jsx)(s.A,{className:"h-4 w-4"})}},...c})}o.displayName="Calendar"},9448:(e,a,t)=>{t.d(a,{BT:()=>o,Wu:()=>c,ZB:()=>i,Zp:()=>l,aR:()=>d,wL:()=>u});var r=t(5043),s=t(921),n=t(579);const l=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:a,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...r})}));l.displayName="Card";const d=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:a,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...r})}));d.displayName="CardHeader";const i=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)("h3",{ref:a,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...r})}));i.displayName="CardTitle";const o=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)("p",{ref:a,className:(0,s.cn)("text-sm text-muted-foreground",t),...r})}));o.displayName="CardDescription";const c=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:a,className:(0,s.cn)("p-6 pt-0",t),...r})}));c.displayName="CardContent";const u=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:a,className:(0,s.cn)("flex items-center p-6 pt-0",t),...r})}));u.displayName="CardFooter"},1438:(e,a,t)=>{t.d(a,{J:()=>o});var r=t(5043),s=t(2367),n=t(435),l=t(921),d=t(579);const i=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,d.jsx)(s.b,{ref:a,className:(0,l.cn)(i(),t),...r})}));o.displayName=s.b.displayName},7067:(e,a,t)=>{t.d(a,{AM:()=>d,Wv:()=>i,hl:()=>o});var r=t(5043),s=t(9604),n=t(921),l=t(579);const d=s.bL,i=s.l9,o=r.forwardRef(((e,a)=>{let{className:t,align:r="center",sideOffset:d=4,...i}=e;return(0,l.jsx)(s.ZL,{children:(0,l.jsx)(s.UC,{ref:a,align:r,sideOffset:d,className:(0,n.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})})}));o.displayName=s.UC.displayName},2622:(e,a,t)=>{t.d(a,{av:()=>i,tU:()=>d});var r=t(5043),s=t(7127),n=t(921),l=t(579);const d=s.bL;r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,l.jsx)(s.B8,{ref:a,className:(0,n.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})})).displayName=s.B8.displayName;r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,l.jsx)(s.l9,{ref:a,className:(0,n.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})})).displayName=s.l9.displayName;const i=r.forwardRef(((e,a)=>{let{className:t,...r}=e;return(0,l.jsx)(s.UC,{ref:a,className:(0,n.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})}));i.displayName=s.UC.displayName},9455:(e,a,t)=>{t.d(a,{A:()=>m});var r=t(3892),s=t(585),n=t(899),l=t(3210),d=t(2622),i=t(5650),o=t(1438),c=t(9448),u=t(579);const m=e=>{const a=n.Ik({companyName:n.Yj().required("Company name is required"),payRate:n.Yj().required("Pay rate is required"),startDate:n.Yj().required("Start date is required")});return(0,u.jsx)(d.av,{value:"all",children:(0,u.jsxs)(c.Zp,{"x-chunk":"dashboard-06-chunk-0",children:[(0,u.jsxs)(c.aR,{children:[(0,u.jsx)(c.ZB,{children:e.label}),(0,u.jsx)(c.BT,{children:"Add Shift"==e.label?"Please enter below details to add shift":"Please edit below details to update shift"})]}),(0,u.jsx)(c.Wu,{children:(0,u.jsx)(r.l1,{initialValues:e.initialState,validationSchema:a,onSubmit:(a,t)=>{let{setFieldValue:r}=t;null===e||void 0===e||e.handleSubmit(a)},children:a=>{let{values:t,setFieldValue:n,touched:d,errors:c}=a;return(0,u.jsx)(r.lV,{children:(0,u.jsxs)("div",{className:"grid gap-6 ",children:[(0,u.jsxs)("div",{className:"grid gap-3",children:[(0,u.jsx)(o.J,{children:"Company Name"}),(0,u.jsx)(r.D0,{name:"companyName",value:"".concat(t.companyName),label:"Company Name",placeholder:"Company Name",required:!0,component:s.o})]}),(0,u.jsxs)("div",{className:"grid gap-6 sm:grid-cols-2",children:[(0,u.jsxs)("div",{className:"grid gap-3",children:[(0,u.jsx)(o.J,{children:"Company Name"}),(0,u.jsx)(r.D0,{name:"payRate",value:"".concat(t.payRate),required:!0,label:"Pay Rate",placeholder:"Pay Rate",component:s.o})]}),(0,u.jsxs)("div",{className:"grid gap-3",children:[(0,u.jsx)(o.J,{children:"Joining Date"}),(0,u.jsx)(r.D0,{name:"startDate",currvalue:"".concat(t.startDate),value:"".concat(t.startDate),required:!0,setFormikFieldvalue:n,label:"Pick the joining date",component:l.A})]})]}),(0,u.jsx)("div",{className:"flex flex-col items-center  text-center",children:(0,u.jsxs)(i.$,{className:"mt-4",type:"submit",children:[" ",e.label]})})]})})}})})]})})}},5285:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});t(5043);var r=t(3216),s=t(2622),n=t(7756),l=t(9455),d=t(5650),i=t(579);const o={companyName:"",payRate:"",startDate:""},c=e=>{const a=(0,r.Zp)();return(0,i.jsx)("main",{className:"grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8",children:(0,i.jsxs)(s.tU,{defaultValue:"all",children:[(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsx)("div",{className:"ml-auto flex items-center gap-2",children:(0,i.jsxs)(d.$,{size:"sm",className:"h-8 gap-1",onClick:()=>a("/addpt"),children:[(0,i.jsx)(n.A,{className:"h-3.5 w-3.5"}),(0,i.jsx)("span",{className:"sm:not-sr-only sm:whitespace-nowrap",children:"Parttime List"})]})})}),(0,i.jsx)(l.A,{handleSubmit:a=>{null===e||void 0===e||e.handlePtimeAdd(a)},initialState:o,label:"Add"})]})})};var u=t(3003),m=t(6987),p=t(4955);const f=(0,u.Ng)((function(e){return{userData:e.LoginReducer}}),(function(e){return{addnewParttime:a=>e((0,p._N)(a))}}))((e=>{const a=(0,r.Zp)(),{enqueueSnackbar:t}=(0,m.dh)();return(0,i.jsx)(c,{navigate:a,handlePtimeAdd:async a=>{if(null!=a)try{var r,s;const n={...a,userId:null===e||void 0===e||null===(r=e.userData)||void 0===r||null===(s=r.loginData)||void 0===s?void 0:s.user_id};await e.addnewParttime(n);t("Parttime added Successful",{variant:"success"})}catch(n){console.log(n),t(n,{variant:"error"})}}})}))},4955:(e,a,t)=>{t.d(a,{_N:()=>l,i5:()=>d,SA:()=>i});var r=t(9217),s=t(7154);const n={addnewParttime:e=>{if(void 0!==e){let a=r.aD+"/api/part/add";return s.A.post(a,e)}},getallParttime:e=>{if(void 0!==e){let a=r.aD+"/api/part/all/".concat(e.userId);return s.A.get(a)}},updateParttime:e=>{if(void 0!==e){let a=r.aD+"/api/part/update/".concat(e.id);return s.A.put(a,e)}}};function l(e){return async a=>{a({type:r.jt});try{const t=await n.addnewParttime(e);return a({type:r.zb,payload:t.data}),t.data}catch(t){throw a({type:r.AN,payload:t.message}),t}}}function d(e){return async a=>{a({type:r.CG});try{const t=await n.getallParttime(e);return a({type:r.OO,payload:t.data}),t.data}catch(t){throw a({type:r.DW,payload:t.message}),t}}}function i(e){return async a=>{a({type:r.Bk});try{const t=await n.updateParttime(e);return a({type:r.Fg,payload:t.data}),t.data}catch(t){throw a({type:r.O4,payload:t.message}),t}}}},7756:(e,a,t)=>{t.d(a,{A:()=>r});const r=(0,t(3351).A)("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]])}}]);
//# sourceMappingURL=285.e092647a.chunk.js.map