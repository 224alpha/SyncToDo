import React, { Component } from 'react';
import { connect } from "react-redux";
import { loading } from "../actions/common";
import Sliderr from "./slider";
import logo from "./main.jpg";
import "./landing.css";


class Landing extends Component {
    render() {
        return (
            <div>
                <div className="loading-page-inner">
                    <div className="logo-holder">
                        <img src={logo} alt="Logo" className="logo-main"/>
                    </div>
                    <Sliderr />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user : state.user,
    common : state.common
});
  
  
export default connect(mapStateToProps,{
    loading
})(Landing);