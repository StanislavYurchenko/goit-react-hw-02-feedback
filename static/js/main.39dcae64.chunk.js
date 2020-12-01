(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),i=t(16),o=t.n(i),c=t(5),s=t(6),d=t(9),l=t(8),u=t(2),b=t(3);function h(){var e=Object(u.a)(["\n  flex-basis: 43%;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.3);\n  outline: none;\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  transition: all 0.3s linear;\n  background-color: #fff;\n  padding: 5px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return h=function(){return e},e}function p(){var e=Object(u.a)(["\n  margin: 0 auto;\n  width: 300px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.3);\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]);return p=function(){return e},e}var j=b.b.div(p()),g=b.b.button(h()),x=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={value:e.props.initialValue},e.incrementHandler=function(n){e.setState((function(e,n){return{value:e.value+n.step}}))},e.decrementHandler=function(n){e.setState((function(e,n){return{value:e.value-n.step}}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.step;return Object(r.jsxs)(j,{children:[Object(r.jsx)("span",{children:this.state.value}),Object(r.jsxs)(g,{type:"button",onClick:this.incrementHandler,children:["Increment by ",e]}),Object(r.jsxs)(g,{type:"button",onClick:this.decrementHandler,children:["Decrement by ",e]})]})}}]),t}(a.Component);x.defaultProps={step:1,initialValue:0};var f=x,v=t(7),O=t(13),m=t(4),k=t.n(m);function w(){var e=Object(u.a)(["\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.3);\n  outline: none;\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  transition: all 0.3s linear;\n  background-color: #fff;\n  padding: 5px;\n  width: 100%;\n  font-size: 20px;\n  cursor: pointer;\n\n  :hover:not(:disabled) {\n    cursor: pointer;\n    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);\n    border: 1px solid rgba(0, 0, 255, 1);\n  }\n  :disabled {\n    cursor: default;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(u.a)(["\n      :after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 2px;\n        right: 2px;\n        width: 10px;\n        height: 10px;\n        border-radius: 5px;\n        background-color: blue;\n        border: 1px solid rgba(0, 0, 255, 0.3);\n        box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n        cursor: pointer;\n      }\n    "]);return y=function(){return e},e}function F(){var e=Object(u.a)(["\n      padding-right: 30px;\n      width: 100%;\n      :before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: 14px;\n        height: 14px;\n        border-radius: 5px;\n        border: 1px solid rgba(0, 0, 255, 0.3);\n        box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n        cursor: pointer;\n      }\n    "]);return F=function(){return e},e}function H(){var e=Object(u.a)(["\n  font-size: 18px;\n  text-decoration: none;\n  color: black;\n  position: relative;\n\n  ","\n\n  ","\n"]);return H=function(){return e},e}function P(){var e=Object(u.a)(["\n  display: none;\n"]);return P=function(){return e},e}function C(){var e=Object(u.a)(["\n      width: 100%;\n      height: 100px;\n      resize: none;\n    "]);return C=function(){return e},e}function S(){var e=Object(u.a)(["\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 255, 0.3);\n  outline: none;\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  transition: all 0.3s linear;\n  padding: 5px;\n  border-radius: 5px;\n\n  :focus {\n    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);\n    border-bottom: 1px solid rgba(0, 0, 255, 1);\n  }\n\n  ::placeholder {\n    font-family: sans-serif;\n  }\n\n  ","\n"]);return S=function(){return e},e}function E(){var e=Object(u.a)(["\n      align-items: baseline;\n    "]);return E=function(){return e},e}function z(){var e=Object(u.a)(["\n  margin: 0 0 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  ","\n"]);return z=function(){return e},e}function A(){var e=Object(u.a)(["\n  margin: 0 auto;\n  width: 300px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.3);\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]);return A=function(){return e},e}var M=b.b.form(A()),T=b.b.div(z(),(function(e){return e.radio&&Object(b.a)(E())})),N=b.b.input(S(),(function(e){return"message"===e.name&&Object(b.a)(C())})),V=b.b.input(P()),B=b.b.label(H(),(function(e){return e.checkbox&&Object(b.a)(F())}),(function(e){return e.checked&&Object(b.a)(y())})),D=b.b.button(w()),I={login:"",email:"",password:"",agreed:!1,gender:null,age:"",message:""},J="male",L="female",G=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state=Object(O.a)({},I),e.id={login:k.a.generate(),email:k.a.generate(),password:k.a.generate(),agreed:k.a.generate(),genderMale:k.a.generate(),genderFemale:k.a.generate(),age:k.a.generate(),message:k.a.generate()},e.changeHandler=function(n){var t=n.target,r=t.name,a=t.value,i=t.type,o=t.checked;e.setState(Object(v.a)({},r,"checkbox"===i?o:a))},e.submitHandler=function(n){n.preventDefault(),e.reset()},e.reset=function(){e.setState(Object(O.a)({},I))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.login,t=e.email,a=e.password,i=e.agreed,o=e.gender,c=e.age,s=e.message;return Object(r.jsxs)(M,{onSubmit:this.submitHandler,children:[Object(r.jsxs)(T,{children:[Object(r.jsx)(B,{htmlFor:this.id.login,children:"Name"}),Object(r.jsx)(N,{type:"text",placeholder:"Enter login",name:"login",value:n,id:this.id.login,onChange:this.changeHandler})]}),Object(r.jsxs)(T,{children:[Object(r.jsx)(B,{htmlFor:this.id.email,children:"Email"}),Object(r.jsx)(N,{type:"text",placeholder:"Enter Email",name:"email",value:t,id:this.id.email,onChange:this.changeHandler})]}),Object(r.jsxs)(T,{children:[Object(r.jsx)(B,{htmlFor:this.id.password,children:"Password"}),Object(r.jsx)(N,{type:"password",placeholder:"Enter password",name:"password",value:a,id:this.id.password,onChange:this.changeHandler})]}),Object(r.jsxs)(T,{radio:!0,children:[Object(r.jsx)(B,{as:"div",children:"Choose your gender"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"radio",checked:o===J,value:J,name:"gender",id:this.id.genderMale,onChange:this.changeHandler}),Object(r.jsx)(B,{htmlFor:this.id.genderMale,children:J}),Object(r.jsx)("input",{type:"radio",checked:o===L,value:L,name:"gender",id:this.id.genderFemale,onChange:this.changeHandler}),Object(r.jsx)(B,{htmlFor:this.id.genderFemale,children:L})]})]}),Object(r.jsxs)(T,{children:[Object(r.jsx)(B,{htmlFor:this.id.age,children:"Choose your age"}),Object(r.jsxs)("select",{name:"age",value:c,onChange:this.changeHandler,id:this.id.age,children:[Object(r.jsxs)("option",{value:"",disabled:!0,children:[" ","..."," "]}),Object(r.jsx)("option",{value:"18-25",children:"18-25"}),Object(r.jsx)("option",{value:"26-35",children:"26-35"}),Object(r.jsx)("option",{value:"36+",children:"36+"})]})]}),Object(r.jsx)(T,{children:Object(r.jsx)(N,{as:"textarea",name:"message",value:s,onChange:this.changeHandler,id:this.id.message,placeholder:"Enter your message"})}),Object(r.jsxs)(T,{children:[Object(r.jsx)(B,{checkbox:!0,checked:this.state.agreed,htmlFor:this.id.agreed,children:"Agree to terms"}),Object(r.jsx)(V,{type:"checkbox",checked:i,name:"agreed",id:this.id.agreed,onChange:this.changeHandler})]}),Object(r.jsxs)(D,{type:"submit",disabled:!i,children:["Sign up as ",n]})]})}}]),t}(a.Component);G.defaultProps={};var q=G;function K(e){var n=e.good,t=e.neutral,a=e.bad,i=e.total,o=e.positivePercentage;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:["Good: ",n]}),Object(r.jsxs)("div",{children:["Neutral: ",t]}),Object(r.jsxs)("div",{children:["Bad: ",a]}),Object(r.jsxs)("div",{children:["Total: ",i]}),Object(r.jsxs)("div",{children:["Positive feedback: ",o,"%"]})]})}K.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var Q=K;function R(){var e=Object(u.a)(["\n  flex-basis: 30%;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.3);\n  outline: none;\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  transition: all 0.3s linear;\n  background-color: #fff;\n  padding: 5px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return R=function(){return e},e}var U=b.b.button(R());var W=function(e){var n=e.name,t=e.callback;return Object(r.jsx)(U,{name:n,onClick:t,type:"button",children:n})};function X(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return X=function(){return e},e}var Y=b.b.div(X());function Z(e){var n=e.options,t=e.onLeaveFeedback;return Object(r.jsx)(Y,{children:n.map((function(e){return Object(r.jsx)(W,{name:e,callback:t})}))})}Z.defaultProps={options:["good","neutral","bad"]};var $=Z;function _(e){var n=e.title,t=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:n}),t]})}_.defaultProps={title:""};var ee=_;function ne(e){var n=e.message;return Object(r.jsx)("div",{children:n})}ne.defaultProps={message:""};var te=ne;function re(){var e=Object(u.a)(["\n  margin: 0 auto;\n  width: 300px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.3);\n  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]);return re=function(){return e},e}var ae=b.b.div(re()),ie=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,n){return e+n}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e.clickHandler=function(n){var t=n.target.name;e.setState((function(e){return Object(v.a)({},t,e[t]+1)}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.good,t=e.neutral,a=e.bad,i=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(r.jsxs)(ae,{children:[Object(r.jsx)(ee,{title:"Please leave feedback",children:Object(r.jsx)($,{options:["good","neutral","bad"],onLeaveFeedback:this.clickHandler})}),Object(r.jsx)(ee,{title:"Statistics",children:i?Object(r.jsx)(Q,{good:n,neutral:t,bad:a,total:i,positivePercentage:o}):Object(r.jsx)(te,{message:"No feedback given"})})]})}}]),t}(a.Component);ie.defaultProps={};var oe=ie;function ce(){var e=Object(u.a)(["\n  padding: 15px;\n"]);return ce=function(){return e},e}var se=b.b.div(ce());var de=function(e){var n=e.children;return Object(r.jsx)(se,{children:n})},le=function(){return Object(r.jsxs)(de,{children:[Object(r.jsx)(f,{step:2,initialValue:100}),Object(r.jsx)(q,{}),Object(r.jsx)(oe,{})]})};o.a.render(Object(r.jsx)(le,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.39dcae64.chunk.js.map