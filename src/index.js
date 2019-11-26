/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import * as dscc from '@google/dscc'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import MainComponent from './components/MainComponent'
import { DataProvider } from './utils/DataContext'
import ErrorMessage from './components/ErrorMessage'

const LOCAL = process.env.NODE_ENV !== 'production'

const setup = () => {
  const mainDiv = document.createElement('div')
  mainDiv.id = 'app'
  document.body.appendChild(mainDiv)

  ReactDOM.render(<AppComponent />, document.getElementById('app'))
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleDataUpdate.bind(this)

    this.state = {
      body: '',
    }
  }

  componentDidMount() {
    if (LOCAL) {
      const local = require('./localMessage.js')
      this.handleDataUpdate(local.message)
    } else {
      dscc.subscribeToData(data => this.handleDataUpdate(data), {
        transform: dscc.objectTransform,
      })
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: !!error }
  }

  handleDataUpdate(data) {
    // Called each time a new dataset is passed in from
    // Data Studio, including config (style) changes.
    this.setState({ ...data })
  }

  render() {
    const { hasError } = this.state

    const styles = css`
      /* Global styles here */
    `
    return (
      <React.Fragment>
        <Global styles={styles} />
        <DataProvider value={this.state}>
          {hasError ? (
            <ErrorMessage message="There has been an error" />
          ) : (
            <MainComponent {...this.state} />
          )}
        </DataProvider>
      </React.Fragment>
    )
  }
}

setup()
