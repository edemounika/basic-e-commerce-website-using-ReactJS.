
import React from 'react'

import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'



const Fridge = () => {

    const firstFiveImages = fridgeData.slice(0,5)

  return (
    <>
    <h2>Fridges</h2>
    <div className="proSection">
      {firstFiveImages.map((item) => {
        return (
          <div className='imgBox'>
          <Link to='/fridge'>
             <img className='proImage' src={item.image} alt="" />
          </Link>
        </div>
        )
      })}
    </div>
    
    </>
  )
}

export default Fridge