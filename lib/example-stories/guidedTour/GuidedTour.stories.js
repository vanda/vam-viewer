"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GuidedTour = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _fullPagePlugin = require("../../viewers/full-page-plugin");

var _default = {
  title: 'Guided Tour| GuidedTour'
};
exports["default"] = _default;

var _ref = /*#__PURE__*/_react["default"].createElement("p", null, "Full page plugin. Scroll down to start experience.");

var _ref2 = /*#__PURE__*/_react["default"].createElement("span", {
  className: "muted"
}, "\xA9 Victoria and Albert Museum, London 2018");

var GuidedTour = function GuidedTour() {
  return /*#__PURE__*/_react["default"].createElement(_fullPagePlugin.PopOutViewer, {
    style: {
      background: '#fff',
      marginTop: 40,
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 10
    },
    manifest: "https://stephenwf.github.io/ocean-liners.json",
    title: "Ocean liners",
    innerHtml: "\n            <article class=\"b-promo__item js-object-fit-container\">\n                <a class=\"b-promo__anchor\" data-open-viewer href=\"javascript: void(0)\">\n                  <div class=\"b-promo__content\">\n                    <div class=\"u-btn u-btn--arrowed s-themed s-themed--background-color s-themed--background-color--hover s-themed--border-color s-themed--border-color--hover\">\n                      Start tour\n                    </div>\n\n                  </div>\n                </a>\n              </article>\n          "
  }, _ref, _ref2);
};

exports.GuidedTour = GuidedTour;