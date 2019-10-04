let loading = (status) =>{
    return {
        type : "LOADING",
        payload : status
    }
}




module.exports = { loading }