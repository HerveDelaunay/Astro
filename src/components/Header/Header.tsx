import { useState } from 'react'
import data from '../../assets/data.json'
import './Header.scss'
import Props from './Type'

interface PlanetData {
    name: string,
    overview: {
      content: string,
      source: string
    },
    structure: {
      content: string,
      source: string
    },
    geology: {
      content: string,
      source: string
    },
    rotation: string,
    revolution: string,
    radius: string,
    temperature: string,
    images: {
      planet: string,
      internal: string,
      geology: string
    }
}

const Header: React.FC<Props> = ({setPlanet, planetId, setInternalStructure, setSurfaceGeology}) => {
  const handleClick = (planet:PlanetData) => {
    setPlanet(data.indexOf(planet))
  }
  
  return (
    <div className='header'>
      <a href='#' className='header__title'>The Planets</a>
      <div className='header__planetNames'>
        {data.map((planet) => (
            <a href='#' className={`planetLink planetLink--${planetId}`} onClick={() => handleClick(planet)}>
              {planet.name}</a>
          ))
        }
      </div>
      <div className='header__patternDivider'></div>
    </div>
  )
}

export default Header