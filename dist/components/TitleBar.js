(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'electron', 'react', './Button', './CloseButton', './MinimizeButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('electron'), require('react'), require('./Button'), require('./CloseButton'), require('./MinimizeButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.electron, global.react, global.Button, global.CloseButton, global.MinimizeButton);
    global.TitleBar = mod.exports;
  }
})(this, function (exports, _electron, _react, _Button, _CloseButton, _MinimizeButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  var _CloseButton2 = _interopRequireDefault(_CloseButton);

  var _MinimizeButton2 = _interopRequireDefault(_MinimizeButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TitleBar = function (_Component) {
    _inherits(TitleBar, _Component);

    function TitleBar(props) {
      _classCallCheck(this, TitleBar);

      var _this = _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).call(this, props));

      _this.win = _this.window;

      _this.state = {
        isMaximized: false,
        isFullScreen: false,
        title: _electron.remote.getCurrentWindow().getTitle()
      };
      _this.window = _electron.remote.getCurrentWindow();
      return _this;
    }

    _createClass(TitleBar, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            if (win.isFullScreen()) {
              _this2.setState({ isFullScreen: false });
              win.setFullScreen(false);
              document.body.classList.remove('is-fullscreen');
            }
          }
        });

        this.window.on('maximize', function () {
          _this2.setState({ isMaximized: true });
        }).on('unmaximize', function () {
          _this2.setState({ isMaximized: false });
        }).on('page-title-updated', function (e, title) {
          _this2.updateTitle(title);
        });

        // this.updateTitle();
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        if (this.props.icon !== nextProps.icon) {
          return true;
        }
        if (this.state.title !== nextState.title) {
          return true;
        }
        if (this.state.isMaximized !== nextState.isMaximized) {
          return true;
        }
        if (this.state.isFullScreen !== nextState.isFullScreen) {
          return true;
        }
        return false;
      }
    }, {
      key: 'updateTitle',
      value: function updateTitle(title) {
        var _this3 = this;

        title = title || this.window.getTitle();
        this.setState({ title: title }, function () {
          console.log(_this3.state);
        });
      }
    }, {
      key: 'renderMinimizeBtn',
      value: function renderMinimizeBtn() {
        var _this4 = this;

        return _react2.default.createElement(
          _Button2.default,
          { className: 'btn-settings', onClick: function onClick() {
              return _this4.window.minimize();
            } },
          _react2.default.createElement('i', { className: 'fa fa-window-minimize' })
        );
      }
    }, {
      key: 'renderMaximizeBtn',
      value: function renderMaximizeBtn() {
        var _this5 = this;

        return _react2.default.createElement(
          _Button2.default,
          {
            className: 'btn-settings',
            color: 'warning',
            onClick: function onClick() {
              return _this5.window.maximize();
            }
          },
          _react2.default.createElement('i', { className: 'fa fa-window-maximize' })
        );
      }
    }, {
      key: 'renderRestoreBtn',
      value: function renderRestoreBtn() {
        var _this6 = this;

        return _react2.default.createElement(
          _Button2.default,
          {
            className: 'btn-settings',
            color: 'warning',
            onClick: function onClick() {
              return _this6.window.restore();
            }
          },
          _react2.default.createElement('i', { className: 'fa fa-window-restore' })
        );
      }
    }, {
      key: 'renderMaxResBtn',
      value: function renderMaxResBtn() {
        if (this.state.isMaximized) {
          return this.renderRestoreBtn();
        }
        return this.renderMaximizeBtn();
      }
    }, {
      key: 'renderButtons',
      value: function renderButtons() {
        return '';
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.isFullScreen) {
          return '';
        }
        var windowIcon = this.props.icon;
        return _react2.default.createElement(
          'div',
          { className: 'titlebar ' + this.props.className },
          _react2.default.createElement('div', { className: 'drag-bg' }),
          _react2.default.createElement(
            'div',
            { className: 'buttons-container d-flex flex-row' },
            _react2.default.createElement(
              'div',
              { className: 'buttons-container-left ui-text' },
              _react2.default.createElement('div', {
                className: 'window-icon',
                style: {
                  backgroundImage: 'url(' + windowIcon + ')'
                }
              }),
              _react2.default.createElement(
                'span',
                null,
                this.state.title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'buttons-container-right ml-auto' },
              _react2.default.createElement(
                'div',
                { style: { display: 'inline-block', marginRight: '2px' } },
                ' ',
                this.renderButtons()
              ),
              _react2.default.createElement(_MinimizeButton2.default, null),
              _react2.default.createElement(_CloseButton2.default, null)
            )
          )
        );
      }
    }]);

    return TitleBar;
  }(_react.Component);

  exports.default = TitleBar;


  TitleBar.defaultProps = {
    hideClose: false,
    hideMaximize: false,
    className: '',
    icon: ''
  };
});