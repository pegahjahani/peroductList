import './product.css'
import Tech from '../../assets/img/tech.jpeg'
import AddProduct from '../AddProduct/AddProduct'
import { useState } from 'react';


const ProductList = ({productCard , addProduct , onDelete  , editProduct , productInfo})=>{
  
    return(
        <div className=" parent">
        <AddProduct addProduct={addProduct}  productInfo={productInfo}/>
      <div className='parentCards'>
      {
           productCard.map((item)=>{
            return(
               <div key={item.id} className='card'>
                <div className='imgBox'><img src={Tech} /></div>
                 <div><span> name : </span>{item.title}</div>
                <div><span> price : </span>{item.price}$</div>
               <div className='btnParent'>
               <button title='delete' className='btn' onClick={() => onDelete(item.id)}>delete</button>
                <button title='edit' className='btn' onClick={() => editProduct(item)}>edit</button>
               </div>
               </div>
            )
           })
        }
      </div>
        </div>
    )
}
export default ProductList