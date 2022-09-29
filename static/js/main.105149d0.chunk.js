(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),d=c(1),i=(c(10),c(11),c(3)),o=c.n(i),r=c(0),j=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoId,a=e.selectedStatus,n=e.selectedQuery,l=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).filter((function(e){switch(a){case"active":return!1===e.completed;case"completed":return!0===e.completed;default:return!0}}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:l.map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:s===e.id?Object(r.jsx)("button",{"data-cy":"selectButton",className:"button is-link",type:"button",onClick:function(){return c(0)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye-slash"})})}):Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)})}))})]})})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.selectStatus,c=e.selectedStatus,a=e.selectQuery,n=e.selectedQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:s.All,children:" All "}),Object(r.jsx)("option",{value:s.Active,children:" Active "}),Object(r.jsx)("option",{value:s.Completed,children:" Completed "})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:n.trim()&&Object(r.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"Search clearing",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};c(13);function b(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return b(300).then((function(){return fetch(t)})).then((function(e){return e.json()}))}var m=function(){return Object(d.useEffect)((function(){b(500)})),Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.selectedTodoId,c=e.todos,s=e.selectTodo,a=Object(d.useState)(c.find((function(e){return e.id===t}))),n=Object(l.a)(a,1)[0],i=Object(d.useState)(),j=Object(l.a)(i,2),u=j[0],b=j[1];Object(d.useEffect)((function(){var e;(e=(null===n||void 0===n?void 0:n.userId)||0,h("/users/".concat(e))).then((function(e){b(e)}))}),[]);return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===n||void 0===n?void 0:n.id)}),Object(r.jsx)("button",{type:"button","aria-label":"Close window",className:"delete","data-cy":"modal-close",onClick:function(){s(0)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===n||void 0===n?void 0:n.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:o()({"has-text-success":null===n||void 0===n?void 0:n.completed},{"has-text-danger":!(null!==n&&void 0!==n&&n.completed)}),children:null!==n&&void 0!==n&&n.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]}):Object(r.jsx)(m,{})]})},x=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(!1),n=Object(l.a)(a,2),i=n[0],o=n[1],b=Object(d.useState)(0),x=Object(l.a)(b,2),f=x[0],v=x[1],p=Object(d.useState)("All"),N=Object(l.a)(p,2),y=N[0],g=N[1],S=Object(d.useState)(""),k=Object(l.a)(S,2),C=k[0],T=k[1];return Object(d.useEffect)((function(){o(!0),h("/todos").then((function(e){s(e)})).finally((function(){o(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{selectedStatus:y,selectStatus:g,selectQuery:T,selectedQuery:C})}),Object(r.jsx)("div",{className:"block",children:i?Object(r.jsx)(m,{}):Object(r.jsx)(j,{selectedQuery:C,selectedStatus:y,todos:c,selectedTodoId:f,selectTodo:v})})]})})}),f&&Object(r.jsx)(O,{selectedTodoId:f,todos:c,selectTodo:v})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.105149d0.chunk.js.map