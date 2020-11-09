import React from 'react'
import './App.css'

import HeaderInfo from './components/HeaderInfo/HeaderInfo'
import NewsList from './components/NewsList/NewList'
import Widget from './components/Widget/Widget'
import ExchangeRates from './components/ExchangeRates/ExchangeRates'
import IconImages from './Images/images.jpg'

function App() {
  return (
    <div className="MainContainer">
      <header className="header">
        <div className="header-left">
          <HeaderInfo />
          <NewsList />
          <ExchangeRates />
        </div>
        <div className="header-right">
          <Widget title="Работа над ошибками" images={IconImages}>
            <p>Смотрите Яндекс и запоминайте</p>
          </Widget>
        </div>
      </header>
    </div>
  )
}

export default App
