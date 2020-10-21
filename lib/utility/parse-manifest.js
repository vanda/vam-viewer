"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseManifest = parseManifest;

var _manifesto = require("manifesto.js");

function parseManifest(jsonLd, options) {
  return (0, _manifesto.parseManifest)(jsonLd, options);
}