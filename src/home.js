import React, { Component } from 'react';
import { connect } from "react-redux";
import Landing from "./components/landing";
import "./home.css";

class Home extends Component{
    
    componentDidMount(){

    }

    render() {
        return (
            <div className="home-wraper">
                <Landing />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.user
});
  
  
export default connect(mapStateToProps,{

})(Home);
