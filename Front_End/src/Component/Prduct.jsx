import React from 'react';
import { Link } from 'react-router-dom';
import pic from "../photos/star.png"
import pic1 from "../photos/rating.png"




const Prduct = ({product }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top " width={"300px"} height={"300px"}
                    src={`${product.images}`} 
                />
                


              {/* <img src={pic} alt="ss" /> */}
              
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link  to={"product/"+product._id} className=' nav-link' >{product.description}</Link>
                    </h5>
                    <div className="ratings  border d-flex  justify-content-center">
                        <div className="rating-outer">
                            <div className="rating-inner"  >
                                <ul className=' d-flex'>
                                    <li className=' nav-link'><img src={pic} alt="" width={"20px"} /></li>
                                    <li className=' nav-link'><img src={pic} alt="" width={"20px"} /></li>
                                    <li className=' nav-link'><img src={pic} alt="" width={"20px"} /></li>
                                    <li className=' nav-link'><img src={pic} alt="" width={"20px"} /></li>
                                    <li className=' nav-link'><img src={pic1} alt="" width={"20px"} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className=' fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis!</p>
                    <p className="card-text text-primary fw-bold">${product.price}</p>
                    <Link  to={"product/"+product._id} id="view_btn" className=" "> <button className=' btn btn-primary'>View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Prduct