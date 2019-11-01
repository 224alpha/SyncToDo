import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from "react-redux";
import { Loading, Login } from "../actions/common";

function GoogleLoginFunc(props) {

    let successGoogle = (Userobj)=>{
        console.log(Userobj.Zi.access_token);
        props.Loading(false);
        props.Login(Userobj.Zi.access_token);
    }

    let failureGoogle = (err)=>{
        console.log(err);
        props.Loading(false);
    }

    return (
        <div className="google-login-holder">
            <GoogleLogin 
                clientId="802431312814-krolap8bat35ns7olgnsurog5bk0ms1s.apps.googleusercontent.com"
                onSuccess={successGoogle}
                onFailure={failureGoogle}
                onRequest={()=>{props.Loading(true)}}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    user : state.user,
    common : state.common
});
  
  
export default connect(mapStateToProps,{
    Loading,
    Login
})(GoogleLoginFunc);
