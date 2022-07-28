import data from '../../assets/data.json'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <a className='header__tile'>The Planets</a>
      <div className='header__planetName'>
        {data.map((planet) => (
          <div>{planet.name}</div>
        ))
        }
      </div>
      <div className='header__patternDivider'></div>
    </div>
  )
}

export default Header