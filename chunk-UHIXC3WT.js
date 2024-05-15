import{B as st,C as ct,D as at,k as F,p as et,r as nt,s as it,t as ot,z as rt}from"./chunk-PU67PNUB.js";import"./chunk-AESYL7IM.js";import{a as tt}from"./chunk-CDUKI5ZI.js";import{a as Z}from"./chunk-VSYLPDL5.js";import"./chunk-OQEVNF42.js";import{a as Y,d as G,g as J,i as K,n as Q,r as X}from"./chunk-QOY4JZOK.js";import{g as B,j as q,l as E}from"./chunk-O5TP7YJL.js";import{$ as m,Ac as V,Cb as A,Hb as k,Hc as W,Ib as a,Ic as $,Jb as M,Ka as R,Kb as p,Lb as D,Mb as L,Na as c,Nb as z,Oa as v,Qb as P,Rb as O,Sb as b,Ub as y,Vb as U,db as _,fb as d,gc as j,hb as I,ja as w,ka as g,pb as r,qb as s,rb as C,sa as h,ta as f,ub as N,xb as x,zb as u,zc as H}from"./chunk-L4LCX3VT.js";var lt=()=>[1,2,3,4,5],_t=e=>["/products",e],mt=e=>["/edit-product",e];function gt(e,t){e&1&&C(0,"div",3)}function ht(e,t){if(e&1&&(r(0,"div",38),a(1," \u2605 "),s()),e&2){let n=t.$implicit,o=u(2);I("review__star_active",o.averageRating>=n)}}function ft(e,t){if(e&1&&(r(0,"mat-option",39),a(1),s()),e&2){let n=t.$implicit;d("value",n),c(),p("",n," ")}}function vt(e,t){if(e&1&&(r(0,"mat-option",39),a(1),s()),e&2){let n=t.$implicit;d("value",n),c(),p("",n," ")}}function Ct(e,t){if(e&1&&(r(0,"div",45),a(1," \u2605 "),s()),e&2){let n=t.$implicit,o=u().$implicit;I("review__star_active",n<=o.rating)}}function It(e,t){if(e&1&&(r(0,"div",40)(1,"p",41),a(2),s(),r(3,"p",42),a(4),s(),r(5,"div",43),_(6,Ct,2,2,"div",44),s()()),e&2){let n=t.$implicit;c(2),M(n.author),c(2),M(n.text),c(2),d("ngForOf",P(3,lt))}}function xt(e,t){if(e&1){let n=N();r(0,"div",4)(1,"div",5),C(2,"img",6),r(3,"div",7)(4,"div",8)(5,"p",9),a(6),s(),r(7,"div",10)(8,"p",11),a(9),s(),r(10,"div",12),x("click",function(){h(n);let i=u();return f(i.toggleDescriptionVisibility())}),a(11),s()(),r(12,"div",13)(13,"p",14),a(14),b(15,"currency"),s(),r(16,"p",15),a(17),b(18,"currency"),s()(),r(19,"div",16),_(20,ht,2,2,"div",17),r(21,"div",18),a(22),s(),r(23,"a",19),a(24,"Read all reviews"),s()(),r(25,"mat-form-field",20)(26,"mat-label",21),a(27,"Select Color"),s(),r(28,"mat-select",22),x("valueChange",function(i){h(n);let l=u();return f(l.color=i)}),_(29,ft,2,2,"mat-option",23),s()(),r(30,"mat-form-field",20)(31,"mat-label"),a(32,"Select Size"),s(),r(33,"mat-select",22),x("valueChange",function(i){h(n);let l=u();return f(l.size=i)}),_(34,vt,2,2,"mat-option",23),s()(),r(35,"div",24)(36,"mat-form-field",25)(37,"mat-label"),a(38,"Quantity"),s(),r(39,"input",26),z("ngModelChange",function(i){h(n);let l=u();return L(l.quantity,i)||(l.quantity=i),f(i)}),s()()(),r(40,"div",27)(41,"button",28),x("click",function(){h(n);let i=u();return f(i.addToCart())}),C(42,"i",29),a(43," Add to cart "),s(),r(44,"button",30),C(45,"i",31),a(46,"Add to wishlist "),s(),r(47,"button",32),C(48,"i",33),a(49,"Edit/Delete product "),s()()(),r(50,"div",34)(51,"h2",35),a(52,"Reviews"),s(),r(53,"div",36),_(54,It,7,4,"div",37),s()()()()()}if(e&2){let n=u();c(2),A("src",n.product.imgUrl,R),c(4),M(n.product.name),c(2),I("product__description_hidden",n.descriptionHidden),c(),p(" ",n.product.description," "),c(2),p(" ",n.linkText," "),c(3),p(" ",y(15,16,n.priceWithDiscount,"EUR")," "),c(3),p(" ",y(18,19,n.product.price,"EUR")," "),c(3),d("ngForOf",P(22,lt)),c(2),p(" (",n.product.review.length,") "),c(),d("routerLink",O(23,_t,n.product.id)),c(6),d("ngForOf",n.product.color),c(5),d("ngForOf",n.product.size),c(5),D("ngModel",n.quantity),c(8),d("routerLink",O(25,mt,n.product.id)),c(7),d("ngForOf",n.product.review)}}var dt=(()=>{let t=class t{constructor(o,i,l,S){this.route=o,this.cartService=i,this.productsFirebaseService=l,this.changeDetector=S,this.descriptionHidden=!0,this.linkText="Read more",this.color="",this.size="",this.quantity=1}get priceWithDiscount(){let o=this.product??{price:0,discount:0};return o.price-o.price*o.discount}get averageRating(){let o=0,i=this.product??{review:[]};return i.review.forEach(l=>{o+=l.rating}),o=Math.ceil(o/i.review.length),o}ngOnInit(){let o=Number(this.route.snapshot.paramMap.get("productId"));this.subscription=this.productsFirebaseService.getProductByIdFromFirebase(o).subscribe(i=>{this.product=i,this.changeDetector.detectChanges()})}toggleDescriptionVisibility(){this.descriptionHidden=!this.descriptionHidden,this.linkText=this.descriptionHidden?"Read more":"Read less"}addToCart(){if(!this.product)return;let o=this.createProductInCart();this.updateCart(o),this.cartService.saveToLocalStorage()}ngOnDestroy(){this.subscription.unsubscribe()}createProductInCart(){if(!this.product)throw new Error("Product is undefined");return{id:this.product.id,name:this.product.name,description:this.product.description,price:this.product.price,discount:this.product.discount,imgUrl:this.product.imgUrl,color:this.color,size:this.size,quantity:this.quantity}}updateCart(o){let i=this.cartService.getItemById(o.id);i?i.quantity+=this.quantity:this.cartService.addToCart(o)}};t.\u0275fac=function(i){return new(i||t)(v(B),v(tt),v(Z),v(j))},t.\u0275cmp=w({type:t,selectors:[["app-product-details"]],decls:4,vars:2,consts:[["loading",""],[1,"container"],["class","product",4,"ngIf","ngIfElse"],[1,"lds-dual-ring"],[1,"product"],[1,"box"],["alt","bike",1,"product__img",3,"src"],[1,"product__container"],[1,"product__details"],[1,"product__name"],[1,"product__description"],[1,"product__description-text"],[1,"product__description-button",3,"click"],[1,"product__price"],[1,"product__price-current"],[1,"product__price-initial"],[1,"product__rating"],["class","product__star",3,"review__star_active",4,"ngFor","ngForOf"],[1,"product__review-count"],["fragment","review",1,"product__review-link",3,"routerLink"],[1,"product__select-field"],[1,"product__label"],[3,"valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"product__quantity"],[1,"example-full-width"],["matInput","","min","1","type","number","value","1",3,"ngModelChange","ngModel"],[1,"product__buttons","button"],["type","button",1,"button-cart",3,"click"],[1,"fa-solid","fa-cart-shopping"],["type","button",1,"button-wishlist"],[1,"fa-solid","fa-wand-magic-sparkles"],["type","button",1,"button-edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],["id","review",1,"review"],[1,"review__heading"],[1,"review__container"],["class","review__card",4,"ngFor","ngForOf"],[1,"product__star"],[3,"value"],[1,"review__card"],[1,"review__author"],[1,"review__text"],[1,"review__rating"],["class","review__star",3,"review__star_active",4,"ngFor","ngForOf"],[1,"review__star"]],template:function(i,l){if(i&1&&(r(0,"div",1),_(1,gt,1,0,"ng-template",null,0,U)(3,xt,55,27,"div",2),s()),i&2){let S=k(2);c(3),d("ngIf",l.product)("ngIfElse",S)}},dependencies:[H,V,q,it,nt,Y,K,G,Q,J,rt,et,ct,W],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}*[_ngcontent-%COMP%]{margin:0;padding:0}body[_ngcontent-%COMP%]{line-height:1.5;-webkit-font-smoothing:antialiased}img[_ngcontent-%COMP%], picture[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]{display:block;max-width:100%}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font:inherit}p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{overflow-wrap:break-word;margin:0}.product[_ngcontent-%COMP%]   .button-edit[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   .button-wishlist[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   .button-cart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.product[_ngcontent-%COMP%]   .button-edit[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   .button-wishlist[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   .button-cart[_ngcontent-%COMP%]{background-color:#e834ef;border:1px solid black;color:#000;text-decoration:none;cursor:pointer;transition:all .3s}.product[_ngcontent-%COMP%]   .button-edit[_ngcontent-%COMP%]:hover, .product[_ngcontent-%COMP%]   .button-wishlist[_ngcontent-%COMP%]:hover, .product[_ngcontent-%COMP%]   .button-cart[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.product[_ngcontent-%COMP%]   .button-edit[_ngcontent-%COMP%]:active, .product[_ngcontent-%COMP%]   .button-wishlist[_ngcontent-%COMP%]:active, .product[_ngcontent-%COMP%]   .button-cart[_ngcontent-%COMP%]:active{background-color:#ffff14}.product__review-link[_ngcontent-%COMP%], .product__description-button[_ngcontent-%COMP%]{text-decoration:underline;color:#e834ef;cursor:pointer}.product__review-link[_ngcontent-%COMP%]:hover, .product__description-button[_ngcontent-%COMP%]:hover{text-decoration:none}.container[_ngcontent-%COMP%]{max-width:90vw;margin:0 auto}.box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.warning[_ngcontent-%COMP%]{color:red;font-size:1.15rem;padding:5px 0}@keyframes _ngcontent-%COMP%_appearOpacity{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_appearHeading{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes _ngcontent-%COMP%_appearText{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.product[_ngcontent-%COMP%]{padding:20px 0;min-height:85vh}.product[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{gap:20px;align-items:start}.product__img[_ngcontent-%COMP%]{max-width:50%}.product__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.product__details[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;gap:20px;border:1px solid hsl(0,0%,0%);border-radius:10px;padding:20px}.product__name[_ngcontent-%COMP%]{font-size:1.75rem;color:#e834ef}.product__description-text[_ngcontent-%COMP%]{line-height:1.25rem;color:#424242}.product__description-text.product__description_hidden[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.product__price[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.product__price-current[_ngcontent-%COMP%]{font-size:1.5rem}.product__price-initial[_ngcontent-%COMP%]{font-size:1.25rem;color:#969696;text-decoration:line-through}.product__rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.product__star[_ngcontent-%COMP%]{font-size:1.25rem}.product__review-link[_ngcontent-%COMP%]{margin-left:auto}.product[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.product[_ngcontent-%COMP%]   .button-cart[_ngcontent-%COMP%]{width:50%;height:30px;border-radius:30px}.product[_ngcontent-%COMP%]   .button-wishlist[_ngcontent-%COMP%]{width:50%;height:30px;border-radius:30px;background-color:transparent}.product[_ngcontent-%COMP%]   .button-edit[_ngcontent-%COMP%]{width:50%;height:30px;border-radius:30px}.review[_ngcontent-%COMP%]{border:1px solid hsl(0,0%,0%);border-radius:10px;padding:20px}.review__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.review__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;border:1px solid hsl(0,0%,0%);border-radius:10px;padding:20px}.review__heading[_ngcontent-%COMP%]{font-size:1.25rem;margin:0 auto;padding-bottom:20px;width:fit-content}.review__author[_ngcontent-%COMP%]{font-weight:600}.review__text[_ngcontent-%COMP%]{line-height:1.25rem}.review__rating[_ngcontent-%COMP%]{display:flex}.review__star_active[_ngcontent-%COMP%]{color:#e834ef}.lds-dual-ring[_ngcontent-%COMP%]{display:block;width:80px;height:80px;margin:0 auto}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6.4px solid hsl(298,85%,57%);border-color:hsl(298,85%,57%) transparent hsl(298,85%,57%) transparent;animation:_ngcontent-%COMP%_lds-dual-ring 1.2s linear infinite}@keyframes _ngcontent-%COMP%_lds-dual-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media (max-width: 1024px){.product[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex-direction:column}.product__img[_ngcontent-%COMP%]{max-width:100%}.product__name[_ngcontent-%COMP%], .product__price[_ngcontent-%COMP%], .product__button[_ngcontent-%COMP%]{width:fit-content;margin:0 auto}}@media (max-width: 576px){.product[_ngcontent-%COMP%]   .button-cart[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   .button-wishlist[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   .button-edit[_ngcontent-%COMP%]{width:100%}}'],changeDetection:0});let e=t;return e})();var Mt=[{path:"",component:dt}],ut=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=m({imports:[E.forChild(Mt),E]});let e=t;return e})();var pt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=m({imports:[F,F]});let e=t;return e})();var re=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=m({imports:[$,ut,ot,X,st,at,pt]});let e=t;return e})();export{re as ProductDetailsModule};