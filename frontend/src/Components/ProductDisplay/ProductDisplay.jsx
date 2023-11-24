import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assests/star_icon.png"
import star_dull_icon from "../Assests/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}= useContext(ShopContext);
    return (
        <div className='Productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                     <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
             </div>
            <div className="productdisplay-right">
                   <h1>{product.name}</h1>
                   <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                </div>
                   <div className="productdisplay-right-prices">
                   <div className="productdisplay-right-price-old">${product.old_price} </div>
                   <div className="productdisplay-right-price-new">${product.new_price} </div>
             </div>
              <div className='productdisplay-right-description'>
                 <p>
                  It should not only describe the t-shirt. Rather, it should tell a compelling story about <br/> 
                  why the t-shirt is worth buying.As with stories, your t-shirt product description must <br/>
                  have an attention hook, a climax, and an impact. Besides, it should not only amuse but <br/>
                  also empower the customers to make informed decisions.
                 </p>
            </div> 
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>

              <button onClick={()=>{addToCart(product.id)}}>Add TO Cart</button>
              <p className='productdisplay-right-category'> <span>Category : </span>Women , T-Shirt, Crop Top </p>
              <p className='productdisplay-right-category'> <span>Tags : </span>Modern, Latest </p>

            </div>
        </div>
    )
}

export default ProductDisplay
