import { Link } from "react-router-dom";
import "../scss/layouts/NewGame.scss";

function NewGame() {
    return (
        <section className="newgame">
            <h2 className="newgame__subtitle">Choose the theme</h2>
            <ul className="newgame__list">
                <li >
                    <Link className="newgame__emojis" to="/newgame/emojis">Emojis</Link>
                </li>
                <li >
                    <Link className="newgame__hearts" to="/newgame/hearts">Corazón + Color</Link>
                </li>
            </ul>
        </section>
    );
}

export default NewGame;
