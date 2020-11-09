import React from 'react'
import { nanoid } from 'nanoid'
import data from './data'
import styles from './NewList.module.scss'

function NewList() {
  return (
    <>
      <ul className={styles.newListUl}>
        {data.map((item) => (
          <li>
            <img src={item.img} alt={item.text} key={nanoid()} />
            {item.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default NewList
