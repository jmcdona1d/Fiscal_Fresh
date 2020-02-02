import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper" style={{backgroundColor:'#fff'}}>
                <div className="container">
                    <Link to="/" style={{color:'#61B747'}}>Meal Prepper</Link>
                    
                    <ul className="right">
                        <li><Link to="/" style={{color:'#61B747'}}>Shop</Link></li>
                        
                        <li><Link to="/cart" style={{color:'#61B747'}}><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;