"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _canvasPanelBeta = require("canvas-panel-beta");

var _withLocation = _interopRequireDefault(require("../withLocation/withLocation"));

var _queryString = _interopRequireDefault(require("query-string"));

var _Reset = require("../Icons/Reset");

require("./CanvasNavigation.scss");

// @ts-ignore
var _ref2 = /*#__PURE__*/_react["default"].createElement(_Reset.ResetIcon, null);

var _ref3 = /*#__PURE__*/_react["default"].createElement("svg", {
  viewBox: "0 0 100 100",
  width: "20px",
  height: "20px"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fill: "none",
  d: "M-1-1h582v402H-1z"
}), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M70.173 12.294L57.446.174l-47.62 50 47.62 50 12.727-12.122-36.075-37.879z",
  fill: "currentColor",
  fillRule: "nonzero"
})));

var _ref4 = /*#__PURE__*/_react["default"].createElement("svg", {
  viewBox: "0 0 100 100",
  width: "20px",
  height: "20px"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fill: "none",
  d: "M-1-1h582v402H-1z"
}), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M20 88.052l12.727 12.121 47.62-50-47.62-50L20 12.294l36.075 37.88z",
  fill: "currentColor",
  fillRule: "nonzero"
})));

var CanvasNavigation = function CanvasNavigation(_ref) {
  var previousRange = _ref.previousRange,
      nextRange = _ref.nextRange,
      canvasList = _ref.canvasList,
      currentIndex = _ref.currentIndex,
      goToRange = _ref.goToRange,
      bem = _ref.bem,
      hash = _ref.hash,
      _ref$addressable = _ref.addressable,
      addressable = _ref$addressable === void 0 ? false : _ref$addressable,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? canvasList ? canvasList.length : size : _ref$size,
      id = _ref.id,
      _ref$parentInFocus = _ref.parentInFocus,
      parentInFocus = _ref$parentInFocus === void 0 ? false : _ref$parentInFocus;

  var goToSlide = function goToSlide(index) {
    index = index + '';

    if (addressable) {
      var qParam = _queryString["default"].parse(window.location.hash);

      if (qParam.slideshow && Array.isArray(qParam.slideshow) && qParam.slide && Array.isArray(qParam.slide)) {
        var indexOfQueryId = qParam.slideshow.find(function (query) {
          return parseInt(query) === id;
        });

        if (indexOfQueryId) {
          qParam.slide[parseInt(indexOfQueryId)] = currentIndex + '';
          document.location.hash = _queryString["default"].stringify(qParam);
        }
      } else {
        if (typeof qParam.slideshow === 'string' && parseInt(qParam.slideshow) !== id) {
          document.location.hash = document.location.hash + "&".concat(buildId(currentIndex));
        } else {
          document.location.hash = "#".concat(buildId(currentIndex));
        }
      }
    }
  };

  var buildId = function buildId(index) {
    return "slideshow=".concat(id, "&slide=").concat(index);
  };

  var getSlideByID = function getSlideByID() {
    var qParam = _queryString["default"].parse(window.location.hash);

    var slideshow;

    if (qParam.slideshow && Array.isArray(qParam.slideshow) && qParam.slide && Array.isArray(qParam.slide)) {
      var indexOfQueryId = qParam.slideshow.find(function (query) {
        return parseInt(query) === id;
      });
      if (indexOfQueryId) slideshow = qParam.slide[parseInt(indexOfQueryId)];
      if (!slideshow || slideshow < 0 || slideshow >= canvasList.length) slideshow = '0';
    } else {
      slideshow = qParam.slide;
    }

    if (!slideshow) slideshow = '0';
    return parseInt(slideshow);
  };

  (0, _react.useEffect)(function () {
    if (addressable && hash) {
      if (typeof hash.slide === 'string') {
        var slideId = hash.slide;

        if (slideId) {
          parseInt(slideId);
        }

        var intSlideId = slideId ? parseInt(slideId) : 0;

        if (!hash || !intSlideId || intSlideId < 0 || intSlideId >= canvasList.length) {
          goToSlide(currentIndex);
          return;
        } else {
          goToRange(intSlideId);
        }
      } else {
        goToRange(getSlideByID());
      }
    }
  }, []);
  (0, _react.useEffect)(function () {
    goToSlide(getSlideByID());
    document.addEventListener('keyup', handleKeyPress);
    return function () {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [currentIndex, parentInFocus]);

  var handleKeyPress = function handleKeyPress(event) {
    if (!parentInFocus) return;

    if (event.code === 'ArrowRight') {
      var next = getSlideByID() ? getSlideByID() + 1 : currentIndex + 1;

      if (next && next >= 0 && next < canvasList.length) {
        goToRange(next);
      }
    }

    if (event.code === 'ArrowLeft') {
      var previous = getSlideByID() ? getSlideByID() - 1 : currentIndex - 1;

      if (previous === 0 || previous >= 0 && previous < canvasList.length) {
        goToRange(previous);
      }
    }
  };

  return (
    /*#__PURE__*/
    // @ts-ignore
    _react["default"].createElement("div", {
      className: bem
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick(ev) {
        ev.preventDefault();
        goToRange(0);
      },
      title: "Reset slideshow",
      className: bem // @ts-ignore
      .element('reset').modifiers({
        isFirstPage: currentIndex === 0
      })
    }, _ref2), /*#__PURE__*/_react["default"].createElement("button", {
      className: bem // @ts-ignore
      .element('previous').modifiers({
        isFirstPage: currentIndex === 0
      }),
      title: "Previous slide",
      onClick: function onClick(ev) {
        ev.preventDefault();
        previousRange();
      }
    }, _ref3), /*#__PURE__*/_react["default"].createElement("button", {
      className: bem // @ts-ignore
      .element('next').modifiers({
        isLastPage: currentIndex === size - 1
      }),
      title: "Next slide",
      onClick: function onClick(ev) {
        ev.preventDefault();
        nextRange();
      }
    }, _ref4))
  );
}; //@ts-ignore


var navigation = (0, _canvasPanelBeta.withBemClass)('canvas-navigation')(CanvasNavigation);

var _default = (0, _withLocation["default"])(navigation);

exports["default"] = _default;