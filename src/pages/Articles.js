import {useNavigate, useParams } from 'react-router-dom' ;
import {useFetch} from '../hooks/useFetch' ;
import { useEffect } from 'react' ; 

export default function Articles() {
    const {id} = useParams();
    const url = 'http://localhost:3000/articles/' + id ;
    const {data:article , isLoading , error} = useFetch(url) ;
    const navigate = useNavigate() ;
    useEffect(() => {
        if(error){
            setTimeout(() => {navigate('/')} , 2000)
        }
    })
    return (
    <div>
        <h1>Article - {id}</h1> 
        {isLoading && <div>Loading . . .</div>}
        {error && <div>{error}</div>}
        {article && <div>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <p>{article.body}</p>
        </div>
        }
    </div>
    )
}