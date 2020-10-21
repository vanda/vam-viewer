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

var _SwappableViewer = _interopRequireDefault(require("../SwappableViewer/SwappableViewer"));

var _CanvasDetail = _interopRequireDefault(require("../CanvasDetail/CanvasDetail"));

var _InfoButton = require("../Icons/InfoButton");

var _CloseIcon = require("../Icons/CloseIcon");

require("./Slide.scss");

// @ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
var InfoPanel = function InfoPanel(_ref) {
  var children = _ref.children,
      label = _ref.label,
      attribution = _ref.attribution,
      bem = _ref.bem,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: bem.element('info-panel'),
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon.CloseIcon, {
    className: bem.element('info-panel-close')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: bem.element('info-panel-attribution')
  }, attribution), /*#__PURE__*/_react["default"].createElement("h2", null, label), /*#__PURE__*/_react["default"].createElement("p", {
    className: bem.element('info-panel-body')
  }, children));
};

var Slide = function Slide(_ref2) {
  var bem = _ref2.bem,
      behaviors = _ref2.behaviors,
      manifest = _ref2.manifest,
      canvas = _ref2.canvas,
      region = _ref2.region,
      renderPanel = _ref2.renderPanel,
      fullscreenProps = _ref2.fullscreenProps,
      _ref2$backgroundColor = _ref2.backgroundColor,
      backgroundColor = _ref2$backgroundColor === void 0 ? '#000000' : _ref2$backgroundColor,
      _ref2$mobile = _ref2.mobile,
      mobile = _ref2$mobile === void 0 ? false : _ref2$mobile,
      manifestUri = _ref2.manifestUri;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var renderInfoPanel = function renderInfoPanel(label, attribution, body) {
    return /*#__PURE__*/_react["default"].createElement(InfoPanel, {
      bem: bem,
      onClose: function onClose() {
        return setOpen(false);
      },
      label: label,
      attribution: attribution
    }, body);
  };

  var _ref4 = /*#__PURE__*/_react["default"].createElement(_InfoButton.InfoButton, {
    bem: bem,
    onClick: setOpen
  });

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: bem.modifiers(behaviors.reduce(function (acc, next) {
      acc[next] = true;
      return acc;
    }, {})),
    style: {
      background: backgroundColor
    }
  }, /*#__PURE__*/_react["default"].createElement(_SwappableViewer["default"], {
    fullscreenProps: fullscreenProps,
    isInteractive: true,
    manifest: manifest,
    canvas: canvas,
    region: region,
    manifestUri: manifestUri
  }), renderPanel ? renderPanel({
    bem: bem,
    behaviors: behaviors,
    manifest: manifest,
    canvas: canvas,
    region: region,
    renderPanel: renderPanel,
    fullscreenProps: fullscreenProps,
    backgroundColor: backgroundColor
  }) : /*#__PURE__*/_react["default"].createElement(_CanvasDetail["default"], {
    canvas: canvas
  }, function ( // @ts-ignore
  _ref3) {
    var label = _ref3.label,
        body = _ref3.body,
        attributionLabel = _ref3.attributionLabel,
        attribution = _ref3.attribution;
    return mobile ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, open ? renderInfoPanel(label, attribution, body) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), _ref4) : /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('overlay').modifiers({
        isMobile: mobile
      })
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('overlay-content')
    }, label ? /*#__PURE__*/_react["default"].createElement("h3", {
      className: bem.element('title')
    }, label) : null, body ? /*#__PURE__*/_react["default"].createElement("p", {
      className: bem.element('text')
    }, body) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: bem.element('overlay-floating')
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: bem.element('required-statement')
    }, attributionLabel, attribution)));
  }));
};

var _default = (0, _canvasPanelBeta.withBemClass)('slide')(Slide);

exports["default"] = _default;