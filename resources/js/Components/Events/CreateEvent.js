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

        axios.post(`/events`, data).then(() => {
            window.peedo.visit(`/events`)
        })
    }

    return <Layout title="Create Event">
        <h1>Create Event</h1>
        <form class="mt-4" style="max-width: 500px;" onSubmit={submit}>
            <div class="form-group">
                <label>Title:</label>
                <input name="title" class="form-control" type="text" onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label>Start date:</label>
                <input name="start_date" class="form-control" type="date" onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label>Description:</label>
                <textarea name="description" class="form-control" rows="5" onChange={handleChange}></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Create</button>
        </form>
    </Layout>
}
