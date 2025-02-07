import catLogo from "../assets/cat.svg";
import "./style.css";
import { Link } from "@tanstack/react-router";

function Compteur() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={catLogo} className="logo react" alt="Cat logo" />
        </a>
      </div>
      <h1>Do we need more cats ?</h1>
      <h2>cat count: ???</h2>
      <div className="card">
        <button onClick={() => alert("Not implemented !")}>Yes</button>
      </div>

      <button>
        <Link to="/">Retour à l'accueil</Link>
      </button>
    </>
  );
}

export default Compteur;