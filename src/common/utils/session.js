export const setToken = (token) => {
    sessionStorage.setItem('token', token)
}


export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const setMenus=(menus)=>{
    sessionStorage.setItem("menus",JSON.stringify(menus))
}

export const getMenus=()=>{
   return JSON.parse(sessionStorage.getItem("menus"))
}