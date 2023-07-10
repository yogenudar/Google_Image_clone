import { useState } from 'react';
import './SearchBar.css';

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');
    
    const handleFormSubmit = (event) =>{
        event.preventDefault(); 
        onSubmit(
            //DO NTO EVER EVER WRITE IT LIKE THIS THIS DOES NOT WORK IN REACT WORLD
            // document.querySelector('input').value
            term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (<div className='search-bar'>
        <form onSubmit = {handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>);
}

export default SearchBar;