import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './Widget.module.scss'
/**
 * Компонент «Виджет»: универсальный компонент заголовков и любого списка.
 */

function Widget(props) {
  const { title, color, images } = props
  return (
    <div>
      {images ? <img src={images} alt="" /> : null}
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
  images: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Widget
