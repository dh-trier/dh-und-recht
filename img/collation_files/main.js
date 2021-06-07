/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = closeAllElements;
function closeAllElements() {
  document.querySelector('#ob-bar-opacity').classList.remove('ob-bar-opacity');
  document.querySelector('#ob-search-modal-content').classList.remove('active');
  document.querySelector('#ob-grid-nav-content').classList.remove('ob-active-bar');
  document.querySelector('#ob-grid-nav-content').classList.replace('ob-open-right', 'ob-close-right');
  document.querySelector('#ob-mobile-sidenav').classList.remove('ob-header-main-nav-open');
  document.querySelector('#ob-mobile-sidenav').classList.replace('ob-open-left', 'ob-close-left');
  document.querySelector('.ob-header-bottom-bar').classList.remove('shadowed');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_styles_main_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scripts_pictures__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_scripts_side_nav__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scripts_openbarre__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_scripts_modal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_scripts_close__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_scripts_sticky_nav__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_scripts_dropdown__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_scripts_misc__ = __webpack_require__(30);
// Import des Styles


// Import des Images


// Mobile


// Openbarre


// Modale


// Close


// Sticky  nav


// Dropdown


// Misc


function initializeOpenBarre() {
  Object(__WEBPACK_IMPORTED_MODULE_2__assets_scripts_side_nav__["a" /* initializeNav2 */])();
  Object(__WEBPACK_IMPORTED_MODULE_3__assets_scripts_openbarre__["a" /* initializeNav1 */])();
  Object(__WEBPACK_IMPORTED_MODULE_4__assets_scripts_modal__["a" /* initializeModal */])();
  Object(__WEBPACK_IMPORTED_MODULE_5__assets_scripts_close__["a" /* initializeKeyDown */])();
  Object(__WEBPACK_IMPORTED_MODULE_6__assets_scripts_sticky_nav__["a" /* initializeScroll */])();
  Object(__WEBPACK_IMPORTED_MODULE_7__assets_scripts_dropdown__["a" /* initializeDropDown */])();
  Object(__WEBPACK_IMPORTED_MODULE_8__assets_scripts_misc__["a" /* initializeMisc */])();
}

document.addEventListener("DOMContentLoaded", function (event) {
  initializeOpenBarre();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "../images/search-openedition.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "../images/loupe-recherche.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "../images/close.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "../images/menuHamb_grey.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "../images/tout_openedition_gray.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "../images/menuHamb_OE.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "../images/menuHamb_calenda.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "../images/menuHamb_journal.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "../images/menuHamb_Books.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "../images/langues_hover.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "../images/partager_hover.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "../images/tout_openedition.svg";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_images_favico_svg__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_images_favico_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_images_favico_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_previous_website_png__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_previous_website_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_images_previous_website_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icons_SVG_tout_openedition_gray_svg__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icons_SVG_tout_openedition_gray_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_icons_SVG_tout_openedition_gray_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_SVG_tout_calenda_svg__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_SVG_tout_calenda_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_icons_SVG_tout_calenda_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_icons_SVG_tout_hypotheses_svg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_icons_SVG_tout_hypotheses_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_icons_SVG_tout_hypotheses_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_icons_SVG_tout_journals_svg__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_icons_SVG_tout_journals_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_icons_SVG_tout_journals_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_icons_SVG_tout_books_svg__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_icons_SVG_tout_books_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_icons_SVG_tout_books_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_icons_SVG_tout_openedition_svg__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_icons_SVG_tout_openedition_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_icons_SVG_tout_openedition_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_icons_SVG_partager_hover_svg__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_icons_SVG_partager_hover_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_icons_SVG_partager_hover_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_icons_SVG_langues_hover_svg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_icons_SVG_langues_hover_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_icons_SVG_langues_hover_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_icons_SVG_search_openedition_svg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_icons_SVG_search_openedition_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_icons_SVG_search_openedition_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_icons_SVG_loupe_recherche_svg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_icons_SVG_loupe_recherche_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__assets_icons_SVG_loupe_recherche_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_icons_SVG_close_svg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_icons_SVG_close_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_icons_SVG_close_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_images_breadcrumb_sep_png__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_images_breadcrumb_sep_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_images_breadcrumb_sep_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_icons_SVG_menuHamb_Books_svg__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_icons_SVG_menuHamb_Books_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__assets_icons_SVG_menuHamb_Books_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_icons_SVG_menuHamb_calenda_svg__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_icons_SVG_menuHamb_calenda_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__assets_icons_SVG_menuHamb_calenda_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_icons_SVG_menuHamb_grey_svg__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_icons_SVG_menuHamb_grey_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__assets_icons_SVG_menuHamb_grey_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_icons_SVG_menuHamb_journal_svg__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_icons_SVG_menuHamb_journal_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__assets_icons_SVG_menuHamb_journal_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_icons_SVG_menuHamb_OE_svg__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_icons_SVG_menuHamb_OE_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_icons_SVG_menuHamb_OE_svg__);
// Logos















/* Hamburger menu */






/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "../images/favico.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "../images/previous-website.png";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "../images/tout_calenda.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "../images/tout_hypotheses.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "../images/tout_journals.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "../images/tout_books.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "../images/breadcrumb-sep.png";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeNav2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ob_methods__ = __webpack_require__(0);




function initializeNav2() {
    var sidenavButton = document.getElementById("ob-sidenav-button");
    if (sidenavButton) {
        sidenavButton.addEventListener("click", function (event) {
            if (!document.getElementById("ob-mobile-sidenav").classList.contains('ob-open-left')) {
                Object(__WEBPACK_IMPORTED_MODULE_0__ob_methods__["a" /* closeAllElements */])();
                document.getElementById("ob-mobile-sidenav").classList.add("ob-open-left");
                document.getElementById("ob-mobile-sidenav").classList.remove("ob-close-left");
                if (window.matchMedia("(max-width: 1024px)").matches) {
                    document.querySelector(".ob-header-bottom-bar").classList.add('shadowed');
                }
                /* Adding gray background for tablets */
                if (window.matchMedia("(max-width: 1300px)").matches) {
                    document.querySelector('#ob-bar-opacity').classList.add('ob-bar-opacity');
                }
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_0__ob_methods__["a" /* closeAllElements */])();
            }
        });
    }
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeNav1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ob_methods__ = __webpack_require__(0);




function initializeNav1() {
    var gridNavContent = document.getElementById("ob-grid-nav-content-open");
    if (gridNavContent) {
        gridNavContent.addEventListener("click", function (event) {
            if (!document.getElementById("ob-grid-nav-content").classList.contains('ob-open-right')) {
                Object(__WEBPACK_IMPORTED_MODULE_0__ob_methods__["a" /* closeAllElements */])();
                document.getElementById("ob-grid-nav-content").classList.add('ob-open-right');
                document.getElementById("ob-grid-nav-content").classList.remove('ob-close-right');
                if (window.matchMedia("(max-width: 1024px)").matches) {
                    document.querySelector(".ob-header-bottom-bar").classList.add('shadowed');
                }
                /* Adding gray background for tablets */
                if (window.matchMedia("(max-width: 1136px)").matches) {
                    document.querySelector('#ob-bar-opacity').classList.add('ob-bar-opacity');
                }
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_0__ob_methods__["a" /* closeAllElements */])();
            }
        });
    }
}



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeModal; });


