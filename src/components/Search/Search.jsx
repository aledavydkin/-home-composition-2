import React from 'react'
import styles from './Search.module.scss'
/**
 * Компонент «Search»: Поиск сайта
 */
function Search() {
  return (
    <div>
      <form className={styles.form}>
        <input type="text" className={styles.Search} placeholder="Поиск" />
        <button type="button">Найти</button>
      </form>
    </div>
  )
}

export default Search
