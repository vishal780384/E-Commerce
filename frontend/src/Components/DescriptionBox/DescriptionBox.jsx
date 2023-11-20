import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description'>
        <div className="description-navigator">
            <div className="description-nav-box"> Description</div>
            <div className="description-nav-box fade"> Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
          <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. 
            It encompasses a wide range of online transactions, from retail platforms and marketplaces to business-to-business exchanges. 
            E-commerce eliminates geographical barriers, allowing consumers to shop from anywhere at any time. 
            Transactions are facilitated through secure payment gateways, ensuring a seamless and safe shopping experience. 
            The digital nature of e-commerce enables businesses to reach a global audience, optimize inventory management, 
            and provide personalized shopping experiences. This dynamic and rapidly evolving industry continues to reshape traditional 
            retail models, emphasizing convenience, accessibility, and innovation. </p>

           <p> E-commerce, short for electronic commerce, is a dynamic online platform that facilitates the buying and selling of goods and services over the internet. 
            This digital marketplace allows businesses and consumers to engage in transactions without the need for physical presence. 
            With the convenience of 24/7 accessibility, e-commerce platforms showcase a diverse range of products, enabling users to browse, 
            compare, and make purchases from the comfort of their homes. </p>
        </div>
    </div>
  )
}

export default DescriptionBox
