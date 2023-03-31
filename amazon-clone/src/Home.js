import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
       <div className="home_container">
        <img className='home_img' src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg" alt="" />
       </div>
       <div className="home_row">
          <Product id="007"
          title="Rich Dad Poor Dad"
          pri={499.00}
          star={5}
          image="https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg"
          />
          <Product id="008"
          title="I Phone 13 pro max"
          pri={120000.00}
          star={4}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
          />
       </div>
       <div className="home_row">
       <Product id="009"
         title="God Of War: Ragnorock"
          pri={5999.00}
          star={5}
          image="https://m.media-amazon.com/images/I/81E5a+Vym-L._SX425_.jpg"
          />
         <Product id="010"
         title="Gta V"
          pri={3999.00}
          star={4}
          image="https://m.media-amazon.com/images/I/81Ow0EK3azL._SL1500_.jpg"
          />
         <Product  id="011"
            title="Just Cause 4"
          pri={2999.00}
          star={3}
          image="https://m.media-amazon.com/images/I/71cftQmbMuL._SX385_.jpg"
          />
       </div>
       <div className="home_row">
       <Product  id="012"title="Gamming Setup"
          pri={230000.00}
          star={4}
          image="https://www.bigbangblog.net/wp-content/uploads/2020/12/Untitled-8.jpg"
          />
       </div>
    </div>
  )
}

export default Home