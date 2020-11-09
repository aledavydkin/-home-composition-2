import React from 'react'
import data from './data'
import styles from './ExchangeRates.module.scss'
/**
 * Компонент «ExchangeRates»: Компонент вывода курса валют.
 */
function ExchangeRates() {
  return (
    <div className={styles.exchangeRatesContainer}>
      {data.map((item) => (
        <div>
          <span>{item.text}</span>
          <span>{item.number}</span>
          <span className={styles.exchangeRatesAddNumber}>
            {item.addNumber}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ExchangeRates
