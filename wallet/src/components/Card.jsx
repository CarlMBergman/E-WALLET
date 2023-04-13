import './Card.scss'
import { useState } from 'react'
import { setActive } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

function Card(props) {
    const dispatch = useDispatch()

    function handleActive() {
        dispatch(setActive(props.fullCard.cardNum))
    }


    return (
        <article className={`card ${props.fullCard.vendor} ${props.fullCard.isActive}`} onClick={ handleActive }>
            <div className='card__vendor'>
                <img src="/src/assets/chip-dark.svg" alt="chip" />
                <img className='card__vendor-vendor' src={`/src/assets/vendor-${props.fullCard.vendor}.svg`} alt="vendor" />
            </div>
            <p className='card__num'>{ props.fullCard.cardNum }</p>
            <div className='card__info'>
                <div>
                    <p className='card__desc'>CARDHOLDER NAME</p>
                    <p>{ props.fullCard.cardHolder }</p>
                </div>
                <div>
                    <p className='card__desc'>VALID THRU</p>
                    <p>{ props.fullCard.valid }</p>
                </div>
            </div>
        </article>
    )
}

export default Card