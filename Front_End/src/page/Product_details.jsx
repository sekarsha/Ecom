import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import pic from "../photos/star.png"
import pic1 from "../photos/rating.png"
import.meta.env.VITE_API_KEY



const Product_details = ({ cart, setcart }) => {
     
    console.log(import.meta.env.VITE_API_KEY);
     
    const [product_id, setproduct_id] = useState(null)
    const [qty, setqty] = useState(1)
  
    const { id } = useParams();
    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_KEY}`+"/product/" + id)
            .then(res => res.json())
            .then(res => setproduct_id(res.single_product))

    }, [])

    const add_to_cart = () => {

        const oneitemcart = cart.find((item) => item.product_id._id == product_id._id)

        if (!oneitemcart) {
            const newitem = { product_id, qty }
         
            setcart((cart) => [...cart, newitem])
            toast.success("Product added to cart")
        }

    }

    const incressqty=()=>{

        if(product_id.stock==qty){
            return;
        }

        setqty((qty)=>qty+1)
    }



    const decressqty=()=>{
        
        if(qty>1){
          
          
            setqty((qty)=>qty-1)

        }

       
    }

    return (

        product_id &&
        <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid d-flex align-content-center align-items-center" id="product_image ">
                    <img src={product_id.images} alt="sdf" className=' img-fluid' />
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <h3 className=' fw-bold'>{product_id.name}</h3>
                    <p id="product_id " className='fw-bold'>Product # {product_id._id}</p>
                    <p className=' fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi fugit ut et dolorem vero, mollitia quia nemo accusamus tempora?</p>

                    <hr />

                    <div className="rating-outer">
                        <div className="rating-inner">
                        <ul className=' d-flex'>
                                    <li className=' nav-link'><img src={pic} alt="" width={"30px"} /></li>
                                    <li className=' nav-link'><img src={pic} alt="" width={"30px"} /></li>
                                    <li className=' nav-link'><img src={pic} alt="" width={"30px"} /></li>
                                    <li className=' nav-link'><img src={pic} alt="" width={"30px"} /></li>
                                    <li className=' nav-link'><img src={pic1} alt="" width={"30px"} /></li>
                                </ul>
                        </div>
                    </div>


                    <hr />

                    <p id="product_price" className=' fw-bold'>${product_id.price}</p>
                    <div className="stockCounter d-inline  align-content-center  align-items-center">
                        <span className="btn btn-danger minus me-2 " onClick={decressqty} >-</span>

                        <input type="number" className="form-control count d-inline w me-2"  value={qty} readOnly />

                        <span className="btn btn-primary plus me-2  " onClick={incressqty}  >+</span>
                    </div>

                    <button onClick={add_to_cart} type="button" id="cart_btn"  disabled={product_id.stock==0}   className="btn btn-primary d-inline ml-4">Add to Cart</button>

                    <hr />

                    <p>Status: <span id="stock_status" className={product_id.stock > 0 ? " text-success" : "text-danger"}    >{product_id.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>


                    <hr />

                    <h4 className="mt-2">Description:</h4>
                    <p className=' fw-bold'>{product_id.description}</p>
                    <hr />
                    <p id="product_seller mb-3">Over all Stock: <strong>{product_id.stock}</strong></p>

                    <div className="rating w-50"></div>

                </div>

            </div>

        </div>
    )
}

export default Product_details