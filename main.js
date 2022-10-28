(()=>{"use strict";var e=".popup__close-button",t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__image-edit-button"),r=".form",i=".form__input",a="popup_opened",l={templateSelector:".card-template",elementSelector:".element",imageSelector:".element__image",nameSelector:".element__name",deleteButtonSelector:".element__delete-button",likeButtonSelector:".element__heart-button",likeCountSelector:".element__heart-counter",likeToggleClass:"element__heart-button_active"},u={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error"};function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._aboutElement=document.querySelector(n),this._imageElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name,about:this._about}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name=t,this._about=n}},{key:"setUserId",value:function(e){this.id=e}},{key:"renderUserInfo",value:function(){this._nameElement.textContent=this._name,this._aboutElement.textContent=this._about}},{key:"setUserImage",value:function(e){this._image=e}},{key:"renderUserImage",value:function(){this._imageElement.src=this._image,this._imageElement.alt=this._name}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialArray=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this.initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var _=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._popupCloseButton=this._element.querySelector(o),this._popupToggleClass=n,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add(this._popupToggleClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove(this._popupToggleClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&(e.preventDefault(),this.close())}},{key:"_handlePopupOverlayClick",value:function(e){e.target!==this._element&&e.target!==this._popupCloseButton||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(t){return e._handlePopupOverlayClick(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=v(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(o);if(r){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t,n,o,r){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(l=i.call(this,e,t,n))._popupPreviewImageSelector=o,l._popupPreviewCaptionSelector=r,l._popupPreviewImage=l._getElements(o),l._popupPreviewCaption=l._getElements(r),l}return t=a,(n=[{key:"_getElements",value:function(e){return this._element.querySelector(e)}},{key:"open",value:function(e){var t=e.name,n=e.link;m(k(a.prototype),"open",this).call(this),this._popupPreviewImage.src=n,this._popupPreviewImage.alt=t,this._popupPreviewCaption.textContent=t,this._element.classList.add(this._popupToggleClass)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=C(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},S.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(o);if(r){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t,n,o,r,l){var u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(u=i.call(this,e,t,n))._form=u._element.querySelector(o),u._inputList=u._form.querySelectorAll(r),u._handleSubmit=l,u}return t=a,(n=[{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){e[t.name]&&(t.value=e[t.name])}))}},{key:"close",value:function(){S(j(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){S(j(a.prototype),"setEventListeners",this).call(this),this._element.addEventListener("submit",this._handleSubmit)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=q(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},B.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function D(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(o);if(r){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e,t,n,o){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e,t,n))._handleSubmit=o,r}return t=a,(n=[{key:"open",value:function(e){B(V(a.prototype),"open",this).call(this),this._openedFrom=e}},{key:"setEventListeners",value:function(){B(V(a.prototype),"setEventListeners",this).call(this),this._element.addEventListener("submit",this._handleSubmit)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var M=function(){function e(t,n,o,r,i,a,l){var u=t.name,s=void 0===u?"":u,c=t.link,f=void 0===c?"":c,p=t.likes,h=void 0===p?[]:p,_=t._id,d=void 0===_?"":_,y=t.owner,m=void 0===y?{}:y;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._image=f,this._name=s,this._likes=h,this._id=d,this._owner=m,this._user=o,this._templateElement=document.querySelector(n.templateSelector).content.querySelector(n.elementSelector),this._element=this._getTemplate(),this._imageElement=this._element.querySelector(n.imageSelector),this._nameElement=this._element.querySelector(n.nameSelector),this._deleteButtonElement=this._element.querySelector(n.deleteButtonSelector),this._likeButtonElement=this._element.querySelector(n.likeButtonSelector),this._likeCountElement=this._element.querySelector(n.likeCountSelector),this._likeToggleClass=n.likeToggleClass,this._handleCardClick=r,this._handleRemoveClick=i,this._handleRemove=a,this._handleLike=l,this._isLiked=this._checkLike(),this._isMine=this._checkOwner()}var t,n;return t=e,(n=[{key:"_getLikes",value:function(){return this._likes.length}},{key:"_setLikes",value:function(){this._likeCountElement.textContent=this._getLikes()}},{key:"_checkLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._user}))}},{key:"_checkOwner",value:function(){return!this._owner._id||this._owner._id===this._user}},{key:"_getTemplate",value:function(){return this._templateElement.cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._imageElement.addEventListener("click",this._handleCardClick),this._deleteButtonElement.addEventListener("click",this._handleRemoveClick.bind(this)),this._likeButtonElement.addEventListener("click",this._handleLikeButtonElementClick.bind(this))}},{key:"generateCard",value:function(){return this._setEventListeners(),this._imageElement.src=this._image,this._imageElement.alt=this._name,this._nameElement.textContent=this._name,this._isLiked&&this._likePost(),this._isMine||this._deleteButtonElement.remove(),this._setLikes(),this._element}},{key:"_handleLikeButtonElementClick",value:function(){var e=this;this._likePost(),this._isLiked=!this._isLiked,this._handleLike(this._id,this._isLiked).then((function(t){e._likes=t.likes})).then((function(t){e._setLikes()})).catch((function(e){console.log(e)}))}},{key:"removePost",value:function(){this._element.remove(),this._handleRemove(this._id)}},{key:"_likePost",value:function(){this._likeButtonElement.classList.toggle(this._likeToggleClass)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._buttonElementText=this._buttonElement.textContent}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".input-".concat(e.name,"-error"));e.classList.add(this._validationConfig.inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".input-".concat(e.name,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"activateLoadingIndication",value:function(){this._buttonElement.textContent="Сохранение..."}},{key:"deactivateLoadingIndication",value:function(){this._buttonElement.textContent=this._buttonElementText}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var z=new(function(){function e(t){var n=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=o}var t,n;return t=e,(n=[{key:"_fetchRequest",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"postData",value:function(e,t){var n="".concat(this._baseUrl,"/").concat(t),o={method:"POST",headers:this._headers,body:JSON.stringify(e)};return this._fetchRequest(n,o)}},{key:"getData",value:function(e){var t="".concat(this._baseUrl,"/").concat(e),n={method:"GET",headers:this._headers};return this._fetchRequest(t,n)}},{key:"patchData",value:function(e,t){var n="".concat(this._baseUrl,"/").concat(t),o={method:"PATCH",headers:this._headers,body:JSON.stringify(e)};return this._fetchRequest(n,o)}},{key:"deleteData",value:function(e,t){var n="".concat(this._baseUrl,"/").concat(e,"/").concat(t),o={method:"DELETE",headers:this._headers};return this._fetchRequest(n,o)}},{key:"likeCard",value:function(e,t){var n="".concat(this._baseUrl,"/cards/").concat(e,"/likes"),o={method:t?"PUT":"DELETE",headers:this._headers};return this._fetchRequest(n,o)}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"fffac5cb-2beb-4c6d-b998-0bdeed4853fd","Content-Type":"application/json"}}),G=new F(u,".form_type_add-item"),H=new F(u,".form_type_edit-profile"),K=new F(u,".form_type_edit-avatar"),Q=new E(".popup_type_preview",a,e,".popup__image",".popup__caption");Q.setEventListeners();var W=new x(".popup_type_delete-confirmation",a,e,(function(e){e.preventDefault(),W._openedFrom.removePost(),W.close()}));W.setEventListeners();var X=new c(".profile__name",".profile__about",".profile__image");function Y(e){var t=function(e){return new M(e,l,X.id,(function(){Q.open(e)}),(function(){W.open(this)}),(function(e){return z.deleteData("cards",e)}),(function(e,t){return z.likeCard(e,t)})).generateCard()}(e);te.addItem(t)}var Z=new I(".popup_type_add-item",a,e,r,i,(function(e){e.preventDefault(),G.activateLoadingIndication(),G.disableButton();var t=Z.getInputValues();z.postData(t,"cards").then((function(e){return Y(e)})).catch((function(e){return console.log(e)})).finally((function(e){G.deactivateLoadingIndication(),Z.close()}))}));Z.setEventListeners();var $=new I(".popup_type_edit-profile",a,e,r,i,(function(e){e.preventDefault(),H.activateLoadingIndication();var t=$.getInputValues();X.setUserInfo(t),X.renderUserInfo(),z.patchData(t,"users/me").catch((function(e){return console.log(e)})).finally((function(e){H.deactivateLoadingIndication(),$.close()}))}));$.setEventListeners();var ee=new I(".popup_type_edit-avatar",a,e,r,i,(function(e){e.preventDefault(),K.activateLoadingIndication();var t=ee.getInputValues();console.log(t),console.log(t.link),X.setUserImage(t.link),X.renderUserImage(),z.patchData({avatar:t.link},"users/me/avatar").catch((function(e){return console.log(e)})).finally((function(e){K.deactivateLoadingIndication(),ee.close()}))}));ee.setEventListeners();var te=new p({items:[],renderer:function(e){return Y(e)}},".elements"),ne=z.getData("cards"),oe=z.getData("users/me");Promise.all([ne,oe]).then((function(e){te.initialArray=e[0].reverse(),X.setUserImage(e[1].avatar),X.setUserInfo({name:e[1].name,about:e[1].about}),X.setUserId(e[1]._id)})).then((function(e){te.renderItems(),X.renderUserInfo(),X.renderUserImage()})).catch((function(e){console.log(e)})),t.addEventListener("click",(function(){var e=X.getUserInfo();$.setInputValues(e),H.resetValidation(),$.open()})),n.addEventListener("click",(function(){G.resetValidation(),Z.open()})),o.addEventListener("click",(function(){K.resetValidation(),ee.open()})),G.enableValidation(),H.enableValidation(),K.enableValidation()})();