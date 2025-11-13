import { Outlet, Link } from "react-router-dom"
import { useParams, useOutletContext } from "react-router-dom"

function DirectorCard() {
    const directors = useOutletContext()
    const {id} = useParams();
    const director = directors.find(d => d.id.toString() === id);

    

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to = {`movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        
        {/* Movie compoenents should render here depending on route */}
        <Link to = 'movies/new'>New Movie</Link>
        <Outlet context={director}/>
        </div>
        
        
    )
}

export default DirectorCard
