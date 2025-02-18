import React, { useState } from 'react';


const ArticleList = () => {


    const [articles, setArticles] = useState([

        { id: 1, title: 'Articolo 1' },
        { id: 2, title: 'Articolo 2' },
        { id: 3, title: 'Articolo 3' },
        { id: 4, title: 'Articolo 4' },
        { id: 5, title: 'Articolo 5' },
        { id: 6, title: 'Articolo 6' },

    ]);

    // Stato per il titolo del nuovo articolo
    const [newTitle, setNewTitle] = useState('');

    // Funzione per gestire il cambiamento nell'input
    const handleInputChange = (event) => {

        setNewTitle(event.target.value);

    };

};


const ArticleList = () => {

    return (

        <div>

            <h1>Lista degli Articoli</h1>

            <ul>

                {articles.map(article => (

                    <li key={article.id}>{article.title}</li>

                ))}

            </ul>

        </div>

    );

};

export default ArticleList;