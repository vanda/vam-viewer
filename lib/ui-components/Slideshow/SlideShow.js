"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _canvasPanelBeta = require("canvas-panel-beta");

var _MobilePageView = _interopRequireDefault(require("../MobilePageView/MobilePageView"));

var _SimpleSlideTransition = _interopRequireDefault(require("../SimpleSlideTransition/SimpleSlideTransition"));

var _ProgressIndicator = _interopRequireDefault(require("../ProgressIndicator/ProgressIndicator"));

var _Slide = _interopRequireDefault(require("../Slide/Slide"));

var _CanvasNavigation = _interopRequireDefault(require("../CanvasNavigation/CanvasNavigation"));

var _reactSwipeable = require("react-swipeable");

require("./SlideShow.scss");

// @ts-ignore
// @ts-ignore
var SlideShow = function SlideShow(_ref) {
  var _ref$mobileBreakPoint = _ref.mobileBreakPoint,
      mobileBreakPoint = _ref$mobileBreakPoint === void 0 ? 767 : _ref$mobileBreakPoint,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? '#000000' : _ref$backgroundColor,
      _ref$addressable = _ref.addressable,
      addressable = _ref$addressable === void 0 ? false : _ref$addressable,
      id = _ref.id,
      jsonLd = _ref.jsonLd,
      manifestUri = _ref.manifestUri,
      renderPanel = _ref.renderPanel,
      bem = _ref.bem;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      innerWidth = _useState2[0],
      setInnerWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      qualifiesForMobile = _useState4[0],
      setQualifiesForMobile = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isMobileFullScreen = _useState6[0],
      setIsMobileFullScreen = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      inFocus = _useState8[0],
      setInFocus = _useState8[1];

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', function () {
      return setInnerWidth(window.innerWidth);
    });
    return function () {
      return window.removeEventListener('resize', function () {
        return setInnerWidth(window.innerWidth);
      });
    };
  }, []);
  (0, _react.useEffect)(function () {
    setQualifiesForMobile(window.innerWidth <= mobileBreakPoint);
  }, [innerWidth, mobileBreakPoint]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: bem.modifiers({
      isMobile: _canvasPanelBeta.Responsive.md.phone()
    }),
    onMouseOver: function onMouseOver() {
      return setInFocus(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setInFocus(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.Fullscreen, null, function ( //@ts-ignore
  _ref2) {
    var ref = _ref2.ref,
        fullscreenProps = (0, _objectWithoutProperties2["default"])(_ref2, ["ref"]);
    fullscreenProps = qualifiesForMobile ? {
      fullscreenEnabled: true,
      isFullscreen: isMobileFullScreen,
      exitFullscreen: function exitFullscreen() {
        return setIsMobileFullScreen(false);
      },
      goFullscreen: function goFullscreen() {
        return setIsMobileFullScreen(true);
      }
    } : fullscreenProps;
    return /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.Manifest, {
      url: manifestUri,
      jsonLd: jsonLd
    }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.RangeNavigationProvider, null, function (_ref3) {
      var rangeProps = (0, _extends2["default"])({}, _ref3);
      var manifest = rangeProps.manifest,
          canvas = rangeProps.canvas,
          canvasList = rangeProps.canvasList,
          currentIndex = rangeProps.currentIndex,
          previousRange = rangeProps.previousRange,
          nextRange = rangeProps.nextRange,
          region = rangeProps.region,
          goToRange = rangeProps.goToRange;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, qualifiesForMobile && isMobileFullScreen ? /*#__PURE__*/_react["default"].createElement(_MobilePageView["default"], Object.assign({
        isMobileFullScreen: isMobileFullScreen,
        addressable: addressable,
        id: id // @ts-ignore
        ,
        manifest: manifest // @ts-ignore
        ,
        previousRange: previousRange // @ts-ignore
        ,
        nextRange: nextRange // @ts-ignore
        ,
        fullscreenProps: fullscreenProps // @ts-ignore
        ,
        exitFullscreen: setIsMobileFullScreen // @ts-ignore
        ,
        canvas: canvas // @ts-ignore
        ,
        manifestUri: manifestUri // @ts-ignore

      }, rangeProps)) : /*#__PURE__*/_react["default"].createElement("div", {
        className: bem.element('inner-frame').modifiers({
          isMobile: qualifiesForMobile
        }),
        ref: ref,
        style: {
          background: backgroundColor
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactSwipeable.Swipeable, {
        className: bem.element('inner-frame').modifiers({
          isMobile: qualifiesForMobile
        }),
        onSwipedLeft: nextRange,
        onSwipedRight: previousRange,
        onSwipedDown: function onSwipedDown() {},
        onSwipedUp: function onSwipedUp() {},
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true
      }, /*#__PURE__*/_react["default"].createElement(_SimpleSlideTransition["default"], {
        id: currentIndex
      }, /*#__PURE__*/_react["default"].createElement(_Slide["default"], {
        fullscreenProps: fullscreenProps,
        behaviors: canvas ? canvas.__jsonld.behavior || [] : [],
        manifest: manifest,
        canvas: canvas,
        region: region,
        renderPanel: renderPanel,
        backgroundColor: backgroundColor,
        mobile: qualifiesForMobile,
        manifestUri: manifestUri
      })), /*#__PURE__*/_react["default"].createElement(_CanvasNavigation["default"], {
        previousRange: previousRange,
        nextRange: nextRange,
        canvasList: canvasList,
        currentIndex: currentIndex,
        addressable: addressable,
        goToRange: goToRange,
        id: id,
        parentInFocus: inFocus
      }), /*#__PURE__*/_react["default"].createElement(_ProgressIndicator["default"], {
        currentCanvas: currentIndex,
        totalCanvases: canvasList.length
      }))));
    }));
  }));
};

var _default = (0, _canvasPanelBeta.withBemClass)('slideshow')(SlideShow);

exports["default"] = _default;