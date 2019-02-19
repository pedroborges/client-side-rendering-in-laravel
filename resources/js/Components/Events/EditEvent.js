import { h } from 'preact'
import axios from 'axios'

import Layout from '../Layout'

export default ({ event }) => {
    const data = {}

    const handleChange = e => {
        data[e.target.name] = e.target.value
    }

    const submit = e => {
        e.preventDefault()

        axios.put(`/events/${event.id}`, data).then(() => {
            window.peedo.visit(`/events/${event.id}`)
        })
    }

    return <Layout title="Edit Event">
        <h1>Edit Event</h1>
        <form class="mt-4" style="max-width: 500px;" onSubmit={submit}>
            <div class="form-group">
                <label>Title:</label>
                <input name="title" class="form-control" type="text" value={event.title} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label>Start date:</label>
                <input name="start_date" class="form-control" type="date" value={event.start_date} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label>Description:</label>
                <textarea name="description" class="form-control" rows="5" onChange={handleChange}>{event.description}</textarea>
            </div>
            <button class="btn btn-primary" type="submit">Save Changes</button>
        </form>
    </Layout>
}
