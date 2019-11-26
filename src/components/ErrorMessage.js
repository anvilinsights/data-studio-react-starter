/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

const wrapperStyle = css`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: rgba(40, 40, 40, 0.8);
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1000000;
  top: 0;
`

const pStyle = css`
  text-align: center;
  color: #fff;
  align-self: center;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px;
`

const ErrorMessage = ({ message }) => {
  return (
    <div css={wrapperStyle}>
      <p css={pStyle}>{message}</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage
