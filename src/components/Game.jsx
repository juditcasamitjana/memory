import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../scss/layouts/Game.scss";

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
            { id: 1, image: "🥳", pairId: 1 },
            { id: 2, image: "🥳", pairId: 1 },
            { id: 3, image: "🥰", pairId: 2 },
            { id: 4, image: "🥰", pairId: 2 },
            { id: 5, image: "🤪", pairId: 3 },
            { id: 6, image: "🤪", pairId: 3 },
            { id: 7, image: "🤓", pairId: 4 },
            { id: 8, image: "🤓", pairId: 4 },
            { id: 9, image: "🤩", pairId: 5 },
            { id: 10, image: "🤩", pairId: 5 },
            { id: 11, image: "🤣", pairId: 6 },
            { id: 12, image: "🤣", pairId: 6 },
            { id: 13, image: "☺️", pairId: 7 },
            { id: 14, image: "☺️", pairId: 7 },
            { id: 15, image: "😎", pairId: 8 },
            { id: 16, image: "😎", pairId: 8 },
        ])
    );

    const [resolvedPairs, setResolvedPairs] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        if (resolvedPairs.length === 8) {
            setWin(true);
        }
    }, [resolvedPairs]);

    useEffect(() => {
        if (selectedCards.length !== 2) {
            return;
        }

        setTimeout(() => {
            if (selectedCards[0].pairId === selectedCards[1].pairId) {
                setResolvedPairs([...resolvedPairs, selectedCards[0].pairId]);
            }

            setSelectedCards([]);
        }, 500);
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
    }

    return (
        <div className="game">
            <section>
                <h1 className="game__title">{theme}</h1>
            </section>
            <section className="grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`grid__card ${
                            resolvedPairs.includes(card.pairId)
                                ? "grid__card--resolved"
                                : ""
                        }`}
                        onClick={() => handleCard(card.id)}
                    >
                        {selectedCards.map((card) => card.id).includes(card.id)
                            ? card.image
                            : ""}
                    </div>
                ))}
            </section>
            <p className="win">{win ? "¡Enhorabuena! Has ganado!" : ""}</p>
            <section className="options">
                <button className="options__reset" onClick={handleReset}>Reset</button>
                <Link to="/">
                    <button className="options__back">Volver</button>
                </Link>
            </section>
        </div>
    );
}

export default Game;
