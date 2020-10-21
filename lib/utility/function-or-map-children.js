"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = functionOrMapChildren;

var _react = _interopRequireDefault(require("react"));

var _isFunction = require("./is-function");

var _ref = /*#__PURE__*/_react["default"].createElement("div", null, "Could not render children from function");

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", null, "Could not clone children");

function functionOrMapChildren(children, withProps) {
  if (children && (0, _isFunction.isFunction)(children)) {
    return children(withProps) || _ref;
  }

  return _react["default"].Children.map(children, function (child) {
    return _react["default"].cloneElement(child, withProps);
  }) || _ref2;
}