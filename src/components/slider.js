import React from 'react';
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import "./slider.css";

export default class Sliderr extends React.Component {

    constructor(props){
        super(props);
        this.state={
            slideIndex : 0,
            images : [i1,i2]
        }
    }
    
    plusSlides = (n)=>{
        if(n===-1){
            this.setState((ps,pp)=>{
                return{
                    slideIndex : ps.slideIndex===0 ? ps.images.length-1 : ps.slideIndex-1
                }
            })
        }
        else{
            this.setState((ps,pp)=>{
                return{
                    slideIndex : ps.slideIndex=== ps.images.length-1 ? 0 : ps.slideIndex+1
                }
            })
        }
    }

    render(){
        return (
            <div className="slideshow-container">
                {
                    this.state.images.map((d,i)=>{
                        return(
                            <div key={i} className={i===this.state.slideIndex? "mySlidesV":"mySlidesI"}>
                                <img src={d} alt="img1" style={{width:"100%"}}/>
                            </div>
                        )
                    })
                }
                <button className="prev"  onClick={()=>{this.plusSlides(-1)}}>&#10094;</button>
                <button className="next"  onClick={()=>{this.plusSlides(+1)}}>&#10095;</button>            
            </div>
        )
    }
}
