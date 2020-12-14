import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
   
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price : 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price : 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price : 9999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 1
                }

            ]
        }
    }

    render () {
        const { products } = this.state;
        return (
            <div className='cart'>
                { products.map((product) => {
                    return (
                        <CartItem 
                        product={product} 
                        key={product.id}
                        func={ () => console.log('hey') }
                        isLoggegin={false}
                        jsx={<h1>Hey</h1>}
                        />
                    )
                    
                })}
            </div>
        )
    }
}
export default Cart;