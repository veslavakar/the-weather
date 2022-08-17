import React from 'react'

const Search = () => {
  return (
    <div className="flex items-center justify-center h-72">
      <input
        type="text"
        id="first_name"
        className="border border-gray-500/10 shadow-md shadow-blue-600/20 text-gray-900 text-sm leading-[18px] rounded-lg focus:ring-2 focus:outline-none focus:ring-green-400/20 focus:border-green-400 w-160 p-2"
        placeholder="Город"
      />
      <button
        type="button"
        className="text-white shadow-md shadow-blue-600/20 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 ml-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Search
