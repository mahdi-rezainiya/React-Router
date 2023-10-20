import { Routes, Route , Link } from 'react-router-dom' ;
import OpenCode from './OpenCode' ;

export default function About() {
    return (
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto excepturi provident officia autem possimus minima, accusantium vero velit porro vel laborum esse aliquid neque iusto, minus quasi ratione! Non?</p>
        <Link to='opencode'>opencode</Link>
        <Routes>
            <Route path='opencode' element={<OpenCode/>} />
        </Routes>
    </div>
    )
}