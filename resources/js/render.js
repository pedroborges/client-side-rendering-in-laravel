import { h, patch } from 'superfine'

export const root = document.getElementById('app')

// Register all the Vue components
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Dashboard from './Components/Dashboard'
import Events from './Components/Events'

const components = { Dashboard, Events }

const view = ({ component, props }) =>
    h(components[component], props)

const app = (view, container, node) => state => {
    node = patch(node, view(state), container)
}

export const render = app(view, root)
