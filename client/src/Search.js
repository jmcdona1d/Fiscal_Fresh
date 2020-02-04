import React, { Component } from 'react'
import { Button, Search, Grid, Header, Segment, Sidebar, Image } from 'semantic-ui-react'
import _ from 'lodash'

const initialState = { isLoading: false, cart: [], results: [], value: '' }

export class RecipeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { initialState, baseUri: "https://spoonacular.com/recipeImages/", filtered: this.props.recipes };

    }

    handleResultSelect = (e, { result }) => {
        
        this.setState({ value: result.title })
        this.handleSearchChange(e,result.title);
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        
            
            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                filtered: _.filter(this.props.recipes, isMatch),
            })
            
        
    }



    render() {
        const { isLoading, value, results } = this.state

        return (
            <div>
                {/*Search*/}

                <Grid style={{ paddingBottom: '300px' }}>
                    <Grid.Column width={6}>
                        <Search className="col-md-4"
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                leading: true,
                            })}
                            results={this.state.filtered}
                            value={value}




                            {...this.props}
                        />


                    </Grid.Column>

                    <Grid.Column width={10}>
                        <Segment>
                            <h2>Recipes</h2>
                            <div className="row">

                                {this.state.filtered.map(item => (
                                    <div className="container mb-5 padding-10 col-md-6">
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
        )
    }
}

export default RecipeSearch
