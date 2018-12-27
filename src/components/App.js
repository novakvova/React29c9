import React from 'react';
import ArticleList from './ArticleList';
import svetiks from '../data';

function App() {
    return (
        <div>
            <h1>Hello Peter</h1>
            <ArticleList articles={svetiks}/>
            
        </div> 
    );
}

export default App;