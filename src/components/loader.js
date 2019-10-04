import React from 'react';
import "./loader.css";
import { connect } from "react-redux";
import { loading } from "../actions/common";

function Loader(props) {
    let c = "LoaderWrapper";
    //console.log(props.common.loading);
    if(props.common.loading){
        c = c + " visible";
    }
    else{
        c = c + " invisible";
    }
    return (
        <div>
            <div className={c}>
                <div className="loader-inner">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    common : state.common
});
  
  
export default connect(mapStateToProps,{
    loading
})(Loader);

