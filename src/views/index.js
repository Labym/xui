import Resource from './resource/index'

const Views = (Vue)=> {
    Vue.component(Resource.name, Resource);
};
export default Views;