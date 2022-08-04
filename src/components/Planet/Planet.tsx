import React from 'react'
import './Planet.scss'
import data from '../../assets/data.json'
import Props from '../Type'


const Planet: React.FC<Props> = ({planetId, internalStructure, setInternalStructure, surfaceGeology, setSurfaceGeology}) => {
  // const planetIdToString = planetId.toString()
  const handleClickInternal = () => {
    setInternalStructure(true)
    setSurfaceGeology(false)
  }
  const handleClickOverview = () => {
    setInternalStructure(false)
    setSurfaceGeology(false)
  }
  const handleClickSurface = () => {
    setInternalStructure(false)
    setSurfaceGeology(true)
  }
  return (
    <>
      { internalStructure ? (
        <div className={`logo__internal logo__internal--${planetId}`}></div>
        ) : (
          <div className={`logo logo--${planetId}`}></div>
        ) 
      }
      { surfaceGeology && (
        <div className={`logo__surface--${planetId}`}></div>
        )
      }
      <section className='planet'>
        <div className='planet__title'>{data[planetId].name}</div>
        <div className='planet__description'>{data[planetId].overview.content}</div>
        <div className='planet__source'>Source : <a href={data[planetId].overview.source} className='planet__link'>Wikipedia</a></div>
        <div className='planet__buttons'>
          <button className={`button button--${planetId}`} onClick={()=>handleClickOverview()}>
            <div className='button__number'>01</div>
            <div className='button__title'>OVERVIEW</div>
          </button>
          <button className={`button button--${planetId}`} onClick={() => handleClickInternal()}>
            <div className='button__number'>02</div>
            <div className='button__title'>INTERNAL STRUCTURE</div>
          </button>
          <button className={`button button--${planetId}`} onClick={()=>handleClickSurface()}>
            <div className='button__number'>03</div>
            <div className='button__title'>SURFACE GEOLOGY</div>
          </button>
        </div>
      </section>
    </>
  )
}

export default Planet