import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { createContext } from "react";

export const DirectorContext = createContext(null);

const DirectorList = () => {
    const {directors} = useOutletContext();

    const displayDirectors = directors.map(d => (
        <li key={d.id}><Link to = {d.id}>{d.name}</Link></li>
    ))

    return (
        <DirectorContext.Provider value={directors}>
        <ul>
            {displayDirectors}
        </ul>
        </DirectorContext.Provider>
    );
}

export default DirectorList;
