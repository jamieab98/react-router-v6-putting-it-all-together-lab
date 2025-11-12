import { useEffect, useState, createContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export const DirectorContext = createContext(null);

const DirectorContainer = () => {
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/directors")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch directors") }
            return r.json()
        })
        .then((data) => {
            setDirectors(data);
        })
        .catch(console.log)
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                <Link to = "new">New Director</Link> |{" "}
                <Link to = ":id">Director</Link>
                {/* all director components should render here depending on route */}
                <Outlet context={{directors}}/>
            </main>
        </>
    );
}

export default DirectorContainer;
