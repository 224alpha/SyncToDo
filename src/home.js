import React, { Component } from 'react';
import { connect } from "react-redux";
import Landing from "./components/landing";
import "./home.css";
import { initialLoad } from "./actions/common";

class Home extends Component{

    componentWillMount(){
        this.props.initialLoad();
    }

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
    initialLoad
})(Home);
