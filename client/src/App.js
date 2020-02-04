import React, { Component } from 'react'
//import ReactTypingEffect from 'react-typing-effect';
import logo from './logo.svg';

import _ from 'lodash'
import faker from 'faker'
import { Grid, Header, Segment, Sidebar, Image } from 'semantic-ui-react'
import './assets/css/qweb.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import Slider from "react-slick";
//import "./slick-carousel/slick/slick.css"; 
//import "./slick-carousel/slick/slick-theme.css";
import food from "./assets/images/food.jpg";
import SliderRecipe from "./SliderRecipe.js"
import RecipeSearch from "./Search.js"
import ProteinRecipe from "./SliderRecipe.js"
import NavBar from "./NavBar.js"
import axios from 'axios';
import recipes from './test_recipes.js' 


const initialState = { isLoading: false, cart:[],results: [], value: '' }


const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
      as={Segment}
      animation={animation}
      direction={direction}
      visible={visible}
    >
      <Grid textAlign='center'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h3'>New Content Awaits</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid columns={3} divided>
          <Grid.Column>
            <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid>
      </Grid>
    </Sidebar>
  )

const source = [{
    "id": "1",
    "title": "Butter Chicken",
    "description": "Lorem Ipsum Dos Color Dit Simit",
    "image": { food },
    "calories": "500"
}];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}



class App extends React.Component {

