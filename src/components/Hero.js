import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/Zig-Zag-1.svg';
//GiAbstract079;
export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
        <h3 className='sub-title text-capitalize'>
          All Your Fishing Needs Catered For Here!
        </h3>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
background-image:url(https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhY2tncm91bmQlMjBpbWFnZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60),linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.8));
background-size:cover
background-position:center;background-repeat:no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? '100vh' : '60vh')};
  
  

  .title {
    padding-top: 2rem;
    font-size: 2.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    color: blue;
    text-transform: uppercase;color:black;
    letter-spacing: var(--mainSpacing);
  }
  .sub-title{
    color: blue;
     padding: 2rem;
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};
