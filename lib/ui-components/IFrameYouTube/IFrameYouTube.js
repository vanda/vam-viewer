"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrameYouTube = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSwipeable = require("react-swipeable");

var IFrameYouTube = function IFrameYouTube(_ref) {
  var url = _ref.url,
      _ref$onDragStart = _ref.onDragStart,
      onDragStart = _ref$onDragStart === void 0 ? function () {} : _ref$onDragStart,
      _ref$onDragStop = _ref.onDragStop,
      onDragStop = _ref$onDragStop === void 0 ? function () {} : _ref$onDragStop;
  var handlers = (0, _reactSwipeable.useSwipeable)({
    onSwiping: function onSwiping(e) {
      return handleSwipe(e);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  var handleSwipe = function handleSwipe(event) {
    if (event.first === true) {
      onDragStart();
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", Object.assign({
    style: {
      height: '100%',
      background: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, handlers, {
    onTouchEnd: onDragStop
  }), /*#__PURE__*/_react["default"].createElement("iframe", {
    width: "100%",
    height: "60%",
    src: "".concat(url),
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }));
};

exports.IFrameYouTube = IFrameYouTube;