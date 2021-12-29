(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function a(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(s,t);var e,n,r,l,f=(r=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(r);if(l){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function s(){return o(this,s),f.apply(this,arguments)}return e=s,(n=[{key:"onReady",value:function(){salla.infiniteScroll.initiate(".products-container",".product-entry")}},{key:"registerEvents",value:function(){var t=this;salla.document.event.onChange("#productFilter",(function(e){return t.sortAction(e)})),salla.document.event.onClick(".grid-trigger",(function(e){return t.toggleView(e)}))}},{key:"sortAction",value:function(t){var e=new RegExp("([?;&])by[^&;]*[;&]?"),n=window.location.href.replace(e,"$1").replace(/&$/,"");n=(n.includes("?")?n+"&":"?")+(t.target.value?"by="+t.target.value:""),window.location.href=n.replace(/&$|\?$/,"")}},{key:"toggleView",value:function(t){t.preventDefault();var e=t.target.dataset.type;this.toggle(".grid-trigger",["bg-border-color","text-primary"],["text-gray-400"],(function(t){return t.dataset.type===e})),this.toggle(".products-container",["list","md:grid-cols-1"],["md:grid-cols-auto-fill"],(function(){return"list"===e})),anime({targets:".product-entry",opacity:[0,1],duration:1200,translateY:[20,0],delay:function(t,e){return 100*e}})}}])&&i(e.prototype,n),s}(function(){function e(){var t=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),document.addEventListener("DOMContentLoaded",(function(){return t.boot()}))}var r,o;return r=e,(o=[{key:"boot",value:function(){this.onReady&&this.onReady(),this.registerEvents&&this.registerEvents()}},{key:"toggle",value:function(e,n,r,o){document.querySelectorAll(e).forEach((function(e){var i,u,a=o(e);(i=e.classList).remove.apply(i,t(a?r:n)),(u=e.classList).add.apply(u,t(a?n:r))}))}}])&&n(r.prototype,o),e}()))})();