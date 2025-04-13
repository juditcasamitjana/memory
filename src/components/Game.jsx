import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../scss/layouts/Game.scss';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function Game() {
    const { theme } = useParams();
    const [win, setWin] = useState(false);
    const [cards, setCards] = useState(
        shuffleArray([
            { id: 1, image: '🥳', pairId: 1 },
            { id: 2, image: '🥳', pairId: 1 },
            { id: 3, image: '🥰', pairId: 2 },
            { id: 4, image: '🥰', pairId: 2 },
            { id: 5, image: '🤪', pairId: 3 },
            { id: 6, image: '🤪', pairId: 3 },
            { id: 7, image: '🤓', pairId: 4 },
            { id: 8, image: '🤓', pairId: 4 },
            { id: 9, image: '🤩', pairId: 5 },
            { id: 10, image: '🤩', pairId: 5 },
            { id: 11, image: '🤣', pairId: 6 },
            { id: 12, image: '🤣', pairId: 6 },
            { id: 13, image: '☺', pairId: 7 },
            { id: 14, image: '☺', pairId: 7 },
            { id: 15, image: '😎', pairId: 8 },
            { id: 16, image: '😎', pairId: 8 },
        ])
    );

    const [resolvedPairs, setResolvedPairs] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [unflippingCards, setUnflippingCards] = useState([]);

    useEffect(() => {
        if (resolvedPairs.length === 8) {
            setWin(true);
        }
    }, [resolvedPairs]);

    useEffect(() => {
        if (selectedCards.length !== 2) {
            return;
        }

        const [first, second] = selectedCards;

        setTimeout(() => {
            if (first.pairId !== second.pairId) {
                setUnflippingCards([first.id, second.id]);
                setSelectedCards([]);

                setTimeout(() => {
                    setUnflippingCards([]);
                }, 400);
            }

            if (first.pairId === second.pairId) {
                setResolvedPairs([...resolvedPairs, first.pairId]);
                setSelectedCards([]);
            }
        }, 1000);
    }, [selectedCards, resolvedPairs]);

    const handleCard = (id) => {
        if (selectedCards.length < 2) {
            const card = cards.find((card) => card.id === id);
            setSelectedCards([...selectedCards, card]);
        }
    };

    const handleReset = () => {
        setResolvedPairs([]);
        setSelectedCards([]);
        setWin(false);
    };

    return (
        <div className="game">
            <section>
                <h1 className="game__title">{theme}</h1>
            </section>
            <section className="grid">
                {cards.map((card) => {
                    const isResolved = resolvedPairs.includes(card.pairId);
                    const isSelected = selectedCards
                        .map((c) => c.id)
                        .includes(card.id);
                    const isUnflipping = unflippingCards.includes(card.id);

                    const className = `grid__card ${
                        isResolved || isSelected || isUnflipping ? 'flip' : ''
                    } ${isUnflipping ? 'flip-reverse' : ''}`;

                    if (isResolved) {
                        return <div></div>
                    }

                    return (
                        <div
                            key={card.id}
                            className={className}
                            onClick={() => handleCard(card.id)}
                        >
                            <div className="front face"></div>
                            <div className="back face">{card.image}</div>
                        </div>
                    );
                })}
            </section>
            <p className="win">{win ? '¡Enhorabuena! Has ganado!' : ''}</p>
            <section className="options">
                <button className="options__reset" onClick={handleReset}>
                    Reset
                </button>
                <Link to="/">
                    <button className="options__back">Volver</button>
                </Link>
            </section>
        </div>
    );
}

export default Game;
