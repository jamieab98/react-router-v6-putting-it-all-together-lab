import { Link } from "react-router-dom";
import { useContext } from "react";
import { DirectorContext } from "./DirectorContainer";

const DirectorList = () => {
    // Replace me
    const {directors} = useContext(DirectorContext);

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
