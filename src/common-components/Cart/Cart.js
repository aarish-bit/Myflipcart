import React, { Component } from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from './../../actions/CartAction'


 class Cart extends Component {
  render() {
      const {cartItems} = this.props;
      console.log(cartItems, 'items')
    return (
      <div className="alert alert-info">
      <div className="divider">
        { cartItems.length === 0 ? "Basket is Empty" : `You have ${cartItems.length} items in Basket`}
      </div>

        {   cartItems.length >0 && 
            <div>
                <ul>
                    {cartItems.map(item =>
                        <li key={item.id} className="itemDecor">
                            <b>{item.title}</b> X {item.count} = {item.price*item.count} 
                            <br/>
                            <button className="btn btn-danger" onClick={ (e) =>this.props.removeFromCart(this.props.cartItems,item)}>
                            Remove
                            </button>
                            <div className="divider"></div>
                        </li>)}
                </ul>
            </div>
        }
        {cartItems.length > 0 ? <button className="btn btn-primary">Checkout</button>:null}
        
      </div>
    )
  }
}

const mapStateToProps = state =>({
  cartItems: state.cart.items
})

export default connect(mapStateToProps,{removeFromCart})(Cart)