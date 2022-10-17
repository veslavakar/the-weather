import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const activePathStyle =
  ' underline underline-offset-8 decoration-4 decoration-white/40 rounded-lg'

const navBar = [
  { key: 1, to: '/', text: 'ГЛАВНАЯ' },
  { key: 2, to: '/fav', text: 'ИЗБРАННОЕ' },
]

const Header = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className="flex justify-between items-center bg-gradient-to-br from-green-400 to-blue-600 h-16">
      <div className="mx-5 text-white font-medium tracking-widest">
        {navBar.map((nav) => {
          return (
            <Link
              key={nav.key}
              to={nav.to}
              className={'mx-5' + (path === nav.to ? activePathStyle : '')}
            >
              {nav.text}
            </Link>
          )
        })}
      </div>
      <div className="mx-5">
        <Link to="/signin">
          <button
            type="button"
            className="text-white border border-green-400 hover:bg-white/20 focus:border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-1"
          >
            Вход
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="text-white bg-gradient-to-bl from-green-400
          to-blue-600 border border-green-400 hover:bg-gradient-to-br
          transition-all duration-500 focus:border-white font-medium rounded-lg
          text-sm px-5 py-2.5 text-center mr-2 my-1"
          >
            Регистрация
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
