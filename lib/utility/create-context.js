"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = createContext;

var React = _interopRequireWildcard(require("react"));

function createContext() {
  var ctx = React.createContext(undefined);

  function useContext() {
    var c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }

  return [useContext, ctx.Provider];
}