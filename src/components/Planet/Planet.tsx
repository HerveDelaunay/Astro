import React from 'react'
import './Planet.scss'
import data from '../../assets/data.json'

interface Props {
  planetId: number
}
const Planet: React.FC<Props> = ({planetId}) => {
  return (
    <>
      <div className='logo'></div>
      <div className='planet'>
        <div className='planet__title'>{data[planetId].name}</div>
        <div className='planet__description'>{data[planetId].overview.content}</div>
        <div className='planet__source'>Source : <a href={data[planetId].overview.source} className='planet__link'>Wikipedia</a></div>
        <div className='planet__buttons'>
          <button className='button' onClick={()=>{}}>
            <div className='button__number'>01</div>
            <div className='button__title'>OVERVIEW</div>
          </button>
          <button className='button' onClick={()=>{}}>
            <div className='button__number'>02</div>
            <div className='button__title'>INTERNAL STRUCTURE</div>
          </button>
          <button className='button' onClick={()=>{}}>
            <div className='button__number'>03</div>
            <div className='button__title'>SURFACE GEOLOGY</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Planet