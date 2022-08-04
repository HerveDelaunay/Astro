import './PlanetStats.scss'
import data from '../../assets/data.json';

interface Props {
  planetId: number
}

const PlanetStats: React.FC<Props> = ({planetId}) => {
  return (
    <div className='planetStats'>
      <div className="planetStats__card">
        <div className='card'>
          <div className="card__title">ROTATION TIME</div>
          <div className="card__stat">{data[planetId].rotation}</div>
        </div>
      </div>
      <div className="planetStats__card">
        <div className='card'>
          <div className="card__title">REVOLUTION TIME</div>
          <div className="card__stat">{data[planetId].revolution}</div>
        </div>
      </div>
      <div className="planetStats__card">
        <div className='card'>
          <div className="card__title">RADIUS</div>
          <div className="card__stat">{data[planetId].radius}</div>
        </div>
      </div>
      <div className="planetStats__card">
        <div className='card'>
          <div className="card__title">AVERAGE TEMP.</div>
          <div className="card__stat">{data[planetId].temperature}</div>
        </div>
      </div>
    </div>
  )
}

export default PlanetStats