(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{68:function(e,a,t){e.exports=t(96)},73:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(26),c=t.n(r),s=(t(73),t(23)),m=t.n(s),o=t(28),i=t(10),u=t(0),d=t(9),E=t(125),b=t(29),f=t.n(b),p=t(99),v=function(e){var a=Object(n.useState)({}),t=Object(i.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){Object(o.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.userId){a.next=6;break}return a.t0=c,a.next=4,f.a.get("https://jsonplaceholder.typicode.com/users/"+e.userId);case 4:a.t1=a.sent.data,(0,a.t0)(a.t1);case 6:case"end":return a.stop()}}),a)})))()}),[e.userId]),l.a.createElement("span",{className:"text-muted"},r.name?"".concat(r.name," (@").concat(r.username,")"):l.a.createElement(p.a,{animation:"border",role:"status",size:"sm"}))},h=t(100),j=t(59),y=t(101),g=t(60),k=t(102),O=t(61),w=t(124);function N(e){return l.a.createElement(h.a,{as:j.a},l.a.createElement(h.a.Prepend,null,l.a.createElement(y.a,{title:"Comment",size:"sm",className:"pt-0",id:"basic-addon1",variant:"secondary"},l.a.createElement(d.d,{size:"1em"}))),l.a.createElement(g.a,{title:"Comments",readOnly:!0,disabled:!0,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:e.count,size:"sm"}))}function z(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement("hr",null)),l.a.createElement(y.a,{className:"mx-auto",variant:"link",onClick:function(){return r(!t)},"aria-controls":"comment-sec","aria-expanded":t},"Comments",t?l.a.createElement(d.b,{size:"1em"}):l.a.createElement(d.a,{size:"1em"})),l.a.createElement(j.a,null,l.a.createElement("hr",null))),l.a.createElement(k.a,null,l.a.createElement(O.a,{in:t},l.a.createElement(w.a,{id:"comment-sec",variant:"flush",className:"border-top"}))))}function x(e){var a=Object(n.useContext)(K),t=a.voted,r=a.setVoted,c=Object(n.useState)(e.downvotes),s=Object(i.a)(c,2),m=s[0],o=s[1],u=Object(n.useState)(e.upvotes),E=Object(i.a)(u,2),b=E[0],f=E[1],v=Object(n.useState)(null),k=Object(i.a)(v,2),O=k[0],w=k[1],N=function(e){w(e),null===t?setTimeout((function(){r(e),e?f(b+1):o(m+1),w(null)}),500):t===e?setTimeout((function(){r(null),e?f(b-1):o(m-1),w(null)}),500):setTimeout((function(){r(e),e?(f(b+1),o(m-1)):(f(b-1),o(m+1)),w(null)}),500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{as:j.a},l.a.createElement(h.a.Prepend,null,l.a.createElement(y.a,{title:"Like",size:"sm",className:"pt-0",id:"basic-addon1",disabled:null!==O,variant:!0===t?"primary":"secondary",onClick:function(){N(!0)}},!0===O?l.a.createElement(p.a,{animation:"border",role:"status",size:"sm"}):l.a.createElement(d.k,{size:"1em"}))),l.a.createElement(g.a,{title:"Likes",readOnly:!0,disabled:!0,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:b,size:"sm"})),l.a.createElement(h.a,{as:j.a},l.a.createElement(h.a.Prepend,null,l.a.createElement(y.a,{title:"Dislike",size:"sm",className:"pt-0",id:"basic-addon1",disabled:null!==O,variant:!1===t?"danger":"secondary",onClick:function(){N(!1)}},!1===O?l.a.createElement(p.a,{animation:"border",role:"status",size:"sm"}):l.a.createElement(d.j,{size:"1em"}))),l.a.createElement(g.a,{title:"Dislikes",readOnly:!0,disabled:!0,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:m,size:"sm"})))}var S=t(120),C=t(103),L=t(104),I=t(105),F=t(106),P=t(107),U=t(108),B=t(109),T=t(110),V=t(111),A=t(112),M=t(113),D=t(114),H=t(115),J=t(116),Q=t(117),R=t(118),W=t(119);function q(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],c=t[1],s=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"Share",variant:"secondary",onClick:function(){return c(!0)},size:"sm",className:"pt-0"},l.a.createElement(d.i,{size:"1em"})),l.a.createElement(S.a,{show:r,onHide:s},l.a.createElement(S.a.Header,{closeButton:!0},l.a.createElement(S.a.Title,null,"Share")),l.a.createElement(S.a.Body,null,"Share via:",l.a.createElement(C.a,{className:"p-3"},l.a.createElement(k.a,{className:"my-3"},l.a.createElement(j.a,null,l.a.createElement(L.a,{url:e.url,subject:e.title,body:"Qusol"},l.a.createElement(I.a,{round:!0}))),l.a.createElement(j.a,null,l.a.createElement(F.a,{url:e.url,quote:e.title},l.a.createElement(P.a,{round:!0}))),l.a.createElement(j.a,null,l.a.createElement(U.a,{url:e.url},l.a.createElement(B.a,{round:!0}))),l.a.createElement(j.a,null,l.a.createElement(T.a,{url:e.url,title:e.title},l.a.createElement(V.a,{round:!0})))),l.a.createElement(k.a,{className:"my-3"},l.a.createElement(j.a,null,l.a.createElement(A.a,{url:e.url,title:e.title},l.a.createElement(M.a,{round:!0}))),l.a.createElement(j.a,null,l.a.createElement(D.a,{url:e.url,title:e.title},l.a.createElement(H.a,{round:!0}))),l.a.createElement(j.a,null,l.a.createElement(J.a,{url:e.url,title:e.title},l.a.createElement(Q.a,{round:!0}))),l.a.createElement(j.a,null,l.a.createElement(R.a,{url:e.url,title:e.title},l.a.createElement(W.a,{round:!0})))))),l.a.createElement(S.a.Footer,null,l.a.createElement(y.a,{variant:"secondary",onClick:s},"Close"))))}function $(e){return l.a.createElement(h.a,{as:j.a},l.a.createElement(h.a.Prepend,null,l.a.createElement(y.a,{title:"Views",size:"sm",className:"pt-0",id:"basic-addon1",disabled:!0,variant:"secondary"},l.a.createElement(d.h,{size:"1em"}))),l.a.createElement(g.a,{title:"Views",readOnly:!0,disabled:!0,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:e.count,size:"sm"}))}function _(){return l.a.createElement(y.a,{title:"Report",variant:"secondary",onClick:function(){alert("Report Clicked!!")},size:"sm",className:"pt-0 ml-3"},l.a.createElement(d.e,{size:"1em"}))}function G(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{className:"mt-4"},l.a.createElement($,{count:"2393"}),l.a.createElement(x,{downvotes:231,upvotes:789}),l.a.createElement(N,{count:290}),l.a.createElement(q,{title:"Element Title",url:"https://element.url.om/elimentId"}),l.a.createElement(_,null)))}var K=Object(n.createContext)({voted:null,setVoted:function(){}}),X=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r={voted:t[0],setVoted:t[1]};return l.a.createElement(E.a,{className:"mb-3"},l.a.createElement(E.a.Body,null,l.a.createElement(d.l,{className:"mr-3 mb-3"}),l.a.createElement(v,{userId:e.userId}),l.a.createElement("br",null),l.a.createElement("h4",null,e.title),e.body,l.a.createElement("br",null),l.a.createElement(K.Provider,{value:r},l.a.createElement(G,null))),l.a.createElement(E.a.Footer,null,l.a.createElement(z,null)))},Y=t(122),Z=t(123),ee=t(121);var ae=function(){return l.a.createElement(Y.a,{bg:"light",expand:"lg"},l.a.createElement(Y.a.Brand,{href:"#home"},"Qusol-Image"),l.a.createElement(Y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(Y.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(Z.a,{className:"ml-4 mr-auto"},l.a.createElement(Z.a.Link,{href:"#home"},"Trending"),l.a.createElement(Z.a.Link,{href:"#article"},"Article"),l.a.createElement(Z.a.Link,{href:"#answer"},"Answer"),l.a.createElement(Z.a.Link,{href:"#blogs"},"Blog"),l.a.createElement(Z.a.Link,{href:"#poll"},"Poll")),l.a.createElement(ee.a,{inline:!0},l.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(y.a,{variant:"outline-success"},"Search")),l.a.createElement(Z.a,{className:"ml-5 mr-4"},l.a.createElement(Z.a.Link,{href:"#globe"},l.a.createElement(d.f,null)),l.a.createElement(Z.a.Link,{href:"#notifications"},l.a.createElement(d.c,null)),l.a.createElement(Z.a.Link,{href:"#badges"},l.a.createElement(d.g,null)),l.a.createElement(Z.a.Link,{href:"#profile"},l.a.createElement(d.l,null)))))},te=t(49),ne=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(e.following),m=Object(i.a)(s,2),o=m[0],u=m[1];return l.a.createElement(w.a.Item,{"aria-controls":"follow-button",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},className:"d-flex justify-content-between align-items-center"},l.a.createElement("span",null,e.name),l.a.createElement(te.a,{in:r},l.a.createElement(y.a,{id:"follow-button","aria-expanded":r,onClick:function(){u(!o)},size:"sm",variant:o?"secondary":"primary"},o?"Unfollow":"Follow")))},le=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){Object(o.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching Posts"),e.t0=r,e.next=4,f.a.get("https://jsonplaceholder.typicode.com/users");case 4:e.t1=e.sent.data,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()}),[]),l.a.createElement(E.a,null,l.a.createElement(E.a.Title,{className:"pt-2 px-3"},"Categories"),l.a.createElement(E.a.Body,{className:"p-0"},l.a.createElement(w.a,{variant:"flush",className:"border-top"},t.map((function(e,a){return l.a.createElement(ne,{key:a,name:e.name,following:!0})})))))};var re=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){Object(o.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching Posts"),e.t0=r,e.next=4,f.a.get("https://jsonplaceholder.typicode.com/posts?_limit=5");case 4:e.t1=e.sent.data,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()}),[]),l.a.createElement(u.b.Provider,{value:{size:"1.5em"}},l.a.createElement("div",{className:"App"},l.a.createElement(ae,null),l.a.createElement(C.a,{fluid:!0,className:"mx-4 mt-2 w-auto"},l.a.createElement(k.a,null,l.a.createElement(j.a,{className:"d-none d-md-block p-0"},l.a.createElement(le,null)),l.a.createElement(j.a,{md:12,lg:7},t.map((function(e){return l.a.createElement(X,{key:e.id,title:e.title,body:e.body,userId:e.userId})}))),l.a.createElement(j.a,{className:"d-none d-lg-block p-0"},l.a.createElement(le,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(95);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.a6b61bba.chunk.js.map