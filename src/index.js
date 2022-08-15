import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import CityCard from './components/cityCard'
import Header from './components/header'
import CardsArea from './components/cardsArea'
import Search from './components/search'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <Search />
    <CardsArea />
  </React.StrictMode>
)

reportWebVitals()
