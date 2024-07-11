import React,{Component} from "react";
class Navbar extends Component
{
    render()
    {
        return(
             <>
                <nav className="nav navbar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="" className="active"><i className="fa fa-shopping-cart"></i> Cart(0)</a></li>
                </ul>
                </nav>
             </>

        )

    }
    
}
export default Navbar    