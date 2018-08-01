
import {fetch,post,put} from "../common/utils/http";

const list= (params)=>{
    return fetch('/resources',params)
}

const tree= ()=>{
    return fetch('/resources/tree')
}

const create= (resource)=>{
    return post('/resources',resource)
}

const editor= (resource)=>{
    return put('/resources',resource)
}


const ResourceApi={
    list,create,put,tree
}
export default  ResourceApi