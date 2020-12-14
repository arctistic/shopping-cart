import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products: [
            {
                price : 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                id: 1
            },
            {
                price : 999,
                title: 'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                id: 2
            },
            {
                price : 9999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                id: 3
            }

        ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    // this.setState({          // same thing below
    //     products: products
    // })
    this.setState({
        products
    })
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product)
    if(products[index].qty > 1){
        products[index].qty -= 1;
    
        this.setState({
            products
        })
    }
  }

  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
    })
  }

  getCartCount = () => {
    const {products} = this.state
    let count = 0;
    products.forEach((product) => {
      count += product.qty
    });
    return count
  }

  getCartTotal(){
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.qty
    })
    return total;
  }

  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()} 
        />
        <Cart
          products={products} 
          func={ () => console.log('hey') }
          isLoggegin={false}
          jsx={<h1>Hey</h1>}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          />
        <div>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
