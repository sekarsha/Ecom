import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom';
const Header = ({ cart }) => {
    return (

        <>

            <div className=' border one p-3  p-sm-1 '>
                <nav className="navbar row">
                    <div className="col-12 col-md-3">
                        <div className="navbar-brand text-center">
                            <Link to={"/"}  ><img width="80px" src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-grocery-bag-clipart-grocery-bag-with-vegetables-cartoon-vector-png-image_6866175.png" /></Link>
                        </div>
                    </div>

                    <Search />

                    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center ">
                        <button className=' btn  btn three border border-3   fw-bold'>
                            <Link to={"/cart"} className='nav-link  '>
                                <span id="cart" className="ml-3  "><i className="bi bi-cart-check"></i></span>
                                <span className="ml-1 ms-1  rounded-2 ps-1 pe-1 " id="cart_count ">{cart.length}</span></Link>
                        </button>

                    </div>
                </nav>

            </div>


            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1719805315_ENGLISH_DESKTOP.jpg?im=Resize=(2368,400)" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.jiomart.com/images/cms/section/images/1720287707_Timmer_Banner_2368x400.jpg?im=Resize=(2368,400)" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1719805315_ENGLISH_DESKTOP.jpg?im=Resize=(2368,400)" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )




}

export default Header