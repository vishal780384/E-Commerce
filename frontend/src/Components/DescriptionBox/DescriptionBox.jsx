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
          <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet.<br/>
          The digital nature of e-commerce enables businesses to reach a global audience, optimize inventory management, It encompasses <br/> 
          a wide range of online transactions, from retail platforms and marketplaces to business-to-business exchanges.E-commerce eliminates<br/>
          geographical barriers, allowing consumers to shop from anywhere at any time.Transactions are facilitated through secure payment gateways,<br/>
          ensuring a seamless and safe shopping experience and provide personalized shopping experiences. This dynamic and rapidly evolving industry continues<br/>
          to reshape traditional retail models, emphasizing convenience, accessibility, and innovation. </p>

        </div>
    </div>
  )
}

export default DescriptionBox
