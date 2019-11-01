import React from 'react';
import { connect } from 'react-redux';
import { changeName } from "../actions/user";
import { loading } from "../actions/common";
import Loader from "./loader";

function User(props) {
    return (
        <div>
            {props.user.name}
            <button onClick={()=>{props.loading(true)}}>Click</button>
            <Loader />
        </div>
    )
}

const mapStateToProps = state => ({
    user : state.user
});
  
  
export default connect(mapStateToProps,{
    changeName,
    loading
})(User);
