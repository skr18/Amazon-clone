import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
// import "firebase/compat/auth"
function Header() {
    const [{basket , user},dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        {/* Logo */}
        <Link to='/'>
            <img className="header_logo" 
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt=''
            />
        </Link>
        
        {/* Search Bar */}
        <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon className="header_searchIcon"/>
        </div>

        {/* personal Info */}
        <div className='header_nav'>
            <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello, {user ?  user.email.substring(0, user.email.lastIndexOf("@")) : 'Guest'}
                    </span>
                    <span className='header_optionLineTwo'>
                        { user ? 'sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Return
                </span>
                <span className='header_optionLineTwo'>
                    & Order
                </span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Your
                </span>
                <span className='header_optionLineTwo'>
                    Prime
                </span>
            </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header_optionLineTwo header_optionBasketCount'>
                    {basket.length}
                    </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header