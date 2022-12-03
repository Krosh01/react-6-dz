import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../../utils/context'
import card1 from '../../../assets/catalog/image 31.png'
import card2 from '../../../assets/catalog/image 37.png'
import card3 from '../../../assets/catalog/image 40.png'
import card4 from '../../../assets/catalog/image 55.png'
import card5 from '../../../assets/catalog/image 58.png'
import card6 from '../../../assets/catalog/image 29.png'

const CatalogRow = () => {
    const {i, i18n} = useTranslation()

    const {products} = useContext(CustomContext)
  return (
    <div className='catalog__row'>
     <div className='catalog__card'>
            <img className='catalog__catd-img' src={card1} alt="/"/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <div className='catalog__price'>
              <del> <span>6100 UAH</span>  </del>
              <p className='catalog__card-price'>
                  3800 {i18n.language === 'ru' ? 'руб.' : '$'}
              </p>
            </div>
     </div>
     <div className='catalog__card'>
            <img className='catalog__catd-img' src={card2} alt="/"/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <div className='catalog__price'>
              <del> <span>6100 UAH</span>  </del>
              <p className='catalog__card-price'>
                  3800 {i18n.language === 'ru' ? 'руб.' : '$'}
              </p>
            </div> 
     </div>
     <div className='catalog__card'>
            <img className='catalog__catd-img' src={card3} alt="/"/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <div className='catalog__price'>
              <del> <span>6100 UAH</span>  </del>
              <p className='catalog__card-price'>
                  3800 {i18n.language === 'ru' ? 'руб.' : '$'}
              </p>
            </div>
     </div>
     <div className='catalog__card'>
            <img className='catalog__catd-img' src={card4} alt="/"/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <div className='catalog__price'>
              <del> <span>6100 UAH</span>  </del>
              <p className='catalog__card-price'>
                  3800 {i18n.language === 'ru' ? 'руб.' : '$'}
              </p>
            </div>
     </div>
     <div className='catalog__card'>
            <img className='catalog__catd-img' src={card5} alt="/"/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <div className='catalog__price'>
              <del> <span>6100 UAH</span>  </del>
              <p className='catalog__card-price'>
                  3800 {i18n.language === 'ru' ? 'руб.' : '$'}
              </p>
            </div>
     </div>
     <div className='catalog__card'>
            <img className='catalog__catd-img' src={card6} alt="/"/>
            <h3 className='catalog__card-title'>george gina lucy</h3>
            <p className='catalog__card-category'>Shoes</p>
            <p className='catalog__card-brand'>nike</p>
            <div className='catalog__price'>
              <del> <span>6100 UAH</span>  </del>
              <p className='catalog__card-price'>
                  3800 {i18n.language === 'ru' ? 'руб.' : '$'}
              </p>
            </div>
     </div>
    </div>
    
  )
}

export default CatalogRow;