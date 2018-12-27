import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
    console.log(articles);
    const listHmlArticles = articles
                                .map(a=>
                                    <li key={a.id}><Article article={a}/></li>)
    return (
        <ul>
            {listHmlArticles}
        </ul>
    );
}