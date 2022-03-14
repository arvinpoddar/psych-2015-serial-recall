"use strict";(self["webpackChunkserial_recall"]=self["webpackChunkserial_recall"]||[]).push([[569],{9151:(e,l,o)=>{o.d(l,{fo:()=>t,xM:()=>i,Nr:()=>n,qw:()=>a,q$:()=>s});const t=9,i=2e4,n=["705182068","270422424","801183068","954052592","790244282","926493674","606918360"],a=["166348227","367781030","784794977","038318849","093586098","946167344","463243126"],s=["543565783","626488917","702948703","702255336","801576895","868654083","609960028"]},3569:(e,l,o)=>{o.r(l),o.d(l,{default:()=>M});var t=o(3673),i=o(8880),n=o(2323);const a={class:"testing-page flex column flex-center"},s={class:"q-mb-md"},u=(0,t._)("option",{selected:"",disabled:"",value:""}," RESEARCHER: Select condition ",-1),r=["value"],d=(0,t._)("option",{selected:"",disabled:"",value:""}," RESEARCHER: Select volume order ",-1),c=["value"],p={class:"q-my-xl"},h=(0,t.Uk)(" Thank you for choosing to participate in this experiment. Please let the researcher know if you have any questions at any point throughout the experiment. "),w=(0,t._)("br",null,null,-1),v=(0,t._)("br",null,null,-1),m=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),E=(0,t.Uk)(" You will repeat this 7 times and take a short break. You will repeat this process 2 more times for a total of 21 displayed sequences. Each set of sequences will vary in volume. "),b=(0,t._)("br",null,null,-1),y=(0,t._)("br",null,null,-1),f=(0,t.Uk)(" The test will begin as soon as you click the START button below: ");function _(e,l,o,_,R,T){const k=(0,t.up)("q-btn"),S=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(S,{class:"flex flex-center"},{default:(0,t.w5)((()=>[(0,t._)("div",a,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":l[0]||(l[0]=l=>e.participantId=l),placeholder:"Participant ID",class:"q-mb-md"},null,512),[[i.nr,e.participantId]]),(0,t._)("div",s,[(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":l[1]||(l[1]=l=>e.condition=l)},[u,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.conditionOptions,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e,value:e},(0,n.zw)(e),9,r)))),128))],512),[[i.bM,e.condition]])]),(0,t._)("div",null,[(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":l[2]||(l[2]=l=>e.volumeOrder=l)},[d,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.volumeOrderOptions,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e,value:e},(0,n.zw)(e),9,c)))),128))],512),[[i.bM,e.volumeOrder]])]),(0,t._)("div",p,[h,w,v,(0,t.Uk)(" During this experiment, you will be asked to write down a "+(0,n.zw)(e.SEQUENCE_LENGTH)+" digit sequence after it is displayed on the screen. You will be given a pair of headphones where you will hear dialogue, but you should ignore this dialogue. While the dialogue plays, you will see a "+(0,n.zw)(e.SEQUENCE_LENGTH)+" digit sequence on the screen, followed by a screen where you can input the displayed sequence to the best of your abilities. You will have "+(0,n.zw)(Math.floor(e.TIME_TO_RECITE_MS/1e3))+" seconds to input the sequence before whatever you have typed is automatically submitted. ",1),m,g,E,b,y,f]),(0,t._)("div",null,[(0,t.Wm)(k,{label:"START",color:"primary",size:"lg",onClick:e.proceedToTest},null,8,["onClick"])])])])),_:1})}o(5363);var R=o(1959),T=o(9582),k=o(8825),S=o(9151);const q=(0,t.aZ)({name:"PageIndex",setup(){const e=(0,k.Z)(),l=(0,T.tv)(),o=["low-med-high","low-high-med","med-low-high","med-high-low","high-low-med","high-med-low"],t=["unintelligible","clear","ambient"],i=(0,R.iH)(""),n=(0,R.iH)(""),a=(0,R.iH)(""),s=()=>{i.value?o.includes(n.value)?t.includes(a.value)?l.replace(`/test/${i.value}/${a.value}/${n.value}`):e.notify({message:"RESEARCHER: Select volume order",color:"negative",position:"top"}):e.notify({message:"RESEARCHER: Select dialogue condition",color:"negative",position:"top"}):e.notify({message:"RESEARCHER: Enter participant ID",color:"negative",position:"top"})};return window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=""})),{SEQUENCE_LENGTH:S.fo,TIME_TO_RECITE_MS:S.xM,volumeOrderOptions:o,volumeOrder:n,conditionOptions:t,condition:a,participantId:i,proceedToTest:s}}});var C=o(4260),H=o(4379),x=o(3187),O=o(7518),I=o.n(O);const U=(0,C.Z)(q,[["render",_]]),M=U;I()(q,"components",{QPage:H.Z,QBtn:x.Z})}}]);