    constructor(props) {
        super(props);
        this.childLook = React.createRef();
        let longRecipes = []
        longRecipes = longRecipes.concat(recipes.results1.concat(recipes.results2.concat(recipes.results3)))
        console.log(longRecipes)
        let res = recipes.result1
        this.state = {
            results:{recipes},
            recipes:{res},
            search:{longRecipes},
            cart:[],
            cartLength:0,
            res: [
                {
                    "id": 592479,
                    "title": "ale and Quinoa Salad with Black Beans",
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
            baseUri: "https://spoonacular.com/recipeImages/",
            offset: 0,
            number: 10,
            totalResults: 270817,
            processingTimeMs: 699,
            expires: 1580791459643,
            isStale: false,
            list: [
                {
                    title: "Butter Chicken",
                    desc: "Lorem Ipsum",
                    calories: "500",
                    servings: "4",
                    timeCook: "30"
                },
                {
                    title: "Butter Chicken",
                    desc: "Lorem Ipsum",
                    calories: "500",
                    servings: "4",
                    timeCook: "30"
                },
                {
                    title: "Veggie Pizza",
                    desc: "Lorem Ipsum",
                    calories: "500",
                    servings: "4",
                    timeCook: "30"
                },
                {
                    title: "Butter Chicken",
                    desc: "Lorem Ipsum",
                    calories: "500",
                    servings: "4",
                    timeCook: "30"
                },
                {
                    title: "Thai Red Curry",
                    desc: "Lorem Ipsum",
                    calories: "500",
                    servings: "4",
                    timeCook: "30"
                },
                {
                    title: "Greek Chicken",
                    desc: "Lorem Ipsum",
                    calories: "500",
                    servings: "4",
                    timeCook: "30"
                }
            ],

            filtered: [],
            category1: [],
            category2: [],
            category3: [],
            category4: [],
            history: [],
            searchResult: [],
            query: ""

        }


        this.handleChange = this.handleChange.bind(this);
        this.handlePageLoad = this.handlePageLoad.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.addToCart = this.addToCart.bind(this);

        
        this.handlePageLoad();
    }

    

     addToCart = (recipe) => {
         
        this.state.cart = this.state.cart.concat(recipe);
        this.state.cartLength = this.state.cartLength + 1;
        
        console.log(this.state.cart);
        console.log(this.state.cartLength);
    }

    



    componentDidMount() {
        this.setState({
            filtered: this.state.category1
        });
    }

    

    handleAddToCart(item) {
        // user must have already signed in
        // would be good to prompt if they haven't

        // add the recipe to cart
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(item);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        var requestOptions2 = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("/add-to-cart", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                fetch("/recipe_history", requestOptions2)
                    .then(response => response.text())
                    .then(result => {
                        var json = JSON.parse(result);

                        this.setState({
                            history: json
                        })
                        console.log(this.state.history)
                    })
            })
            .catch(error => { console.log('error', error) }); //if there are errors, its probably because the user hasn't signed in


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
            currentList = this.state.category1;



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
                filtered: _.filter(this.state.category2, isMatch),
            })
        }, 300)


        console.log(this.state.query)
    }

    handleGetRecipe(item) {
        // HEY BRIGGS!!! This method gets the recipe instructions when someone clicks on the recipe image if you want to display it somehow

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "id": item['id'] });


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("/search-recipes", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);

                var json = JSON.parse(result);

                this.setState({
                    searchResult: json
                })
                console.log(this.state.category3)
            })
            .catch(error => console.log('error', error));
    }

    handleSearchSubmit() {
        //Define Query - call this method on submit of search function.
        //Probably have to refresh page to reload results unless we can avoid that somehow

        var raw = JSON.stringify({ "query": this.state.query });
        console.log(this.state.query)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/get-recipe-details", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);

                var json = JSON.parse(result);

                this.setState({
                    filtered: json
                })
                console.log(this.state.filtered)
            })
            .catch(error => console.log('error', error));

    }


    handleRewriteHistory(childHistory) {
        const fieldEditor = this.childLook.current;

        this.setState({ history: childHistory })
    }

    handleSearchChange(event) {
        this.setState({ value: event.target.value });
    }


    handlePageLoad(event) {

        console.log("hello");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "query": "", "cuisine": "", "intolerences": "", "diet": "Vegetarian" });
        var raw2 = JSON.stringify({ "query": "", "cuisine": "", "intolerences": "", "diet": "ketogenic" });
        var raw3 = JSON.stringify({ "query": "", "cuisine": "", "intolerences": "", "diet": "Vegan", "number": 20 });
        var raw4 = JSON.stringify({ "maxCalories": "600", "minProtein": "10" });



        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        var requestOptions2 = {
            method: 'POST',
            headers: myHeaders,
            body: raw2,
            redirect: 'follow'
        };

        var requestOptions3 = {
            method: 'POST',
            headers: myHeaders,
            body: raw3,
            redirect: 'follow'
        };

        var requestOptions4 = {
            method: 'POST',
            headers: myHeaders,
            body: raw4,
            redirect: 'follow'
        };

        var requestOptions5 = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("/search-recipes", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);

                var json = JSON.parse(result);
                var newjson = []
                for (var i = 0; i < json.length; i++) {
                    var entry = json[i]["recipe"];

                    // entry["id"] = entry["url"];
                    // entry["title"] = entry["label"];
                    // entry["timeCook"] = entry["totalTime"];
                    // entry["servings"] = entry["yield"];
                    // const cals = Math.round(entry["calories"]);

                    // entry["calories"] = cals;
                    // entry["image"] = entry["image"];
                    // const imgArr = []
                    // imgArr.push( entry["image"]);
                    // entry["imageUrls"] = imgArr;

                    newjson.push(entry);
                }

                this.setState({
                    category1: json
                })
                console.log(this.state.category1)
            })
            .catch(error => console.log('error', error));

        fetch("/search-recipes", requestOptions2)
            .then(response => response.text())
            .then(result => {
                console.log(result);

                var json = JSON.parse(result);

                this.setState({
                    category2: json
                })
                console.log(this.state.category2)
            })
            .catch(error => console.log('error', error));

        fetch("/search-recipes", requestOptions3)
            .then(response => response.text())
            .then(result => {
                console.log(result);

                var json = JSON.parse(result);

                this.setState({
                    category3: json
                })
                console.log(this.state.category3)
            })
            .catch(error => console.log('error', error));

        fetch("/search-recipes-nutrition", requestOptions4)
            .then(response => response.text())
            .then(result => {
                console.log(result);

                var json = JSON.parse(result);

                this.setState({
                    category4: json
                })
                console.log(this.state.category4)
            })
            .catch(error => console.log('error', error));

        fetch("/recipe_history", requestOptions5)
            .then(response => response.text())
            .then(result => {
                // var json = JSON.parse(result);    
                console.log(result)
                //this.setState({
                // history: json
                //})
                console.log(this.state.history)
            })
        this.setState({
            filtered: this.state.category1
        });

    }


    render() {
        const { isLoading, value, results, filtered } = this.state

        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,

            autoplaySpeed: 100,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (


            


            <div className="">
                <NavBar items={this.state.cartLength}/>



                <div className="welcome-area" id="welcome">

                    <div className="header-text">
                        <div className="container">
                            <div className="row home-features" >
                                <div className="offset-xl-1 col-xl-12 offset-lg-2 col-lg-12 col-md-12 col-sm-12">


                                    <h1 style={{ fontWeight: 600, textAlign: 'left' }}>Recipes       <i className="fa fa-long-arrow-right"></i>   Groceries</h1>
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

                <section className="section home-feature ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div>
                                <h2 style={{ marginTop: '175px', marginLeft: '50px', marginBottom: '90px', fontWeight: '600' }}> Explore Different Healthy Diets!</h2>
                                    {/*Slider*/}                        <h3 style={{ marginTop: '10px', marginLeft: '50px', marginBottom: '10px', fontWeight: '600' }}> Vegetarian</h3>
                                    <div className="margin-bottom-60">
                                        <SliderRecipe callback={this.addToCart} list={recipes.results1}/>
                                    </div>
                                    <h3 style={{ marginTop: '10px', marginLeft: '50px', marginBottom: '10px', fontWeight: '600' }}> Keto</h3>
                                    <div className="margin-bottom-60">
                                        <SliderRecipe callback={this.addToCart} list={recipes.results2}/>
                                    </div>
                                    <h3 style={{ marginTop: '10px', marginLeft: '50px', marginBottom: '10px', fontWeight: '600' }}> Plant-Based</h3>
                                    <div className="margin-bottom-60">
                                        <SliderRecipe callback={this.addToCart} list={recipes.results3}/>
                                    </div>
                                    {/*<h3 style={{ marginTop: '10px', marginLeft: '50px', marginBottom: '10px', fontWeight: '600' }}> Body Builder</h3>
                                    <div className="margin-bottom-60">
                                        <SliderRecipe list={recipes.results3}/>
                                        
                                </div>*/}
                                    <RecipeSearch callback={this.addToCart} recipes={recipes.results3.concat(recipes.results2.concat(recipes.results1))}/>







                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Ingredients List */}
                <section>
                    <h2 className="dairy"></h2>
                    <li className="item"></li>
                    <h2 className="dairy"></h2>
                    <li className="item"></li>
                    <h2 className="dairy"></h2>
                    <li className="item"></li>
                    <h2 className="dairy"></h2>
                    <li className="item"></li>
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
