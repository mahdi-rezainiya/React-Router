import { useLocation } from 'react-router-dom'
export default function Contact() {
    const queryString = useLocation().search ;
    const queryParams = new URLSearchParams(queryString) ;
    const name = queryParams.get('name') ;
    return (
    <div>
        {name && <h2>Hello {name} join us . . . </h2>}
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima repellat rem, vitae id delectus ab iusto eos est quod tempore placeat praesentium dolorem nisi eius mollitia. Nemo itaque animi delectus.</p>
    </div>
    )
}