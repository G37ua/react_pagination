(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(4),i=t.n(n),l=t(3),r=(t(10),t(5)),o=t.n(r);function s(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var d=t(0),j=function(e){var a=e.active,t=e.dataCy,c=e.label,n=e.disabled,i=e.onClick,l=e.ariaDisabled,r=void 0===l||l;return Object(d.jsx)("li",{className:o()("page-item",{disabled:n,active:a}),children:Object(d.jsx)("button",{type:"button","data-cy":t,className:"page-link",onClick:i,"aria-disabled":r?"true":"false",children:c})})};j.defaultProps={ariaDisabled:!0};var b=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=void 0===c?1:c,i=e.onPageChange,l=Math.ceil(a/t),r=s(1,l);return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)(j,{label:"\xab",active:!1,disabled:1===n,ariaDisabled:1===n,onClick:function(){n&&1!==n&&i(n-1)},dataCy:"prevLink"}),r.map((function(e){return Object(d.jsx)(j,{active:n===e,label:String(e),disabled:!1,onClick:function(){return i(e)},dataCy:"pageLink"},e)})),Object(d.jsx)(j,{label:"\xbb",active:!1,disabled:n===l,ariaDisabled:n===l,onClick:function(){n&&n!==l&&i(n+1)},dataCy:"nextLink"})]})},u=s(1,42).map((function(e){return"Item ".concat(e)})),p=function(){var e=Object(c.useState)(5),a=Object(l.a)(e,2),t=a[0],n=a[1],i=Object(c.useState)(1),r=Object(l.a)(i,2),o=r[0],s=r[1],j=u.length,p=t*o,h=p-t,g=p>j?j:p,O=u.slice(h,g);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(h+1," - ").concat(g," of ").concat(j,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){n(5),n(+e.target.value),s(1)},value:t,children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(b,{total:j,perPage:t,currentPage:o,onPageChange:function(e){return s(e)}}),Object(d.jsx)("ul",{children:O.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};i.a.render(Object(d.jsx)(c.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1208bbc8.chunk.js.map