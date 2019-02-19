import { h } from 'superfine'

import Layout from '../Layout'

export default props =>
    <Layout title="Events">
        <h1>Events</h1>
        <ul class="mt-5">
            {props.events.map(event =>
                <li><a href={`/events/${event.id}`}>{event.title}</a> <span>({event.start_date})</span></li>
            )}
        </ul>
        <div class="mt-5">
            <a class="btn btn-primary" href="/events/create">Create event</a>
        </div>
    </Layout>
