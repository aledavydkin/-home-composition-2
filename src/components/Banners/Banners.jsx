import React from 'react'
import styles from './Banners.module.scss'
import IconImg from '../../Images/2.jpg'
/**
 * Компонент «Banners»: Компонент баннера
 */
function Banners() {
  return (
    <div>
      <img className={styles.images} src={IconImg} alt="" />
    </div>
  )
}

export default Banners
