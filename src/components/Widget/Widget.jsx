import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './Widget.module.scss'
/**
 * Компонент «Виджет»: универсальный компонент заголовков и любого списка.
 */

function Widget(props) {
  const { title, color } = props
  return (
    <div>
      <a
        className={clsx(styles.caption, color === 'blue' && styles.captionBlue)}
        href="/"
      >
        {title}
      </a>
      {props.children}
    </div>
  )
}

Widget.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Widget
