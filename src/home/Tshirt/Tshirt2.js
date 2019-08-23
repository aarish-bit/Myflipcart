import React, { Component } from 'react'
import './Tshirt.scss'
import { connect } from 'react-redux'
import { FetchTshirts } from './../../actions/TshirtActions'
import {addToCart} from './../../actions/CartAction'


class Tshirt2 extends Component {
   
    componentWillMount() {
        this.props.FetchTshirts()
    }

    render() {
        const {tshirts} = this.props.tshirts  
        console.log(this.props.cartItems, 'rr')

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
}


const mapStateToProps = state => ({
    tshirts: state.tshirts,
    cartItems: state.cart.items
});

export default connect(mapStateToProps, { FetchTshirts, addToCart })(Tshirt2)

