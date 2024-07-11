import React,{Component} from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Content from "./Content";
import Footer from "./Footer";
class Layout extends Component
{
    render()
    {
        return(
             <>
              {/* header */}
              <Header /> 
              {/* navbar  */}
              <Navbar />
              {/* slider */}
              <Slider />
              {/* content */}
              <Content />
              {/* footer */}
              <Footer />
             </>
        )
        
    }
}

export default Layout
