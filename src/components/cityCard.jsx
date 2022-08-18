import React from 'react'
import { ReactComponent as CloudIcon } from '../assets/cloud_icon.svg'

const propsCard = (props) => {
  return (
    <div className="border border-gray-500/10 p-8 shadow-md shadow-blue-600/20 rounded-lg w-72 text-center h-100 font-bold">
      <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600 my-1">
        {props.temperature}
      </h1>
      <div className="mt-4 text-l text-slate-400">
        <h3>{props.weather}</h3>
        <h3>
          Макс.:{props.maxTemp}, Мин.:{props.minTemp}
        </h3>
        <div className="flex justify-center">
          <CloudIcon className="flex justify-center" />
        </div>
        <h2 className="uppercase text-4xl mt-3 ">{props.name}</h2>
        <h3>{props.weekDay}</h3>
        <h3>{props.date}</h3>
      </div>
    </div>
  )
}

export default propsCard
