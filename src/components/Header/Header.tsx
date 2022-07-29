import data from '../../assets/data.json'
import './Header.scss'

interface Props {
  setPlanet: React.Dispatch<React.SetStateAction<number | undefined>>
}

const Header: React.FC<Props> = ({setPlanet}) => {
  return (
    <div className='header'>
      <a className='header__title'>The Planets</a>
      <div className='header__planetNames'>
        {data.map((planet) => (
          <a onClick={() => setPlanet(data.indexOf(planet))}>{planet.name}</a>
          ))
        }
      </div>
      <div className='header__patternDivider'></div>
    </div>
  )
}

export default Header