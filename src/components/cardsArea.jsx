import React from 'react'
import CityCard from './cityCard'

const mainCities = [
  {
    id: 1,
    name: 'Москва',
    temperature: '16°C',
    maxTemp: '24°C',
    minTemp: '13°C',
    weather: 'Облачно',
    date: '11 августа',
    weekDay: 'Понедельник',
  },
  {
    id: 2,
    name: 'Лондон',
    temperature: '12°C',
    maxTemp: '20°C',
    minTemp: '10°C',
    weather: 'Дождь',
    date: '11 августа',
    weekDay: 'Понедельник',
  },
  {
    id: 3,
    name: 'Нью-Йорк',
    temperature: '23°C',
    maxTemp: '30°C',
    minTemp: '22°C',
    weather: 'Ясно',
    date: '11 августа',
    weekDay: 'Понедельник',
  },
  {
    id: 4,
    name: 'Токио',
    temperature: '21°C',
    maxTemp: '22°C',
    minTemp: '17°C',
    weather: 'Дождь',
    date: '11 августа',
    weekDay: 'Понедельник',
  },
]
const CardsArea = () => {
  return (
    <div className="flex justify-around mx-28 my-16">
      {mainCities.map((city) => (
        <CityCard key={city.id} {...city} />
      ))}
    </div>
  )
}

export default CardsArea
