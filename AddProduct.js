import { useState , useEffect} from 'react'
import './AddProduct.css'


const AddProduct = ({addProduct , productCard , productInfo })=>{
const [data , setData] = useState([])
const [isTrue, setisTrue] = useState(true)
const submitForm = async (event) => {
    event.preventDefault()
    await addProduct(data)
    setData({id:'', title: '', price: ''})
        
   

}
useEffect(() => {
    if (Object.keys(productInfo).length > 0) {
        setData(productInfo)
        setisTrue(!isTrue)
    }
}, [productInfo])
    return(
        <div className="parentForm" >
            <form id="addForm" onSubmit={submitForm}>
            <h4 className='formName'>add new product</h4>
                <div><input name="title" className="input_form" placeholder="title" value={data.title} onChange={(e) => setData((prevState) => ({ ...prevState, title: e.target.value }))}/></div>
                <div><input name="price" className="input_form" placeholder="price" value={data.price} onChange={(e) => setData((prevState) => ({ ...prevState, price: e.target.value }))}/></div>
                <div><input name="id" className="input_form" hidden value={data.id} onChange={(e) => setData((prevState) => ({ ...prevState, id: e.target.value }))}/></div>
                <button className='submitBtn'>submit</button>
            </form>
        </div>
    )

}
export default AddProduct