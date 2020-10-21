"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PatchworkEmbed = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _canvasPanelBeta = require("canvas-panel-beta");

var defaultConfig = {
  cssClassPrefix: '',
  manifest: null,
  jsonLdManifest: null,
  cssClassMap: {},
  animationSpeed: 500,
  animationSpeedMap: {},
  fitContainer: false,
  // fixedSize: null, // { x, y }
  height: 500,
  annotationMargin: 600,
  width: 1200,
  mobileHeight: window.innerWidth,
  renderAnnotation: null,
  allowFullScreen: true,
  events: {},
  osdOptions: {},
  dispatch: function dispatch() {
    return null;
  },
  disableMouseEventsOnMobile: true,
  mobileBreakpoint: 639,
  growthStyle: 'fixed',
  closeText: '×',
  relativeContainer: true,
  clickToClose: true,
  hideSlideShowNav: function hideSlideShowNav() {}
};

var AdaptiveViewport = function AdaptiveViewport(_ref) {
  var fullViewport = _ref.fullViewport,
      isFullscreen = _ref.isFullscreen,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["fullViewport", "isFullscreen", "maxWidth", "maxHeight"]);

  if (fullViewport || isFullscreen) {
    return /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.FullPageViewport, Object.assign({
      position: "absolute",
      interactive: true
    }, props), props.children);
  }

  return /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.Viewport, Object.assign({
    maxWidth: maxWidth,
    maxHeight: maxHeight
  }, props), props.children);
};

var PatchworkEmbed = function PatchworkEmbed(_ref2) {
  var canvas = _ref2.canvas,
      _ref2$mobileHeight = _ref2.mobileHeight,
      mobileHeight = _ref2$mobileHeight === void 0 ? defaultConfig.mobileHeight : _ref2$mobileHeight,
      _ref2$height = _ref2.height,
      desktopHeight = _ref2$height === void 0 ? defaultConfig.height : _ref2$height,
      _ref2$osdOptions = _ref2.osdOptions,
      osdOptions = _ref2$osdOptions === void 0 ? defaultConfig.osdOptions : _ref2$osdOptions,
      _ref2$growthStyle = _ref2.growthStyle,
      growthStyle = _ref2$growthStyle === void 0 ? defaultConfig.growthStyle : _ref2$growthStyle,
      _ref2$closeText = _ref2.closeText,
      closeText = _ref2$closeText === void 0 ? defaultConfig.closeText : _ref2$closeText,
      _ref2$fitContainer = _ref2.fitContainer,
      fitContainer = _ref2$fitContainer === void 0 ? defaultConfig.fitContainer : _ref2$fitContainer,
      _ref2$mobileBreakpoin = _ref2.mobileBreakpoint,
      mobileBreakpoint = _ref2$mobileBreakpoin === void 0 ? defaultConfig.mobileBreakpoint : _ref2$mobileBreakpoin,
      _ref2$fullscreenEnabl = _ref2.fullscreenEnabled,
      fullscreenEnabled = _ref2$fullscreenEnabl === void 0 ? false : _ref2$fullscreenEnabl,
      _ref2$isFullscreen = _ref2.isFullscreen,
      isFullscreen = _ref2$isFullscreen === void 0 ? false : _ref2$isFullscreen,
      _ref2$clickToClose = _ref2.clickToClose,
      clickToClose = _ref2$clickToClose === void 0 ? defaultConfig.clickToClose : _ref2$clickToClose,
      _ref2$annotationMargi = _ref2.annotationMargin,
      annotationMargin = _ref2$annotationMargi === void 0 ? defaultConfig.annotationMargin : _ref2$annotationMargi,
      _ref2$animationSpeedM = _ref2.animationSpeedMap,
      animationSpeedMap = _ref2$animationSpeedM === void 0 ? defaultConfig.animationSpeedMap : _ref2$animationSpeedM,
      _ref2$animationSpeed = _ref2.animationSpeed,
      animationSpeed = _ref2$animationSpeed === void 0 ? defaultConfig.animationSpeed : _ref2$animationSpeed,
      onConstrain = _ref2.onConstrain,
      onDragStart = _ref2.onDragStart,
      onDragStop = _ref2.onDragStop,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["canvas", "mobileHeight", "height", "osdOptions", "growthStyle", "closeText", "fitContainer", "mobileBreakpoint", "fullscreenEnabled", "isFullscreen", "clickToClose", "annotationMargin", "animationSpeedMap", "animationSpeed", "onConstrain", "onDragStart", "onDragStop"]);
  var viewport = (0, _react.useRef)();
  var height = window.innerWidth < mobileBreakpoint ? mobileHeight : desktopHeight; // State.

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isMobileFullscreen = _useState2[0],
      setIsMobileFullscreen = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      annotation = _useState4[0],
      setAnnotation = _useState4[1];

  var getAnimationSpeed = function getAnimationSpeed(name) {
    if (animationSpeedMap[name]) {
      return animationSpeedMap[name] / 1000;
    }

    return animationSpeed / 1000;
  }; // Actions.


  var onClickAnnotation = function onClickAnnotation(selectedAnnotation, bounds) {
    if (clickToClose && annotation && annotation.id === selectedAnnotation.id) {
      return onClose();
    }

    setAnnotation(selectedAnnotation);
    viewport.current.goToRect(bounds, annotationMargin, getAnimationSpeed('onClick'));
  };

  var toggleMobileFullscreen = function toggleMobileFullscreen() {
    setIsMobileFullscreen(function (current) {
      return !current;
    });
  };

  var onClose = function onClose() {
    setAnnotation(undefined);
    viewport.current.resetView(getAnimationSpeed('onClose'));
  };

  return /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.Bem, {
    prefix: "patchwork-",
    cssClassMap: {
      annotation: 'annotation-pin'
    }
  }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.CanvasProvider, {
    currentCanvas: canvas.id
  }, /*#__PURE__*/_react["default"].createElement(AdaptiveViewport, {
    isFullscreen: fullscreenEnabled ? isFullscreen : false,
    fullViewport: fitContainer,
    maxHeight: isFullscreen || isMobileFullscreen ? window.innerHeight : height,
    setRef: function setRef(ref) {
      viewport.current = ref;
    },
    onConstrain: onConstrain
  }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.SingleTileSource // @ts-ignore
  , {
    viewportController: true
  }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.OpenSeadragonViewport, {
    onDragStart: onDragStart,
    onDragStop: onDragStop
  }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.OpenSeadragonViewer, {
    useMaxDimensions: true,
    osdOptions: (0, _objectSpread2["default"])({
      visibilityRatio: 1,
      constrainDuringPan: false,
      showNavigator: false,
      immediateRender: false
    }, osdOptions)
  }))), /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.AnnotationCanvasRepresentation, {
    ratio: 0.1 // @ts-ignore
    // ratioFromMaxWidth={1000}
    ,
    growthStyle: growthStyle,
    bemModifiers: function bemModifiers(anno) {
      return {
        selected: annotation ? annotation.id === anno.id : false
      };
    } // @ts-ignore
    ,
    onClickAnnotation: onClickAnnotation
  }), annotation ? /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.AnnotationDetail, {
    "data-static": true,
    closeText: closeText,
    annotation: annotation,
    onClose: onClose // @ts-ignore
    ,
    cssClassMap: {
      'annotation-detail': 'patchwork-annotation-detail'
    }
  }) : null)));
};

exports.PatchworkEmbed = PatchworkEmbed;