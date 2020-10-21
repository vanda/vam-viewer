"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _canvasPanelBeta = require("canvas-panel-beta");

var _AnnotationNavigation = _interopRequireDefault(require("../AnnotationNavigation/AnnotationNavigation"));

var _reactSwipeable = require("react-swipeable");

require("./MobileAnnotationView.scss");

// @ts-ignore
// this is a hook to listen for swipes
var MobileAnnotationView = function MobileAnnotationView(_ref) {
  var _ref$animationFramePa = _ref.animationFramePadding,
      animationFramePadding = _ref$animationFramePa === void 0 ? 400 : _ref$animationFramePa,
      disabled = _ref.disabled,
      annotations = _ref.annotations,
      viewport = _ref.viewport,
      bem = _ref.bem,
      children = _ref.children;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  (0, _react.useEffect)(function () {
    goToAnnotation(current);
  }, [disabled]);
  var handlers = (0, _reactSwipeable.useSwipeable)({
    onSwipedLeft: function onSwipedLeft() {
      return onNext();
    },
    onSwipedRight: function onSwipedRight() {
      return onPrevious();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  var goToAnnotation = function goToAnnotation(index) {
    if (index === 0) {
      viewport.resetView();
    } else {
      var selector = annotations[index - 1].on.selector;

      if (selector) {
        var x = selector.x,
            y = selector.y,
            width = selector.width,
            height = selector.height;
        viewport.goToRect({
          x: x,
          y: y,
          width: width,
          height: height ? height * 2 : height
        }, animationFramePadding);
      }
    }

    setCurrent(index);
  };

  var onPrevious = function onPrevious() {
    if (current !== 0) goToAnnotation(current - 1);
  };

  var onNext = function onNext() {
    if (current >= annotations.length) return;
    goToAnnotation(current + 1);
  };

  var renderSplash = function renderSplash() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('inner')
    }, children, /*#__PURE__*/_react["default"].createElement("button", {
      className: bem.element('button'),
      onClick: function onClick() {
        return goToAnnotation(1);
      }
    }, "Start"));
  };

  var renderAnnotation = function renderAnnotation(annotation, next) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('annotation-panel').modifiers({
        disabled: disabled
      })
    }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.AnnotationDetail, {
      annotation: annotation
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('footer')
    }, /*#__PURE__*/_react["default"].createElement(_AnnotationNavigation["default"], {
      bem: bem,
      onNext: current >= annotations.length ? null : onNext,
      onPrevious: current <= 0 ? null : onPrevious
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('void')
    }, next ? /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.AnnotationDetail, {
      annotation: next
    }) : null));
  };

  var annotation = current === 0 ? null : annotations[current - 1].annotation;
  var next = annotations[current] ? annotations[current].annotation : undefined;
  return /*#__PURE__*/_react["default"].createElement("div", Object.assign({
    className: bem.modifiers({
      splash: current === 0,
      disabled: disabled
    })
  }, handlers), annotation ? renderAnnotation(annotation, next) : renderSplash());
};

var _default = (0, _canvasPanelBeta.withBemClass)('mobile-annotation-view')(MobileAnnotationView);

exports["default"] = _default;