import catLogo from "../assets/cat.svg";
import "./style.css";
import { Link } from "@tanstack/react-router";
import { catStore, catStoreActions } from "../context/catStore";
import { useStore } from "@tanstack/react-store";

function Compteur() {
  const catCount = useStore(catStore, (state) => state.count);

  return (
    <>
      <div>
        <a href="https://www.youtube.com/shorts/Po098TRdOn4" target="_blank">
          <img src={catLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Do we need more cats ?</h1>
      <h2>cat count: {catCount}</h2>
      <div className="card">
        <button onClick={catStoreActions.addCat}>Yes</button>
      </div>

      <button>
        <Link to="/">Retour à l'accueil</Link>
      </button>
    </>
  );
}

export default Compteur;
