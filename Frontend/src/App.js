import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getAllProduct_API } from './API';
import ProductTable from './ProductTable';

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const result = await getAllProduct_API();
      if (result) {
        setProducts(result);
      }
    } catch (error) {
      console.log('error');
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    console.log('Products: ', products);
  }, [products]);

  return (
    <div className='App'>
      <h1>Product</h1>
      <ProductTable data={products} />
    </div>
  );
}

export default App;
