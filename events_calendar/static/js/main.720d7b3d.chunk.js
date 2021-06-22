(this.webpackJsonpevents_calendar=this.webpackJsonpevents_calendar||[]).push([[0],{117:function(e,t,c){},119:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(26),r=c.n(s),j=(c(63),c(25)),i=c(6),l=(c(64),c(3)),o=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"Events calendar"})})},b=c(5),d=(c(66),c(67),c(8)),u=Object(n.createContext)(),O=function(e){var t=e.children,c=localStorage.getItem("events")?JSON.parse(localStorage.getItem("events")):[],a=Object(n.useState)(c),s=Object(d.a)(a,2),r=s[0],j=s[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),b=o[0],O=o[1],m={id:1,date:function(e){return e.setHours(0,0,0,0)}(new Date),name:"",type:"1",address:"",time:"",budget:"",note:""},v=Object(n.useState)(m),h=Object(d.a)(v,2),f=h[0],x=h[1],p=f.date;return Object(n.useEffect)((function(){var e=r.filter((function(e){return e.date===p}));O(e),localStorage.setItem("events",JSON.stringify(r))}),[r]),Object(l.jsx)(u.Provider,{value:{events:r,setEvents:j,filteredEvents:b,setFilteredEvents:O,formInputs:m,fields:f,setFormData:x},children:t})},m=function(){return Object(n.useContext)(u)},v=(c(68),function(e){return Object(l.jsxs)("div",{className:"events__list-item",children:[Object(l.jsx)("div",{className:"event__name",children:e.name?e.name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),"1"===e.type&&Object(l.jsxs)("div",{className:"event__budget",children:[Object(l.jsx)("span",{children:"\u0411\u044e\u0434\u0436\u0435\u0442:"})," ",e.budget," $"]}),"2"===e.type&&Object(l.jsxs)("div",{className:"event__address-and-time",children:[Object(l.jsx)("span",{children:"\u0410\u0434\u0440\u0435\u0441:"})," ",e.address," ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"\u0412\u0440\u0435\u043c\u044f:"})," ",e.time]}),"3"===e.type&&Object(l.jsx)("div",{className:"event__note",children:e.note}),Object(l.jsxs)("div",{className:"event__actions-btns",children:[Object(l.jsx)("span",{className:"event__action-btn event__edit-btn",onClick:e.onEdit,children:Object(l.jsx)("i",{className:"mdi mdi-pencil"})}),Object(l.jsx)("span",{className:"event__action-btn event__delete-btn",onClick:e.onRemove,children:Object(l.jsx)("i",{className:"mdi mdi-delete"})})]})]})}),h=function(){var e=Object(i.f)(),t=m(),c=t.events,a=t.setEvents,s=t.fields,r=t.setFormData,j=t.filteredEvents;return Object(l.jsx)("div",{className:"events",children:Object(l.jsx)("div",{className:"events__list",children:j.length?j.map((function(t,j){return Object(n.createElement)(v,Object(b.a)(Object(b.a)({},t),{},{key:"event_".concat(t.id),id:j,onRemove:function(){!function(e){var t=c.filter((function(t){return t.id!==e}));a(t)}(t.id)},onEdit:function(){!function(t){r(Object(b.a)(Object(b.a)({},s),t)),e.push("/edit")}(t)}}))})):"\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0435 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e"})})},f=c(52),x=c.n(f),p=c(74),g=c(55),N=(c(73),function(e){var t=m(),c=t.events,n=t.fields,a=t.setFormData,s=t.formInputs,r=t.setFilteredEvents,j=Object(i.f)(),o=n.date;return Object(l.jsx)("main",{className:"content container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"sidebar choose-date col-12 col-sm-12 col-md-4",children:[Object(l.jsx)("div",{className:"choose-date__title",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(l.jsx)(x.a,{dateFromat:"YYYY-MM-dd",selected:o,onChange:function(e){return function(e){var t=function(e){return e.setHours(0,0,0,0)}(e);a(Object(b.a)(Object(b.a)({},n),{},{date:t}));var s=c.filter((function(e){return e.date===t}));r(s)}(e)},highlightDates:c.map((function(e){return Object(p.default)(new Date(e.date),0)})),calendarStartDay:1,value:o,locale:g.a,inline:!0}),Object(l.jsx)("div",{className:"actions",children:Object(l.jsx)("button",{className:"btn btn-primary add-event-btn",onClick:function(){a(Object(b.a)(Object(b.a)(Object(b.a)({},n),s),{},{date:o})),j.push("/add")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(l.jsxs)("div",{className:"content col-12 col-sm-12 col-md-8 mt-4 mt-md-0",children:[Object(l.jsx)("h3",{className:"mb-3",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u0439"}),Object(l.jsx)(h,{})]})]})})}),_=c(56),y=function(e){var t=Object(i.f)(),c=m(),a=c.events,s=c.setEvents,r=c.fields,j=c.setFormData,o=c.formInputs,u=r.date,O=r.name,v=r.type,h=r.budget,f=r.address,x=r.time,p=r.note,g=O?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",N=Object(n.useState)(!1),y=Object(d.a)(N,2),S=y[0],k=y[1],C=Object(n.useState)(g),E=Object(d.a)(C,2),w=E[0],F=E[1],D=h?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u044e\u0434\u0436\u0435\u0442",I=Object(n.useState)(!1),B=Object(d.a)(I,2),J=B[0],Y=B[1],M=Object(n.useState)(D),H=Object(d.a)(M,2),R=H[0],A=H[1],P=f?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441/\u043c\u0435\u0441\u0442\u043e",$=Object(n.useState)(!1),q=Object(d.a)($,2),z=q[0],G=q[1],K=Object(n.useState)(P),L=Object(d.a)(K,2),Q=L[0],T=L[1],U=x?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f",V=Object(n.useState)(!1),W=Object(d.a)(V,2),X=W[0],Z=W[1],ee=Object(n.useState)(U),te=Object(d.a)(ee,2),ce=te[0],ne=te[1],ae=p?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",se=Object(n.useState)(!1),re=Object(d.a)(se,2),je=re[0],ie=re[1],le=Object(n.useState)(ae),oe=Object(d.a)(le,2),be=oe[0],de=oe[1],ue=Object(n.useState)(!1),Oe=Object(d.a)(ue,2),me=Oe[0],ve=Oe[1];Object(n.useEffect)((function(){switch(v){case"1":ve(!w&&!R);break;case"2":ve(!(w||Q||ce));break;case"3":ve(!w&&!be)}}),[w,R,Q,ce,be,v]),Object(n.useEffect)((function(){switch(v){case"1":j(Object(b.a)(Object(b.a)({},r),{},{address:"",time:"",note:""})),G(!1),Z(!1),ie(!1),A(D);break;case"2":j(Object(b.a)(Object(b.a)({},r),{},{budget:"",note:""})),Y(!1),ie(!1),T(P),ne(U);break;case"3":j(Object(b.a)(Object(b.a)({},r),{},{address:"",budget:"",time:""})),Y(!1),G(!1),Z(!1),de(U)}}),[v]);var he=function(e){switch(e.target.name){case"event_name":k(!0);break;case"event_budget":Y(!0);break;case"event_address":G(!0);break;case"event_time":Z(!0);break;case"event_note":ie(!0)}};return Object(l.jsxs)("form",{className:"event__form",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),S&&w&&Object(l.jsx)("div",{className:"error-message",children:w}),Object(l.jsx)("input",{type:"text",name:"event_name",className:"form-control ".concat(S&&w&&"error"),value:O,autoFocus:!0,onChange:function(e){e.target.value?F(""):F("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),j(Object(b.a)(Object(b.a)({},r),{},{name:e.target.value}))},onBlur:function(e){he(e)}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"\u0422\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(l.jsxs)("select",{className:"form-control",name:"event_type",value:v,onChange:function(e){j(Object(b.a)(Object(b.a)({},r),{},{type:e.target.value}))},children:[Object(l.jsx)("option",{value:"1",children:"\u041f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0435 \u0434\u043d\u0438"}),Object(l.jsx)("option",{value:"2",children:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"}),Object(l.jsx)("option",{value:"3",children:"\u041f\u043e\u043c\u0435\u0442\u043a\u0438 / \u0434\u0440\u0443\u0433\u043e\u0435"})]})]}),"1"===v&&Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"\u0411\u044e\u0434\u0436\u0435\u0442"}),J&&R&&Object(l.jsx)("div",{className:"error-message",children:R}),Object(l.jsx)("input",{type:"number",name:"event_budget",className:"form-control ".concat(J&&R&&"error"),value:h,onChange:function(e){e.target.value?e.target.value<0?A("\u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442"):A(""):A("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u044e\u0434\u0436\u0435\u0442"),j(Object(b.a)(Object(b.a)({},r),{},{budget:e.target.value}))},onBlur:function(e){he(e)}})]}),"2"===v&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"\u041a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438?"}),z&&Q&&Object(l.jsx)("div",{className:"error-message",children:Q}),Object(l.jsx)("input",{type:"text",name:"event_address",className:"form-control ".concat(z&&Q&&"error"),value:f,onChange:function(e){e.target.value?T(""):T("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441/\u043c\u0435\u0441\u0442\u043e"),j(Object(b.a)(Object(b.a)({},r),{},{address:e.target.value}))},onBlur:function(e){he(e)}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e?"}),X&&ce&&Object(l.jsx)("div",{className:"error-message",children:ce}),Object(l.jsx)("input",{type:"text",name:"event_time",className:"form-control ".concat(X&&ce&&"error"),value:x,onChange:function(e){e.target.value?ne(""):ne("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f"),j(Object(b.a)(Object(b.a)({},r),{},{time:e.target.value}))},onBlur:function(e){he(e)}})]})]}),"3"===v&&Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"\u0422\u0435\u043a\u0441\u0442"}),je&&be&&Object(l.jsx)("div",{className:"error-message",children:be}),Object(l.jsx)("textarea",{className:"form-control ".concat(je&&be&&"error"),name:"event_note",rows:"2",value:p,onChange:function(e){e.target.value?de(""):de("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"),j(Object(b.a)(Object(b.a)({},r),{},{note:e.target.value}))},onBlur:function(e){he(e)}})]}),Object(l.jsxs)("div",{className:"actions-btns d-flex justify-content-between",children:[Object(l.jsx)("button",{className:"btn btn-secondary add-event-btn",onClick:function(){t.push("/")},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),"/add"===e.location.pathname?Object(l.jsx)("button",{type:"button",className:"btn btn-primary add-event-btn",onClick:function(){0!==a.length?r.id=a[a.length-1].id+1:r.id=1,s([].concat(Object(_.a)(a),[r])),j(Object(b.a)(Object(b.a)(Object(b.a)({},r),o),{},{date:u})),t.push("/")},disabled:!me,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}):Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){var e=a.map((function(e){return e.id===r.id?Object(b.a)(Object(b.a)({},e),r):e}));s(e),j(Object(b.a)(Object(b.a)(Object(b.a)({},r),o),{},{date:u})),t.push("/")},disabled:!me,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]})]})},S=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-sm-8 col-md-6 col-lg-4",children:[Object(l.jsx)("h2",{className:"mb-4",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(l.jsx)(y,Object(b.a)({},e))]})})})},k=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-sm-8 col-md-6 col-lg-5",children:[Object(l.jsx)("h2",{className:"mb-4",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(l.jsx)(y,Object(b.a)({},e))]})})})};var C=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(j.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:N}),Object(l.jsx)(i.a,{path:"/add",component:S}),Object(l.jsx)(i.a,{path:"/edit",component:k})]})})]})};c(117);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{children:Object(l.jsx)(C,{})})}),document.getElementById("root"))},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.720d7b3d.chunk.js.map