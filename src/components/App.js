import React from 'react';
import Arcticle from './Arcticle';
import listArticles from '../data';

function App() {
    return (
        <div>
            <h1>Hello Peter</h1>
            <Arcticle article={listArticles[0]}/>
            
        </div> 
    );
}

export default App;