import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            products:[{
                id:1,
                title:'Phone',
                qty:1,
                price:'Rs 99',
                img:''
            },{
                id:2,
                title:'Watch',
                qty:1,
                price:'Rs 999',
                img:''
            },
            {
                id:3,
                title:'Laptop',
                qty:1,
                price:'Rs 999',
                img:''
            }
        ]
           
        }
    
     // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
    }
    render(){
        const{products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id} />
                })}
            </div>
            
        );
        
    }

}
export default Cart;