import React from 'react'
import Widget from '../Widget/Widget'
import Date from '../Date/Date'
import styles from './HeaderInfo.module.scss'

function HeaderInfo() {
  return (
    <span className={styles.headerInfo}>
      <Widget title="Сейчас в сми" />
      <Widget title="Рекомендуем" color="blue" />
      <Widget title="В германии" color="blue" />
      <Date />
    </span>
  )
}

export default HeaderInfo
