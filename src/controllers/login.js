let setToken = (t)=>{
    localStorage.setItem('Token', t);
}



let getToken = ()=>{
    return localStorage.getItem('Token')
}

let removeToken = ()=>{
    localStorage.removeItem('Token');
}

module.exports = { setToken, getToken, removeToken }