"use strict";(self.webpackChunkgoose_track=self.webpackChunkgoose_track||[]).push([[68],{5324:function(e,s,a){a.d(s,{E:function(){return n},P:function(){return o}});var r=a(6727),o=r.Ry().shape({name:r.Z_().min(3,"Too Short!").max(36,"Too Long!").required("Required!"),email:r.Z_().email("Invalid email!").required("Required!"),password:r.Z_().min(8,"Password must be 8 characters long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter").matches(/[^\w]/,"Password requires a symbol").required("Required!")}),n=r.Ry().shape({email:r.Z_().email("Invalid email").required("Required!"),password:r.Z_().min(8,"Password must be 8 characters long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter").matches(/[^\w]/,"Password requires a symbol").required("Required!")})},3068:function(e,s,a){a.r(s),a.d(s,{default:function(){return J}});var r=a(5861),o=a(9439),n=a(7757),i=a.n(n),t=a(1087),c=a(7689),l=a(5705),m=a(9434),d=a(1686),u=a.n(d),_=a(3853),p=a(6129),h="LoginForm_container__d3-dh",g="LoginForm_form__Kx5pU",w="LoginForm_title__cvnUl",x="LoginForm_label__RGIMj",v="LoginForm_input__7Ngg7",j="LoginForm_button__ph0FE",f="LoginForm_link__GY3qv",N="LoginForm_icon__i+0e7",b="LoginForm_bgimages__TRMcl",F="LoginForm_bgImagesMsg__VCztp",L="LoginForm_bgImagesText__9GvuW",q="LoginForm_span__OVKvo",k="LoginForm_spanIcon__a8YYV",y="LoginForm_invalidFeedback__FiANy",I="LoginForm_feedback__Nfbc2",P="LoginForm_isInvalidLabel__zV8jZ",Z="LoginForm_isInvalid__ocY4W",R="LoginForm_btnToggle__IoS-D",S=a(5324),C=a(9126),E=a(2791),T=a(1515),V=a(184),Y={email:"",password:""},z=function(){var e=(0,m.I0)(),s=(0,c.s0)(),a=(0,m.v9)(T.Ux),n=(0,E.useState)("password"),d=(0,o.Z)(n,2),z=d[0],J=d[1],U=(0,E.useState)((0,V.jsx)(C.Jmv,{})),A=(0,o.Z)(U,2),G=A[0],M=A[1],B=function(){"password"===z?(M((0,V.jsx)(C.xt8,{})),J("text")):(M((0,V.jsx)(C.Jmv,{})),J("password"))},K=function(){var o=(0,r.Z)(i().mark((function r(o,n){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.resetForm,r.prev=1,r.next=4,e((0,p.hC)(o)).unwrap();case 4:u().Notify.success("It's ok!"),t(),s("/calendar/month/".concat(a.slice(0,7))),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),u().Notify.failure("Oops! You make some mistake:-(");case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e,s){return o.apply(this,arguments)}}();return(0,V.jsxs)("div",{className:h,children:[(0,V.jsx)("div",{className:b}),(0,V.jsx)("div",{className:F,children:(0,V.jsxs)("p",{className:L,children:["Quickly ",(0,V.jsx)("span",{className:q,children:"come in"})," and write down your tasks for the day!"]})}),(0,V.jsx)(l.J9,{const:!0,initialValues:Y,validationSchema:S.E,onSubmit:K,children:function(e){var s=e.errors,a=e.touched;e.resetForm;return(0,V.jsxs)(l.l0,{autoComplete:"off",className:g,children:[(0,V.jsx)("h1",{className:w,children:"Log In"}),(0,V.jsxs)("label",{className:s.email&&a.email?P:x,children:["Email",(0,V.jsx)(l.gN,{id:"email",name:"email",type:"email",placeholder:"Enter email",className:s.email&&a.email?Z:v}),(0,V.jsx)("div",{className:I,children:(0,V.jsx)(l.Bc,{name:"email",component:"div",className:y})})]}),(0,V.jsxs)("label",{className:s.password&&a.password?P:x,children:["Password",(0,V.jsx)(l.gN,{id:"password",name:"password",type:z,placeholder:"Enter password",className:s.password&&a.password?Z:v}),(0,V.jsx)("button",{className:R,type:"button",onClick:B,children:(0,V.jsx)("div",{className:k,children:G})}),(0,V.jsx)("div",{className:I,children:(0,V.jsx)(l.Bc,{name:"password",component:"div",className:y})})]}),(0,V.jsxs)("button",{className:j,type:"submit",children:["Log in",(0,V.jsx)(_._fJ,{className:N})]})]})}}),(0,V.jsx)(t.rU,{className:f,to:"/register",children:"Sign up"})]})};function J(){return(0,V.jsx)("div",{children:(0,V.jsx)(z,{})})}}}]);
//# sourceMappingURL=68.988f2427.chunk.js.map