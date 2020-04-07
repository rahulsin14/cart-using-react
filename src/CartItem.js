import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            title:'Phone',
            Qty:'1',
            price:'Rs 999'
        }
    }
    render () {
        const{title,Qty,price}=this.state;
      return (
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image} />
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>{price}</div>
            <div style={ { color: '#777' } }>Qty:{Qty}</div>
            <div className="cart-item-actions">
              {/* Buttons */}
            </div>
          </div>
        </div>
      );
    }
  }
  
  const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
export default CartItem;