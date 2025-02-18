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

    // Funzione per rimuovere un articolo
    const handleDelete = (id) => {

        // Filtro via l'articolo con l'ID specifico
        setArticles(articles.filter(article => article.id !== id));

    };

    // Funzione per gestire il submit del form
    const handleSubmit = (event) => {

        event.preventDefault();



        // Aggiungo il nuovo articolo alla lista
        if (newTitle.trim() !== '') {

            const newArticle = {

                id: articles.length + 1,
                title: newTitle,

            };

            // Aggiungo il nuovo articolo alla lista
            setArticles([...articles, newArticle]);
            // Resetta il campo dell'input
            setNewTitle('');

        }

    };

    return (

        <div>

            <h1>Lista degli Articoli</h1>

            {/* Form per aggiungere un nuovo articolo */}
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={newTitle}
                    onChange={handleInputChange}
                    placeholder="Inserisci il titolo dell'articolo"
                />

                <button type="submit">Aggiungi Articolo</button>

            </form>

            {/* Lista degli articoli */}
            <ul>

                {articles.map(article => (

                    <li key={article.id}>{article.title}

                        {/* Bottone di cancellazione */}
                        <button onClick={() => handleDelete(article.id)}>

                            Delete

                        </button>

                    </li>

                ))}

            </ul>

        </div>

    );

};




export default ArticleList;