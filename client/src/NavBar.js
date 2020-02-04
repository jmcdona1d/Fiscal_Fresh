import React, { Component } from 'react'
import Sample from "./Login"

export class NavBar extends Component {


    constructor(props) {
        super(props);
        this.childLook = React.createRef();
        this.handleRewriteHistory = this.handleRewriteHistory.bind(this);
    }

    handleRewriteHistory(childHistory) {
        const fieldEditor = this.childLook.current;

        this.setState({ history: childHistory })
    }

    render() {
        return (
            <div>
                <header className="header-area header-sticky">
                    

                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                <div className="container">
                                    <a href="#" className="logo" style={{ color: 'black' }}>
                                        <h2 style={{fontWeight:'500', marginTop:'2px', letterSpacing:'0'}}>Fiscal Fresh</h2>
                        </a>
                                    <ul className="nav">
                                        <li><Sample  ref={this.childLook} onChange={this.handleRewriteHistory.bind(this)}></Sample></li>
                                        
                                        <li><a><hr style={{width:'1px',marginTop:'2px', height:'100%', backgroundColor:'lightGrey'}}></hr></a></li>
                                        <li><a href={'http://instacart.ca'}><i className="fa fa-shopping-cart" style={{ fontSize: '30px', marginTop:'2px', color: 'rgb(91, 206, 56)' }}></i></a></li>
                                    </ul>
                                    <a className='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                
                            </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar



