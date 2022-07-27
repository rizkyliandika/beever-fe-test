import React, { useEffect, useState } from 'react';
import { addQuotes, fetchQuotes, addFavorites } from './qoutesSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

export const Quotes = () => {
    const dispatch = useDispatch();
    const { quotes, favorites, quotesKanyeWest, loading } = useSelector((state) => state.quote)
    const [input, setInput] = useState('')

    const handleOnSubmit = (event) => {
        if (quotes.includes(input)) {
            alert('Quotes must unique')
            setInput('');
        } else {
            dispatch(addQuotes(input));
            setInput('');
        }
        event.preventDefault();
    }

    const handleGetQuotes = (event) => {
        dispatch(fetchQuotes());
    }

    const handleAddFavorites = (event) => {
        dispatch(addFavorites(quotesKanyeWest));
    }

    useEffect(() => {
        handleGetQuotes();
    }, [])

    // if (loading) return <p>Loading...</p>

    return (
        <React.Fragment>
            <main style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10vh' }}>
                <div style={{ marginBottom: '10vh' }}>
                    <a href="https://kanye.rest/">API SITE</a>
                </div>
                <section style={{ textAlign: 'center' }}>
                    <img style={{ width: 300 }} src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg" />
                    <h1 style={{ fontSize: 40, marginTop: 10 }}>Kanye-West Quote</h1>
                    <h3>{loading ? 'Loading ...' : quotesKanyeWest}</h3>
                    <button onClick={handleGetQuotes}>Get Quote</button>
                    <button onClick={handleAddFavorites}>Add Favorite</button>
                    <ol>
                        {favorites.map((e, i) => (
                            <li style={{ listStyleType: 'none' }} key={i}>{e}</li>
                        ))}
                    </ol>
                </section>
                <section style={{ textAlign: 'center', marginTop: '60px' }}>
                    <hr style={{ maxWidth: '30%' }} />
                    <h2>My Quotes</h2>
                    <form onSubmit={handleOnSubmit}>
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                    <ol>
                        {(quotes.map((e, i) => (
                            <li style={{ listStyleType: 'none' }} key={i}>{e}</li>
                        )))}
                    </ol>


                </section>
            </main>
        </React.Fragment>
    )
}