import{d as v,z as g,a as s,p as w,o as n,f as _,w as e,e as t,D as l,g as a,t as k,u as c,aF as x,aG as b,H as p,q as y,b as f}from"./index-2419965a.js";const C=f("div",{class:"card-header"},"组件方式判断权限",-1),z=f("div",{class:"card-header"},"函数方式判断权限",-1),A=f("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),S=v({name:"PermissionButton",__name:"index",setup(B){const o=g(()=>({width:"85vw",justifyContent:"start"}));return(D,N)=>{const h=s("el-tag"),d=s("el-button"),r=s("Auth"),u=s("el-card"),m=s("el-space"),i=w("auth");return n(),_(m,{direction:"vertical",size:"large"},{default:e(()=>[t(h,{style:l(o.value),size:"large",effect:"dark"},{default:e(()=>[a(" 当前拥有的code列表："+k(c(x)()),1)]),_:1},8,["style"]),t(u,{shadow:"never",style:l(o.value)},{header:e(()=>[C]),default:e(()=>[t(r,{value:"btn_add"},{default:e(()=>[t(d,{type:"success"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_edit"]},{default:e(()=>[t(d,{type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_add","btn_edit","btn_delete"]},{default:e(()=>[t(d,{type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1},8,["style"]),t(u,{shadow:"never",style:l(o.value)},{header:e(()=>[z]),default:e(()=>[c(b)("btn_add")?(n(),_(d,{key:0,type:"success"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})):p("",!0),c(b)(["btn_edit"])?(n(),_(d,{key:1,type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):p("",!0),c(b)(["btn_add","btn_edit","btn_delete"])?(n(),_(d,{key:2,type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):p("",!0)]),_:1},8,["style"]),t(u,{shadow:"never",style:l(o.value)},{header:e(()=>[A]),default:e(()=>[y((n(),_(d,{type:"success"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[i,"btn_add"]]),y((n(),_(d,{type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[i,["btn_edit"]]]),y((n(),_(d,{type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[i,["btn_add","btn_edit","btn_delete"]]])]),_:1},8,["style"])]),_:1})}}});export{S as default};
