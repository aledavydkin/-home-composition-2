import React from 'react'
import './App.css'

import HeaderInfo from './components/HeaderInfo/HeaderInfo'
import NewsList from './components/NewsList/NewList'
import Widget from './components/Widget/Widget'

function App() {
  return (
    <div className="MainContainer">
      <header>
        <div className="header-left">
          <HeaderInfo />
          <NewsList />
        </div>
        <div className="header-right">
          <Widget title="Работа над ошибками" />
        </div>
      </header>
    </div>
  )
}

export default App
