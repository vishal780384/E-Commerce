import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icons from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className={`navbar ${mobileMenuOpen ? 'responsive' : ''}`}>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Aashion</p>
      </div>
      <ul className={`nav-menu ${mobileMenuOpen ? 'mobile' : ''}`}>
        <li onClick={() => { setMenu("shop"); if (mobileMenuOpen) toggleMobileMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens"); if (mobileMenuOpen) toggleMobileMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens"); if (mobileMenuOpen) toggleMobileMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); if (mobileMenuOpen) toggleMobileMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/register"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icons} alt="" />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
      <div className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </div>
  );
}

export default Navbar;


// import React, { useState } from 'react'
// import './Navbar.css'

// import logo from '../Assests/logo.png'
// import cart_icons from '../Assests/cart_icon.png'
// import { Link } from 'react-router-dom'



// const Navbar = () => {
//     const [menu,setMenu] = useState("shop");  
//     return (
//       <>  
//     <div className='navbar'>
//         <div className='nav-logo'>
//             <img src={logo} alt=""/>
//             <p>SHOPPER</p>
//         </div>
//         <ul className='nav-menu'>
//             <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>} </li>   
//             <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none'}} to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>} </li>
//             <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}} to="/womens">Women</Link> {menu==="womens"?<hr/>:<></>} </li>
//             <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>} </li>
//         </ul>
//         <div className='nav-login-cart'>
//         <Link to="/login"><button>Login</button></Link> 
//         <Link to="/cart"><img src={cart_icons} alt="" /></Link> 
       
//            <div className='nav-cart-count'>0</div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar

