"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSlideShow = createSlideShow;
exports.createFullScreenTour = createFullScreenTour;
exports.createEmbeddedZoom = createEmbeddedZoom;
Object.defineProperty(exports, "SlideShow", {
  enumerable: true,
  get: function get() {
    return _slideshow.SlideShow;
  }
});
Object.defineProperty(exports, "PopOutViewer", {
  enumerable: true,
  get: function get() {
    return _fullPagePlugin.PopOutViewer;
  }
});
Object.defineProperty(exports, "PatchworkPlugin", {
  enumerable: true,
  get: function get() {
    return _src.PatchworkPlugin;
  }
});

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _slideshow = require("./viewers/slideshow");

var _fullPagePlugin = require("./viewers/full-page-plugin");

var _src = require("./viewers/patch-work-plugin/src");

// export functions here
function createSlideShow(container, iiifResource, addressable, backgroundColor, id) {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_slideshow.SlideShow, {
    manifestUri: iiifResource,
    addressable: addressable,
    id: id,
    backgroundColor: backgroundColor
  }), container);
}

function createFullScreenTour(container, iiifResource, title, innerHtml) {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_fullPagePlugin.PopOutViewer, {
    manifest: iiifResource,
    title: title,
    innerHtml: innerHtml
  }), container);
}

function createEmbeddedZoom(container, iiifResource, width, height) {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_src.PatchworkPlugin, {
    manifest: iiifResource,
    cssClassMap: {
      annotation: 'annotation-pin'
    },
    cssClassPrefix: "patchwork-",
    height: width,
    width: height
  }), container);
}