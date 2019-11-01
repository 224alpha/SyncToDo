const initialState = {
    loading : false   
}

export default (state = initialState, action )=>{
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading : action.payload
            }
        case 'INITIAL_LOAD':
            return{
                ...state,
                isLoggedIn : action.payload1,
                token : action.payload2
            }
        default:
            return state;
    }
}