import{_ as a,n as i,F as d,r as s,o as _,a as u,d as l,b as t,t as n,e as h}from"./index-55373f78.js";const p={components:{headerVue:i,FooterView:d},data(){return{categories:[],products:[],items:[],title:"",categoryId:"",desc:"",price:"",imageUrl:"",quantity:1}},methods:{callFunction:function(){var o=new Date;console.log(o)}},async mounted(){this.products=JSON.parse(localStorage.getItem("product")||"[]"),console.log(localStorage.product),this.callFunction(),this.items=JSON.parse(localStorage.getItem("item")||"[]"),console.log(localStorage.item)}},m={class:"cart"},g=t("div",{class:"text-2xl font-bold pl-36 pt-4"},[t("h1",null,"My Orders")],-1),f=t("br",null,null,-1),y={class:"flex justify-evenly"},v=t("tr",null,[t("th",null,"Item"),t("th",null,"Quantity"),t("th",null,"Price")],-1),V={class:"h-48"},x=["src"],F=t("td",null,"1",-1),S={class:"h-48"},b=["src"],w=t("td",null,"1",-1);function I(o,N,B,D,e,O){const c=s("headerVue"),r=s("FooterView");return _(),u(h,null,[l(c),t("div",m,[g,f,t("div",y,[t("table",null,[v,t("tr",V,[t("td",null,[t("img",{alt:"",class:"h-48",src:e.products.imageUrl},null,8,x)]),F,t("td",null,n(e.products.price),1)]),t("tr",S,[t("td",null,[t("img",{alt:"",class:"h-48",src:e.items.imageUrl},null,8,b)]),w,t("td",null,n(e.items.price),1)])])]),l(r)])],64)}const k=a(p,[["render",I]]);export{k as default};