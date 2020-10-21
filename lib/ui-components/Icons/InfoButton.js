"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
  fill: "#fff"
});

var InfoIcon = function InfoIcon(_ref) {
  var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
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

var InfoButton = function InfoButton(_ref4) {
  var bem = _ref4.bem,
      onClick = _ref4.onClick,
      hidden = _ref4.hidden;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: bem.element('info').modifiers({
      hidden: hidden
    }),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(InfoIcon, {
    className: bem.element('info-icon'),
    onClick: function onClick() {}
  }));
};

exports.InfoButton = InfoButton;