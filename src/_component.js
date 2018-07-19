import {isEmpty} from 'lodash'

const _import = ( path) => {
    if (isEmpty(path)) {
        return null;
    }
    return require(`${path}`)
}

export default _import