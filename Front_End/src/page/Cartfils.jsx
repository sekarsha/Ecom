import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import.meta.env.VITE_API_KEY


const Cartfils = ({cart,setcart}) => {
     
    const [comlete,setcomplete]=useState(false)
    
    const incressqty=(item)=>{
           

        console.log(item.product_id);
        if(item.product_id.stock == item.qty){
            return;
        }

         const updatecart= cart.map((i)=>{

            if(i.product_id._id == item.product_id._id){
               
                i.qty++
            }
            return i;

        })
        
        setcart(updatecart)
    }



    const decressqty=(item)=>{
        
        if(item.qty>1){
          
            const updatecart= cart.map((i)=>{

                if(i.product_id._id == item.product_id._id){
                   
                    i.qty--
                }
                return i;
    
            })
            setcart(updatecart)
       
        }

       
    }
    

    const removeitem=(item)=>{

        const updatecart= cart.filter((i)=>{

            if(i.product_id._id !== item.product_id._id){
               
                return true
            }
           

        })
        setcart(updatecart)


    }

  const order=()=>{

    
    fetch(`${import.meta.env.VITE_API_KEY}`+"/order",{

    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(cart)

    }).then(()=>{
        setcart([])
        setcomplete(true)
        toast.success("Order Success")

    })

  }


    return (
        
     cart.length>0? <Fragment>

       
        <div className="container container-fluid">
            <h2 className="mt-5">Your Cart: <b>{cart.length} items</b></h2>

            <div className="row d-flex justify-content-between">
                <div  className="col-12 col-lg-8">
                   
                   {
                    cart.map((item,index)=>(

                        <Fragment>
                        <hr />
                        <div className="cart-item">
                            <div className="row">
                                <div className="col-4 col-lg-3">
                                    <img src={item.product_id.images} key={index} alt="Laptop" height="90" width="115" />
                                </div>
    
                                <div className="col-5 col-lg-3">
                                
                                 
                                    <Link to={"product/"+item.product_id._id} key={index} className=' nav-link fw-bold'  >  {item.product_id.name}  </Link>

                                    
                                </div>
    
    
                                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                    <p id="card_item_price" key={index} className=' fw-bold'>${item.product_id.price}</p>
                                </div>
    
                                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                    <div className="stockCounter d-inline">
                                        <span className="btn btn-danger minus me-2" onClick={()=>decressqty(item)}>-</span>
                                        <input type="number" className="form-control count d-inline w me-2" value={item.qty} readOnly />
    
                                        <span className="btn btn-primary plus me-2" onClick={()=>incressqty(item)} >+</span>
                                    </div>
                                </div>
    
                                <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                <i className="bi bi-trash-fill" onClick={()=>removeitem(item)} ></i>
                                </div>
    
                            </div>
                        </div>
                        </Fragment>
                    ))
                   }
                 
                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">{cart.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
                        <p>Est. total: <span className="order-summary-values">${cart.reduce((acc,item)=>(acc+item.product_id.price*item.qty),0)}</span></p>

                        <hr />
                        <button id="checkout_btn" onClick={order}  className="btn btn-primary btn-block">Place Order</button>
                    </div>
                </div>


            </div>
        </div>

        </Fragment>:(!comlete ? <h1 className=' text-center'>Your Cart is Empty</h1> : <Fragment><h5 className='text-center fw-bold'>Youre Order has been success full </h5></Fragment> )
    )
}

export default Cartfils