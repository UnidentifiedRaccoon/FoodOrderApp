(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3GWbX",delete:"CartItem_delete__3Cerd",summary:"CartItem_summary__-7I_I",price:"CartItem_price__3hC0A",amount:"CartItem_amount__3NHEQ",actions:"CartItem_actions__1Mx66"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__29ABB",icon:"HeaderCartButton_icon__hB9Zv",badge:"HeaderCartButton_badge__3D4f9",bump:"HeaderCartButton_bump__3WoBq",text:"HeaderCartButton_text__eZK-i"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__1fOew",description:"MealItem_description__d9CaU",price:"MealItem_price__3VBGi"}},function(e,t,n){e.exports={"cart-items":"Cart__cart-items__13T64",total:"Cart__total__1V59j",actions:"Cart__actions__1EgSK"}},,function(e,t,n){e.exports={header:"Header_header__3Vf7w","main-image":"Header_main-image__1ZGtd"}},function(e,t,n){e.exports={button:"Button_button__3LKMv","button--alt":"Button_button--alt__3_3xw"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3U4u_",modal:"Modal_modal__3VAax","slide-down":"Modal_slide-down__3hYoc"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2_EeP"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3cyHb","meals-appear":"AvailableMeals_meals-appear__2PQD9"}},function(e,t,n){e.exports={card:"Card_card__2d7Zc"}},function(e,t,n){e.exports={form:"MealItemForm_form__2yJ2x"}},function(e,t,n){e.exports={input:"Input_input__yDkhb"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(25),n(3)),r=n(12),o=n.n(r),s=n.p+"static/media/Pizza.61a8b5e6.jpg",l=n(5),m=n.n(l),u=n(0),d=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(20),b=n(1),x=n.n(b),h=x.a.createContext({items:[],itemsAmount:0,totalPrice:0,maxAmountForEachItem:10,setItem:function(e){}}),_={items:[],itemsAmount:0,totalPrice:0},O=function(e,t){if("SET"===t.type){var n,a,c,i=e.items.findIndex((function(e){return e.id===t.item.id}));return-1===i?(c=e.items.concat(t.item),n=e.itemsAmount+t.item.amount,a=e.totalPrice+t.item.amount*t.item.price):(c=Object(j.a)(e.items),n=e.itemsAmount+t.item.amount-c[i].amount,a=e.totalPrice+(t.item.amount-c[i].amount)*c[i].price,c[i]=t.item),{items:c=c.filter((function(e){return 0!==e.amount})),itemsAmount:n,totalPrice:Math.abs(a)}}return e},p=function(e){var t=Object(b.useReducer)(O,_),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(u.jsx)(h.Provider,{value:{items:a.items,itemsAmount:a.itemsAmount,totalPrice:a.totalPrice,maxAmountForEachItem:20,setItem:function(e){c({type:"SET",item:e})}},children:e.children})},f=h,v=function(e){var t=Object(b.useContext)(f),n=Object(b.useState)(!1),a=Object(i.a)(n,2),c=a[0],r=a[1],o="".concat(m.a.button," ").concat(c?m.a.bump:"");return Object(b.useEffect)((function(){if(!(t.itemsAmount<1)){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[t.itemsAmount]),Object(u.jsxs)("button",{className:o,onClick:e.onClick,children:[Object(u.jsx)("span",{className:m.a.icon,children:Object(u.jsx)(d,{})}),Object(u.jsx)("span",{className:m.a.text,children:"Your card"}),Object(u.jsx)("span",{className:m.a.badge,children:t.itemsAmount})]})},C=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:o.a.header,children:[Object(u.jsx)("h1",{children:"MealFull"}),Object(u.jsx)(v,{onClick:e.onCartShow,l:!0})]}),Object(u.jsx)("div",{className:o.a["main-image"],children:Object(u.jsx)("img",{src:s,alt:"Delicious chicken thin crust pizza"})})]})},A=n(15),g=n.n(A),N=function(){return Object(u.jsxs)("section",{className:g.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},y=n(16),I=n.n(y),k=n(17),w=n.n(k),H=function(e){return Object(u.jsx)("div",{className:w.a.card,children:e.children})},B=n(9),M=n.n(B),F=n(18),S=n.n(F),P=n(2),E=n(19),V=n.n(E),D=x.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:V.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(P.a)(Object(P.a)({},e.input),{},{ref:t}))]})})),z=function(e){var t=Object(b.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(b.useRef)();return Object(u.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var n=+r.current.value;n<0||n>e.maxValue?c(!1):(c(!0),e.onSetAmount(n))},noValidate:!0,children:[Object(u.jsx)(D,{input:{id:"amount_"+e.id,type:"number",min:"0",max:e.maxValue,step:"1",defaultValue:0},label:"Amount",ref:r}),Object(u.jsx)("button",{children:"Apply"}),!a&&Object(u.jsx)("p",{children:"Please enter a valid amount (0-".concat(e.maxValue,")")})]})},T=function(e){var t=Object(b.useContext)(f),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:M.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:M.a.description,children:e.description}),Object(u.jsx)("div",{className:M.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(z,{id:e.id,onSetAmount:function(n){var a={id:e.id,name:e.name,price:e.price,amount:n};t.setItem(a)},maxValue:t.maxAmountForEachItem})})]})},R=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],q=function(){var e=R.map((function(e){return Object(u.jsx)(T,{name:e.name,price:e.price,description:e.description,id:e.id},e.id)}));return Object(u.jsx)("section",{className:I.a.meals,children:Object(u.jsx)(H,{children:Object(u.jsx)("ul",{children:e})})})},G=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{}),Object(u.jsx)(q,{})]})},Z=n(10),J=n.n(Z),K=n(13),Y=n.n(K),$=function(e){var t="".concat(Y.a.button," ").concat(e.alt?Y.a["button--alt"]:"");return Object(u.jsx)("button",{className:t,type:"button",onClick:e.onClick,children:e.children})},Q=n(14),U=n.n(Q),W=function(e){return Object(u.jsx)("div",{className:U.a.backdrop,onClick:e.onClick})},X=function(e){return Object(u.jsx)("div",{className:U.a.modal,children:e.children})},L=document.querySelector("#backdrop-root"),ee=document.querySelector("#overlay-root"),te=function(e){return Object(u.jsxs)(u.Fragment,{children:[c.a.createPortal(Object(u.jsx)(W,{onClick:e.onClick}),L),c.a.createPortal(Object(u.jsx)(X,{children:e.children}),ee)]})},ne=n(4),ae=n.n(ne),ce=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:ae.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)("button",{className:ae.a.delete,onClick:e.onDelete,children:"X"}),e.name]}),Object(u.jsxs)("div",{className:ae.a.summary,children:[Object(u.jsx)("span",{className:ae.a.price,children:t}),Object(u.jsxs)("span",{className:ae.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:ae.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ie=void 0,re=function(e){var t=Object(b.useContext)(f),n="$".concat(t.totalPrice.toFixed(2)),a=t.items.length>0,c=function(e){var n=e.amount+1;if(n<=t.maxAmountForEachItem){var a=Object(P.a)(Object(P.a)({},e),{},{amount:n});t.setItem(a)}},i=function(e){var n=Object(P.a)(Object(P.a)({},e),{},{amount:e.amount-1});t.setItem(n)},r=function(e){var n=Object(P.a)(Object(P.a)({},e),{},{amount:0});t.setItem(n)},o=t.items.map((function(e){return Object(u.jsx)(ce,{price:e.price,amount:e.amount,name:e.name,onAdd:c.bind(ie,e),onRemove:i.bind(ie,e),onDelete:r.bind(ie,e)},e.id)}));return Object(u.jsxs)(te,{onClick:e.onCartHide,children:[Object(u.jsx)("ul",{className:J.a["cart-items"],children:o}),Object(u.jsxs)("div",{className:J.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:J.a.actions,children:[Object(u.jsx)($,{alt:!0,onClick:e.onCartHide,children:"Close"}),a&&Object(u.jsx)($,{children:"Order"})]})]})};var oe=function(){var e=Object(b.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{onCartShow:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(G,{})}),n&&Object(u.jsx)(re,{onCartHide:function(){a(!1)}})]})};c.a.render(Object(u.jsx)(p,{children:Object(u.jsx)(oe,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.648fdbc5.chunk.js.map