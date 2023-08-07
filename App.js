
import { useState, useEffect } from 'react';
import './App.css';
import ProductList from './component/ProductList/ProductList'
import axios from "axios"



function App() {
  const [product, setProduct] = useState([])
  const [productInfo , setProductInfo] = useState([])
  const [isTrue, setisTrue] = useState(true)
  console.log('isTrue' , isTrue);

  const getData = async () => {
    let res = await axios.get('http://localhost:10000/product')
    console.log('res', res.data);
    setProduct(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const addProduct = async (data) => {
    let res, route = `http://localhost:10000/product/`, method = axios.post
    if (!isTrue) {
      method = axios.put
      route += productInfo.id
      setisTrue(!isTrue)
    }
    res = await method(route, JSON.parse(JSON.stringify(data)))
    console.log('res' , res);
    await getData()
  }
  const editProduct = async (_item) => {
    setProductInfo(_item)
    setisTrue(!isTrue)
  }
  const deleteProduct = async (id) => {
    let res = await axios.delete(`http://localhost:10000/product/${id}`)
    console.log('res', res);
    setProduct(product.filter((item) => item.id !== id))
  }
  return (
    <div className="App">
      <ProductList getData={getData} productCard={product} addProduct={addProduct} onDelete={deleteProduct} editProduct={editProduct} productInfo={productInfo}/>
    </div>
  );
}

export default App;
