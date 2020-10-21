"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinsStory = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../viewers/patch-work-plugin/src/index");

require("./_pins.scss");

var _default = {
  title: 'Pins Example | Pins'
};
exports["default"] = _default;

var PinsStory = function PinsStory() {
  var pinsEl = (0, _react.useRef)('patchwork');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "patchwork-container"
  }, /*#__PURE__*/_react["default"].createElement(_index.PatchworkPlugin, {
    manifest: "https://stephenwf.github.io/ocean-liners.json",
    cssClassMap: {
      annotation: 'annotation-pin'
    },
    cssClassPrefix: "patchwork-",
    height: 500,
    width: 1200
  }));
};

exports.PinsStory = PinsStory;