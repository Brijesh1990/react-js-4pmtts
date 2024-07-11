import React,{Component} from "react";
class Header extends Component
{
    render()
    {
        return(
             <>
             <div className="header-app">
                <div className="call-us"><span className="fa fa-phone"></span>Call Us :(+9173357217)</div>
                <div className="search-box">
                    <input type="text" placeholder="Search anything here.............." />
                </div>
                <div className="account">
                    <button type="button">Create Account <span className="fa fa-users"></span></button>
                </div>
             </div>

             </>

        )

    }
    
}
export default Header    