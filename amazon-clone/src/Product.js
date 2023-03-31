import React from 'react'
import './Product.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarRateIcon from '@mui/icons-material/StarRate';
import {useStateValue} from "./StateProvider";
function Product({id,title,pri,star,image}) {
    const [{basket,user},dispatch] = useStateValue();
    console.log("Basket >>>", basket);
    const addToBasket = () =>{
      //dispatch the data
      dispatch({
        type: "ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          pri:pri,
          star:star,
          image:image,   
        },
      });
    };
  return (
    <div className='product'>
        <div className="product_info">
            <p className='info'>{title}</p>
            <p className='product_price'>
                <CurrencyRupeeIcon/>
                <strong className='price'>{pri}</strong>
            </p>
            <p className='product_star'>
              {Array(star).fill().map((_,i)=>(
                <StarRateIcon/>
              ))}
            </p>
        </div>
        <img src={image} alt="" />
        <button className='product_button' onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product