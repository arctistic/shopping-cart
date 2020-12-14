import React from 'react';

const Navbar = (props) => {
    const {count} = props
    return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/34/34568.svg" alt="cart-icon" />
                    <span style={styles.cartCount}>{count}</span>
                </div>
            </div>
        )
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px',
      position: 'absolute',
      right: 10,
      top: -10,
      height: 15,
      width: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
  

export default Navbar;