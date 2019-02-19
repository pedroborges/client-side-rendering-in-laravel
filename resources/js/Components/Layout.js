import { h, Component } from 'preact'

export default class extends Component {
    updateTitle(title) {
        document.title = title ? `${title} | Example app` : `Example app`
    }

    componentDidMount() {
        this.updateTitle(this.props.title)
    }

    componentDidUpdate({ title }) {
        this.updateTitle(title)
    }

    render({ children }) {
        return <div class="container">
            <nav class="my-5">
                <a class="mr-3" href="/">Dashboard</a>
                <a href="/events">Events</a>
            </nav>
            <main>
                {children}
            </main>
        </div>
    }
}
