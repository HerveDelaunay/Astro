import React from 'react'
import './Planet.scss'
import data from '../../assets/data.json'
import Props from '../Type'
import { useState } from 'react'


const Planet: React.FC<Props> = ({planetId, internalStructure, setInternalStructure, surfaceGeology, setSurfaceGeology, overview, setOverview}) => {
  const [internal, setInternal] = useState(false)
  const [surface, setSurface] = useState(false)
  const handleClickInternal = () => {
    setInternalStructure(true)
    setSurfaceGeology(false)
    setOverview(false)
  }
  const handleClickOverview = () => {
    setInternalStructure(false)
    setSurfaceGeology(false)
    setOverview(true)
  }
  const handleClickSurface = () => {
    setOverview(false)
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
        <article className='planet__article'>
          <div className='planet__title'>{data[planetId].name}</div>
          <div className='planet__description'>
            { internalStructure ? data[planetId].structure.content 
            : surfaceGeology ? data[planetId].geology.content 
            : data[planetId].overview.content }
          </div>
          <div className='planet__source'>Source : <a href=
            { internalStructure ? data[planetId].structure.source 
              : surfaceGeology ? data[planetId].geology.source 
              : data[planetId].overview.source } 
            className='planet__link'>Wikipedia</a>
          </div>
        </article>
        <div className='planet__buttons'>
          { overview ? (
            <button className={`button button--active--${planetId}`} onClick={()=>handleClickOverview()}>
            <div className='button__number'>01</div>
            <div className='button__title'>OVERVIEW</div>
            </button>
            ) : (
            <button className={`button`} onClick={()=>handleClickOverview()}>
              <div className='button__number'>01</div>
              <div className='button__title'>OVERVIEW</div>
            </button>
            )
          }
          {
            internalStructure ? (
            <button className={`button button--active--${planetId}`} onClick={() => handleClickInternal()}>
              <div className='button__number'>02</div>
              <div className='button__title'><span className='remove__word'>INTERNAL</span> STRUCTURE</div>
            </button>
            ) : (
            <button className={`button`} onClick={() => handleClickInternal()}>
              <div className='button__number'>02</div>
              <div className='button__title'><span className='remove__word'>INTERNAL</span> STRUCTURE</div>
            </button> 
            )
          }
          { surfaceGeology ? (
            <button className={`button button--active--${planetId}`} onClick={()=>handleClickSurface()}>
              <div className='button__number'>03</div>
              <div className='button__title'>SURFACE <span className='remove__word'>GEOLOGY</span></div>
            </button>
            ) : (
            <button className={`button`} onClick={()=>handleClickSurface()}>
              <div className='button__number'>03</div>
              <div className='button__title'>SURFACE <span className='remove__word'>GEOLOGY</span></div>
            </button>
            )

          }
        </div>
      </section>
    </>
  )
}

export default Planet