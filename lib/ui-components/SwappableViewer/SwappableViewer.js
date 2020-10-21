"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _canvasPanelBeta = require("canvas-panel-beta");

require("./SwappableViewer.scss");

var _ZoomButtons = _interopRequireDefault(require("../ZoomButtons/ZoomButtons"));

var _FullscreenButton = _interopRequireDefault(require("../FullscreenButton/FullscreenButton"));

var _YoutubeVideoSource = require("../YoutubeVideoSource/YoutubeVideoSource");

var _PatchworkEmbed = require("../../example-stories/PatchworkEmbed/PatchworkEmbed");

function getEmbeddedAnnotations(canvas) {
  // SOMETIMES ANNOTATIONS ARE IN 'ITEMS' AND NOT 'ANNOTATIONS',
  // I DO NOT UNDERSTAND WHY
  return (canvas.__jsonld.annotations || canvas.__jsonld.items || []).reduce(function (list, next) {
    if (next.type === 'AnnotationPage') {
      return (next.items || []).reduce(function (innerList, annotation) {
        innerList.push(annotation);
        return innerList;
      }, list);
    }

    if (next.type === 'Annotation') {
      list.push(next);
    }

    return list;
  }, []);
} // @ts-ignore


function createRegionFromAnnotations(canvas) {
  var viewportFocuses = getEmbeddedAnnotations(canvas).filter(function (annotation) {
    return annotation.motivation === 'layout-viewport-focus';
  });

  if (viewportFocuses.length > 0) {
    return (0, _canvasPanelBeta.parseSelectorTarget)(viewportFocuses[0].target || viewportFocuses[0].on);
  }

  return null;
}

var _ref2 = /*#__PURE__*/_react["default"].createElement(_YoutubeVideoSource.YoutubeVideoSource, null);

var SwappableViewer = function SwappableViewer(_ref) {
  var _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? false : _ref$isInteractive,
      canvas = _ref.canvas,
      manifest = _ref.manifest,
      fullscreenProps = _ref.fullscreenProps,
      region = _ref.region,
      bem = _ref.bem,
      manifestUri = _ref.manifestUri,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["isInteractive", "canvas", "manifest", "fullscreenProps", "region", "bem", "manifestUri"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      regionFromAnnotations = _useState2[0],
      setRegionFromAnnotations = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isZoomedOut = _useState4[0],
      setIsZoomedOut = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isZoomedIn = _useState6[0],
      setIsZoomedIn = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      embeddedTour = _useState8[0],
      setEmbeddedTour = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      viewport = _useState10[0],
      _setViewport = _useState10[1];

  var osdOptions = {
    visibilityRatio: 1,
    constrainDuringPan: true,
    showNavigator: false,
    immediateRender: false,
    animationTime: 0.5,
    blendTime: 0.3,
    preload: true
  };
  (0, _react.useEffect)(function () {
    if (region) {
      if (viewport) {
        viewport.goToRect(region, 0, 0.0000001);
      }
    } else {
      var _region = createRegionFromAnnotations(canvas);

      if (_region) {
        setRegionFromAnnotations(_region);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [canvas, region, viewport]);
  (0, _react.useEffect)(function () {
    var describers = getEmbeddedAnnotations(canvas).filter(function (object) {
      return object.motivation === 'describing';
    });
    console.log('this lists of annotations that should appear...');
    console.log(describers);
    setEmbeddedTour(canvas && canvas.__jsonld && canvas.__jsonld.behavior && canvas.__jsonld.behavior.includes('embedded-tour') || describers.length > 1);
  }, [canvas]);

  var setViewport = function setViewport(view) {
    _setViewport(view);

    if (view && (region || regionFromAnnotations)) {
      view.goToRect(region || regionFromAnnotations, 0, 0);
    }
  };

  var zoomOut = function zoomOut() {
    viewport.zoomOut();
  };

  var zoomIn = function zoomIn() {
    viewport.zoomIn();
  };

  var updateViewport = function updateViewport(viewer) {// const newIsZoomedIn = viewport.getMaxZoom() <= viewport.getZoom();
    // if (newIsZoomedIn !== isZoomedIn) {
    //   setIsZoomedIn(newIsZoomedIn);
    // }
    // const newIsZoomedOut = viewport.getMinZoom() >= viewport.getZoom();
    // if (newIsZoomedOut !== isZoomedOut) {
    //   if (!isZoomedOut && !regionFromAnnotations) {
    //     viewport.resetView();
    //   }
    //   setIsZoomedOut(newIsZoomedOut);
    // }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FullscreenButton["default"], fullscreenProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: bem.element('viewport').modifiers({
      interactive: isInteractive || !isZoomedOut
    })
  }, true ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FullscreenButton["default"], fullscreenProps), /*#__PURE__*/_react["default"].createElement(_PatchworkEmbed.PatchworkEmbed, Object.assign({
    canvas: canvas,
    fitContainer: true
  }, props))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _ref2, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.SingleTileSource // @ts-ignore
  , {
    manifest: manifest,
    canvas: canvas
  }, /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.FullPageViewport, {
    onUpdateViewport: updateViewport,
    setRef: setViewport,
    position: "absolute",
    interactive: isInteractive || !isZoomedOut
  }, isInteractive ? /*#__PURE__*/_react["default"].createElement(_ZoomButtons["default"], {
    onZoomOut: zoomOut,
    onZoomIn: zoomIn
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement(_canvasPanelBeta.OpenSeadragonViewport, {
    useMaxDimensions: true,
    interactive: isInteractive,
    osdOptions: osdOptions,
    initialBounds: region || regionFromAnnotations
  }))))));
};

var _default = (0, _canvasPanelBeta.withBemClass)('slide')(SwappableViewer);

exports["default"] = _default;