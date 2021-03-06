import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';
// import logo from '../images/logo.svg';
export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className='nav-center'>
              <FaBars className='nav-icon' onClick={handleSidebar} />
              <h2 className='logo_name'>DFishingStore</h2>
              <div className='nav-cart'>
                <FaCartPlus className='nav-icon' onClick={handleCart} />
                <div className='cart-items'>{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 5px solid gold;
  z-index: 2;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .logo_name {
    font-family: fantasy;
    color: blue;
    font-weight: bold;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
    color: black;
    margin-right: 15px;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
