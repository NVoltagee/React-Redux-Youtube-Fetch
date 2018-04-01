//Go get react from the installed modules
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_Key = 'AIzaSyB9Qlk0zUcvp6UTv_32wttbHanl_eN8YXA'; 
// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
    <div> 
        <SearchBar />
    </div>
    );
}
// Take this component's generated html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));