(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{28:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(22),n=t.n(c),r=t(21),i=t(2),s=t(5),l=t(0);t(28);function o(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var j=t(23),b=t.n(j),d=t(4),u=function(e){var a=e.active,t=e.dataCy,c=e.label,n=e.disabled,r=e.onClick,i=e.ariaDisabled,s=void 0===i||i;return Object(d.jsx)("li",{className:b()("page-item",{disabled:n,active:a}),children:Object(d.jsx)("button",{type:"button","data-cy":t,className:"page-link",onClick:r,"aria-disabled":s?"true":"false",children:c})})};u.defaultProps={ariaDisabled:!0};var g=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=void 0===c?1:c,r=e.onPageChange,i=Math.ceil(a/t),s=o(1,i);return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)(u,{label:"\xab",active:!1,disabled:1===n,ariaDisabled:1===n,onClick:function(){n&&1!==n&&r(n-1)},dataCy:"prevLink"}),s.map((function(e){return Object(d.jsx)(u,{active:n===e,label:String(e),disabled:!1,onClick:function(){return r(e)},dataCy:"pageLink"},e)})),Object(d.jsx)(u,{label:"\xbb",active:!1,disabled:n===i,ariaDisabled:n===i,onClick:function(){n&&n!==i&&r(n+1)},dataCy:"nextLink"})]})},p=function(e){var a=e.perPage,t=e.onPerPageChange;return Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){var a=parseInt(e.target.value,10);t(a)},value:a,children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]})},h=function(e){var a=e.items;return Object(d.jsx)("ul",{children:a.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})},O=o(1,42).map((function(e){return"Item ".concat(e)})),m=function(){var e=Object(i.n)(),a=Object(i.l)(),t=new URLSearchParams(a.search),c=t.get("page"),n=t.get("perPage"),r=Object(l.useState)(n?parseInt(n,10):5),o=Object(s.a)(r,2),j=o[0],b=o[1],u=Object(l.useState)(c?parseInt(c,10):1),m=Object(s.a)(u,2),f=m[0],v=m[1];Object(l.useEffect)((function(){c&&v(parseInt(c,10))}),[c]);var x=O.length,P=j*f,C=P-j,k=P>x?x:P,S=O.slice(C,k);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(f," (items ").concat(C+1," - ").concat(k," of ").concat(x,")")}),Object(d.jsx)(p,{perPage:j,onPerPageChange:function(a){b(a),t.set("perPage",String(a)),t.set("page","1"),e({search:t.toString()})}}),Object(d.jsx)(g,{total:x,perPage:j,currentPage:f,onPageChange:function(a){v(a),t.set("page",String(a)),e({search:t.toString()})}}),Object(d.jsx)(h,{items:S})]})};n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(m,{})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.608d103e.chunk.js.map