import render from './render'
import Peedo from './peedo'

let data = document.body.dataset

// Boot the Vue component
window.peedo = Peedo({
    render(html) {
        peedo.resetScroll()

        const newData = html.body.dataset
        data.component = newData.component
        data.props = newData.props
    },
    load() {
        render({
            component: data.component,
            props: JSON.parse(data.props),
        })
    }
})
