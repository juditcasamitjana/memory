import { Link } from "react-router-dom";
import "../scss/layouts/NewGame.scss";

function NewGame() {
    return (
        <section className="newgame">
            <h2 className="newgame__subtitle">Choose the theme</h2>
            <ul className="newgame__list">
                <li className="newgame__emojis">
                    <Link to="/newgame/emojis">Emojis</Link>
                </li>
                <li className="newgame__hearts">
                    <Link to="/newgame/hearts">Corazón + Color</Link>
                </li>
            </ul>
        </section>
    );
}

export default NewGame;
