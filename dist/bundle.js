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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $window = $(window);\nvar $body = $('body');\nvar $headerNavToggle = $('#headerNavToggle');\nvar $headerNav = $('#headerNav'); // const $headerNavItemLinks = $('.header__navItem > a');\n\nvar $headerNavItemLinks = $('.header__navItem:has(.childNavList) > a');\nvar $childNavList = $('.childNavList');\nvar enterTimer = null;\nvar $navOverlay = $('#navOverlay');\nvar $navLink = $(\".header__navItem > a\"); //あとで消す\n\nvar $entireBackgroud = $('#entireBackgroud');\nvar $entireBackgroudItem = {\n  large: $entireBackgroud.find('.large'),\n  medium: $entireBackgroud.find('.medium'),\n  small: $entireBackgroud.find('.small')\n};\nvar $visual = $(\"#visual\");\nvar $visualPositions = $visual.find('.position');\nvar $visualImg = {\n  back: $visualPositions.filter('[data-position=\"back\"]').find('img'),\n  middle: $visualPositions.filter('[data-position=\"middle\"]').find('img'),\n  front: $visualPositions.filter('[data-position=\"front\"]').find('img')\n};\nvar $visualBg = $('#visualBg');\nvar $visualLogoTitle = $('#visualLogoTitle');\nvar $concept = $(\"#concept\");\nvar $column = $('.column');\nvar $columnCulture = $(\"#columnCulture\");\nvar $columnSkill = $(\"#columnSkill\");\nvar offset = {\n  concept: $concept.offset().top //あとで消す\n\n};\nvar scTop = $window.scrollTop();\nvar animaEndTimer = null;\nvar BREAKPOINT_MEDIUM = 767;\nvar MEDIA_QUERIES = {\n  LARGE: 'MEDIA_QUERIES_LARGE',\n  MEDIUM: 'MEDIA_QUERIES_MEDIUM'\n};\nvar mediaQueries = null;\n\nvar resetMediaQueries = function resetMediaQueries() {\n  var windowSize = $window.width();\n  windowSize > BREAKPOINT_MEDIUM ? mediaQueries = MEDIA_QUERIES.LARGE : mediaQueries = MEDIA_QUERIES.MEDIUM;\n};\n\n$window.on('load resize', function () {\n  resetMediaQueries();\n}); // const animaEnd = () => {\n//   clearTimeout(animaEndTimer);\n//   animaEndTimer = setTimeout(() => {\n//     $headerNav.removeClass(\"anima\");\n//   }, 1000);\n// }\n\n$headerNavToggle.click(function () {\n  if ($body.hasClass('navOpen')) {\n    $navOverlay.css('transform', 'scale(1)');\n  } else {\n    $navOverlay.css('transform', 'scale(38.35)');\n  }\n\n  $body.toggleClass(\"navOpen\");\n  $headerNav.addClass(\"anima\");\n  animaEnd();\n});\n$navLink.click(function (event) {\n  if (mediaQueries === MEDIA_QUERIES.MEDIUM) {\n    event.preventDefault();\n    var $currentTarget = $(event.currentTarget);\n    var $childnavList = $($currentTarget.next());\n\n    if ($currentTarget.hasClass('show')) {\n      $currentTarget.removeClass('show');\n      $childnavList.slideUp(600);\n    } else {\n      $currentTarget.addClass('show');\n      $childnavList.slideDown(600);\n    }\n  }\n});\nvar doneAnimation = {\n  visual: function visual() {\n    $visual.addClass(\"active\");\n    setTimeout(function () {\n      $visual.addClass(\"fix\");\n    }, 3000);\n  },\n  concept: function concept() {\n    $concept.addClass(\"active\");\n    setTimeout(function () {\n      $concept.addClass(\"fix\");\n    }, 3000);\n  },\n  column: function column(_ref) {\n    var $element = _ref.$element;\n    $element.addClass(\"active\");\n    setTimeout(function () {\n      $element.addClass(\"fix\");\n    }, 3000);\n  },\n  columnCulture: function columnCulture() {\n    return $columnCulture.addClass(\"active\");\n  },\n  columnSkill: function columnSkill() {\n    return $columnSkill.addClass(\"active\");\n  }\n};\ndoneAnimation.visual();\nwindow.addEventListener(\"scroll\", function () {\n  scTop = $window.scrollTop();\n  var pxNum = {\n    visualBg: Math.floor(scTop / 12),\n    visualImgBack: Math.floor(scTop / 11),\n    visualImgMiddle: Math.floor(scTop / 8),\n    visualImgFront: Math.floor(scTop / 7),\n    visualTitle: Math.floor(scTop / 4),\n    bgLarge: Math.floor(scTop / -3),\n    bgMedium: Math.floor(scTop / -6),\n    bgSmall: Math.floor(scTop / -8)\n  };\n  $visualBg.css('transform', \"translateY(\".concat(pxNum.visualBg, \"px)\"));\n  $visualImg.back.css('transform', \"translateY(\".concat(pxNum.visualImgBack, \"px)\"));\n  $visualImg.middle.css('transform', \"translateY(\".concat(pxNum.visualImgMiddle, \"px)\"));\n  $visualImg.front.css('transform', \"translateY(\".concat(pxNum.visualImgFront, \"px)\"));\n  $visualLogoTitle.css('transform', \"translateY(\".concat(pxNum.visualTitle, \"px)\"));\n  $entireBackgroudItem.large.css('transform', \"translateY(\".concat(pxNum.bgLarge, \"px)\"));\n  $entireBackgroudItem.medium.css('transform', \"translateY(\".concat(pxNum.bgMedium, \"px)\"));\n  $entireBackgroudItem.small.css('transform', \"translateY(\".concat(pxNum.bgSmall, \"px)\"));\n\n  if (scTop + $window.height() > offset.concept) {\n    doneAnimation.concept();\n  }\n\n  $column.each(function (idx, element) {\n    var $element = $(element);\n    var pointer = $element.offset().top;\n\n    if (scTop + $window.height() > pointer) {\n      doneAnimation.column({\n        $element: $element\n      });\n    }\n  });\n});\n\nvar animaEnd = function animaEnd(element) {\n  var $currentTarget = $(element.currentTarget);\n  $currentTarget.removeClass('anima');\n};\n\nvar subNavLeave = function subNavLeave(element) {\n  var $currentTarget = $(element.currentTarget);\n  clearTimeout(enterTimer);\n  $currentTarget.removeClass(\"active\").addClass(\"anima\");\n};\n\n$childNavList.on('transitionend', animaEnd).on('mouseleave', subNavLeave);\n$headerNavItemLinks.mouseenter(function (event) {\n  var $currentTarget = $(event.currentTarget);\n  var $childnavList = $currentTarget.next();\n  clearTimeout(enterTimer);\n  enterTimer = setTimeout(function () {\n    $childnavList.addClass('active anima');\n  }, 200);\n});\n$headerNavItemLinks.mouseleave(function (event) {\n  var $currentTarget = $(event.currentTarget);\n  var $childnavList = $currentTarget.next();\n  var btmLine = $currentTarget.offset().top + $currentTarget.outerHeight();\n\n  if (event.clientY + scTop < btmLine) {\n    leaveTimer = setTimeout(function () {\n      $childnavList.removeClass('active').addClass('anima');\n    }, 200);\n  }\n\n  clearTimeout(enterTimer);\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });