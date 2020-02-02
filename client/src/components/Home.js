import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import '../assets/css/qweb.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import Slider from "react-slick";

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            
            autoplaySpeed: 100,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        let itemList = this.props.items.map(item => {
            return (
                <div className="mb-5 padding-10">
                                                <div className="card" >
                                                    <div style={{ objectFit: 'cover', width: 'auto', height: '100px', overflow: 'hidden' }}>
                                                        <img src={item.image} style={{ width: '100%' }}></img>
                                                    </div>
                                                    <div className="row">
                                                        <div className="card-body col-xl-8 col-lg-8 col-md-8">


                                                            <h5 className="card-title">{item.title}</h5>
                                                            <p className="card-text">{item.desc}</p>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-4 col-md-4 product" style={{marginTop:'30px'}}>
                                                            
                                                            <ul className="social">
                                                                
                                                                <li><a href=""><i className="recipeIcons fa fa-bolt" ></i></a>{item.calories}kcal</li>
                                                                <li><a href=""><i className="recipeIcons fa fa-clock-o" ></i></a>{item.timeCook}   mins</li>
                                                                <li><a href=""><i className="recipeIcons fa fa-user" ></i></a>{item.servings}   servings</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="card-footer " style={{ textAlign: 'right' }}>
                                                        <a href="#" className="btn btn-sm" style={{backgroundColor:"#6cd34c", color:"#fff"}}><i className="fa fa-shopping-cart" ></i> Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>

            )
        })

        

    return(
            <div className = "" >
            <div className="welcome-area" id="welcome">

                <div className="header-text">
                    <div className="container">
                        <div className="row home-features" >
                            <div className="offset-xl-1 col-xl-12 offset-lg-2 col-lg-12 col-md-12 col-sm-12">


                                <h1 style={{ fontWeight: 600 }}>Recipes       <i className="fa fa-long-arrow-right"></i>   Groceries</h1>
                                <h4 className="compress">Browse your favourite recipes by cusine, meal type, various diets. Find some you like, add to cart and we will order the groceries you need.</h4>
                                <div style={{ paddingBottom: '20px' }}>
                                    <a href="" className="main-button-slider">Learn More</a>
                                </div>
                                {//<a href="./sponsor.js" className="main-button-donate">Sponsor Us</a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section home-feature white-bg">
                <div className="container white-bg">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i style={{ fontFamily: 'Poppins Bold', fontSize: '50px' }}>1</i>
                                        </div>
                                        <h5 className="features-title">Tasty, Healthy Recipes</h5>
                                        <p className="">Browse our curated recipes add add your favourites to the cart.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i style={{ fontFamily: 'Poppins Bold', fontSize: '50px' }}>2</i>
                                        </div>
                                        <h5 className="features-title">Compiled Ingredients</h5>
                                        <p className="">We will process and find the ingredients you need.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i style={{ fontFamily: 'Poppins Bold', fontSize: '50px' }}>3</i>
                                        </div>
                                        <h5 className="features-title">Grocery Checkout</h5>
                                        <p className="">Continue to checkout at the grocery store to save you money.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h3 className="center">Our items</h3>
            <div className="box">
                <Slider {...settings}>
                    {itemList}
                    
                </Slider>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

