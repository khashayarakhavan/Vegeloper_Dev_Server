(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{383:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(18),c=t(26),o=t(2),u=t(1),l=t(126);function d(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return m=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return p=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return f=function(){return n},n}function v(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return v=function(){return n},n}var b=u.d.div(v()),g=Object(u.d)(l.a)(f());g.displayName="AddButton";var h=u.d.div(s(),function(n){var e=n.imageUrl;return"url(".concat(e,")")});h.displayName="BackgroundImage";var x=u.d.div(p());x.displayName="CollectionFooterContainer";var y=u.d.span(m());y.displayName="NameContainer";var w=u.d.span(d());w.displayName="PriceContainer";e.a=Object(i.b)(null,function(n){return{addItem:function(e){return n(Object(c.a)(e))}}})(function(n){var e=n.item,t=n.addItem,r=e.name,i=e.price,c=e.imageUrl;return a.a.createElement(b,null,a.a.createElement(h,{className:"image",imageUrl:c}),a.a.createElement(x,null,a.a.createElement(y,null,r),a.a.createElement(w,null,i)),a.a.createElement(g,{onClick:function(){return t(e)},inverted:!0},"Add to cart"))})},491:function(n,e,t){"use strict";t.r(e);var r=t(69),a=t(0),i=t.n(a),c=t(18),o=t(12),u=t(129),l=t(57),d=t(383),m=t(2),p=t(1);function s(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(m.a)(["\n  font-size: 28px;\n  color: red;\n  margin-bottom: 25px;\n  cursor: pointer;\n\n  &:hover {\n    color: grey;\n  }\n"]);return f=function(){return n},n}function v(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]);return v=function(){return n},n}var b=p.d.div(v()),g=p.d.h1(f());g.displayName="TitleContainer";var h=p.d.div(s()),x=Object(l.f)(function(n){var e=n.title,t=n.items,r=n.history,a=n.match,c=n.routeName;return i.a.createElement(b,null,i.a.createElement(g,{onClick:function(){return r.push("".concat(a.path,"/").concat(c))}},e.toUpperCase()),i.a.createElement(h,null,t.filter(function(n,e){return e<4}).map(function(n){return i.a.createElement(d.a,{key:n.id,item:n})})))});function y(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return n},n}var w=p.d.div(y());t.d(e,"CollectionsOverview",function(){return j});var j=function(n){var e=n.collections;return i.a.createElement(w,null,e.map(function(n){var e=n.id,t=Object(r.a)(n,["id"]);return i.a.createElement(x,Object.assign({key:e},t))}))},O=Object(o.b)({collections:u.b});e.default=Object(c.b)(O)(j)}}]);
//# sourceMappingURL=8.36202ac5.chunk.js.map