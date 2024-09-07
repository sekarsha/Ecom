import React, { Fragment, useEffect, useState } from 'react'
import Prduct from '../Component/Prduct'
import dotenv from "dotenv"
import { useSearchParams } from 'react-router-dom';
import.meta.env.VITE_API_KEY
import LoadingIcons from 'react-loading-icons'
import {SpinningCircles} from 'react-loading-icons'


const Home = () => {
    const [product, setproduct] = useState([]);
    const [searchparams, setsearch] = useSearchParams()
    const [loadin, setlodin] = useState(true)

    console.log(import.meta.env.VITE_API_KEY);

  
    const loading=()=>{
        setTimeout(() => {
              
            setlodin(false)

        }, 9000);
    }


    useEffect(() => {
           
         
            fetch(`${import.meta.env.VITE_API_KEY}` + "/product")

            .then(res => res.json())
            .then(res => setproduct(res.products))
           
            loading()
           

    
       

    }, [searchparams])

    return (
        <Fragment>

            <h1 id="products_heading " className=' text-black fw-bold text-center    mt-5 font-monospace'>Latest Products</h1>

              {
                loadin && <div className=' text-center'> <SpinningCircles stroke="black" /> loading Please Wait</div>
              }
             
             
                <section id="products" className="container mt-5 bg">
                    <div className="row">

                        {
                            product.map((product, index) => (
                                <Prduct product={product} key={index}
                                />))
                        }

                    </div>
                </section> 
            





        </Fragment>
    )
}

export default Home