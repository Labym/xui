import {fetch,post,put} from "../common/utils/http";

const login =(data)=>{
    return post('/login',data)
}