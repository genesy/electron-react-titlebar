import { remote } from 'electron';

import React, { Component } from 'react';

import Button from './Button';
import CloseButton from './CloseButton';
import MinimizeButton from './MinimizeButton';

// type Props = {
//   icon?: string,
//   className: string
// };

// type State = {
//   isMaximized: any | boolean,
//   isFullScreen: boolean,
//   title: string
// };

export default class TitleBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMaximized: false,
      isFullScreen: false,
      title: remote.getCurrentWindow().getTitle()
    };
    this.window = remote.getCurrentWindow();
  }

  componentWillMount() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (win.isFullScreen()) {
          this.setState({ isFullScreen: false });
          win.setFullScreen(false);
          document.body.classList.remove('is-fullscreen');
        }
      }
    });

    this.window
      .on('maximize', () => {
        this.setState({ isMaximized: true });
      })
      .on('unmaximize', () => {
        this.setState({ isMaximized: false });
      })
      .on('page-title-updated', (e, title) => {
        this.updateTitle(title);
      });

    // this.updateTitle();
  }

  shouldComponentUpdate(nextProps, nextState) {
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

  win = this.window;

  updateTitle(title) {
    title = title || this.window.getTitle();
    this.setState({ title }, () => {
      console.log(this.state);
    });
  }

  renderMinimizeBtn() {
    return (
      <Button className="btn-settings" onClick={() => this.window.minimize()}>
        <i className="fa fa-window-minimize" />
      </Button>
    );
  }
  renderMaximizeBtn() {
    return (
      <Button
        className="btn-settings"
        color="warning"
        onClick={() => this.window.maximize()}
      >
        <i className="fa fa-window-maximize" />
      </Button>
    );
  }
  renderRestoreBtn() {
    return (
      <Button
        className="btn-settings"
        color="warning"
        onClick={() => this.window.restore()}
      >
        <i className="fa fa-window-restore" />
      </Button>
    );
  }
  renderMaxResBtn() {
    if (this.state.isMaximized) {
      return this.renderRestoreBtn();
    }
    return this.renderMaximizeBtn();
  }

  renderButtons() {
    return '';
  }
  render() {
    if (this.state.isFullScreen) {
      return '';
    }
    const windowIcon = this.props.icon;
    return (
      <div className={'titlebar ' + this.props.className}>
        <div className="drag-bg" />
        <div className="buttons-container d-flex flex-row">
          <div className="buttons-container-left ui-text">
            <div
              className="window-icon"
              style={{
                backgroundImage: `url(${windowIcon})`
              }}
            />
            <span>{this.state.title}</span>
          </div>
          <div className="buttons-container-right ml-auto">
            <div style={{ display: 'inline-block', marginRight: '2px' }}>
              {' '}
              {this.renderButtons()}
            </div>
            <MinimizeButton />
            <CloseButton />
          </div>
        </div>
      </div>
    );
  }
}

TitleBar.defaultProps = {
  hideClose: false,
  hideMaximize: false,
  className: '',
  icon: ''
}