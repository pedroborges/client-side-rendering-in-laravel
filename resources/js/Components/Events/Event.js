import { h } from 'preact'
import axios from 'axios'

import Layout from '../Layout'

export default ({ event }) => {
    const destroy = () => {
        if (confirm('Are you sure you want to delete this event?')) {
            axios.delete(`/events/${event.id}`).then(() => {
                window.peedo.visit('/events')
            })
        }
    }

    return <Layout title={event.title}>
        <h1>{event.title}</h1>
        <div class="mt-4">{event.start_date}</div>
        <div class="mt-4">{event.description}</div>
        <div class="mt-4">
            <a class="btn btn-primary" href={`/events/${event.id}/edit`}>Edit</a>
            <button type="button" class="btn btn-outline-danger" onClick={destroy}>Delete</button>
        </div>
    </Layout>
}
