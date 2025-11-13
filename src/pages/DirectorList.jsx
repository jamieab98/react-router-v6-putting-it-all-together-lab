import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { createContext } from "react";

export const DirectorContext = createContext(null);

const DirectorList = () => {
    const directors = useOutletContext();

    const displayDirectors = directors.map(d => (
        <li key={`${d.id}`}><Link to = {`/directors/${d.id}`}>{d.name}</Link></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
