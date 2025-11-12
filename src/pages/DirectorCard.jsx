import { Outlet, Link } from "react-router-dom"
import { useContext } from "react"
import { DirectorContext } from "./DirectorList"

function DirectorCard() {
    const directors = useContext(DirectorContext)
    const director = ""

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
                <Link to = {`movies/:${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        {/* Movie compoenents should render here depending on route */}
        <Outlet />
        </div>
    )
}

export default DirectorCard
