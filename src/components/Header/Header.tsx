import { useEffect, useState } from 'react'
import data from '../../assets/data.json'
import './Header.scss'
import Props from './Type'
import PlanetData from '../PlanetDataType'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu/MobileMenu'

const Header: React.FC<Props> = ({setPlanet, planetId, setInternalStructure, setSurfaceGeology, setOverview}) => {
  const handleClick = (planet:PlanetData) => {
    setPlanet(data.indexOf(planet))
    setInternalStructure(false)
    setSurfaceGeology(false)
    setOverview(true)
  }
  
  return (
    <div className='header'>
      <a href='#' className='header__title'>The Planets</a>
      <div className='header__planetNames'>
        {
          data.map((planet) => (
            <Link to={`${planet.name}`} className={`planetLink ${window.location.pathname === `/${planet.name}` ? `planetLink--${planetId}` : '' }`} 
              onClick={() => handleClick(planet)}>
              {planet.name}</Link>
          ))
        }
      </div>
      <MobileMenu/>
      <div className='header__patternDivider'></div>
    </div>
  )
}

export default Header