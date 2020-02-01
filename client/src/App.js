import React, { Component } from 'react'
//import ReactTypingEffect from 'react-typing-effect';
import logo from './logo.svg';

import _ from 'lodash'
import faker from 'faker'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'


import './assets/css/qweb.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import Slider from "react-slick";
//import "./slick-carousel/slick/slick.css"; 
//import "./slick-carousel/slick/slick-theme.css";
import food from "./assets/images/food.jpg";


const initialState = { isLoading: false, results: [], value: '' }

const source = [{
    "id": "1",
    "title": "Butter Chicken",
    "description": "Lorem Ipsum Dos Color Dit Simit",
    "image": { food },
    "calories": "500"
},
{
    "id": "2",
    "title": "boeger and Sons",
    "description": "Reactive encompassing standardization",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg",
    "price": "$2.49"
},
{
    "id": "3",
    "title": "Welch Group",
    "description": "Inverse coherent system engine",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/osmond/128.jpg",
    "price": "$71.73"
},
{
    "id": "4",
    "title": "Breitenberg Inc",
    "description": "User-centric radical solution",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/arthurholcombe1/128.jpg",
    "price": "$98.09"
},
{
    "id": "5",
    "title": "de - Walker",
    "description": "Monitored systematic project",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/nilshelmersson/128.jpg",
    "price": "$47.91"
}];





class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                "Butter Chicken",
                "Greek Chicken",
                "Thai Red Curry",
                "Veggie Pizza",
                "Another Thing",
                "Another Thing"
            ],
            filtered: []

        }

        this.handleChange = this.handleChange.bind(this);
    }

    state = initialState

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    componentDidMount() {
        this.setState({
          filtered: this.state.list
        });
      }
      
     

    handleChange(e) {

        console.log(this.state.filtered);
        console.log(this.state.list);
        // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (e.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.state.list;

      

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {
                // change current item to lowercase
        const lc = item.toLowerCase();
                // change search term to lowercase
        const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.state.list;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }


    render() {
        const { isLoading, value, results, filtered } = this.state

        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className="">


                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <a href="#" className="logo" style={{ color: 'black' }}>
                                        Meal Prepper
                        </a>
                                    <ul className="nav">
                                        <li><a href="#welcome" className="active">Cart</a></li>

                                        <li><a href="#events">Sign In</a></li>

                                    </ul>
                                    <a className='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="welcome-area" id="welcome">

                    <div className="header-text">
                        <div className="container">
                            <div className="row">
                                <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">


                                    <h1 style={{ fontWeight: 600 }}>Recipes   <i className="fa fa-long-arrow-right"></i>   Groceries</h1>
                                    <h4 className="compress">Browse your favourite recipes by cusine, meal type, plant based and so much more.</h4>
                                    <a href="#projects" className="main-button-slider">Learn More</a>
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

                <section className="section home-feature ">
                    <div className=" ">
                        <div className="row">
                            <div className="col-lg-12">
                                <div>
                                    <h2 style={{ marginTop: '175px', marginLeft: '50px', marginBottom: '90px', fontWeight: '600' }}> Browse Recipes by Category Below.</h2>
{/*Slider*/}
                                    <div className="margin-bottom-100">
                                        <Slider {...settings}>
                                        {this.state.list.map(item => (
                                            <div className="mb-5 padding-10">
                                                <div className="card" >
                                                    <div style={{ objectFit: 'cover', width: 'auto', height: '100px', overflow: 'hidden' }}>
                                                        <img src={food} style={{ width: '100%' }}></img>
                                                    </div>
                                                    <div className="row">
                                                        <div className="card-body col-xl-8 col-lg-8 col-md-8">


                                                            <h2 className="card-title">{item}</h2>
                                                            <p className="card-text">Lorem ipsum dolor sit amet, dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                                                        </div>
                                                        <div className="card-body col-xl-4 col-lg-4 col-md-4 product" style={{marginTop:'30px'}}>
                                                            
                                                            <ul className="social">
                                                                
                                                                <li><a href=""><i className="fa fa-github" style={{ color: '#000' }}></i></a></li>
                                                                <li><a href=""><i className="fa fa-github" style={{ color: '#000' }}></i></a></li>
                                                                <li><a href=""><i className="fa fa-github" style={{ color: '#000' }}></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="card-footer " style={{ textAlign: 'right' }}>
                                                        <a href="#" className="btn btn-success btn-sm" >Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                            
                                        </Slider>
                                    </div>


                                    {/*Search*/}

                                    <Grid>
                                        <Grid.Column width={6}>
                                            <Search onChange={this.handleChange}
                                                loading={isLoading}
                                                onResultSelect={this.handleResultSelect}
                                                
                                                results={results}
                                                value={value}
                                                {...this.props}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={10}>
                                            <Segment>
                                                <h2>Recipes</h2>
                                                <div className="row">
                                                    {this.state.filtered.map(item => (
                                                        <div className="mb-5 padding-10 col-md-4">
                                                        <div className="card" >
                                                            <div style={{ objectFit: 'cover', width: 'auto', height: '100px', overflow: 'hidden' }}>
                                                                <img src={food} style={{ width: '100%' }}></img>
                                                            </div>
                                                        <div key={item} className="card-body col-xl-12 col-lg-12 col-md-12">
                                                            <h4 className="card-title">{item}</h4>
                                                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                

                                                {/*<pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
        </pre>*/}
                                            </Segment>
                                        </Grid.Column>
                                    </Grid>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                <footer>
                    <div className="container">
                        <div className="row">

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="copyright">Copyright &copy; 2020 Meal Prepper</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );

    }
}

export default App;
