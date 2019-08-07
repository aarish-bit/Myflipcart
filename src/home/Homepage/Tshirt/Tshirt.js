import React, { useState, useEffect } from 'react'
import './Tshirt.scss'

function Tshirt() {
  const [tshirts, settshirts] = useState([]);

  useEffect(() => {
    fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
      .then(res => res.json())
      .then(data => {
        settshirts(data.products)
      })
  }, [])
  return (
    <div className="tshirts">
      <div className="heading">
        <h4><b>Tshirts New Collection</b></h4>
      </div>
      <hr />
      <div className="tshirts-content">
        {tshirts.map((data) => {
          return (
            <div key={data.id} className="tshirts-data">
              <img src='./tshirt/user5.jpg' alt={data.title} />
              <h6 className="data-title"><b>{data.title}</b></h6>
              <p className="style">{data.style}</p>
              <p className="price">From <i className="fas fa-rupee-sign"></i>{data.price}</p>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Tshirt
