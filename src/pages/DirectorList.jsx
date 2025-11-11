import { Link } from "react-router-dom";

const DirectorList = () => {
    // Replace me
    const directors = []

    const displayDirectors = directors.map(d => (
        <li><Link to = {d.id}>{d.name}</Link></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
