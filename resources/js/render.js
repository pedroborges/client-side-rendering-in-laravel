import { h, patch } from 'superfine'

const root = document.getElementById('app')

// Register all the Vue components
const components = {}
const files = require.context('./Components', true, /\.js$/i)
files.keys().map(key => components[key.split('/').pop().split('.')[0]] = files(key).default)

const view = ({ component, props }) =>
    h(components[component], props)

const app = (view, container, node) => state => {
    node = patch(node, view(state), container)
}

export default app(view, root)
