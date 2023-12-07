import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import Homeproduct from './Home_product'
import { AiFillEye, AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const Home = ({addtocart}) => {
    //Product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    //Tranding Product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    //filter of tranding product
    const filtercate = (x) =>  {
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }
    //All trending product
    const allTrendingProduct = ()  => {
        setTrendingProduct(Homeproduct);
    }
    //Product Type
    useEffect(() =>{
        productcategory()
    })
    const productcategory = () => {
        //New Product
        const newcategory = Homeproduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newcategory)
        //Featured Product
        const featuredcategory = Homeproduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)
        //Top Product
        const topcategory = Homeproduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }
     //Toggle Product Detail
     const [showDetail, setShowDetail] = useState(false)
     //Detail Page Data
     const [detail, setDetail] = useState([])
     //Showing Detail Box
     const detailpage = (product) => {
         const detaildata = ([{product}])
         const productdetail = detaildata[0]['product']
         //console.log(productdetail)
         setDetail(productdetail)
         setShowDetail(true)
     }
     const closedetail = () => {
         setShowDetail(false)
     }
  return (
    <>
    {
        showDetail ?
        <>
         <div className='product_detail'>
                <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                <div className='container'>
                    <div className='img_box'>
                        <img src={detail.image} alt=''/>
                    </div>
                    <div className='info'>
                        <h4># {detail.cat}</h4>
                        <h2>{detail.Name}</h2>
                        <p>A Screen Everyone Will Love: whether your family is streaming or viedeo chatting with friends tablet A8</p>
                        <h3>${detail.price}</h3>
                        <button onClick={() => addtocart(detail)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
        :null
    }
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h3>silver aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first order</p>
                <Link to="/shop" className='link'>Shop Now</Link>
            </div>
        </div>
        <div className='trending'>
            <div className='container'>
                <div className='left_box'>
                    <div className='header'>
                        <div className='heading'>
                           <h2 onClick={() => allTrendingProduct()}>trending product</h2> 
                        </div>
                        <div className='cate'>
                            <h3 onClick={() => filtercate ('new')}>New</h3>
                            <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                            <h3 onClick={() => filtercate ('top')}>Top sealing</h3>
                        </div>
                    </div>
                    <div className="products">
                        <div className='container'>
                            {
                                trendingProduct.map((curElm) => {
                                    return(
                                        <>
                                        <div className='box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt='' />
                                                <div className='icon'>
                                                   <div className='icon_box' onClick={() => detailpage(curElm)}> 
                                                   <AiFillEye />
                                                    </div>
                                                    <div className='icon_box'>
                                                    <FaHeart />
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className='info'>
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button className='btn' onClick={() => addtocart(curElm)}>Add to cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <button>Show More</button>
                    </div>
                    </div>
                <div className='right_box'>
                    <div className='right_container'>
                        <div className='testimonial'>
                          <div className='head'>
                            <h3>our testimonial</h3>
                            </div>
                            <div className='detail'>
                                <div className='img_box'>
                                    <img src='image/T1.avif' alt='testmonial'></img>
                                </div>
                                <div className='info'>
                                    <h3>stephan robot</h3>
                                    <h4>web designer</h4>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>  
                        </div>
                        <div className='newsletter'>
                            <div className='head'>
                                <h3>newsletter</h3>
                            </div>
                            <div className='form'>
                                <p>join our malling list</p>
                                <input type='email' placeholder='E-mail' autoComplete='off'/>
                                <button>subscribe</button>
                                <div className='icon_box'>
                                    <div  className='icon'>
                                        <BiLogoFacebook />
                                    </div>
                                    <div  className='icon'>
                                        <FaXTwitter />
                                    </div>
                                    <div  className='icon'>
                                        <BiLogoInstagram />
                                    </div>
                                    <div  className='icon'>
                                        <BiLogoYoutube />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className='banners'>
            <div className='container'>
                <div className='left_box'>
                    <div className='box'>
                        <img src='image/Multi-Banner-1.avif' alt='banner'/>
                    </div>
                    <div className='box'>
                        <img src='image/Multi-Banner-2.avif' alt='banner'/>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='top'>
                        <img src='image/Multi-Banner-3.webp' alt='banner'/>
                        <img src='image/Multi-Banner-4.avif' alt='banner'/>
                    </div>
                    <div className='bottom'>
                        <img src='image/Multi-Banner-5.webp' alt='banner'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='product_type'>
            <div className='container'>
                <div className='box'>
                    <div className='header'>
                        <h2>New Product</h2>
                    </div>
                    {
                        newProduct.map((curElm) => {
                            return(
                                <>
                                 <div className='productbox'>
                                    <div className='img-box'>
                                        <img src={curElm.image} alt='' />
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className='icon'>
                                            <button onClick={() => detailpage(curElm)}><AiFillEye /></button>
                                            <button><FaHeart /></button>
                                            <button onClick={() => addtocart(curElm)}><IoCartOutline /></button>
                                        </div>
                                    </div>
                                </div> 
                                </>
                            )
                        })
                    }
                </div>
                <div className='box'>
                    <div className='header'>
                        <h2>Featured Product</h2>
                    </div>
                    {
                        featuredProduct.map((curElm) => {
                            return(
                                <>
                                 <div className='productbox'>
                                    <div className='img-box'>
                                        <img src={curElm.image} alt='' />
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className='icon'>
                                            <button onClick={() => detailpage(curElm)}><AiFillEye /></button>
                                            <button><FaHeart /></button>
                                            <button onClick={() => addtocart(curElm)}><IoCartOutline /></button>
                                        </div>
                                    </div>
                                </div> 
                                </>
                            )
                        })
                    }
                </div>
                <div className='box'>
                    <div className='header'>
                        <h2>Top Product</h2>
                    </div>
                    {
                        topProduct.map((curElm) => {
                            return(
                                <>
                                 <div className='productbox'>
                                    <div className='img-box'>
                                        <img src={curElm.image} alt='' />
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className='icon'>
                                            <button onClick={() => detailpage(curElm)}><AiFillEye /></button>
                                            <button><FaHeart /></button>
                                            <button onClick={() => addtocart(curElm)}><IoCartOutline /></button>
                                        </div>
                                    </div>
                                </div> 
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home