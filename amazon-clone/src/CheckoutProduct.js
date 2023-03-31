import React from 'react'
import './CheckoutProduct.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarRateIcon from '@mui/icons-material/StarRate';
import {useStateValue} from "./StateProvider";
function CheckoutProduct({id,title,pri,star,image}) {
    const [{basket,user},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct_image' src={image} alt="" />
        <div className="checkoutproduct_info">
            <p className='checkoutproduct_title'>
                {title}
            </p>
            <p className='checkoutproduct_price'>
                <small><CurrencyRupeeIcon/></small> 
                <strong className='price'>{pri}</strong>
            </p>
            <p className='checkoutproduct_rating'>
                {Array(star).fill().map((_,i)=>(
                    <StarRateIcon/>
                ))}
            </p>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct