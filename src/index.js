/** @jsx jsx */
import {css, Global, jsx} from '@emotion/core';
import * as dscc from '@google/dscc';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MainComponent from './components/MainComponent';
import {DataProvider} from './utils/DataContext';

const LOCAL = process.env.NODE_ENV !== 'production';

const setup = () => {
  const mainDiv = document.createElement('div');
  mainDiv.id = 'app';
  document.body.appendChild(mainDiv);

  ReactDOM.render(<AppComponent />, document.getElementById('app'));
};

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataUpdate.bind(this);

    this.state = {
      body: '',
    };
  }

  componentDidMount() {
    if (LOCAL) {
      const local = require('./localMessage.js');
      this.handleDataUpdate(local.message);
    } else {
      dscc.subscribeToData(data => this.handleDataUpdate(data), {
        transform: dscc.objectTransform,
      });
    }
  }

  handleDataUpdate(data) {
    // Called each time a new dataset is passed in from
    // Data Studio, including config (style) changes.
    this.setState({...data});
  }

  render() {
    const styles = css`
      /* Global styles here */
    `;
    return (
      <React.Fragment>
        <Global styles={styles} />
        <DataProvider value={this.state}>
          <MainComponent {...this.state} />
        </DataProvider>
      </React.Fragment>
    );
  }
}

setup();
