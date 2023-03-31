import React from 'react'
import './Subtotal.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider";
import { useNavigate } from 'react-router-dom';
import {getBasketTotal } from './reducer';
function Subtotal() {
  const [{basket}] = useStateValue();
  const history = useNavigate();
  // var total=0;
  // total = total + dispatch.price
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>(
          <>
            <p>
              Subtotal ({basket.length}):
              <p className='subtotal_price'>
                <small><CurrencyRupeeIcon/></small>
                </p>
              <strong>
                {value}
              </strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" />
                This Order Contain A Gift
            </small>
          </>
        )}
        desimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={""}
        />
        <button onClick={e => history('/payment') }>Proceed To Checkout</button>
    </div>
  );
}
export default Subtotal ;
