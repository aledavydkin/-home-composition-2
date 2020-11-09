import React from 'react'
import data from './data'
import styles from './Sections.module.scss'
/**
 * Компонент «Sections»: Разделы сайта
 */
function Sections() {
  return (
    <div className={styles.Sections}>
      {data.map((item) => (
        <a href={item.link}>{item.title}</a>
      ))}
    </div>
  )
}

export default Sections
