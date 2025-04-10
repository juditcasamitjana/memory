import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import NewGame from "./NewGame";
import Game from "./Game";
import "../scss/App.scss";
import Footer from "./Footer";


function App() {
    return (
        <>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/newgame" element={<NewGame />}/>
                    <Route path="/newgame/:theme" element={<Game />} />
                </Routes>
                <Footer />
            </main>
        </>
    );
}

export default App;
