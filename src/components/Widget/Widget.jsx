import React from 'react'
import PropTypes from 'prop-types'
import styles from './Widget.module.scss'

function Widget(props) {
  const { title } = props
  return (
    <div>
      <a className={styles.caption} href="/">
        {title}
      </a>
      {props.children}
    </div>
  )
}

Widget.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
}

export default Widget
