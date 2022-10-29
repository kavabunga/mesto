(()=>{"use strict";var e=".popup__close-button",t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__image-edit-button"),r=".form",i=".form__input",a="popup_opened",u={templateSelector:".card-template",elementSelector:".element",imageSelector:".element__image",nameSelector:".element__name",deleteButtonSelector:".element__delete-button",likeButtonSelector:".element__heart-button",likeCountSelector:".element__heart-counter",likeToggleClass:"element__heart-button_active"},l={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error"};function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._aboutElement=document.querySelector(n),this._imageElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameElement.textContent=t,this._aboutElement.textContent=n}},{key:"setUserImage",value:function(e){this._imageElement.src=e,this._imageElement.alt=this._nameElement.textContent}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var _=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._popupCloseButton=this._element.querySelector(o),this._popupToggleClass=n,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add(this._popupToggleClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove(this._popupToggleClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&(e.preventDefault(),this.close())}},{key:"_handlePopupOverlayClick",value:function(e){e.target!==this._element&&e.target!==this._popupCloseButton||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(t){return e._handlePopupOverlayClick(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=v(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(o);if(r){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t,n,o,r){var u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(u=i.call(this,e,t,n))._popupPreviewImage=u._getElements(o),u._popupPreviewCaption=u._getElements(r),u}return t=a,(n=[{key:"_getElements",value:function(e){return this._element.querySelector(e)}},{key:"open",value:function(e){var t=e.name,n=e.link;m(k(a.prototype),"open",this).call(this),this._popupPreviewImage.src=n,this._popupPreviewImage.alt=t,this._popupPreviewCaption.textContent=t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=S(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},C.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(o);if(r){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t,n,o,r,u){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(l=i.call(this,e,t,n))._form=l._element.querySelector(o),l._inputList=l._form.querySelectorAll(r),l._handleSubmit=u,l._buttonElement=l._form.querySelector('button[type="submit"]'),l._buttonElementText=l._buttonElement.textContent,l}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){e[t.name]&&(t.value=e[t.name])}))}},{key:"close",value:function(){C(j(a.prototype),"close",this).call(this),this._form.reset()}},{key:"activateLoadingIndication",value:function(){this._buttonElement.textContent="Сохранение..."}},{key:"deactivateLoadingIndication",value:function(){this._buttonElement.textContent=this._buttonElementText}},{key:"setEventListeners",value:function(){var e=this;C(j(a.prototype),"setEventListeners",this).call(this),this._element.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=q(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},T.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function x(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(o);if(r){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t,n,o){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e,t,n))._handleSubmit=o,r}return t=a,(n=[{key:"open",value:function(e,t){T(U(a.prototype),"open",this).call(this),this._openedFrom=e,this._removePostHandler=t}},{key:"setEventListeners",value:function(){var e=this;T(U(a.prototype),"setEventListeners",this).call(this),this._element.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._openedFrom,e._removePostHandler)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var H=function(){function e(t,n,o,r,i,a){var u=t.name,l=void 0===u?"":u,c=t.link,s=void 0===c?"":c,f=t.likes,h=void 0===f?[]:f,p=t._id,_=void 0===p?"":p,d=t.owner,y=void 0===d?{}:d;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._image=s,this._name=l,this._likes=h,this._id=_,this._owner=y,this._user=o,this._templateElement=document.querySelector(n.templateSelector).content.querySelector(n.elementSelector),this._element=this._getTemplate(),this._imageElement=this._element.querySelector(n.imageSelector),this._nameElement=this._element.querySelector(n.nameSelector),this._deleteButtonElement=this._element.querySelector(n.deleteButtonSelector),this._likeButtonElement=this._element.querySelector(n.likeButtonSelector),this._likeCountElement=this._element.querySelector(n.likeCountSelector),this._likeToggleClass=n.likeToggleClass,this._handleCardClick=r,this._handleRemoveClick=i,this._handleLike=a,this._isMine=this._checkOwner()}var t,n;return t=e,(n=[{key:"_getLikes",value:function(){return this._likes.length}},{key:"_setLikeArray",value:function(e){this._likes=e}},{key:"_setLikes",value:function(){this._likeCountElement.textContent=this._getLikes(),this._checkLike(),this._isLiked?this._activateHeart():this._deactivateHeart()}},{key:"_checkLike",value:function(){var e=this;this._isLiked=!!this._likes.find((function(t){return t._id===e._user}))}},{key:"_checkOwner",value:function(){return!this._owner._id||this._owner._id===this._user}},{key:"_getTemplate",value:function(){return this._templateElement.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._imageElement.addEventListener("click",this._handleCardClick),this._deleteButtonElement.addEventListener("click",(function(){return e._handleRemoveClick(e._id,e._removePost.bind(e))})),this._likeButtonElement.addEventListener("click",this._handleLikeButtonElementClick.bind(this))}},{key:"generateCard",value:function(){return this._setEventListeners(),this._imageElement.src=this._image,this._imageElement.alt=this._name,this._nameElement.textContent=this._name,this._isMine||this._deleteButtonElement.remove(),this._setLikes(),this._element}},{key:"_handleLikeButtonElementClick",value:function(){this._handleLike(this._id,!this._isLiked,this._setLikes.bind(this),this._setLikeArray.bind(this))}},{key:"_removePost",value:function(){this._element.remove()}},{key:"_activateHeart",value:function(){this._likeButtonElement.classList.add(this._likeToggleClass)}},{key:"_deactivateHeart",value:function(){this._likeButtonElement.classList.remove(this._likeToggleClass)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var N=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".input-".concat(e.name,"-error"));e.classList.add(this._validationConfig.inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".input-".concat(e.name,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var G,J=new(function(){function e(t){var n=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=o}var t,n;return t=e,(n=[{key:"_fetchRequest",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postData",value:function(e,t){var n="".concat(this._baseUrl,"/").concat(t),o={method:"POST",headers:this._headers,body:JSON.stringify(e)};return this._fetchRequest(n,o)}},{key:"getUserData",value:function(){var e="".concat(this._baseUrl,"/users/me"),t={method:"GET",headers:this._headers};return this._fetchRequest(e,t)}},{key:"getCardsData",value:function(){var e="".concat(this._baseUrl,"/cards"),t={method:"GET",headers:this._headers};return this._fetchRequest(e,t)}},{key:"patchData",value:function(e,t){var n="".concat(this._baseUrl,"/").concat(t),o={method:"PATCH",headers:this._headers,body:JSON.stringify(e)};return this._fetchRequest(n,o)}},{key:"deleteData",value:function(e,t){var n="".concat(this._baseUrl,"/").concat(e,"/").concat(t),o={method:"DELETE",headers:this._headers};return this._fetchRequest(n,o)}},{key:"likeCard",value:function(e,t){var n="".concat(this._baseUrl,"/cards/").concat(e,"/likes"),o={method:t?"PUT":"DELETE",headers:this._headers};return this._fetchRequest(n,o)}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"fffac5cb-2beb-4c6d-b998-0bdeed4853fd","Content-Type":"application/json"}}),z=new N(l,".form_type_add-item"),K=new N(l,".form_type_edit-profile"),Q=new N(l,".form_type_edit-avatar"),W=new E(".popup_type_preview",a,e,".popup__image",".popup__caption");W.setEventListeners();var X=new V(".popup_type_delete-confirmation",a,e,(function(e,t){var n=this;J.deleteData("cards",e).then((function(e){t(),n.close()})).catch((function(e){console.log(e)}))}));X.setEventListeners();var Y=new s(".profile__name",".profile__about",".profile__image");function Z(e){var t=function(e){return new H(e,u,G,(function(){W.open(e)}),(function(e,t){X.open(e,t)}),(function(e,t,n,o){return J.likeCard(e,t).then((function(e){o(e.likes),n()})).catch((function(e){console.log(e)}))})).generateCard()}(e);ne.addItem(t)}var $=new I(".popup_type_add-item",a,e,r,i,(function(e){var t=this;this.activateLoadingIndication(),z.disableButton(),J.postData(e,"cards").then((function(e){Z(e),t.close()})).catch((function(e){console.log(e)})).finally((function(e){t.deactivateLoadingIndication()}))}));$.setEventListeners();var ee=new I(".popup_type_edit-profile",a,e,r,i,(function(e){var t=this;this.activateLoadingIndication(),K.disableButton(),J.patchData(e,"users/me").then((function(n){Y.setUserInfo(e),t.close()})).catch((function(e){console.log(e)})).finally((function(e){t.deactivateLoadingIndication()}))}));ee.setEventListeners();var te=new I(".popup_type_edit-avatar",a,e,r,i,(function(e){var t=this;this.activateLoadingIndication(),Q.disableButton(),J.patchData({avatar:e.link},"users/me/avatar").then((function(n){Y.setUserImage(e.link),t.close()})).catch((function(e){console.log(e)})).finally((function(e){t.deactivateLoadingIndication()}))}));te.setEventListeners();var ne=new h((function(e){Z(e)}),".elements"),oe=J.getCardsData(),re=J.getUserData();Promise.all([oe,re]).then((function(e){Y.setUserImage(e[1].avatar),Y.setUserInfo({name:e[1].name,about:e[1].about}),G=e[1]._id,ne.renderItems(e[0].reverse())})).catch((function(e){console.log(e)})),t.addEventListener("click",(function(){var e=Y.getUserInfo();ee.setInputValues(e),K.resetValidation(),ee.open()})),n.addEventListener("click",(function(){z.resetValidation(),$.open()})),o.addEventListener("click",(function(){Q.resetValidation(),te.open()})),z.enableValidation(),K.enableValidation(),Q.enableValidation()})();