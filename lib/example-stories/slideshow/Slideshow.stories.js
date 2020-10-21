"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithClickableLinks = exports.WithVideoExample = exports.EmbeddedPinsInNormal = exports.EmbeddedPins = exports.MultipleSlideShows = exports.SingleSlideShow = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../viewers/slideshow/index.js");

var _addonKnobs = require("@storybook/addon-knobs");

//@ts-ignore
var _default = {
  title: 'Slideshow | Slideshow',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

// crossorigin = 'anonymous';
var SingleSlideShow = function SingleSlideShow() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "slideShowEl",
    style: {
      height: '75vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Manifest', 'https://raw.githubusercontent.com/4d4mm/adam-digirati.github.io/master/balenciaga4.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 0,
    backgroundColor: (0, _addonKnobs.color)('Background Colour', '#000000')
  }));
};

exports.SingleSlideShow = SingleSlideShow;

var MultipleSlideShows = function MultipleSlideShows() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "slideShowEl",
    style: {
      height: '75vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Top Manifest', 'https://iiif-collection.ch.digtest.co.uk/p3/testingmosaics-v4.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 0,
    backgroundColor: (0, _addonKnobs.color)('Top Background Colour', '#000000')
  }), /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Bottom Manifest', 'https://raw.githubusercontent.com/4d4mm/adam-digirati.github.io/master/balenciaga4.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 1,
    backgroundColor: (0, _addonKnobs.color)('Bottom Background Colour', '#000000')
  }));
};

exports.MultipleSlideShows = MultipleSlideShows;

var EmbeddedPins = function EmbeddedPins() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "slideShowEl",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Top Manifest', 'https://raw.githubusercontent.com/digirati-co-uk/vam-viewer/master/examples/ocean-liners.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 0,
    backgroundColor: (0, _addonKnobs.color)('Top Background Colour', '#000000')
  }));
};

exports.EmbeddedPins = EmbeddedPins;

var _ref = /*#__PURE__*/_react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

var _ref3 = /*#__PURE__*/_react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

var _ref4 = /*#__PURE__*/_react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

var _ref5 = /*#__PURE__*/_react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

var _ref6 = /*#__PURE__*/_react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

var EmbeddedPinsInNormal = function EmbeddedPinsInNormal() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _ref, _ref2, _ref3, /*#__PURE__*/_react["default"].createElement("div", {
    id: "slideShowEl",
    style: {
      height: '70vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Top Manifest', 'https://raw.githubusercontent.com/digirati-co-uk/vam-viewer/master/examples/embedded-tour.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 0,
    backgroundColor: (0, _addonKnobs.color)('Top Background Colour', '#000000')
  })), _ref4, _ref5, _ref6);
};

exports.EmbeddedPinsInNormal = EmbeddedPinsInNormal;

var WithVideoExample = function WithVideoExample() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "slideShowEl",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Manifest', 'https://raw.githubusercontent.com/digirati-co-uk/vam-viewer/master/examples/balenciaga-example.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 0,
    backgroundColor: (0, _addonKnobs.color)('Background Colour', '#000000')
  }));
};

exports.WithVideoExample = WithVideoExample;

var WithClickableLinks = function WithClickableLinks() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "slideShowEl",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.SlideShow, {
    manifestUri: (0, _addonKnobs.text)('Manifest', 'https://raw.githubusercontent.com/digirati-co-uk/vam-viewer/master/examples/micromosaics-example.json'),
    addressable: (0, _addonKnobs["boolean"])('Make URLs Addressable', true),
    id: 0,
    backgroundColor: (0, _addonKnobs.color)('Background Colour', '#000000')
  }));
};

exports.WithClickableLinks = WithClickableLinks;