"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var CloseIcon = function CloseIcon(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: className,
    onClick: onClick
  }, _ref2, _ref3);
};

exports.CloseIcon = CloseIcon;