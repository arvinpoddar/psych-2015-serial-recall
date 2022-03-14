"use strict";(self["webpackChunkserial_recall"]=self["webpackChunkserial_recall"]||[]).push([[108],{9151:(e,t,l)=>{l.d(t,{fo:()=>s,xM:()=>n,Nr:()=>a,qw:()=>i,q$:()=>u});const s=9,n=2e4,a=["705182068","270422424","801183068","954052592","790244282","926493674","606918360"],i=["166348227","367781030","784794977","038318849","093586098","946167344","463243126"],u=["543565783","626488917","702948703","702255336","801576895","868654083","609960028"]},2108:(e,t,l)=>{l.r(t),l.d(t,{default:()=>z});var s=l(3673);const n={class:"row"},a={class:"testing-page flex column flex-center"},i={key:0,class:"text-center"},u=(0,s._)("div",{class:"q-mb-lg"},[(0,s.Uk)(" You will now take a 2 minute break. "),(0,s._)("b",null,"Please remove your headphones and alert the researcher.")],-1),c={key:2,class:"text-center"},r=(0,s._)("div",{class:"q-mb-lg"},[(0,s.Uk)(" Thank you for completing the study! Please remove your headphones and alert the researcher that you are done. "),(0,s._)("b",null,"DO NOT CLOSE THIS PAGE.")],-1);function o(e,t,l,o,p,d){const h=(0,s.up)("q-space"),g=(0,s.up)("q-btn"),f=(0,s.up)("Sequence"),v=(0,s.up)("q-page");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",n,[(0,s.Wm)(h),(0,s.Wm)(g,{icon:"save","text-color":"primary",size:"sm",onClick:e.saveCSV,flat:"",dense:""},null,8,["onClick"])]),(0,s.Wm)(v,{class:"flex flex-center"},{default:(0,s.w5)((()=>[(0,s._)("div",a,[e.showBreakScreen?((0,s.wg)(),(0,s.iD)("div",i,[u,(0,s.Wm)(g,{label:"Continue",color:"primary",size:"lg","no-caps":"",onClick:t[0]||(t[0]=t=>e.showBreakScreen=!1)})])):e.currentIndex<e.sequences.length?((0,s.wg)(),(0,s.j4)(f,{key:1,sequence:e.currentSequence,displayDigitMs:750,digitGapMs:250,onComplete:e.goToNextSequence},null,8,["sequence","onComplete"])):((0,s.wg)(),(0,s.iD)("div",c,[r,(0,s.Wm)(g,{icon:"save",label:"Save CSV Data",color:"primary",onClick:e.saveCSV,"no-caps":""},null,8,["onClick"])]))])])),_:1})],64)}l(71);var p=l(1959),d=l(9582),h=l(3139),g=l(9151),f=l(2323);const v={class:"sequence-outer"},m={class:"display-digit"},w=(0,s._)("div",{class:"input-instructions"}," Enter the full sequence as you recall: ",-1),b={key:1,style:{height:"52px"}};function q(e,t,l,n,a,i){const u=(0,s.up)("SequenceInput"),c=(0,s.up)("q-btn"),r=(0,s.up)("q-form");return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",m,(0,f.zw)(e.firstDigit),1),e.sequenceFinished?((0,s.wg)(),(0,s.j4)(r,{key:0,onSubmit:e.submitUserSequence,class:"sequence-input"},{default:(0,s.w5)((()=>[w,(0,s.Wm)(u,{onUpdate:e.captureUserSequence,class:"q-my-lg"},null,8,["onUpdate"]),9===e.userSequence.length?((0,s.wg)(),(0,s.j4)(c,{key:0,color:"primary",size:"lg","no-caps":"",type:"submit",label:"Submit"})):((0,s.wg)(),(0,s.iD)("div",b))])),_:1},8,["onSubmit"])):(0,s.kq)("",!0)])}const y={class:"row items-center q-gutter-x-md mobile-verify"},D=["value","onInput","onKeydown","onpaste","disabled"];function k(e,t,l,n,a,i){return(0,s.wg)(),(0,s.iD)("div",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cells,((l,n)=>((0,s.wg)(),(0,s.iD)("input",{key:n,value:l,ref_for:!0,ref:e.cellRefs[n],class:"col ig-input mobile-cell",outlined:"",onClick:t[0]||(t[0]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onInput:t=>e.handleInput(t,n),onKeydown:t=>e.handleKeyDown(t,n),onpaste:t=>e.handlePaste(t,n),maxlength:"1",pattern:"[0-9]",autocomplete:"2fa",inputmode:"numeric",disabled:e.disabled,ondrop:"return false;"},null,40,D)))),128))])}l(5363);const S={backspace:8,left:37,up:38,right:39,down:40},C=g.fo,x=[],I=[];for(let A=0;A<C;A++)x.push(""),I.push(`cell_${A}`);const $=(0,s.aZ)({name:"TwoFactorVerificationInput",props:{disabled:{type:Boolean,default:!1}},data(){return{numCells:C,cells:x,cellRefs:I}},methods:{handleFocus(e){e&&e.target&&(e.preventDefault(),setTimeout((function(){e.target.setSelectionRange(0,9999)}),1))},getPasteText(e){let t;return window.clipboardData&&window.clipboardData.getData?t=window.clipboardData.getData("Text"):e.clipboardData&&e.clipboardData.getData&&(t=e.clipboardData.getData("text/plain")),t.replace(/\D/g,"")},handlePaste(e,t){e.preventDefault();const l=this.getPasteText(e),s=[...this.cells];for(let a=t,i=0;a<s.length&&i<l.length;a++)s[a]=l[i],i++;const n=Math.min(this.numCells-1,t+l.length-1);this.focusInput(n),this.cells=s,this.triggerUpdate(n)},handleInput(e,t){if(e.target.value=e.target.value.replace(/[^\d]/gi,""),""===e.target.value||!e.target.validity.valid)return;if("insertFromPaste"===e.inputType)return void e.preventDefault();let l;const s=e.target.value;let n=this.cells;if(n=Object.assign([],n),s.length>1){let e=s.length+t-1;e>=this.numCells&&(e=this.numCells-1),l=this.getCellRef(e);const a=s.split("");a.forEach(((e,l)=>{const s=t+l;s<this.numCells&&(n[s]=e)})),this.cells=n,this.triggerUpdate(t)}else l=this.getCellRef(t+1),n[t]=s,this.cells=n,this.triggerUpdate(t);l&&(l.focus(),l.select())},handleKeyDown(e,t){const l=t-1,s=t+1,n=this.cellRefs[l];switch(e.keyCode){case S.backspace:{e.preventDefault();const s=[...this.cells];this.cells[t]?(s[t]="",this.cells=s,this.triggerUpdate(t)):n&&(s[l]="",this.focusInput(l),this.cells=s,this.triggerUpdate(t));break}case S.left:e.preventDefault(),this.focusInput(l);break;case S.right:e.preventDefault(),this.focusInput(s);break;case S.up:case S.down:e.preventDefault();break;default:break}},getCellRef(e){if(e>=0&&e<this.numCells){if(this.cellRefs[e]){const t=this.cellRefs[e];return this.$refs[t][0]}return null}return null},focusInput(e){const t=this.getCellRef(e);t&&t.focus()},triggerUpdate(e=0){const t=this.cells.join("");this.$emit("update",t),t.length===this.numCells&&e===this.cellRefs.length-1&&this.$emit("complete",t)},resetVerification(){for(let e=0;e<C;e++)this.cells[e]="";this.focusInput(0),this.triggerUpdate(0)}},mounted(){this.$nextTick((()=>{this.focusInput(0)}))}});var U=l(4260);const P=(0,U.Z)($,[["render",k]]),T=P,_=(0,s.aZ)({name:"Sequence",props:{sequence:String,displayDigitMs:{type:Number,default:750},digitGapMs:{type:Number,default:250}},components:{SequenceInput:T},setup(e,t){const{sequence:l,displayDigitMs:n,digitGapMs:a}=(0,p.BK)(e),i=(0,p.iH)(""),u=(0,p.iH)(!1),c=e=>new Promise((t=>setTimeout(t,e))),r=async()=>{i.value="",u.value=!1,await c(n.value);for(let e=0;e<l.value.length;e++)i.value="",await c(a.value),i.value=l.value[e],await c(n.value);i.value="",u.value=!0,f()},o=(0,p.iH)(""),d=e=>{o.value=e},h=(0,p.iH)(null),f=()=>{h.value=setTimeout((()=>{m()}),g.xM)},v=()=>{h.value&&clearTimeout(h.value)},m=()=>{o.value=o.value.padEnd(g.fo,"0"),w()},w=()=>{o.value.length===g.fo&&(console.log(o.value),t.emit("complete",o.value),o.value="",v())};return(0,s.YP)(l,(()=>r())),(0,s.bv)((()=>r())),{firstDigit:i,userSequence:o,sequenceFinished:u,captureUserSequence:d,submitUserSequence:w}}});var F=l(5269),Z=l(3187),H=l(7518),R=l.n(H);const M=(0,U.Z)(_,[["render",q]]),B=M;R()(_,"components",{QForm:F.Z,QBtn:Z.Z});const N=7,V=N-1,j=2*N-1,K=(0,s.aZ)({name:"PageIndex",components:{Sequence:B},setup(){const e=(0,d.yj)(),t=e.params.order,l=e.params.condition,n=e.params.id,a=t.split("-"),i=(0,p.iH)(null),u=()=>{const e={low:g.Nr,med:g.qw,high:g.q$},t=[...e[a[0]],...e[a[1]],...e[a[2]]];i.value=t},c=(0,p.iH)(0),r=(0,s.Fl)((()=>i.value[c.value])),o=e=>{m(r.value,e),c.value++},f=(e,t)=>{const l=Math.min(e.length,t.length);let s=0;for(let n=0;n<l;n++)e[n]===t[n]&&s++;return{correct:s,length:l,percentage:s/l}},v=(0,p.iH)("ID,Actual,User Input,Dialogue,Volume,Correct Positions,Accuracy %"),m=(e,t)=>{let s="";s=c.value<=V?a[0]:c.value<=j?a[1]:a[2];const{correct:i,percentage:u}=f(e,t);v.value+=`\n'${n}','${e}','${t}',${l},${s},${i},${u}`},w=()=>{const e=new Blob([v.value],{type:"text/plain;charset=utf-8"});(0,h.saveAs)(e,`${n}-${l}-${t}.csv`)},b=(0,p.iH)(!1);return(0,s.YP)(c,(()=>{const e=[V,j].includes(c.value);e&&(b.value=!0)})),(0,s.wF)((()=>u())),{sequences:i,currentIndex:c,currentSequence:r,showBreakScreen:b,goToNextSequence:o,saveCSV:w}}});var Q=l(1598),W=l(2025),E=l(4379);const Y=(0,U.Z)(K,[["render",o]]),z=Y;R()(K,"components",{QLinearProgress:Q.Z,QBtn:Z.Z,QSpace:W.Z,QPage:E.Z})}}]);