import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/context'
import SideBarItem from '../SideBarItem/SideBarItem'

export const SideBar = () => {

    const {gender, changeGender} = useContext(CustomContext)

  return (
   <aside className='sideBar'>
    <div className='sideBar__lang'>
        <p onClick={() => changeGender('women')} className={`sideBar__lang-item ${gender === 'women' ? 'active' : ''}`}>Женщины</p>
        <p onClick={() => changeGender('men')} className={`sideBar__lang-item ${gender === 'men' ? 'active' : ''}`}>Мужчины</p>
    </div>
    <ul className='sideBar__menu'>
        {/* <li className='sideBar__menu-item active'>Футболки</li> */}
       <SideBarItem value={'t-short'} text='Футболки'/>
       <SideBarItem value={'sweatshort'} text='Кофты'/>
       <SideBarItem value={'pants'} text='Штаны'/>
       <SideBarItem value={'shoes'} text='Обувь'/>
    </ul>
   </aside>
  )
}
