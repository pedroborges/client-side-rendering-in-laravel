import { h, patch } from 'superfine'

// Register all the Vue components
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Dashboard from './Components/Dashboard'
import Events from './Components/Events'

const components = { Dashboard, Events }

// Start Turbolinks
require('turbolinks').start()

// Boot the Vue component
document.addEventListener('turbolinks:load', (event) => {
    const body = document.body
    const root = document.getElementById('app')

    const view = ({ component, props }) =>
        h(components[component], props)

    patch(null, view({
        component: body.dataset.component,
        props: JSON.parse(body.dataset.props),
    }), root)
})
