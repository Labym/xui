export const setToken = (token) => {
    sessionStorage.setItem('token', token)
}


export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const setMenus=(menus)=>{
    sessionStorage.setItem("menus",menus)
}

export const getMenus=()=>{
   return sessionStorage.getItem("menus")
}