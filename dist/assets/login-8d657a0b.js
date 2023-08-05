import{_ as c,r as p,o as u,a as _,b as t,s as i,v as r,d as m,w as h,h as g}from"./index-55373f78.js";const x="/assets/login-f1f09ee7.svg",b={setup(){},data(){return{email:"",password:""}},async mounted(){console.log("hello world")},methods:{async onSubmit(l){l.preventDefault();try{const a=await(await fetch("http://localhost:3001/auth/login",{method:"POST",headers:{"Content-type":"application/json",Origin:"http://localhost:3000"},body:JSON.stringify({email:this.email,password:this.password})})).json();if(!a.success){alert(a.error);return}}catch(e){console.log(e)}this.$router.push({name:"home"})}}},f={class:"gradient-form h-full dark:bg-neutral-700"},w={class:"container h-full p-10 mx-auto"},v={class:"g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"},y={class:"w-full"},k={class:"block rounded-lg bg-white shadow-lg dark:bg-neutral-800"},A={class:"g-0 lg:flex lg:flex-wrap"},C={class:"px-4 md:px-0 lg:w-8/12"},N={class:"md:mx-6 md:p-12"},T=t("div",{class:"pl-24"},[t("h4",{class:"mb-12 mt-1 pb-1 text-xl font-semibold"}," Welcome Back! ")],-1),S={class:"relative mb-4","data-te-input-wrapper-init":""},D=t("label",null,"Email",-1),P={class:"relative mb-4","data-te-input-wrapper-init":""},q=t("label",null,"Password",-1),E=t("div",{class:"mb-12 pb-1 pt-1"},[t("button",{class:"mb-3 inline-block w-6/12 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]",type:"submit","data-te-ripple-init":"","data-te-ripple-color":"light",style:{background:"#656ed3"}}," Log in ")],-1),G={class:"flex items-center pb-6"},O=t("p",{class:"mb-0"},"Don't have an account?",-1),V=t("div",{class:"flex gap-10 pl-14"},[t("img",{alt:"twitter",class:"w-12",src:"https://cdn.icon-icons.com/icons2/1143/PNG/512/twitterlogooutline_80724.png"}),t("img",{alt:"ig",class:"w-12",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuKIrTQghpwXheT_CtAAPYdmHUc3AjowkHw&usqp=CAU"}),t("img",{alt:"fb",class:"w-12",src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThdCXh-OpTAy284cSLacDpwXrz3AdqA8-GfJl8qrPlvyKOAGNw"})],-1),j=t("div",{class:"flex items-center rounded-b-lg lg:w-4/12 lg:rounded-r-lg lg:rounded-bl-none",style:{background:"#afb3ff"}},[t("img",{src:x,class:"grid grid-cols-2 items-center"}),t("div",{class:"px-4 py-6 md:mx-6 md:p-12"})],-1);function B(l,e,a,U,s,n){const d=p("router-link");return u(),_("section",f,[t("div",w,[t("div",v,[t("div",y,[t("div",k,[t("div",A,[t("div",C,[t("div",N,[T,t("form",{class:"lg:items-center",onSubmit:e[2]||(e[2]=(...o)=>n.onSubmit&&n.onSubmit(...o))},[t("div",S,[D,i(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),class:"peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",id:"exampleFormControlInput1",placeholder:"Email"},null,512),[[r,s.email]])]),t("div",P,[q,i(t("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),class:"peer block min-h-[auto] w-6/12 rounded-full border-2 border-[#656ED3] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",id:"exampleFormControlInput11",placeholder:"Password"},null,512),[[r,s.password]])]),E,t("div",G,[O,m(d,{type:"button",class:"font-bold",to:"/register"},{default:h(()=>[g("Register")]),_:1})]),V],32)])]),j])])])])])])}const X=c(b,[["render",B]]);export{X as default};
