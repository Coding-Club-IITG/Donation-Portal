import './card.css'
import { useState } from 'react'
import card from '../../../assets/Home/card.png'
import logo from '../../../assets/Home/logo.png'
import arrow from '../../../assets/Home/arrow.png'
import save from '../../../assets/Home/save.png'
import share from '../../../assets/Home/share.png'

const Card = () => {
    const [value, setValue] = useState(100);

    const changeValue = (event) => {
        setValue(event.target.value);
      };

    return ( 
        <div className="home-card">
            <div className="home-proj-abt">
                <div className="home-club-info">
                    <div className='home-club-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className="home-club-desc">
                        <div className="home-proj-name">Campus Rush</div>
                        <div className="home-proj-desc">Campus Tour Game</div>
                    </div>
                </div>
                <div className="home-arrow">
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="card-img"><img src={card} alt="" /></div>
            <div className="home-card-desc"><div>Campus Rush is a virtual recreation of the entire campus for freshers and other to roam around and experience the rush</div></div>
            <div className="home-goal">Donation Goal</div>

            <div className="home-slider-cont">
                <label htmlFor="slider">0</label>
                <input
                    type='range'
                    onChange={changeValue}
                    min={1}
                    max={400}
                    step={1}
                    value={value}
                    className='home-slider'
                    id='slider'
                ></input>
                <label htmlFor="slider">3 Cr</label>
            </div>

            <div className="home-card-btns">
                <div className="home-card-icons">
                    <div>
                        <img src={save} alt="" style={{width: 14, height:18}}/>
                    </div>
                    <div>
                        <img src={share} alt="" style={{width: 18, height: 19.92}}/>
                    </div>
                </div>
                <div className="home-card-donate"><div>Donate</div></div>
            </div>
            
        </div>
     );
}
 
export default Card;