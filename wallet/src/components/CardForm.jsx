import './CardForm.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/action';

function CardForm(props) {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClick(event) {
        event.preventDefault();
        dispatch(addCard(props.fullCard))
        navigate('/')
    }

    return (
        <form className='card-form'>
            <div className='card-form__input'>
                <label className='card-form__label' htmlFor="cardNum">CARD NUMBER</label>
                <input className='card-form__input-big' name="cardNum" id="cardNum" type="tel"  maxLength='16' onChange={ (event) => props.setCardNum(event.target.value) }/>
            </div>
            <div className='card-form__input'>
                <label className='card-form__label' htmlFor="holderName">CARDHOLDER NAME</label>
                <input className='card-form__input-big' type="text" name='holderName' id='holderName' onChange={(event) => props.setCardHolder(event.target.value)}/>
            </div>
                <div className='card-form__smallinputs'>
                    <div className='card-form__input'>
                        <label className='card-form__label' htmlFor="valid">VALID THRU</label>
                        <input className='card-form__input-small' type="text" name='valid' id='valid' onChange={(event) => props.setValid(event.target.value)}/>
                    </div>
                    <div className='card-form__input'>
                        <label className='card-form__label' htmlFor="ccv">CCV</label>
                        <input className='card-form__input-small' type="text" name="ccv" id="ccv" onChange={(event) => props.setCcv(event.target.value)}/>
                    </div>
                </div>
                <div className='card-form__input'>
                    <label className='card-form__label' htmlFor="vendor">VENDOR</label>
                    <select className='card-form__input-big' name="vendor" id="vendor" onChange={(event) => props.setVendor(event.target.value)}>
                        <option value="bitcoin">BITCOIN INC</option>
                        <option value="ninja">NINJA BANK</option>
                        <option value="blockchain">BLOCK CHAIN INC</option>
                        <option value="evil">EVIL CORP</option>
                    </select>
                </div>
                <button className='card-form__button' onClick={ handleClick }>ADD CARD</button>
            </form>
    )
}

export default CardForm