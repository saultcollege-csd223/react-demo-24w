import Heading from "./Heading";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Home() {    

    let name = 'world';

    const [ query, setQuery ] = useState('')

    const [ searchResults, setSearchResults ] = useState([]);

    function handleSearchInput(event) {
        setQuery(event.target.value);
    }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`, { signal })
            .then(response => response.json())
            .then(data => {
                setSearchResults(data.meals || []);
            })
            .catch(error => {
                if ( error.name === 'AbortError' ) return;
                console.error(error);
            });

        return () => {abortController.abort();}
    }, [query]);

    return (
        <div>
          <Heading>Hello, { name.startsWith("W") ? <strong>{name}</strong> : name }!</Heading>
          <Button onClick={() => console.log("b1 clicked")} myAttr="askdf">This is <strong>the first</strong> button</Button>
          <Button onClick={() => console.log("b2 clicked")}>Button2</Button>

          <input type="text" onInput={handleSearchInput} />
          <ul>
            { searchResults.map(result => <li key={result.idMeal}>{result.strMeal}</li>) }
          </ul>
  
          {/* <Nav page="other" onClick={setPage} /> */}
          <Link to="/other">Other</Link>
        </div>
      )
}