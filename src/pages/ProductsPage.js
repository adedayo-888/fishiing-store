import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import productsBcg from '../images/Zig-Zag.svg';

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
