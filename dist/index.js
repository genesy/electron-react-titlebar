(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './components/TitleBar'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./components/TitleBar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.TitleBar);
    global.index = mod.exports;
  }
})(this, function (module, _TitleBar) {
  'use strict';

  var _TitleBar2 = _interopRequireDefault(_TitleBar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = {
    TitleBar: _TitleBar2.default
  };
});