import { setToken, getToken } from "../controllers/login";

export var Loading = (status) =>{
    return {
        type : "LOADING",
        payload : status
    }
}


export let initialLoad = ()=>{
    let t = getToken();
    console.log(t);
    if(t!==null && t!==undefined && t!=="" && t!==" "){
        return{
            type : "INITIAL_LOAD",
            payload1 : true,
            payload2 : t
    
        }
    } 
    else{
        return{
            type : "INITIAL_LOAD",
            payload1 : false,
            payload2 : null
    
        }
    }
    
}


export let Login = (t)=>{
    setToken(t);
    return{
        type : "INITIAL_LOAD",
        payload1 : true,
        payload2 : t
    }
}

export let Logout = ()=>{
    return{
        type : "INITIAL_LOAD",
        payload1 : false,
        payload2 : null
    }
}






