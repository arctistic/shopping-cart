import React from 'react';

class CartItem extends React.Component {
    // constructor(){    // CONSTRUCTOR NOT REQUIRED as we are new using props so no state require to be initialized
    //     super();
    //     this.state = {
    //         price : 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this)
    //     // this.testing();
    // }

    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })
    //     promise.then(() => {
    //         this.setState({ qty: this.state.qty + 10 });
    //         this.setState({ qty: this.state.qty + 10 });
    //         this.setState({ qty: this.state.qty + 10 });
    //         // setState works like a synchronous call in a promise
    //         // thus all setState will add up and the code below will only execute after the setState
    //         console.log('state', this.state)
    //     })
    // }

    increaseQuantity = () => {          // not using right now
        /* METHOD 1 : setState - passing an object
        The setState func comes from React.Component as we are inheriting from it we are able to use it (this is one way of doing it, if the previous state is not required*/
        /**BATCHING: if there are many setState functions, the component is rendered only ONCE, taking the modified attribute of the object that it returns on the last setState function (shallow merging) */
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        // this.setState({
        //     qty: this.state.qty + 2,
        //     title: 'Hey'
        // }, () => {})

        
        /*METHOD 2 : setState - passing a funtion
        If the previous state is required - passing a callback function to setState function. the callback function is an arrow func. the argument to the arrow function is the previous state, i.e., previous this*/
        /**Batching DOES NOT HAPPEN, a queue is mantained and all the setState function is computed */
        // this.setState((prevState)=>{
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // })
        // this.setState((prevState)=>{
        //     return {
        //         title: 'kabd',
        //         qty: prevState.qty + 0
        //     }
        // })


        /*setState function is ASYNCHRONOUS therefore the code written after the setState function does not wait for the setState function to end it will run anyway.
        To wait for the setState function to end we can write the following code inside the callback function as another parameter of setState function */
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        })
        
    }

    decreaseQuantity = () => {                  // Not using right now
        const { qty } = this.state
        this.setState((prevState => {
            if (qty > 1){
                return {qty: prevState.qty - 1};
            }else{
                return;
            }
        }))
    }

    render () {
        // console.log('this.props', this.props)
        const {price, title, qty} = this.props.product;
        const {
            product,
            onDecreaseQuantity,
            onIncreaseQuantity,
            onDeleteProduct,
        } = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs: {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828906.svg" 
                            onClick={ //this.decreaseQuantity
                                () => {onDecreaseQuantity(product)}
                            
                            }
                        />
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" 
                            onClick={
                                () => {
                                    onIncreaseQuantity(product)
                                }
                                /* Need to bind this either here or in constructor
                                or make use of Arrow functions*/
                            }
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" 
                            onClick={
                                () => {onDeleteProduct(product.id)}
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc"
    }
}

export default CartItem