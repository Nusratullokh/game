import  "./App.css";
import { data, data2 } from './db/data'

import rating from './assets/images/star_orange.svg'
import admin from './assets/images/Admin.png'
import qongro from './assets/images/qongro.svg'
import action from './assets/images/action.svg'
import sideBar from './assets/images/sidebar_hero.png'


function App() {

  return (
    <>
   <div className='game'>
      <div className="container">
        <div className="wrapper">
          <div className="main">
            <div className="nav">
              <ul>
                <li  className="nav__li">Game</li>
                <li>Live score</li>
                <li>Statistics</li>
                <li>Analitics</li>
                <li>Forecasts</li>
              </ul>
            </div>
            <div className="hero">
              <div className="hero__content">
              <h1>The Forbidden Kingdom Adventure War</h1>
              <br />
              <button>More Details</button>
              </div>
            </div>
            <div className="popular__game">
              <h2>Most Popular 
                <br />  Games</h2>
              <div className="cards">
                <div className="card">
                  <h3>Sniper 2</h3>
                  <img src={action} alt="" />
                </div>
                <div className="card card2">
                <h3>Motor Race</h3>
                <img src={action} alt="" />
                </div>
                <div className="card card3">
                <h3>Witcher Hunt</h3>
                <img src={action} alt="" />
                </div>
                <div className="card card4">
                <h3>PUBG War</h3>
                <img src={action} alt="" />
                </div>
                <div className="card card5">
                <h3>Sniper 2</h3>
                <img src={action} alt="" />
                </div>
              </div>
            </div>
            <div className="new__games">
              <h2>New Released Games</h2>
              <div className="new__cards">
              {data.map(game => {
                return (
                    
              <div key={game.id} className='small_card'>
                  <div className="small-card__img"><img src={game.image} alt="" /></div>
                  <div className="small-card__content">
                      <h3>{game.title}</h3>
                      <p>{game.category}</p>
                      <img src={rating} alt="" />
                  </div>
              </div>
                    
                )
            })}
            </div>
            </div>
          </div>
          <div className="live__game">
            <div className="admin__qongro">
              <img src={admin} alt="" />
              <span>William Johnson</span>
              <img src={qongro} alt="" />
            </div>
            <h2>Live Game</h2>
            <div className="orange__box"></div>
            {data2.map(game => {
                return (
                    
              <div key={game.id} className='small-card'>
                  <div className="small-card-img"><img src={game.image} alt="" /></div>
                  <div className="small-card-content">
                      <h3>{game.title}</h3>
                      <p>{game.category}</p>
                  </div>
              </div>
                    
                )
            })}
            <div className="download__game">
              <div className='download__game-img'>
                <img src={sideBar} alt="" />
              </div>
              <div className="download__game-content">
                <h3>Need For Speed</h3>
                <span>Racing</span>
                <img src={rating} alt="" />
                <p>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</p>
              </div>
              <div className="download__btn">
                <button>Download</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
