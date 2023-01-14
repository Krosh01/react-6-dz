import React from 'react'
import Burger from '../../assets/Header/Burger.png'
import instagram from '../../assets/Header/instagram icon.png'
import vk from '../../assets/Header/vk icon.png'
import facebook from '../../assets/Header/facebook icon.png'
import logo from '../../assets/Header/elen icon.png'
import heart from '../../assets/Header/heart an zero.png'
import portfel from '../../assets/Header/portfel an zero.png'

const Header = () => {
  return (
    <Header >
        <div className='Header'>
            <div className='container'>
                <div className='Header_Top'>
                    <div className='Header_start'>
                        <div className='Header_start_Burger'>{Burger}</div>
                        <div className='Header_start_icon'>{instagram}</div>
                        <div className='Header_start_icon'>{vk}</div>
                        <div className='Header_start_icon'>{facebook}</div>
                    </div>
                    <div className='Header_Mid'>
                        <div className='Header_Mid_icon'>{logo}</div>
                        <div className='Header_Mid_text'>
                        ЖЕНСКИЙ СМОКИНГ
                        </div>
                        
                    </div>
                    <div className='Header_End'>
                        <p>+7 (495) 150 - 14 - 77</p>
                        <div className='Header_End_icon'>{heart}</div>
                        <div className='Header_End_icon'>{portfel}</div>
                    </div>

                </div>
                <div className='Header_Down'>
                    <div className='Header_Nav'>
                        <ul className='Header_Ul_Nav'>
                            <li>НОВИНИКИ</li>
                            <li>КАТЕГОРИИ</li>
                            <li>НАШИ КОЛЛЕКЦИИ</li>
                            <li>ПОКУПАТЕЛЯМ</li>
                            <li>О БРЕНДЕ</li>
                            <li>ШОУРУМ</li>
                            <li>КОНТАКТЫ</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Header>
  )
}

export default Header