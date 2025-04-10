import { Link } from "react-router-dom";
import "../scss/layouts/Home.scss";

function Home() {
    return (
        <div className="home">
            <section>
                <h2 className="home__title">!Diviértete mientras entrenas tu cerebro!</h2>
            </section>
            <section>
                <ul className="link">
                    <li><Link className="link__newgame" to="/newgame">Nuevo juego</Link></li>
                    <li><Link className="link__howtoplay" to="/howtoplay">Como jugar</Link></li>
                </ul>
                <ul className="link">
                    <li><Link className="link__credits" to="/credits">Creditos</Link></li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
