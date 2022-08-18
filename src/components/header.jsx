import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-br from-green-400 to-blue-600 h-16">
      <div className="mx-5 text-white font-bold tracking-widest">
        <a href="#" className="mx-5">
          ГЛАВНАЯ
        </a>
        <a href="#" className="mx-5">
          ИЗБРАННОЕ
        </a>
      </div>
      <div className="mx-5">
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </div>
  )
}

export default Header
