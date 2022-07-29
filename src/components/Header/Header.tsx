import data from '../../assets/data.json'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <a className='header__title'>The Planets</a>
      <div className='header__planetNames'>
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