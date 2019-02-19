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
    const root = document.getElementById('app')

    const view = ({ component, props }) =>
        h(components[component], props)

    const app = (view, container, node) => state => {
        node = patch(node, view(state), container)
    }

    const render = app(view, root)

    render({
        component: root.dataset.component,
        props: JSON.parse(root.dataset.props),
    })

    // if (window.vue) {
    //     window.vue.$destroy(true)
    // }

    // window.vue = new Vue({
    //     render: h => h(
    //         Vue.component(root.dataset.component), {
    //             props: JSON.parse(root.dataset.props)
    //         }
    //     )
    // }).$mount(root)
})
