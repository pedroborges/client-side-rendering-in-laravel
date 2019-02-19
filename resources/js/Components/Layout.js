import { h } from 'superfine'

export default props => {
    const updateTitle = () =>
        document.title = props.title ? `${props.title} | Example app` : `Example app`

    return <div class="container" oncreate={updateTitle} onupdate={updateTitle}>
        <nav class="my-5">
            <a class="mr-3" href="/">Dashboard</a>
            <a href="/events">Events</a>
        </nav>
        <main>
            {props.children}
        </main>
    </div>
}
