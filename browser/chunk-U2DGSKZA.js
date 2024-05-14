import{a as F}from"./chunk-CDUKI5ZI.js";import{j as z,l as u}from"./chunk-O5TP7YJL.js";import{$ as g,Ac as E,Hc as q,Ib as i,Ic as I,Jb as O,Ka as y,Kb as p,Na as _,Oa as b,Sb as h,Ub as P,db as M,fb as l,ja as v,ka as C,pb as e,qb as n,rb as w,sa as f,ta as x,ub as k,xb as m,zb as s,zc as S}from"./chunk-L4LCX3VT.js";function $(r,t){if(r&1&&(e(0,"p",33),i(1),n()),r&2){let a=s().$implicit;_(),p("Size: ",a.size,"")}}function N(r,t){if(r&1&&(e(0,"p",34),i(1),n()),r&2){let a=s().$implicit;_(),p("Color: ",a.color,"")}}function Q(r,t){if(r&1){let a=k();e(0,"div",21),w(1,"img",22),e(2,"div",23)(3,"p",24),i(4),n(),M(5,$,2,1,"p",25)(6,N,2,1,"p",26),n(),e(7,"div",27)(8,"button",28),m("click",function(){let c=f(a).$implicit,d=s();return x(d.decreaseQuantity(c))}),i(9," - "),n(),e(10,"div",29),i(11),n(),e(12,"button",30),m("click",function(){let c=f(a).$implicit,d=s();return x(d.increaseQuantity(c))}),i(13," + "),n()(),e(14,"p",31),i(15),h(16,"currency"),n(),e(17,"button",32),m("click",function(){let c=f(a).$implicit,d=s();return x(d.deleteFromCart(c))}),n()()}if(r&2){let a=t.$implicit;_(),l("src",a.imgUrl,y),_(3),O(a.name),_(),l("ngIf",a.size),_(),l("ngIf",a.color),_(5),O(a.quantity),_(4),p(" ",P(16,6,(a.price-a.price*a.discount)*a.quantity,"EUR")," ")}}var j=(()=>{let t=class t{constructor(o){this.cartService=o,this.items=[]}get totalPrice(){let o=0;return this.items.forEach(c=>{o+=(c.price-c.price*c.discount)*c.quantity}),this.cartService.saveToLocalStorage(),o}ngOnInit(){this.cartService.items$.subscribe(o=>{this.items=o}),this.cartService.getFromLocalStorage()}clearCart(){this.cartService.clearCart()}increaseQuantity(o){this.cartService.increaseQuantity(o)}decreaseQuantity(o){this.cartService.decreaseQuantity(o)}deleteFromCart(o){this.cartService.deleteItemFromCart(o)}};t.\u0275fac=function(c){return new(c||t)(b(F))},t.\u0275cmp=v({type:t,selectors:[["app-cart"]],decls:41,vars:11,consts:[[1,"cart"],[1,"container"],[1,"box"],[1,"cart__products"],[1,"cart__header"],[1,"cart__heading"],[1,"cart__count"],[1,"cart__clear",3,"click"],[1,"cart__subheader"],[1,"cart__subheading","cart__subheading_quantity"],[1,"cart__subheading","cart__subheading_price"],[1,"cart__product-container"],["class","product",4,"ngFor","ngForOf"],[1,"cart__summary"],[1,"cart__price","cart__price_subtotal"],[1,"cart__price-description"],[1,"cart__price-value"],[1,"cart__price","cart__price_discount"],[1,"cart__price","cart__price_total"],[1,"cart__link",3,"routerLink"],[1,"cart__checkout"],[1,"product"],["alt","",1,"product__image",3,"src"],[1,"product__description"],[1,"product__name"],["class","product__size",4,"ngIf"],["class","product__color",4,"ngIf"],[1,"product__quantity-selector"],[1,"product__quantity-decrease",3,"click"],[1,"product__quantity"],[1,"product__quantity-increase",3,"click"],[1,"product__price"],[1,"product__remove",3,"click"],[1,"product__size"],[1,"product__color"]],template:function(c,d){c&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),i(6," Cart "),e(7,"span",6),i(8),n()(),e(9,"button",7),m("click",function(){return d.clearCart()}),i(10,"Clear cart"),n()(),e(11,"div",8)(12,"div"),i(13,"Product"),n(),e(14,"div",9),i(15,"Count"),n(),e(16,"div",10),i(17,"Price"),n()(),e(18,"div",11),M(19,Q,18,9,"div",12),n()(),e(20,"div",13)(21,"div",14)(22,"div",15),i(23,"Subtotal:"),n(),e(24,"div",16),i(25),h(26,"currency"),n()(),e(27,"div",17)(28,"div",15),i(29,"Discount:"),n(),e(30,"div",16),i(31,"\u20AC0.00"),n()(),e(32,"div",18)(33,"div",15),i(34,"Total:"),n(),e(35,"div",16),i(36),h(37,"currency"),n()(),e(38,"a",19)(39,"div",20),i(40,"Continue to checkout"),n()()()()()()),c&2&&(_(8),p("(",d.items.length," products)"),_(11),l("ngForOf",d.items),_(6),p(" ",P(26,5,d.totalPrice,"EUR"),""),_(11),p(" ",P(37,8,d.totalPrice,"EUR")," "),_(2),l("routerLink","/order"))},dependencies:[S,E,z,q],styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}*[_ngcontent-%COMP%]{margin:0;padding:0}body[_ngcontent-%COMP%]{line-height:1.5;-webkit-font-smoothing:antialiased}img[_ngcontent-%COMP%], picture[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]{display:block;max-width:100%}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font:inherit}p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{overflow-wrap:break-word;margin:0}.cart__checkout[_ngcontent-%COMP%], .product__remove[_ngcontent-%COMP%], .product__quantity-increase[_ngcontent-%COMP%], .product__quantity-decrease[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.cart__checkout[_ngcontent-%COMP%], .product__remove[_ngcontent-%COMP%], .product__quantity-increase[_ngcontent-%COMP%], .product__quantity-decrease[_ngcontent-%COMP%]{background-color:#e834ef;border:1px solid black;color:#000;text-decoration:none;cursor:pointer;transition:all .3s}.cart__checkout[_ngcontent-%COMP%]:hover, .product__remove[_ngcontent-%COMP%]:hover, .product__quantity-increase[_ngcontent-%COMP%]:hover, .product__quantity-decrease[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.cart__checkout[_ngcontent-%COMP%]:active, .product__remove[_ngcontent-%COMP%]:active, .product__quantity-increase[_ngcontent-%COMP%]:active, .product__quantity-decrease[_ngcontent-%COMP%]:active{background-color:#ffff14}.container[_ngcontent-%COMP%]{max-width:90vw;margin:0 auto}.box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.warning[_ngcontent-%COMP%]{color:red;font-size:1.15rem;padding:5px 0}@keyframes _ngcontent-%COMP%_appearOpacity{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_appearHeading{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes _ngcontent-%COMP%_appearText{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.cart[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{gap:20px;padding:20px 0}.cart__header[_ngcontent-%COMP%]{display:flex}.cart__heading[_ngcontent-%COMP%]{width:fit-content;font-size:2rem}.cart__count[_ngcontent-%COMP%]{font-size:1.25rem;color:#999}.cart__clear[_ngcontent-%COMP%]{margin-left:auto;background-color:transparent;color:red;border:none;position:relative;cursor:pointer}.cart__clear[_ngcontent-%COMP%]:before{content:"\\d7";font-size:1.25rem;color:red;position:absolute;top:8px;left:-15px}.cart__clear[_ngcontent-%COMP%]:hover{text-decoration:underline}.cart__subheader[_ngcontent-%COMP%]{display:flex;padding:20px 20px 5px}.cart__subheading.cart__subheading_quantity[_ngcontent-%COMP%]{width:fit-content;margin-left:auto}.cart__subheading.cart__subheading_price[_ngcontent-%COMP%]{width:fit-content;margin:0 10% 0 25%}.cart__products[_ngcontent-%COMP%]{border-radius:30px;border:1px solid hsl(0,0%,74%);width:60vw;padding:20px;margin:0 0 20px}.cart__product-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.product[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-radius:10px;border:1px solid hsl(0,0%,73%);overflow:hidden;padding:10px}.product__image[_ngcontent-%COMP%]{max-width:30%}.product__size[_ngcontent-%COMP%], .product__color[_ngcontent-%COMP%]{color:#999}.product__quantity-selector[_ngcontent-%COMP%]{display:flex;align-items:center}.product__quantity-decrease[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:30px;background-color:transparent}.product__quantity-decrease[_ngcontent-%COMP%]:hover{transform:none;background-color:transparent;border-color:red;color:red}.product__quantity[_ngcontent-%COMP%]{padding:0 15px}.product__quantity-increase[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:30px;background-color:transparent}.product__quantity-increase[_ngcontent-%COMP%]:hover{transform:none;background-color:transparent;border-color:green;color:green}.product__price[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:500;width:fit-content}.product__remove[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:30px;background-color:transparent;position:relative}.product__remove[_ngcontent-%COMP%]:hover{transform:none;background:#fd070045}.product__remove[_ngcontent-%COMP%]:before{content:"\\d7";font-size:1.25rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cart__summary[_ngcontent-%COMP%]{align-self:start;width:30vw;border-radius:30px;border:1px solid hsl(0,0%,74%);padding:20px;background-color:#f0f0f0;display:flex;flex-direction:column;gap:10px}.cart__price[_ngcontent-%COMP%]{display:flex;margin-bottom:20px}.cart__price_subtotal[_ngcontent-%COMP%]{color:gray}.cart__price-value[_ngcontent-%COMP%]{margin-left:auto}.cart__price_discount[_ngcontent-%COMP%]{color:gray}.cart__price_total[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.cart__checkout[_ngcontent-%COMP%]{width:100%;height:30px;border-radius:10px}.cart__link[_ngcontent-%COMP%]{color:#000;text-decoration:none}@media (max-width: 1024px){.cart[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:20px}.cart__summary[_ngcontent-%COMP%]{align-self:auto;width:100%}.cart__subheader[_ngcontent-%COMP%]{display:none}.cart__product-container[_ngcontent-%COMP%]{align-items:center}.cart__products[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:20px;width:80%;margin:20px 0 0}.product__image[_ngcontent-%COMP%]{max-width:100%}}@media (max-width: 767px){.cart__price_total[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500}}'],changeDetection:0});let r=t;return r})();var U=[{path:"",component:j}],V=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=C({type:t}),t.\u0275inj=g({imports:[u.forChild(U),u]});let r=t;return r})();var tt=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=C({type:t}),t.\u0275inj=g({imports:[I,u,V]});let r=t;return r})();export{tt as CartModule};
