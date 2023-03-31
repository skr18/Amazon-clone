import React from 'react'
import './Payment.css'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct'
import { Link } from '@mui/material';
function Payment() {
    const [{basket , user},dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>
                Checkout(<Link to='/'>{basket.length} items
                </Link>)
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user.email}</p>
                    <p>Bhubanewsar Patia</p>
                    <p>Silicon Institute Of Technology</p>
                    <p>Gate 2</p>
                </div>
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review Item & Delivery</h3>
                </div>
                <div className="payment_item">
                    {basket.map(item =>(
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

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment