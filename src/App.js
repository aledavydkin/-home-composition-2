import React from 'react'
import './App.css'

import HeaderInfo from './components/HeaderInfo/HeaderInfo'
import NewsList from './components/NewsList/NewList'
import Widget from './components/Widget/Widget'
import ExchangeRates from './components/ExchangeRates/ExchangeRates'
import Sections from './components/Sections/Sections'
import Search from './components/Search/Search'
import Banners from './components/Banners/Banners'
import IconImages from './Images/images.jpg'
import IconLogo from './Images/logo.jpg'

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
      <Sections />
      <div className="middle-container">
        <img src={IconLogo} alt="" />
        <Search />
      </div>
      <Banners />
    </div>
  )
}

export default App
