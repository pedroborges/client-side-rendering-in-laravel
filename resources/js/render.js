import { h, render } from 'preact'

const root = document.getElementById('app')

// Register all the Vue components
const components = {}
const files = require.context('./Components', true, /\.js$/i)
files.keys().map(key => components[key.split('/').pop().split('.')[0]] = files(key).default)

const view = ({ component, props }) => h(components[component], props)

const app = (view, container) => state => {
    render(view(state), document.body, container)
}

export default app(view, root)
