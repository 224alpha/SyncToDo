import React, { Component } from 'react';
import { connect } from "react-redux";
import { Loading } from "../actions/common";
import Sliderr from "./slider";
import logo from "./main.jpg";
import "./landing.css";
import GoogleLoginFunc from "./googleLogin";


class Landing extends Component {
    render() {
        return (
            <div>
                <div className="loading-page-inner">
                    <div className="logo-holder">
                        <img src={logo} alt="Logo" className="logo-main"/>
                        <h3>SyncToDo</h3>
                    </div>
                    <Sliderr />
                    <GoogleLoginFunc />
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
    Loading
})(Landing);