import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' src="https://gpcdn.ams3.cdn.digitaloceanspaces.com/promotions/Amazon-Pay-load-balance-offer.png" alt="" />
            <div className="checkout_title">
              <h3>Hello, {user ?  user.email.substring(0, user.email.lastIndexOf("@")) : 'Guest'}</h3>
                <h2 className='border'>Your Shopping Basket</h2> 
                {basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    pri={item.pri}
                    star={item.star}
                    image={item.image}       
                  />
                ))}
            </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout