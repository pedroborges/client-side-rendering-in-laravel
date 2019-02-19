/**
 * // Events object is optional
 * window.peedo = Peedo({
 *   before: pathname => console.log('before fetching and rendering starts'),
 *   render: html => console.log('replace default render')
 *   load: () => console.log('initial page load and after every visit')
 * })
 *
 * // Methods available
 * peedo.defaultRender(html)
 * peedo.resetScroll()
 * peedo.replaceBody(html)
 * peedo.replaceTitle(html)
 *
 **/

export default function (customEvents) {
    const cache = {}
    const events = customEvents || {}
    let pathname = location.pathname

    const peedo = {
        defaultRender: html => {
            this.resetScroll()
            this.replaceBody(html)
            this.replaceTitle(html)
        },
        replaceBody: html => {
            document.body.setAttribute('class', html.body.getAttribute('class'))
            document.body.innerHTML = html.body.innerHTML
        },
        replaceTitle: html => document.title = html.title,
        resetScroll: () => window.scrollTo(0, 0),
        visit: path => { visit(path); navigate() }
    }

    const get = (url, next) => {
        const request = new XMLHttpRequest()

        request.open('GET', url, true)
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

        request.onload = () => {
            if (request.status < 500) next(request.responseText)

            // TODO: Test redirects
            // TODO: Handle failed request
        }

        request.send()
    }

    const isFunction = obj => typeof obj == 'function' || false

    const load = () => isFunction(events.load) && events.load()

    const navigate = () => {
        pathname = location.pathname

        if (isFunction(events.visit)) events.visit(pathname)

        // if (cache[pathname]) return render()

        get(pathname, content => render(content))
    }

    const visit = path => window.history.pushState(null, null, path)

    const onLinkClick = e => {
        if (e.metaKey || e.shiftKey || e.ctrlKey || e.altKey || e.button) return

        const link = e.target.closest('a')

        if (link && link.host === location.host) {
            e.preventDefault()
            visit(link.pathname)
            navigate()
        }
    }

    const parseHtml = html => (new window.DOMParser).parseFromString(html, 'text/html')

    const render = content => {
        // let html = cache[pathname] = cache[pathname] || parseHtml(content)
        let html = parseHtml(content)

        if (isFunction(events.render)) {
            events.render(html)
        } else {
            peedo.defaultRender(html)
        }

        load()
    }

    document.addEventListener('click', onLinkClick)
    window.addEventListener('popstate', navigate)

    load()

    return peedo
}
