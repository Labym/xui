
import {fetch,post,put} from "../common/utils/http";

const list= ()=>{
    return fetch('/resources')
}

const create= (resource)=>{
    return post('/resources',resource)
}

const editor= (resource)=>{
    return put('/resources',resource)
}


const ResourceApi={
    list,create,put
}
export default  ResourceApi