function closeModal() {
    document.querySelector('#ob-bar-opacity').classList.remove('ob-bar-opacity');
    document.querySelector('#ob-search-modal-content').classList.remove('active');
}

function initializeModal() {
    var modalBack = document.querySelector('#ob-bar-opacity');
    var modalOpen = document.querySelectorAll('.ob-search2-modal-open');

    for (var i = 0; i < modalOpen.length; i++) {
        modalOpen[i].addEventListener("click", function (el) {
            modalBack.classList.add('ob-bar-opacity');
            document.querySelector('#ob-search-modal-content').classList.add('active');
            document.querySelector('.ob-search-field').focus();
            document.querySelector('#ob-search-modal-close').addEventListener("click", function () {
                closeModal();
            });
        });
    }
    modalBack.addEventListener("click", function () {
        closeModal();
    });
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeKeyDown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ob_methods__ = __webpack_require__(0);




function initializeKeyDown() {
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key == "Escape" || evt.key == "Esc";
    } else {
      isEscape = evt.keyCode == 27;
    }
    if (isEscape) {
      Object(__WEBPACK_IMPORTED_MODULE_0__ob_methods__["a" /* closeAllElements */])();
    }
  };

  document.addEventListener('mouseup', function (e) {
    var rightMenu = document.getElementById('ob-grid-nav-content');
    var button = document.getElementById('ob-grid-nav-content-open');
    var leftMenu = document.getElementById('ob-mobile-sidenav');
    var leftButton = document.getElementById('ob-sidenav-button');
    var modal = document.querySelector('#ob-search-modal-content');
    if (!rightMenu.contains(e.target) && !button.contains(e.target) && !leftMenu.contains(e.target) && !leftButton.contains(e.target) && !modal.contains(e.target)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__ob_methods__["a" /* closeAllElements */])();
    }
  }.bind(this));
}



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeScroll; });


function initializeScroll() {
    document.addEventListener("scroll", function (event) {
        var sticky = document.querySelector('#ob-header');
        if (!sticky.classList.contains('ob-header-hypothesesorg')) {
            if (event.pageY > 126 || document.body.scrollTop > 126 || document.documentElement.scrollTop > 126) {
                sticky.classList.add('ob-sticky');
            } else {
                sticky.classList.remove('ob-sticky');
            }
        }
    });
}



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeDropDown; });


function initializeDropDown() {
    var switchLanguage = document.querySelector("#ob-switchLanguage");
    var socialShare = document.querySelector("#ob-socialShare");
    var dropdownLang = document.querySelector("#ob-language");
    var dropdownShare = document.querySelector("#ob-share");

    if (switchLanguage && socialShare) {
        switchLanguage.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                dropdownLang.classList.toggle('active');
            }
        });

        socialShare.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                dropdownShare.classList.toggle('active');
            }
        });
    }
}



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeMisc; });


function initializeMisc() {
  var headerBottonToutOe = document.querySelector(".ob-header-bottom-tout-OE-locales-button");
  if (headerBottonToutOe) {
    headerBottonToutOe.addEventListener("click", function () {
      document.querySelector(".ob-header-bottom-tout-OE-locales").classList.toggle("ob-active");
    });
  }
}



/***/ })
/******/ ]);