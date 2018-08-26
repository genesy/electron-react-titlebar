(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Button = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  // import { type BrowserWindow } from 'electron';

  // type Props = {
  //   className?: string,
  //   children?: React.Node,
  //   onClick?: () => void
  // };

  var Button = function Button(props) {
    return _react2.default.createElement(
      'button',
      _extends({}, props, { className: 'titlebar-button ' + props.className }),
      props.children
    );
  };

  Button.defaultProps = {
    children: '',
    className: '',
    onClick: function onClick() {}
  };

  exports.default = Button;
});