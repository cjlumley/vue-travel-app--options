import{o as e,c as s,a,l as n,v as o,n as r}from"./vendor.1ba5d04c.js";const t={data:()=>({username:"",password:""}),methods:{login(){window.user=this.username;const e=this.$route.query.redirect||"/protected";this.$router.push(e)}}},l={class:"login"},u=a("h1",null,"Login",-1),d=a("label",{for:"username"},"Username",-1),i=a("label",{for:"password"},"Password",-1),p=a("button",{class:"btn"},"Login",-1);t.render=function(t,m,c,w,f,b){return e(),s("div",l,[a("form",{class:"form",onSubmit:m[3]||(m[3]=r(((...e)=>b.login&&b.login(...e)),["prevent"]))},[u,d,n(a("input",{"onUpdate:modelValue":m[1]||(m[1]=e=>f.username=e),name:"username",type:"text",class:"input"},null,512),[[o,f.username]]),i,n(a("input",{"onUpdate:modelValue":m[2]||(m[2]=e=>f.password=e),name:"password",type:"text",class:"input"},null,512),[[o,f.password]]),p],32)])};export default t;
