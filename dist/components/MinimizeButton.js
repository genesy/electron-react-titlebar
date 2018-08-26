(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'electron', './Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('electron'), require('./Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.electron, global.Button);
    global.MinimizeButton = mod.exports;
  }
})(this, function (exports, _react, _electron, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var MinimizeButton = function MinimizeButton(props) {
    var win = _electron.remote.getCurrentWindow();
    return _react2.default.createElement(
      _Button2.default,
      _extends({ onClick: function onClick() {
          return win.minimize();
        } }, props),
      _react2.default.createElement('i', { className: 'fa fa-window-minimize' })
    );
  };

  exports.default = MinimizeButton;
});