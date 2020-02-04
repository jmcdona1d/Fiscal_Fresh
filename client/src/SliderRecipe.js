import React, { Component } from 'react'
import Slider from "react-slick";
import {Button} from 'semantic-ui-react';
import {addToCart} from "./App";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
        />
    );
}

export class SliderRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                {
                    "id": 592479,
                    "title": "Kale and Quinoa Salad with Black Beans",
                    "readyInMinutes": 50,
                    "servings": 6,
                    "image": "Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg",
                    "imageUrls": [
                        "Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg"
                    ]
                },
                {
                    "id": 547775,
                    "title": "Creamy Avocado Pasta",
                    "readyInMinutes": 15,
                    "servings": 2,
                    "image": "Creamy-Avocado-Pasta-547775.jpg",
                    "imageUrls": [
                        "Creamy-Avocado-Pasta-547775.jpg"
                    ]
                },
                {
                    "id": 818941,
                    "title": "Avocado Toast with Eggs, Spinach, and Tomatoes",
                    "readyInMinutes": 10,
                    "servings": 1,
                    "image": "avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg",
                    "imageUrls": [
                        "avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg"
                    ]
                },
                {
                    "id": 495111,
                    "title": "Citrus Sesame Kale",
                    "readyInMinutes": 15,
                    "servings": 4,
                    "image": "Citrus-Sesame-Kale-495111.jpg",
                    "imageUrls": [
                        "Citrus-Sesame-Kale-495111.jpg"
                    ]
                },
                {
                    "id": 689502,
                    "title": "Melt In Your Mouth Kale Salad",
                    "readyInMinutes": 10,
                    "servings": 2,
                    "image": "Melt-In-Your-Mouth-Kale-Salad-689502.jpg",
                    "imageUrls": [
                        "Melt-In-Your-Mouth-Kale-Salad-689502.jpg"
                    ]
                },
                {
                    "id": 837136,
                    "title": "Kale Pineapple Smoothie",
                    "readyInMinutes": 4,
                    "servings": 1,
                    "image": "kale-pineapple-smoothie-837136.jpg",
                    "imageUrls": [
                        "kale-pineapple-smoothie-837136.jpg"
                    ]
                },
                {
                    "id": 582897,
                    "title": "Mexican Salad with Lime Dressing",
                    "readyInMinutes": 15,
                    "servings": 4,
                    "image": "Mexican-Salad-with-Lime-Dressing-582897.jpg",
                    "imageUrls": [
                        "Mexican-Salad-with-Lime-Dressing-582897.jpg"
                    ]
                },
                {
                    "id": 777037,
                    "title": "Weekly Meal Plan #17",
                    "readyInMinutes": 15,
                    "servings": 6,
                    "image": "weekly-meal-plan-17-777037.jpg",
                    "imageUrls": [
                        "weekly-meal-plan-17-777037.jpg"
                    ]
                },
                {
                    "id": 801710,
                    "title": "Matcha Green Tea and Pineapple Smoothie",
                    "readyInMinutes": 10,
                    "servings": 1,
                    "image": "matcha-green-tea-and-pineapple-smoothie-801710.jpg",
                    "imageUrls": [
                        "matcha-green-tea-and-pineapple-smoothie-801710.jpg"
                    ]
                },
                {
                    "id": 812966,
                    "title": "Low Carb Frosty",
                    "readyInMinutes": 5,
                    "servings": 1,
                    "image": "low-carb-frosty-812966.jpg",
                    "imageUrls": [
                        "low-carb-frosty-812966.jpg"
                    ]
                }
            ],
            baseUri: "https://spoonacular.com/recipeImages/"
        }
    }

    handleAddToCart(recipe){
        this.props.addToCart(recipe);
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,

            autoplaySpeed: 100,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <div>
                <Slider {...settings}>
                    {this.props.list.map(item => (
                        <div className="container mb-5 padding-10">
                            <div className="card" >
                                <div style={{ objectFit: 'cover', width: 'auto', height: '170px', overflow: 'hidden' }}>
                                    <img src={this.state.baseUri + "/" + item.imageUrls} style={{ width: '100%' }}></img>
                                </div>
                                <div className="row">
                                    <div className="card-body col-xl-8 col-lg-8 col-md-8">


                                        <h2 style={{ fontSize: '16px', fontWeight: '600' }} className="card-title">{item.title}</h2>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 product" style={{ marginTop: '30px' }}>

                                        <ul className="social">

                                            <li><p style={{ paddingBottom: '10px', fontWeight: '500', fontSize: '12px' }}><i className="recipeIcons fa fa-clock-o" ></i>{item.readyInMinutes}   mins</p></li>
                                            <li><p style={{ paddingBottom: '10px', fontWeight: '500', fontSize: '12px' }}><i className="recipeIcons fa fa-user" ></i>{item.servings}   servings</p></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-footer " style={{ textAlign: 'right' }}>
                                    <Button href="" className="btn btn-sm" onClick={() => this.props.callback(item)} style={{ backgroundColor: "#6cd34c", color: "#fff" }}><i className="fa fa-shopping-cart" ></i> Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


        )
    }
}

export default SliderRecipe
