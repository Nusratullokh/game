import React from 'react'
import './card.css'
import { data } from '../../db/data'

const Card = () => {




  return (

    <div>
        {
            data.map(game => {
                return (
                    
                        <div className='small__card'>
                            <div className="small__card-img"><img src={game.image} alt="" /></div>
                            <div className="small__card-content">
                                <h3>{game.title}</h3>
                                <p>{game.category}</p>
                                <img src="./assets/img/star_orange.svg" alt="" />
                            </div>
                        </div>
                    
                )
            })
        }
    </div>
  )
}

export default Card